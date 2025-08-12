 var resetBtn = document.getElementById('reset');
 var board = document.querySelectorAll(".cell");
 var currentPlayer = "x";
 var gameOver = false;

 let winPatern = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
 ];

 resetBtn.addEventListener('click', reset)
 addListener();

 function addListener() {

     board.forEach((cell) => {
         cell.addEventListener('click', function() {
             if (!gameOver && this.innerHTML === '') {
                 this.innerHTML = currentPlayer;
                 cheekResult();
                 if (!gameOver) {
                     currentPlayer = (currentPlayer === "x") ? "o" : "x";
                 }
             }

         });

     });
 }

 function cheekResult() {
     for (let pattern of winPatern) {
         let [a, b, c] = pattern;
         if (board[a].innerHTML !== '' && board[a].innerHTML === board[b].innerHTML && board[b].innerHTML === board[c].innerHTML) {
             gameOver = true;

             document.getElementById('result').innerHTML = `player ${board[a].innerHTML.toUpperCase()} win!`
             highLightCells([a, b, c]);
             return;
         }
     }
     let draw = true;
     board.forEach(cell => {
         if (cell.innerHTML === '') {
             draw = false;
         }
     })
     if (draw) {
         document.getElementById('result').innerHTML = `it is <span class='draw'>DRAW!</span>`
         board.forEach(cell => {
             cell.style.color = 'red'
         })
     }
 }

 function highLightCells(pattern) {
     pattern.forEach(i => {
         board[i].style.backgroundColor = 'red';
     })

 }

 function reset() {
     board.forEach(cell => {
         cell.innerHTML = ''
         cell.style.backgroundColor = ' rgb(234, 230, 230)'
         cell.style.color = ' black'
     })
     currentPlayer = "x";
     gameOver = false;
     document.getElementById('result').innerHTML = ``
     addListener();
 }
















 /*
 board.forEach((cell) => {
     cell.addEventListener("click", function() {
         if (!gameOver && this.innerHTML === "") {
             this.innerHTML = currentPlayer;
             //display();
             if (!gameOver) {
                 currentPlayer = (currentPlayer === "x") ? "o" : "x";
             }
         }

     });
 })
function addEventListeners() {
      for (let i = 0; i < board.length; i++) {
          board[i].addEventListener("click", function() {
              if (!gameOver && this.innerHTML === "") {
                  this.innerHTML = currentPlayer;
                  display();
                  if (!gameOver) {
                      currentPlayer = (currentPlayer === "x") ? "o" : "x";
                  }
              }

          });
      }
  }
  addEventListeners();

  function display() {

      if ((board[0].innerHTML === "x" && board[1].innerHTML === "x" && board[2].innerHTML === "x") || (board[3].innerHTML === "x" && board[4].innerHTML === "x" && board[5].innerHTML === "x") || (board[6].innerHTML === "x" && board[7].innerHTML === "x" && board[8].innerHTML === "x") || (board[0].innerHTML === "x" && board[3].innerHTML === "x" && board[6].innerHTML === "x") || (board[1].innerHTML === "x" && board[4].innerHTML === "x" && board[7].innerHTML === "x") || (board[2].innerHTML === "x" && board[5].innerHTML === "x" && board[8].innerHTML === "x") || (board[0].innerHTML === "x" && board[4].innerHTML === "x" && board[8].innerHTML === "x") || (board[2].innerHTML === "x" && board[4].innerHTML === "x" && board[6].innerHTML === "x")) {
          document.getElementById("result").innerHTML = "Player X wins!";
          gameOver = true;
          return;
      } else if ((board[0].innerHTML === "o" && board[1].innerHTML === "o" && board[2].innerHTML === "o") || (board[3].innerHTML === "o" && board[4].innerHTML === "o" && board[5].innerHTML === "o") || (board[6].innerHTML === "o" && board[7].innerHTML === "o" && board[8].innerHTML === "o") || (board[0].innerHTML === "o" && board[3].innerHTML === "o" && board[6].innerHTML === "o") || (board[1].innerHTML === "o" && board[4].innerHTML === "o" && board[7].innerHTML === "o") || (board[2].innerHTML === "o" && board[5].innerHTML === "o" && board[8].innerHTML === "o") || (board[0].innerHTML === "o" && board[4].innerHTML === "o" && board[8].innerHTML === "o") || (board[2].innerHTML === "o" && board[4].innerHTML === "o" && board[6].innerHTML === "o")) {
          document.getElementById("result").innerHTML = "Player O wins!";
          gameOver = true;
          return;
      }
      let isDraw = true;
      for (let i = 0; i < board.length; i++) {
          if (board[i].innerHTML === "") {
              isDraw = false;
              break;
          }
      }
      if (isDraw) {
          document.getElementById("result").innerHTML = "It's a draw!";
          gameOver = true;
          return;
      }

      document.getElementById("result").innerHTML = "No result yet!";
  }
  */