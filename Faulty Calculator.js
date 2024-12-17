/* Create a Fautly Calculator using JavaScript

This calculator involves:
1. It takes two number as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong opertaion 10% of the times

*/

let random = Math.random();
let num1 = prompt("Enter a number: ");
let operation = prompt("Enter the opeation(+,-,*,/: ");
let num2 = prompt("Enter a number: ");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
} else {
  c = obj[c];
  alert(`The result is ${eval(`${num1} ${operation} ${num2}`)}`);
}
