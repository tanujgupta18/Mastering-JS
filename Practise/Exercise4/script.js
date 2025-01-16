function convertFromCelsius(temp, toUnit) {
  if (toUnit === "Fahrenheit") {
    return (temp * 9) / 5 + 32;
  } else if (toUnit === "Kelvin") {
    return temp + 273;
  }
  return temp;
}

function convertFromFahrenheit(temp, toUnit) {
  if (toUnit === "Celsius") {
    return ((temp - 32) * 5) / 9;
  } else if (toUnit === "Kelvin") {
    return ((temp - 32) * 5) / 9 + 273;
  }
  return temp;
}

function convertFromKelvin(temp, toUnit) {
  if (toUnit === "Celsius") {
    return temp - 273.15;
  } else if (toUnit === "Fahrenheit") {
    return ((temp - 273.15) * 9) / 5 + 32;
  }
  return temp;
}

function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("tempInput").value);
  const unit = document.getElementById("unitSelect").value;
  let result = "";

  if (isNaN(inputTemp)) {
    result = "Please Enter a valid number";
  } else {
    if (unit === "Celsius") {
      result = `
      ${inputTemp}° Celsius = ${convertFromCelsius(
        inputTemp,
        "Fahrenheit"
      )}° Fahrenheit
      = ${convertFromCelsius(inputTemp, "Kelvin")} Kelvin
  `;
    } else if (unit === "Fahrenheit") {
      result = `
          ${inputTemp}° Fahrenheit = ${convertFromFahrenheit(
        inputTemp,
        "Celsius"
      )}° Celsius
          = ${convertFromFahrenheit(inputTemp, "Kelvin")} Kelvin
      `;
    } else if (unit === "Kelvin") {
      result = `
          ${inputTemp} Kelvin = ${convertFromKelvin(
        inputTemp,
        "Celsius"
      )}° Celsius
          = ${convertFromKelvin(inputTemp, "Fahrenheit")}° Fahrenheit
      `;
    }
  }
  document.getElementById("result").innerHTML = result;
}
