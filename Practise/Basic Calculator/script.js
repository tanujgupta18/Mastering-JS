document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");

  function buttonClick(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = "";
  }

  function calculateResult() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }

  function handledotClick() {
    if (!display.value.includes(".")) {
      display.value += ".";
    }
  }

  document.getElementById("one").addEventListener("click", function () {
    buttonClick("1");
  });
  document.getElementById("two").addEventListener("click", function () {
    buttonClick("2");
  });
  document.getElementById("three").addEventListener("click", function () {
    buttonClick("3");
  });
  document.getElementById("four").addEventListener("click", function () {
    buttonClick("4");
  });
  document.getElementById("five").addEventListener("click", function () {
    buttonClick("5");
  });
  document.getElementById("six").addEventListener("click", function () {
    buttonClick("6");
  });
  document.getElementById("seven").addEventListener("click", function () {
    buttonClick("7");
  });
  document.getElementById("eight").addEventListener("click", function () {
    buttonClick("8");
  });
  document.getElementById("nine").addEventListener("click", function () {
    buttonClick("9");
  });
  document.getElementById("zero").addEventListener("click", function () {
    buttonClick("0");
  });

  document.getElementById("divide").addEventListener("click", function () {
    buttonClick("/");
  });
  document.getElementById("multiply").addEventListener("click", function () {
    buttonClick("*");
  });
  document.getElementById("subs").addEventListener("click", function () {
    buttonClick("-");
  });
  document.getElementById("plus").addEventListener("click", function () {
    buttonClick("+");
  });

  document.getElementById("dot").addEventListener("click", handledotClick);
  document.getElementById("clear").addEventListener("click", clearDisplay);
  document.getElementById("equal").addEventListener("click", calculateResult);
});
