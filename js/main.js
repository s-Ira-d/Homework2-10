//1 *таймер інтервалу*
let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log(`повідомлення №${counter}`);

  if (counter === 5) {
    clearInterval(intervalId);
  }
}, 1000);

//2 *анімація елементів*
const box = document.getElementById("box");
let size = 50;
let growing = true;

setInterval(() => {
  if (growing) {
    size += 5;
    if (size >= 100) growing = false;
  } else {
    size -= 5;
    if (size <= 50) growing = true;
  }

  box.style.width = size + "px";
  box.style.height = size + "px";
}, 200);

//3 *інтерактивна гра*
const target = document.querySelector(".target");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const clicksDisplay = document.getElementById("clicks");

let score = 0;
let clicks = 0;

function moveTarget() {
  const maxX = gameArea.clientWidth - target.clientWidth;
  const maxY = gameArea.clientHeight - target.clientHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  target.style.left = x + "px";
  target.style.top = y + "px";
}

const interval = setInterval(moveTarget, 2000);

target.addEventListener("click", () => {
  score++;
  clicks++;
  clicksDisplay.textContent = "кількість натисків: " + clicks;
});

let timeLeft = 30;
const timerDisplay = document.createElement("div");
timerDisplay.style.fontSize = "20px";
timerDisplay.textContent = "час: " + timeLeft;
document.body.insertBefore(timerDisplay, gameArea);

const timer = setInterval(() => {
  timeLeft--;
  timerDisplay.textContent = "час: " + timeLeft;
  if (timeLeft <= 0) {
    clearInterval(interval);
    clearInterval(timer);
    alert(
      "гра закінчена! Ваш результат: " +
        score +
        " очок, " +
        clicks +
        " натисків."
    );
    target.style.display = "none";
  }
}, 1000);

//4 *контроль часу*
const secondsInput = document.getElementById("secondsInput");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
  const seconds = Number(secondsInput.value);

  if (isNaN(seconds) || seconds <= 0) {
    message.textContent = "введіть коректне число секунд!";
    return;
  }

  message.textContent = `таймер запущено на ${seconds} сек...`;

  setTimeout(() => {
    message.textContent = "час вийшов!";
  }, seconds * 1000);
});
