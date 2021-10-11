input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    music.playMelody("C5 G D - - - - - ", 122)
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    let outdoorTemp = 0
    basic.showNumber(outdoorTemp)
    basic.showIcon(IconNames.Sad)
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    230
    )
    if (input.soundLevel() >= 230) {
        music.playMelody("- - - - - E E E ", 122)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    basic.clearScreen()
})
