// Problem 1
let marks = {
  Harry: 98,
  Rohan: 70,
  Aakash: 7,
};

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]
  );
}

// Problem 2 - using for in loop
for (let key in marks) {
  console.log("Marks of " + key + " are " + marks[key]);
}

// Problem 3
const cn = 5;
let i;
while (i != cn) {
  i = prompt("Enter a number: ");
  console.log("Try again");
}
console.log("You entered a correct number");

// Problem 4
const calculateMean = (a, b, c, d, e) => {
  const sum = a + b + c + d + e;
  const mean = sum / 5;
  return (
    "Mean of " + a + ", " + b + ", " + c + ", " + d + ", " + e + " is " + mean
  );
};

console.log(calculateMean(1, 2, 3, 4, 5));
