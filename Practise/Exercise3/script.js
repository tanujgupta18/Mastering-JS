const display = document.querySelector("#display");

function updateDisplay(value) {
  display.value += value;
}

document
  .getElementById("seven")
  .addEventListener("click", () => updateDisplay("7"));
document
  .getElementById("eight")
  .addEventListener("click", () => updateDisplay("8"));
document
  .getElementById("nine")
  .addEventListener("click", () => updateDisplay("9"));
document
  .getElementById("four")
  .addEventListener("click", () => updateDisplay("4"));
document
  .getElementById("five")
  .addEventListener("click", () => updateDisplay("5"));
document
  .getElementById("six")
  .addEventListener("click", () => updateDisplay("6"));
document
  .getElementById("one")
  .addEventListener("click", () => updateDisplay("1"));
document
  .getElementById("two")
  .addEventListener("click", () => updateDisplay("2"));
document
  .getElementById("three")
  .addEventListener("click", () => updateDisplay("3"));
document
  .getElementById("zero")
  .addEventListener("click", () => updateDisplay("0"));
document
  .getElementById("dot")
  .addEventListener("click", () => updateDisplay("."));

document
  .getElementById("plus")
  .addEventListener("click", () => updateDisplay("+"));
document
  .getElementById("minus")
  .addEventListener("click", () => updateDisplay("-"));
document
  .getElementById("multiply")
  .addEventListener("click", () => updateDisplay("*"));
document
  .getElementById("divide")
  .addEventListener("click", () => updateDisplay("/"));

document.getElementById("clear").addEventListener("click", () => {
  display.value = "";
});

document.getElementById("equal").addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
});
