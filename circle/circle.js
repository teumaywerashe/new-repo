let pi = 3.14
const displayBtn = document.getElementById('display-btn');
displayBtn.addEventListener('click', calculate);
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calculate();
    }
})

function calculate() {
    let radius = document.getElementById("rad").value;

    document.getElementById("circle").innerHTML = (`<P >R=${radius}<br>A=${(pi *100*radius* radius)/100}<br> P=${(2*pi*100*radius)/100}</p>`);
    document.getElementById("circle").style.display = `flex`;
    document.getElementById("circle").style.height = `${radius*50}px`;
    document.getElementById("circle").style.width = `${radius*50}px`;
    document.getElementById("circle").style.borderRadius = `${radius*50}px`;
    document.getElementById("circle").style.fontSize = `${radius*10}px`
    document.getElementById("circle").style.alignItems = 'center';
    document.getElementById("circle").style.justifyContent = 'center';

}