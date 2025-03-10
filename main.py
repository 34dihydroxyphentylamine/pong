def movePaddle(dir2: number):
    global paddle_direction, paddle_x
    paddle_direction = dir2
    paddle_x += paddle_direction
    led.plot(paddle_x, 4)
    led.plot(paddle_x + abs(paddle_direction), 4)

def on_button_a():
    if paddle_x > 0:
        led.unplot(paddle_x + 1, 4)
        movePaddle(-1)
input.on_button_event(Button.A, input.button_event_click(), on_button_a)

def on_button_b():
    if paddle_x < 3:
        led.unplot(paddle_x, 4)
        movePaddle(1)
input.on_button_event(Button.B, input.button_event_click(), on_button_b)

paddle_direction = 0
paddle_x = 0
paddle_x = 0
paddle_direction = -1
led.plot_brightness(paddle_x, 4, 255)
led.plot(paddle_x + 1, 4)

def on_forever():
    pass
basic.forever(on_forever)
