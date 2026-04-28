const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav-links a");

menuButton?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});
