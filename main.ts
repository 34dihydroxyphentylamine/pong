function movePaddle (dir2: number) {
    paddle_direction = dir2
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
basic.pause(1000)
let ball_x = 2
let ball_y = 0
let ball_dir_x = 0
let ball_dir_y = 1
led.plot(ball_x, ball_y)
basic.pause(1000)
basic.forever(function () {
    led.unplot(ball_x, ball_y)
    ball_x += ball_dir_x
    ball_y += ball_dir_y
    led.plot(ball_x, ball_y)
    basic.pause(1000)
})
