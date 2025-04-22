enum RadioMessage {
    message1 = 49434,
    left = 14947,
    right = 32391
}
let speed = 0
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.left)
})
radio.onReceivedMessage(RadioMessage.left, function () {
    CutebotPro.pwmCruiseControl(0, speed)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.right)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (true) {
        speed = 0
    } else if (false) {
    	
    } else {
    	
    }
})
basic.forever(function () {
	
})
