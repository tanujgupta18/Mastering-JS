const celsiusInput = document.getElementById("cel");
const fahrenheitInput = document.getElementById("fah");
const kelvinInput = document.getElementById("kel");

celsiusInput.addEventListener("input", () => {
  const celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    fahrenheitInput.value = (celsius * 9) / 5 + 32;
    kelvinInput.value = celsius + 273.15;
  } else {
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
});

fahrenheitInput.addEventListener("input", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheit)) {
    celsiusInput.value = ((fahrenheit - 32) * 5) / 9;
    kelvinInput.value = ((fahrenheit - 32) * 5) / 9 + 273.15;
  } else {
    celsiusInput.value = "";
    kelvinInput.value = "";
  }
});

kelvinInput.addEventListener("input", () => {
  const kelvin = parseFloat(kelvinInput.value);
  if (!isNaN(kelvin)) {
    celsiusInput.value = kelvin - 273.15;
    fahrenheitInput.value = ((kelvin - 273.15) * 9) / 5 + 32;
  } else {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
  }
});
