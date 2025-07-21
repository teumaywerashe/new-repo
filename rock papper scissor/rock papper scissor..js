 var randomNumber
 var result
     /*var score = {
         win: 0,
         lose: 0,
         tie: 0
     };*/
 var score = JSON.parse(localStorage.getItem('score')) || ({
     win: 0,
     lose: 0,
     tie: 0
 });

 let yesBtn;
 let noBtn;

 function reset() {
     document.querySelector('.confirm').innerHTML = `do you want to restet<button id='yes-Btn'>yes</button><button id='no-Btn' onclick='document.get' >no</button>`


     yesBtn = document.getElementById('yes-Btn');
     noBtn = document.getElementById('no-Btn');
     yesBtn.addEventListener('click', function() {
         score.win = 0
         score.lose = 0
         score.tie = 0
         localStorage.removeItem("score");
         document.getElementById("result").innerHTML = `result updated`;
         updateResult();
         document.querySelector('.confirm').innerHTML = ''
     })


     noBtn.addEventListener('click', () => {
         document.querySelector('.confirm').innerHTML = ''
     });
 }




 /*
  function reset() {
      score.win = 0
      score.lose = 0
      score.tie = 0
      localStorage.removeItem("score");
      document.getElementById("result").innerHTML = `result updated`;
      updateResult();


  }

 */
 function computerMove() {
     var computerGuess
     randomNumber = Math.random();
     if (randomNumber < 1 / 3) {
         computerGuess = "✌️"
     } else if (randomNumber < 2 / 3) {
         computerGuess = "✊"
     } else {
         computerGuess = "✋";
     }
     return computerGuess;
 }

 function computer(playerGuess) {
     var computerGuess = computerMove();
     if (computerGuess == playerGuess) {
         result = "tie"
         score.tie++;
     } else {
         if (((computerGuess == "✊") && (playerGuess == "✌️")) || ((computerGuess == "✋") && (playerGuess == "✊")) || ((computerGuess == "✌️") && (playerGuess == "✋"))) {
             result = "lose"
             score.lose++
         } else {
             result = "win"
             score.win++;
         }
     }
     localStorage.setItem("score", JSON.stringify(score));

     document.getElementById("result").innerHTML = `you ${result}`;

     document.getElementById("move").innerHTML = (`you:<button>${playerGuess}</button>  <button>${computerGuess}</button>computer`)

     updateResult();


 }

 document.body.addEventListener('keydown', (event) => {
     if (event.key == 'a') {
         autoPlay()
     } else if (event.key == 'Backspace') {
         reset();
     } else if (event.key == 'r') {
         computer('✊')
     } else if (event.key == 's') {
         computer('✌️')
     } else if (event.key == 'p') {
         computer('✋')
     }
 })

 function updateResult() {
     document.getElementById("score").innerHTML = `win:<button>${score.win} </button>  
            lose:<button>${score.lose}</button>
            tie:<button>${score.tie}</button> `
 }

 let isPlaying = false;
 let intervalId;

 function autoPlay() {

     if (!isPlaying) {
         intervalId = setInterval(function() {
             let playerGuess = computerMove();
             computer(playerGuess);
         }, 1000)
         document.querySelector('.autoplay-button').innerHTML = `Playing(click to-pause)`
         isPlaying = true;
     } else {
         document.querySelector('.autoplay-button').innerHTML = `paused(click to-play)`
         clearInterval(intervalId);
         isPlaying = false;
     }
 }