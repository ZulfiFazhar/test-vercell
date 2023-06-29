const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");
const stopScroll = document.querySelector("body");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
  stopScroll.classList.toggle("stop-scrolling");
});
