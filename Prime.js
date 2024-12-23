// Check given number is Prime Number or not

function isPrime(n) {
  if (n <= 1) {
    return False;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7));
