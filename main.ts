input.onButtonPressed(Button.A, function () {
    basic.showNumber(feet)
    basic.showString(" Feet")
    basic.showString(" = ")
    yards = feet / 3
    basic.showNumber(yards)
    basic.showString("Yards")
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(feet)
    basic.showString(" Feet")
    basic.showString(" = ")
    inches = feet / 2.54
    basic.showNumber(inches)
    basic.showString(" Centimeters")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(feet)
    basic.showString(" Feet")
    basic.showString(" = ")
    inches = feet * 12
    basic.showNumber(inches)
    basic.showString(" Inches")
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(feet)
    basic.showString(" Feet")
    basic.showString(" = ")
    meters = feet / 3.2808
    basic.showNumber(meters)
    basic.showString(" Meters")
})
let meters = 0
let inches = 0
let yards = 0
let feet = 0
feet = 10
