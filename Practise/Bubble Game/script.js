var timer = 10;
var score = 0;
var hitrn = 0;
var timerint;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreValue").textContent = score;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 70; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
  timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(".pbtm").innerHTML = `
      <div class = "scorecard">
        <h1>Game Over</h1>
        <h2>Final Score: ${score}</h2>
      </div>
      `;
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitrn;
}

document.querySelector(".pbtm").addEventListener("click", function (details) {
  var clickedNum = Number(details.target.textContent);
  if (clickedNum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

document.querySelector("#startButton").addEventListener("click", function () {
  document.querySelector(".start-btn").style.display = "none";
  document.querySelector(".panel").style.display = "block";

  timer = 10;
  score = 0;
  document.querySelector("#scoreValue").textContent = score;
  document.querySelector("#timerValue").textContent = timer;

  runTimer();
  makeBubble();
  getNewHit();
});
