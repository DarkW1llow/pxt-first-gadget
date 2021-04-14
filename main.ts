bluetooth.startAccelerometerService()
pins.analogWritePin(AnalogPin.P0, 1013)
basic.forever(function () {
    bluetooth.startAccelerometerService()
})
