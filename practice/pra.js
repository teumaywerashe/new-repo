let pi = 3.14

function calculate() {
    let radius = document.getElementById("radius").value;
    document.getElementById("area").innerText = `area=${2 * pi * radius}`;
}