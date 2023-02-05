const time = document.querySelector(".time");

let today = new Date();
let hours = String(today.getHours()).padStart(2, "0");
let minutes = String(today.getMinutes()).padStart(2, "0");
let seconds = String(today.getSeconds()).padStart(2, "0");

let displayTime = `${hours}:${minutes}:${seconds}`;
time.innerHTML = displayTime;
