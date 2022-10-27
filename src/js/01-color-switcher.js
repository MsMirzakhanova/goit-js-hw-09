const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

console.log(body);
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
      body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
});





