namespace modules {
    /**
     * Client for the servo1 servo
     */
    //% fixedInstance whenUsed block="kitronik servo1"
    export const kitronikServo1 = new ServoClient("kitronik servo1?dev=self&srvo=0")
    /**
     * Client for the servo2 servo
     */
    //% fixedInstance whenUsed block="kitronik servo2"
    export const kitronikServo2 = new ServoClient("kitronik servo2?dev=self&srvo=1")
    /**
     * Client for the servo3 servo
     */
    //% fixedInstance whenUsed block="kitronik servo3"
    export const kitronikServo3 = new ServoClient("kitronik servo3?dev=self&srvo=2")
}

namespace servers {
    class ServoServer extends jacdac.Server {
        dpin: DigitalPin
        apin: AnalogPin
        angle: number
        enabled: boolean
        offset: number

        constructor(name: string, dpin: DigitalPin, apin: AnalogPin) {
            super(jacdac.SRV_SERVO, { instanceName: name })
            this.dpin = dpin
            this.apin = apin
            this.angle = 90
            this.offset = 0
            this.enabled = false
            this.sync()
        }

        handlePacket(pkt: jacdac.JDPacket) {
            this.enabled = this.handleRegBool(pkt, jacdac.ServoReg.Enabled, this.enabled)
            this.angle = this.handleRegValue(pkt, jacdac.ServoReg.Angle, jacdac.ServoRegPack.Angle, this.angle)
            this.offset = this.handleRegValue(pkt, jacdac.ServoReg.Offset, jacdac.ServoRegPack.Offset, this.offset)
            this.handleRegValue(pkt, jacdac.ServoReg.CurrentAngle, jacdac.ServoRegPack.CurrentAngle, this.angle + this.offset)

            this.sync()
        }

        sync() {
            if (!this.enabled)
                pins.digitalWritePin(this.dpin, 0)
            else {
                const degrees = Math.clamp(0, 180, this.angle + this.offset)
                pins.servoWritePin(this.apin, degrees)
            }
        }
    }

    function start() {
        jacdac.productIdentifier = 0x3cc2d4b4
        jacdac.deviceDescription = "Kitronik Simple Servo"
        jacdac.startSelfServers(() => [
            new ServoServer("servo1", DigitalPin.P8, AnalogPin.P8),
            new ServoServer("servo2", DigitalPin.P15, AnalogPin.P15),
            new ServoServer("servo3", DigitalPin.P16, AnalogPin.P16),
        ])
    }
    start()
}