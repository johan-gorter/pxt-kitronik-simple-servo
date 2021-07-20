
//Example test code to drive a 180 servo to 0 degrees, then 180 degrees before returning back to central position and finishing with the servo stopped being driven
input.onButtonPressed(Button.A, function() {
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 0)
    basic.pause(500)
    kitronik_simple_servo.setServoAngle(kitronik_simple_servo.ServoChoice.servo1, 180)
    basic.pause(500)
    kitronik_simple_servo.setServoNeutral(kitronik_simple_servo.ServoChoice.servo1)
    basic.pause(500)
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
})

//Example test code for continues servos, increasing the speed  to max, decrease in speed, and then changing direction with the same increasing and decreasing of speed.
basic.forever(function () {

    for (let speedPercent = 0; speedPercent <= 10; speedPercent++) {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CW, (speedPercent*10))
        basic.pause(250)
    }
    for (let speedPercent = 10; speedPercent < 0; speedPercent--) {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CW, (speedPercent * 10))
        basic.pause(250)
    }
    for (let speedPercent = 0; speedPercent <= 10; speedPercent++) {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CCW, (speedPercent * 10))
        basic.pause(250)
    }
    for (let speedPercent = 10; speedPercent < 0; speedPercent--) {
        kitronik_simple_servo.servoRunPercentage(kitronik_simple_servo.ServoChoice.servo1, kitronik_simple_servo.ServoDirection.CCW, (speedPercent * 10))
        basic.pause(250)
    }
})