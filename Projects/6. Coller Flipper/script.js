const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * colors.length);
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.innerText = colors[randomNumber];
});
