//1 *таймер інтервалу*
let counter = 0;

const intervalId = setInterval(() => {
  counter++;
  console.log(`повідомлення №${counter}`);

  if (counter === 5) {
    clearInterval(intervalId);
    console.log("інтервал зупинено.");
  }
}, 1000);

//2 *анімація елементів*
let position = 50;
let size = 50;

const box = document.getElementById("box");

const animationInterval = setInterval(() => {
  position += 5; // рух вправо
  size += 2; // збільшення розміру

  box.style.left = position + "px";
  box.style.width = size + "px";
  box.style.height = size + "px";

  // Зупинка анімації
  if (size >= 120) {
    clearInterval(animationInterval);
    console.log("анімація завершена");
  }
}, 100);

//3 *інтерактивна гра*
let score = 0;
let timeLeft = 10;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const target = document.getElementById("target");

// Інтервал руху мішені
const moveInterval = setInterval(() => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  target.style.left = x + "px";
  target.style.top = y + "px";
}, 700);

// Таймер гри
const gameTimer = setInterval(() => {
  timeLeft--;
  timeEl.textContent = timeLeft;

  if (timeLeft <= 0) {
    clearInterval(moveInterval);
    clearInterval(gameTimer);
    target.style.display = "none";
    alert(`гру завершено! Ваш результат: ${score} очок.`);
  }
}, 1000);

// Клік по мішені
target.addEventListener("click", () => {
  score++;
  scoreEl.textContent = score;
});

//4 *контроль часу*
const secondsInput = document.getElementById("secondsInput");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
  const seconds = Number(secondsInput.value);

  if (isNaN(seconds) || seconds <= 0) {
    message.textContent = "будь ласка, введіть коректне число секунд!";
    return;
  }

  message.textContent = `таймер запущено на ${seconds} сек...`;

  setTimeout(() => {
    message.textContent = "час вийшов!";
  }, seconds * 1000);
});
