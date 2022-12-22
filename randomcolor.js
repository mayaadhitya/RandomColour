let HexCode = document.getElementById("selectedColorHexCode")
let Bg = document.getElementById("wu")
let a = ["A", "B", "C", "D", "E", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function random() {
    return Math.ceil | (Math.random() * a.length)
}

function changeButton() {
    let s = "#";
    for (let i = 0; i < 6; i++) {

        s += a[random()]
    }
    HexCode.textContent = s
    Bg.style.backgroundColor = s
}