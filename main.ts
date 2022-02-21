function カエル () {
    music2(A)
    music2(B)
    music2(C)
    music2(C)
    music2(D)
    music2(E)
}
input.onButtonPressed(Button.A, function () {
    serial.writeString("&!")
    カエル()
})
function music2 (テキスト: string) {
    counter = 0
    for (let index = 0; index < テキスト.length / 2; index++) {
        serial.writeString(テキスト.substr(counter, 1))
        Len = テキスト.substr(counter + 1, 1)
        if (Len == "1") {
            basic.pause(240)
        } else if (Len == "2") {
            basic.pause(500)
        } else {
            basic.pause(1000)
        }
        counter += 2
    }
}
input.onButtonPressed(Button.B, function () {
    serial.writeString("%\"")
    カエル()
})
let Len = ""
let counter = 0
let E = ""
let D = ""
let C = ""
let B = ""
let A = ""
serial.redirect(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate38400
)
A = "q2e2t2y2t2e2q4"
B = "t2y2i2p2i2y2t4"
C = "q4q4"
D = "q1q1e1e1t1t1y1y1"
E = "t2e2q4"
