 var board = document.querySelectorAll(".cell");
 var currentPlayer = "x";
 var gameOver = false;

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