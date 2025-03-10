function movePaddle (dir: number) {
    paddle_direction = dir
    paddle_x += paddle_direction
    led.plot(paddle_x, 4)
    led.plot(paddle_x + Math.abs(paddle_direction), 4)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (paddle_x > 0) {
        led.unplot(paddle_x + 1, 4)
        movePaddle(-1)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (paddle_x < 3) {
        led.unplot(paddle_x, 4)
        movePaddle(1)
    }
})
let paddle_direction = 0
let paddle_x = 0
paddle_x = 0
paddle_direction = -1
led.plotBrightness(paddle_x, 4, 255)
led.plot(paddle_x + 1, 4)
basic.forever(function () {
	
})
