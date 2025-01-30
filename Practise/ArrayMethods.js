const nums = [1, 2, 3, 4, 5];
const sqaure = nums.map((num) => num * num);
console.log(sqaure);

const numbers = [10, 15, 20, 23, 25];
const filtered = numbers.filter((num) => num % 5 === 0);
console.log(filtered);

const arr = [1, 2, 3, 13, 63, 23];
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

const array = [1, 2, 3, 4, 5];
array.forEach((num) => console.log(num * 2));

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];

const user = users.find((user) => user.age > 27);
console.log(user);
