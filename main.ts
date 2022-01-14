radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -60) {
        basic.showIcon(IconNames.Yes)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(100)
basic.forever(function () {
    radio.sendNumber(0)
    radio.setTransmitPower(3)
})
