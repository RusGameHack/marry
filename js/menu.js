function activeMenu(block) {
  block.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
  setTimeout(() => {
    document.querySelector(".menu").classList.toggle("visible");
  }, 30);
  document.querySelector("body").classList.toggle("hidden");
}
