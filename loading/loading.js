 let count = 0;

 function update() {

     let result = '';
     let digit = 'Loading...';
     for (let i = 0; i < digit.length; i++) {
         setTimeout(() => {
             result += digit[i];
             document.getElementById("display").innerHTML = result;
             document.getElementById("display").style.fontSize = " 3em";
         }, 100 * i);
     }
     setTimeout(() => {


         if (count < 10) {
             update();
         }
         count++
     }, 100 * digit.length + 500);



 }

 update();