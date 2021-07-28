/**
 * Blocks for driving the Kitronik Simple Servo Control Board
 */
//% weight=100 color=#00A654 icon="\uf013" block="Servo"
//% groups='["180 Servo", "360 Servo"]'

namespace kitronik_simple_servo {

    /**
     * Selection of the servo to drive
     */
    export enum ServoChoice {
        //% block="1"
        servo1,
        //% block="2"
        servo2,
        //% block="3"
        servo3
    }

    /**
     * Selection of direction to turn for continuous servos
     */
    export enum ServoDirection {
        //% block="clockwise"
        CW,
        //% block="counter-clockwise"
        CCW
    }

    /**
     * Global variables to set the servo pins for each servo 
     */
    let servo1Pin = AnalogPin.P8
    let servo2Pin = AnalogPin.P15
    let servo3Pin = AnalogPin.P16

    /**
     * Turn the selected servo to the angle set in degrees
     * @param servoSelection is the selection of the servo to control
     * @param degrees is the position which the servo is set to
     */
    //% group="180 Servo"
    //% blockId=kitronik_simple_servo_angle
    //% block="set servo %servoSelection angle to %degrees degrees"
    //% color=#00A654
    //% degrees.min=0 degrees.max=180
    //% degrees.defl=90
    //% degrees.shadow="protractorPicker"
    //% weight=100 blockGap=8
    export function setServoAngle(servoSelection: ServoChoice, degrees: number) {
        if (degrees > 180) degrees = 180
        if (degrees < 0) degrees = 0

        if (servoSelection == ServoChoice.servo1){
            pins.servoWritePin(servo1Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo2){
            pins.servoWritePin(servo2Pin, degrees)
        }
        else if (servoSelection == ServoChoice.servo3){
            pins.servoWritePin(servo3Pin, degrees)
        }
    }


    /**
     * Turn the selected servo back to a neutral position at 90 degrees
     * @param servoSelection is the selection of the servo to control
     */
    //% group="180 Servo"
    //% blockId=kitronik_simple_servo_neutral
    //% block="set servo %servoSelection to central position"
    //% color=#00A654
    //% weight=90 blockGap=8
    export function setServoNeutral(servoSelection: ServoChoice) {
        if (servoSelection == ServoChoice.servo1){
            pins.servoWritePin(servo1Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo2){
            pins.servoWritePin(servo2Pin, 90)
        }
        else if (servoSelection == ServoChoice.servo3){
            pins.servoWritePin(servo3Pin, 90)
        } 
    }

    /**
     * For a continuous rotation servo, set the rotation direction and the percentage speed (0 to 100%)
     * @param servoSelection is the selection of the servo to control
     * @param direction is the choice direction for the servo to move either clockwise or counter-clockwise
     * @param percentSpeed is the percentage of speed between neutral position and full end point
     */
    //% group="360 Servo"
    //% blockId=kitronik_simple_servo_run_percentage
    //% block="set servo %servoSelection to turn %direction at %percentSpeed \\% speed"
    //% percentSpeed.min=0 percentSpeed.max=100
    //% percentSpeed.defl=50
    //% color=#00A654
    //% weight=80 blockGap=8
    export function servoRunPercentage(servoSelection: ServoChoice, direction: ServoDirection, percentSpeed: number) {
        if (percentSpeed > 100) percentSpeed = 100
        if (percentSpeed < 0) percentSpeed = 0

        let speed = 90
        if (direction == ServoDirection.CW){
            speed = Math.round(Math.map(percentSpeed, 0, 100, 90, 180))
        }
        else if (direction == ServoDirection.CCW){
            speed = Math.round(Math.map(percentSpeed, 0, 100, 90, 0))
        }

        if (servoSelection == ServoChoice.servo1){
            pins.servoWritePin(servo1Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo2){
            pins.servoWritePin(servo2Pin, speed)
        }
        else if (servoSelection == ServoChoice.servo3){
            pins.servoWritePin(servo3Pin, speed)
        } 
    }

    /**
     * Stop the selected servo moving
     * @param servoSelection is the selection of the servo to control
     */
    //% blockId=kitronik_simple_servo_stop
    //% block="stop servo %servoSelection"
    //% color=#00A654
    //% weight=100 blockGap=8
    export function servoStop(servoSelection: ServoChoice) {
        if (servoSelection == ServoChoice.servo1){
            pins.digitalWritePin(DigitalPin.P8, 0)
        }
        else if (servoSelection == ServoChoice.servo2){
            pins.digitalWritePin(DigitalPin.P15, 0)
        }
        else if (servoSelection == ServoChoice.servo3){
            pins.digitalWritePin(DigitalPin.P16, 0)
        } 
    }

}
