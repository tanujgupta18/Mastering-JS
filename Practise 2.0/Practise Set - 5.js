// Problem 1
let arr = [1, 2, 3, 4, 6];
let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Problem 2
let arr = [1, 2, 3, 4, 6];
let a;
do {
  a = prompt("Enter a number");
  a = Number.parseInt(a);
  arr.push(a);
  console.log(arr);
} while (a != 0);
console.log(arr);

// Problem 3
let arr = [10, 5, 100, 65, 230];
let arr2 = arr.filter((a) => {
  return a % 10 == 0;
});
console.log(arr2);

// Problem 4
let arr = [2, 5, 6, 9, 10];
let square = arr.map((num) => {
  return num * num;
});
console.log(square);

// Problem 5
let arr = [1, 2, 3, 4, 5];
let factorial = arr.reduce((x1, x2) => {
  return x1 * x2;
});

console.log(factorial);
