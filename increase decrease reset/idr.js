 let value = 0;

 function increase() {
     value++;
     document.getElementById("p").innerHTML = value;
 }

 function reset() {
     value = 0
     document.getElementById("p").textContent = value;

 }

 function decrease() {
     value--;
     document.getElementById("p").innerHTML = value;
 }
 document.body.addEventListener('keydown', (event) => {
     if (event.key === '+' || event.key === 'ArrowUp') {
         increase();
     } else if (event.key === '-' || event.key === 'ArrowDown') {
         decrease();
     } else if (event.key === 'Backspace') {
         reset();
     }


 })