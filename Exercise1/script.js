let num = Math.ceil(Math.random() * 100);
let score = 100;

function guessNumber() {
  let userGuess = prompt("Enter Number: ");

  userGuess = Number(userGuess);

  score--;

  if (userGuess === num) {
    console.log(num);
    console.log(score);
  } else if (userGuess > num) {
    console.log("Guess is high");
    if (score > 0) {
      guessNumber();
    } else {
      console.log("Low Score");
    }
  } else if (userGuess < num) {
    console.log("Guess is less");
    if (score > 0) {
      guessNumber();
    } else {
      console.log("Low Score");
    }
  } else {
    score++;
    guessNumber();
  }
}

guessNumber();
