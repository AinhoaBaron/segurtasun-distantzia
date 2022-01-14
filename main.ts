radio.onReceivedNumber(function (receivedNumber) {
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -60) {
        basic.showIcon(IconNames.No)
    }
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -60) {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(3)
basic.forever(function () {
    radio.sendNumber(0)
    radio.setTransmitPower(3)
})
