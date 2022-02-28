basic.showLeds(`
    . . . . .
    . # . . .
    . . . . .
    . # . . .
    . . # . .
    `)
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 0)
    basic.pause(5000)
    pins.analogWritePin(AnalogPin.P1, 1023)
    basic.pause(5000)
})
