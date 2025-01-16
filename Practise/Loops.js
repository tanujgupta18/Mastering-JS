// Loops in JavaScript;
// For Loop - Printing numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Object Example for 'for...in' Loop
let obj = {
  name: "ABC User",
  role: "Full Stack Developer",
  stack: "JavaScript",
};

// Using 'for...in' to iterate over the keys of an object
for (const key in obj) {
  console.log(key); // Prints keys: name, role, stack
}

// String Example for 'for...of' Loop
const str = "Hello";

// Using 'for...of' to iterate over the characters in a string
for (const char of str) {
  console.log(char); // Prints each character of "Hello"
}

// While Loop Example
let i = 1;
while (i < 10) {
  console.log("Hello");
  i++; // Increment to avoid infinite loop
}

// Do...While Loop Example
let j = 10;
do {
  console.log(j); // Prints the value of j
  j++; // Increment j
} while (j < 15); // Loop continues until j is not less than 15
