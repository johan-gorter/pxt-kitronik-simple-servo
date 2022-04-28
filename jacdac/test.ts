let angle = 90
let da = 5
forever(function() {
    modules.kitronikServo1.setAngle(angle + 90)
    modules.kitronikServo2.setAngle(-angle + 90)
    modules.kitronikServo3.setAngle(angle / 2 + 45)

    if (angle > 90)
        da = -5
    else if (angle < -90)
        da = 5
    angle += da    
    pause(100)
})