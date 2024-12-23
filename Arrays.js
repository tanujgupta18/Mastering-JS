// Looping through Arrays

// 1. foreach Loop
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function (fruit) {
  console.log(fruit);
});

// 2. map function
let numbers = [1, 2, 3, 4];
let sqrNumber = numbers.map((num) => {
  return num ** 2;
});
console.log(sqrNumber);

// 3. Filter Function
let arr = [3, 25, 14, 27, 2];
const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};
console.log(arr.filter(greaterThanSeven));

// 4. Reduce Function
let ar = [1, 2, 3, 4, 5];
const reduceNum = (a, b) => {
  return a + b;
};
console.log(ar.reduce(reduceNum));

// 5. Array From

Array.from("JavaScript");
