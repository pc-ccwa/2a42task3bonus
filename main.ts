let num = 0
let countdown = 0
input.onButtonPressed(Button.A, function () {
    num += 1
    basic.showNumber(num)
})
input.onButtonPressed(Button.AB, function () {
    countdown = num
    while (countdown >= 0) {
        basic.showNumber(countdown)
        countdown += -1
    }
})
input.onButtonPressed(Button.B, function () {
    num += 10
    basic.showNumber(num)
})
basic.forever(function () {
	
})
