// Question1
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

checkEvenOdd(4);
checkEvenOdd(7);

// Question2
function checkGreaterNumber(a, b) {
  if (a > b) {
    console.log(`${a} is greater`);
  } else if (a < b) {
    console.log(`${b} is greater`);
  } else {
    console.log("Both Equal");
  }
}

checkGreaterNumber(5, 8);
checkGreaterNumber(8, 8);
checkGreaterNumber(8, 2);

// Question3
function convertToFahrenheit(temp) {
  result = (9 / 5) * temp + 32;
  console.log(`Converted Temperature is ${result} F`);
}

convertToFahrenheit(32);
