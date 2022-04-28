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
    function start() {
        jacdac.productIdentifier = 0x3cc2d4b4
        jacdac.deviceDescription = "Kitronik Simple Servo"
        jacdac.startSelfServers(() => [
            new jacdac.ServoServer(AnalogPin.P8, { instanceName: "S1" }),
            new jacdac.ServoServer(AnalogPin.P15, { instanceName: "S2" }),
            new jacdac.ServoServer(AnalogPin.P16, { instanceName: "S3" }),
        ])
    }
    start()
}