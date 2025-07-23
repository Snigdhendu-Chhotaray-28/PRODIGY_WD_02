
// let startTime, updatedTime, difference, tInterval;
// let running = false;
// let lapCount = 0;

// const display = document.getElementById("display");
// const lapsList = document.getElementById("laps");

// function startTimer() {
//     if (!running) {
//         startTime = new Date().getTime() - (difference || 0);
//         tInterval = setInterval(updateTime, 10);
//         running = true;
//     }
// }

// function updateTime() {
//     updatedTime = new Date().getTime();
//     difference = updatedTime - startTime;

//     const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((difference % (1000 * 60)) / 1000);
//     const milliseconds = Math.floor((difference % 1000) / 10); 

//     display.innerHTML = (hours < 10 ? "0" + hours : hours) + ":" +
//                         (minutes < 10 ? "0" + minutes : minutes) + ":" +
//                         (seconds < 10 ? "0" + seconds : seconds) + ":" +
//                         (milliseconds < 10 ? "0" + milliseconds : milliseconds); 
// }

// function pauseTimer() {
//     clearInterval(tInterval);
//     running = false;
// }

// function resetTimer() {
//     clearInterval(tInterval);
//     running = false;
//     difference = 0;
//     display.innerHTML = "00:00:00:00"; 
//     lapsList.innerHTML = "";
//     lapCount = 0;
// }

// function recordLap() {
//     if (running) {
//         lapCount++;
//         const lapTime = display.innerHTML;
//         const lapItem = document.createElement("li");
//         lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
//         lapsList.appendChild(lapItem);
//     }
// }










// let running = false;
// let n = 0;

// function startTimer() {
//     if (!running) {
//         running = true;
//         console.log(9);
//         function updateN() {
//             n++;
//             console.log(n);
//             if (running) {
//                 setTimeout(updateN, 1000);
//             }
//         }
//         setTimeout(updateN, 1000);
//     }
// }







const display = document.querySelector('#display');
let running = false;
let time = 0;
let n = 0;

function startTimer() {
    if ((!running) && (n < 100)) {
        running = true;
        const intervalId = setInterval(() => {
            if (running) {
                n++;
                let totalMilliseconds = n * 10; // Each n is 10ms

                let hours = Math.floor(totalMilliseconds / 3600000);
                let minutes = Math.floor((totalMilliseconds % 3600000) / 60000);
                let seconds = Math.floor((totalMilliseconds % 60000) / 1000);

                let hundredths = Math.floor((totalMilliseconds % 1000) / 10); // 2-digit ms

                display.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(hundredths)}`;
            }
            if ((n >= 36099999) || (!running)) {
                clearInterval(intervalId);
                running = false;
            }
        }, 10);
    }
}

function pad(num) {
    return num.toString().padStart(2, '0');
}


function pauseTimer(){
    running = false;
}

function resetTimer(){
    running = false;
    time = 0;
    n = 0;
    display.innerHTML = '00:00:00:00'
}

function recordLap(){
    if(running){
        const lapContener = document.querySelector('#laps');
        let newLap = document.createElement('li');
        newLap.innerText = display.innerText;
        lapContener.append(newLap);
    }
    
}





document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);