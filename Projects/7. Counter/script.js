let counterElement = document.querySelector("#value");
let counterValue = parseInt(counterElement.textContent, 10);

let decreaseBtn = document.querySelector(".decrease");
let resetBtn = document.querySelector(".reset");
let increaseBtn = document.querySelector(".increase");

decreaseBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterElement.textContent = counterValue;
});

resetBtn.addEventListener("click", () => {
  counterValue = 0;
  counterElement.textContent = counterValue;
});

increaseBtn.addEventListener("click", () => {
  counterValue += 1;
  counterElement.textContent = counterValue;
});
