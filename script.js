const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
const cursorGlow = document.querySelector(".cursor-glow");

// MOBILE NAVIGATION

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "INDEX －" : "INDEX ＋";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "INDEX ＋";
  });
});

// CURSOR LIGHT

window.addEventListener("pointermove", event => {
  if (window.matchMedia("(pointer: fine)").matches) {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  }
});

// BACK TO TOP

document.querySelector("#panic").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});