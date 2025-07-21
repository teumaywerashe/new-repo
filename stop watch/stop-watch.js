 let timer = null;
 let h = 0;
 let m = 0;
 let s = 0;
 document.getElementById("h").innerText = "00";
 document.getElementById("m").innerText = "00";
 document.getElementById("s").innerText = "00";

 function start() {
     if (timer) return; // Prevent multiple timers
     timer = setInterval(() => {
         s++;
         if (s === 60) {
             s = 0;
             m++;
         }
         if (m === 60) {
             m = 0;
             h++;
         }
         document.getElementById("h").innerText = String(h).padStart(2, '0');
         document.getElementById("m").innerText = String(m).padStart(2, '0');
         document.getElementById("s").innerText = String(s).padStart(2, '0');
     }, 10);
 }

 function stop() {
     clearInterval(timer);
     timer = null; // Reset timer variable
 }

 function restart() {
     clearInterval(timer);
     timer = null; // Reset timer variable
     h = 0;
     m = 0;
     s = 0;
     document.getElementById("h").innerText = "00";
     document.getElementById("m").innerText = "00";
     document.getElementById("s").innerText = "00";
 }