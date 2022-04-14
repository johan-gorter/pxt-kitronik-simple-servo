let angle = 90
let da = 5
forever(function() {
    modules.kitronikServo1.setEnabled(true)
    modules.kitronikServo2.setEnabled(true)
    modules.kitronikServo3.setEnabled(true)
    modules.kitronikServo1.setAngle(angle)
    modules.kitronikServo2.setAngle(-angle)
    modules.kitronikServo3.setAngle(angle / 2)

    if (angle > 90)
        da = -5
    else if (angle < -90)
        da = 5
    angle += da    
    pause(100)
})