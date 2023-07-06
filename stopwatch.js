let hour = 0;
let min = 0;
let sec = 0;
let timer = null;
let second;
let minute;
let hours;
function start() {
  if (timer !== null) {
    clearInterval(timer);
  }

  timer = setInterval(stopwatch, 1000);
}
function stop() {
  clearInterval(timer);
}
function reset() {
  clearInterval(timer);
  sec = 0;
  min = 0;
  hour = 0;
  document.getElementById("sec").innerHTML = "0" +sec;
  document.getElementById("min").innerHTML = "0"+ min;
  document.getElementById("hour").innerHTML =  "0" + hour;
}


function stopwatch() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hour++;
    min = 0;
  }
  if (sec < 10) {
    second = "0" + sec;
  } else {
    second = sec;
  }

  if (min < 10) {
    minute = "0" + min;
  } else {
    minute = min;
  }

  if (hour < 10) {
    hours = "0" + hour;
  } else {
    hours = hour;
  }

  document.getElementById("sec").innerHTML = second;
  document.getElementById("min").innerHTML = minute;
  document.getElementById("hour").innerHTML = hours;
}
