radio.onReceivedNumber(function (receivedNumber) {
    N = receivedNumber
})
let N = 0
radio.setGroup(56)
basic.forever(function () {
    radio.sendString("P")
    basic.pause(500)
    basic.showNumber(N)
    basic.pause(1000)
})
