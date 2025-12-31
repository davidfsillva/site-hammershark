const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active");
  }
});