const startingMinutes = 25;
let allSeconds = startingMinutes * 60;
let isrunning = false;

const Countdown = document.getElementById("time-left")
const startTimer = document.getElementById("study-btn")
const breakButton = document.getElementById("break-btn")


function updateTimerDisplay() {
  const minutes = Math.floor(allSeconds / 60);
  let seconds = allSeconds % 60;
  seconds = seconds < 10 ? "0" + seconds: seconds;
  allSeconds --;
  Countdown.innerHTML = `${minutes}:${seconds}`
}
const start = () => {
  let isrunning = true;
  setInterval(updateTimerDisplay, 1000);
}

startTimer.addEventListener('click', start)

const breakbutt = () => {
  let isrunning = false;
  
}

breakButton.addEventListener('click', breakbutt)



