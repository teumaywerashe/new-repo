let st = document.getElementById("start");
let sto = document.getElementById("stop");
let res = document.getElementById("reset");
st.addEventListener("click", startTimer);
sto.addEventListener("click", stopTimer);
res.addEventListener("click", resetTimer);
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') startTimer();
    if (event.key === 's') stopTimer();
    if (event.key === 'r') resetTimer();
})
document.body.addEventListener('click', () => {
    console.log(countdown)
})
let seconds;
let hours;
let minutes;
let countdown;
let counting = false;
let intial = false

function startTimer() {
    if (counting) {
        return;
    }

    if (!intial) {
        intial = true;
        minutes = parseInt(document.getElementById("minute").innerText);
        seconds = parseInt(document.getElementById("second").innerText);
        hours = parseInt(document.getElementById("hour").innerText);
    }
    if (minutes > 59 || hours > 59 || seconds > 59) {
        alert("Please enter valid time values.");
        return;

    } else {
        counting = true;
        countdown = setInterval(() => {
            if (seconds > 0) {
                seconds--;
            } else {
                if (minutes > 0) {
                    seconds = 59;
                    minutes--;


                } else {
                    if (hours > 0) {
                        seconds = 59;
                        minutes = 59;
                        hours--;
                    } else {
                        alert("Time's up!");
                        clearInterval(countdown);
                        return;
                    }
                }
            }
            document.getElementById("timer").innerHTML = (`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`);
        }, 1000);
    }
}

function stopTimer() {
    if (!counting) {
        return;
    } else {
        counting = false;
        clearInterval(countdown);

        document.getElementById("timer").innerHTML = (`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`);
    }

}

function resetTimer() {
    clearInterval(countdown);
    seconds = 0;
    hours = 0;
    minutes = 0;
    document.getElementById("timer").innerHTML = (`${String(hours).padStart(2,"0")}:${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`);
}