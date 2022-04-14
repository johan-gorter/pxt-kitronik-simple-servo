//% deprecated
namespace kitronik_simple_servo { }

namespace modules {
    /**
     * Client for the servo1 servo
     */
    //% fixedInstance whenUsed block="kitronik servo1"
    export const kitronikServo1 = new ServoClient("kitronik servo1?device=self")
    /**
     * Client for the servo2 servo
     */
    //% fixedInstance whenUsed block="kitronik servo2"
    export const kitronikServo2 = new ServoClient("kitronik servo2?device=self")
    /**
     * Client for the servo3 servo
     */
    //% fixedInstance whenUsed block="kitronik servo3"
    export const kitronikServo3 = new ServoClient("kitronik servo3?device=self")
}

namespace servers {
    class ServoServer extends jacdac.Server {
        readonly servoChoice: kitronik_simple_servo.ServoChoice
        angle: number
        enabled: boolean
        offset: number

        constructor(name: string, servoChoice: kitronik_simple_servo.ServoChoice) {
            super(jacdac.SRV_SERVO, { instanceName: name })
            this.servoChoice = servoChoice
            this.angle = 90
            this.offset = 0
            this.enabled = false
            kitronik_simple_servo.servoStop(this.servoChoice)
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.enabled = this.handleRegBool(pkt, jacdac.ServoReg.Enabled, this.enabled)
            this.angle = this.handleRegValue(pkt, jacdac.ServoReg.Angle, jacdac.ServoRegPack.Angle, this.angle)
            this.offset = this.handleRegValue(pkt, jacdac.ServoReg.Offset, jacdac.ServoRegPack.Offset, this.offset)
            this.handleRegValue(pkt, jacdac.ServoReg.CurrentAngle, jacdac.ServoRegPack.CurrentAngle, this.angle + this.offset)

            if (!this.enabled)
                kitronik_simple_servo.servoStop(this.servoChoice)
            else
                kitronik_simple_servo.setServoAngle(this.servoChoice, this.angle + this.offset)
        }
    }

    function start() {
        jacdac.productIdentifier = 0x3cc2d4b4
        jacdac.startSelfServers(() => [
            new ServoServer("servo1", kitronik_simple_servo.ServoChoice.servo1),
            new ServoServer("servo2", kitronik_simple_servo.ServoChoice.servo2),
            new ServoServer("servo3", kitronik_simple_servo.ServoChoice.servo3),
        ])
    }
    start()
}