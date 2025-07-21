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