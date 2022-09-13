input.onButtonPressed(Button.A, function () {
    Jimmy = randint(1, 8)
    RandomNumber = randint(1, 2)
    music.playMelody("C D E F G A B C5 ", 1260)
    if (RandomNumber == 1) {
        basic.showString("Truth!")
    } else {
        if (RandomNumber == 2) {
            basic.showString("Dare!")
        }
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    Jimmy = randint(1, 8)
    RandomNumber = randint(1, 2)
    music.playMelody("C D E F G A B C5 ", 1260)
    if (Jimmy == 1) {
        basic.showArrow(ArrowNames.North)
    } else {
        if (Jimmy == 2) {
            basic.showArrow(ArrowNames.NorthEast)
        } else {
            if (Jimmy == 3) {
                basic.showArrow(ArrowNames.East)
            } else {
                if (Jimmy == 4) {
                    basic.showArrow(ArrowNames.SouthEast)
                } else {
                    if (Jimmy == 5) {
                        basic.showArrow(ArrowNames.South)
                    } else {
                        if (Jimmy == 6) {
                            basic.showArrow(ArrowNames.SouthWest)
                        } else {
                            if (Jimmy == 7) {
                                basic.showArrow(ArrowNames.West)
                            } else {
                                if (Jimmy == 8) {
                                    basic.showArrow(ArrowNames.NorthWest)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    basic.pause(2000)
})
let Jimmy = 0
let RandomNumber = 0
RandomNumber = 0
Jimmy = 0
music.playMelody("E B C5 A B G A F ", 120)
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
}
basic.showString("Truth or Dare")
music.playMelody("E B C5 A B G A F ", 120)
basic.pause(1000)
