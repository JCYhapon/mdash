document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("submitBtn").addEventListener("click", checkAnswer);

let numbers = [];
let totalSum = 0;
let interval;

function startGame() {
  const level = document.getElementById("level").value;
  let delay;

  if (level === "easy") {
    delay = 2000;
  } else if (level === "medium") {
    delay = 1000;
  } else {
    delay = 500;
  }

  numbers = [];
  totalSum = 0;
  document.getElementById("numberDisplay").innerHTML = "";
  document.getElementById("result").innerHTML = "";

  for (let i = 0; i < getRandomInt(5, 10); i++) {
    numbers.push(getRandomInt(1, 100));
  }

  let index = 0;

  interval = setInterval(() => {
    if (index < numbers.length) {
      document.getElementById("numberDisplay").textContent = numbers[index];
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        document.getElementById("numberDisplay").textContent = "";
      }, delay);
    }
  }, delay);

  totalSum = numbers.reduce((acc, num) => acc + num, 0);
}

function checkAnswer() {
  const userTotal = parseInt(document.getElementById("total").value, 10);
  if (userTotal === totalSum) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent =
      "Incorrect. The correct total is " + totalSum;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
