# Kitronik :CREATE Simple Servo Control Board for BBC micro:bit


# pxt-kitronik-simple-servo Blocks

Custom blocks for www.kitronik.co.uk/5673 :CREATE Simple Servo Control Board for BBC micro:bit. These are easy to use blocks to have full control over driving servos.  
Below are a list of the different blocks and their functions.

## setServoAngle(servoSelection: ServoChoice, degrees: number)
```blocks
kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 90)
```
For 180 servos, this block will turn the servo selected to the entered number of degrees.  
The degrees range from 0 to 180 with 90 being the centre.

## setServoNeutral(servoSelection: ServoChoice)
```blocks
kitronik_simple_servo.setServoNeutral(kitronik_simple_servo.ServoChoice.servo1)
```
For 180 servos, this block will turn the servo selected to it's central/neutral position. This is typically 90 degrees.

## servoRunPercentage(servoSelection: ServoChoice, direction: ServoDirection, percentSpeed: number)
```blocks
kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CW, 50)
```
Continuous servos can use this block for setting a rotation speed between 0 and 100% in a selected direction for a given servo.

## servoStop(servoSelection: ServoChoice)
```blocks
kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
```
For any type of servo, this block will stop driving it with a PWM signal.  
To engage the servo again, any of the servo blocks will start sending the servo a PWM signal.

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for "Simple Servo" or enter **https://github.com/kitronikltd/pxt-kitronik-simple-servo** and import
