// Conditonals in JavaScript;

// If-Else Conditional Example
let num = 15;

// If the number is greater than 10, print a message
if (num > 10) {
  console.log("Number is greater than 10");
} else {
  console.log("Number is 10 or less");
}

// Else If Conditional Example
let age = 20;

// Check if the age is in different ranges
if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 20) {
  console.log("Teenager");
} else if (age >= 20 && age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// Ternary Conditional Example
let isLoggedIn = true;

// Using a ternary operator to check if the user is logged in
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// Switch Statement Example
let day = 3; // 1 = Sunday, 2 = Monday, etc.

// Switch case to check which day of the week it is
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}
