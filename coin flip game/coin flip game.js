let score = JSON.parse(localStorage.getItem("score")) || {
    win: 0,
    lose: 0
}

function reset() {
    score.win = 0
    score.lose = 0

    localStorage.removeItem("score")

    document.getElementById("result").innerHTML = `score resetted`
    document.getElementById("score").innerHTML = `win:${score.win}  lose:${score.lose}`
}

function computerPick(playerGuess) {
    let computerGuess;
    let randomNumber = Math.random();
    if (randomNumber > 1 / 2) {
        computerGuess = "head"
    } else {
        computerGuess = "tail"
    }
    if (playerGuess == computerGuess) {
        result = "win"
        score.win++;
    } else {
        result = "lose"
        score.lose++;
    }

    localStorage.setItem("score",
        JSON.stringify(score))

    document.getElementById("result").innerHTML = `you:${playerGuess} your pair:${computerGuess}<br> result you ${result}`
    document.getElementById("score").innerHTML = `win:${score.win}  lose:${score.lose}`
}