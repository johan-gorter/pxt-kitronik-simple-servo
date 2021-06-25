/**
 * Blocks for driving the Kitronik Simple Servo Board
 */
//% weight=100 color=#00A654 icon="\uf013" block="Servo"
//% groups='["180_Servo", "360_ervo"]'

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
     * Selection of direction turn for continous mservos
     */
    export enum ServoDirection {
        //% block="clockwise"
        CW,
        //% block="counter-clockwise"
        CCW
    }

    /**
     * gobal functions to set the servo pins for each servo 
     */
    let servo1Pin = AnalogPin.P8
    let servo2Pin = AnalogPin.P15
    let servo3Pin = AnalogPin.P16

    /**
     * Turn the selected servo to a required degree turn
     * @param servoSelection is the selection of the servo to control
     * @param degrees is the position which the servo is set to
     */
    //% groups="180_Servo"
    //% blockId=kitronik_simple_servo_angle
    //% block="set servo %servoSelection angle to %degrees=protractorPicker degrees"
    //% color=#00A654
    //% degrees.min=0 degrees.max=180
    //% degrees.defl=90
    //% degrees.fieldEditor="protractorPicker"
    //% weight=100 blockGap=8
    export function setServoAngle(servoSelection: ServoChoice, degrees: number) {
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
     * Set the selected servo back to neutral position
     * @param servoSelection is the selection of the servo to control
     */
    //% groups="180_Servo"
    //% blockId=kitronik_simple_servo_neutral
    //% block="set servo %servoSelection to neutral position"
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
     * Set the selected servo back to neutral position
     * @param servoSelection is the selection of the servo to control
     * @param direction is the choice direction for the servo to move either clockwise or counter-clockwise
     * @param percentSpeed is the percentage of speed between neutral position and full end point
     */
    //% groups="360_Servo"
    //% blockId=kitronik_simple_servo_run_percentage
    //% block="set servo %servoSelection to turn %direction at %percentSpeed"
    //% percentSpeed.min=0 percentSpeed.max=100
    //% percentSpeed.defl=50
    //% color=#00A654
    //% weight=80 blockGap=8
    export function servoRunPercentage(servoSelection: ServoChoice, direction: ServoDirection, percentSpeed: number) {
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
    //% groups="360_Servo"
    //% blockId=kitronik_simple_servo_stop
    //% block="stop servo %servoSelection"
    //% color=#00A654
    //% weight=80 blockGap=8
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
