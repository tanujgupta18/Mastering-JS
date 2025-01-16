const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

var rect = document.querySelector(".center");

rect.addEventListener(
  "mousemove",
  throttleFunction((details) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = details.clientX + "px";
    div.style.top = details.clientY + "px";

    var img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://plus.unsplash.com/premium_photo-1664544228357-06ce9e98080e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
    );
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img, {
      y: "0",
      ease: Power1,
      duration: 0.6,
    });

    gsap.to(img, {
      y: "100%",
      delay: 0.6,
      ease: Power2,
    });

    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
