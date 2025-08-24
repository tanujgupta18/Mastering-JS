// Problem 1
let marks = promt("Enter marks");
if (marks > 10 && marks < 20) {
  console.log("Marks are above 10 and lesser than 20");
} else {
  console.log("Marks are not above 10");
}

// Problem 2
let num = "Enter a number: ";
if (num % 2 == 0 && num % 3 == 0) {
  console.log("Number is divisible by 2 and 3");
} else {
  console.log("Number is not divisible by 2 and 3");
}

// Problem 3
let age = promt("Enter the age: ");
console.log("You can", age > 18 ? "drive" : "not drive");
