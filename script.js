const hamburger = document.querySelector(".hamburger");

const menuPanel = document.querySelector(".menu-panel");

const menuClose = document.querySelector(".close-menu");

hamburger.addEventListener("click", function () {
  menuPanel.classList.add("open");
  document.body.classList.add("menu-open");
});

menuClose.addEventListener("click", function () {
  menuPanel.classList.remove("open");
  document.body.classList.remove("menu-open");
});
