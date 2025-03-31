
let hourT = document.querySelector(".hour");
let minT = document.querySelector(".min");
let secT = document.querySelector(".sec");
let msT = document.querySelector(".ms");

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let ms = 0
let sec = 0 
let min = 0
let hour = 0
let set = null;

function startTimer() {
    set = setInterval(function () {
        ms += 10;

        if (ms === 1000) {
            ms = 0;
            sec++;
        }

        if (sec === 60) {
            sec = 0;
            min++;
        }

        if (min === 60) {
            min = 0;
            hour++;
        }

        msT.innerHTML = formatTime(ms / 10);
        secT.innerHTML = formatTime(sec);
        minT.innerHTML = formatTime(min);
        hourT.innerHTML = formatTime(hour);

    }, 10); 
}

function formatTime(num) {
    return ("0" + Math.floor(num)).slice(-2);
}

start.addEventListener("click", function () {
    if (!set) {
        startTimer();
        pause.innerHTML = "Pause";
    }
});

reset.addEventListener("click", function () {
    clearInterval(set);
    set = null;
    ms = 0;
    sec = 0;
    min = 0;
    hour = 0;

    msT.innerHTML = "00";
    secT.innerHTML = "00";
    minT.innerHTML = "00";
    hourT.innerHTML = "00";

    pause.innerHTML = "Pause";
});

pause.addEventListener("click", function () {
    if (!set && (ms !== 0 || sec !== 0 || min !== 0 || hour !== 0)) {
        startTimer();
        pause.innerHTML = "Pause";
    } else if (set) {
        clearInterval(set);
        set = null;
        pause.innerHTML = "Resume";
    }
});
