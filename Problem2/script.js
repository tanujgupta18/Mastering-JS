var rect = document.querySelector(".center");

rect.addEventListener("mousemove", function (details) {
  var xValue = gsap.utils.mapRange(
    0,
    window.innerWidth,
    50 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (50 + rect.getBoundingClientRect().width / 2),
    details.clientX
  );

  gsap.to(rect, {
    left: xValue + "px",
    ease: Power3,
  });
});
