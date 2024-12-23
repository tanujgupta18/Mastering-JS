// Calculate Factorial of the number

function Factorial(num) {
  result = 1;

  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(Factorial(0));
