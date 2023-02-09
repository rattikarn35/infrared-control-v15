Bit_IR.onPressEvent(RemoteButton.Eight, function () {
    basic.showIcon(IconNames.Tortoise)
})
Bit_IR.onPressEvent(RemoteButton.Two, function () {
    basic.showIcon(IconNames.Rollerskate)
})
Bit_IR.onPressEvent(RemoteButton.SpinLeft, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, 255)
})
Bit_IR.onPressEvent(RemoteButton.Light, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
})
Bit_IR.onPressEvent(RemoteButton.Beep, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Pinkish)
})
Bit_IR.onPressEvent(RemoteButton.Seven, function () {
    basic.showIcon(IconNames.Butterfly)
})
Bit_IR.onPressEvent(RemoteButton.Five, function () {
    basic.showIcon(IconNames.House)
})
Bit_IR.onPressEvent(RemoteButton.Six, function () {
    basic.showIcon(IconNames.Pitchfork)
})
Bit_IR.onPressEvent(RemoteButton.Minus, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Green)
})
Bit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
})
Bit_IR.onPressEvent(RemoteButton.Add, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.Red)
})
Bit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 255)
})
Bit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 255)
})
Bit_IR.onPressEvent(RemoteButton.Four, function () {
    basic.showIcon(IconNames.EigthNote)
})
Bit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
})
Bit_IR.onPressEvent(RemoteButton.Three, function () {
    basic.showIcon(IconNames.No)
})
Bit_IR.onPressEvent(RemoteButton.Nine, function () {
    basic.showIcon(IconNames.Rabbit)
})
Bit_IR.onPressEvent(RemoteButton.One, function () {
    basic.showIcon(IconNames.Sad)
})
Bit_IR.onPressEvent(RemoteButton.SpinRight, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, 255)
})
Bit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 255)
})
Bit_IR.onPressEvent(RemoteButton.Zero, function () {
    basic.showIcon(IconNames.Heart)
})
Bit_IR.initIR(Pins.P8)
