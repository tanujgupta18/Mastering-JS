let product = {
  name: "jeans",
  size: "S",
  fit: "Slim Fit",
  "delivery-time": "Same day delivery",
};

let copyProduct = product;
console.log(copyProduct);
copyProduct.size = "M";
console.log(copyProduct);
copyProduct.fit = "Regular";
console.log(copyProduct);

// // Bracket Notation
console.log(product["delivery-time"]);

// Dot notation
// console.log(product.delivery - time); // Throws Error

let obj = {
  message: "Good Job",
  status: "Complete",
};

console.log(obj);

let { message } = obj;
console.log(message);
let { status } = obj;
console.log(status);
