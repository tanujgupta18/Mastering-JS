let randomNumber = Math.floor(Math.random() * 100);
let guesses = 100;
let num;

do {
  num = parseInt(prompt("Guess the number between 0 and 99: "));
  guesses--;

  if (isNaN(num)) {
    console.log("Invalid input. Please enter a number.");
  } else if (num < randomNumber) {
    console.log(`Too low! Your score is ${guesses}`);
  } else if (num > randomNumber) {
    console.log(`Too high! Your score is ${guesses}`);
  } else {
    console.log(
      `Correct! The number was ${randomNumber}. Your final score is ${guesses}`
    );
    break;
  }

  if (guesses <= 0) {
    console.log("You've run out of guesses. Game Over!");
    break;
  }
} while (num !== randomNumber);
