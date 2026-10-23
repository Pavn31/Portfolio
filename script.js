const heroArt = document.querySelector(".hero-art");

// CURSOR LIGHT

window.addEventListener("pointermove", event => {
  if (window.matchMedia("(pointer: fine)").matches) {
    if (heroArt && heroArt.matches(":hover")) {
      const bounds = heroArt.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      heroArt.style.setProperty("--tilt-x", `${y * -7}deg`);
      heroArt.style.setProperty("--tilt-y", `${x * 9}deg`);
    }
  }
});

heroArt?.addEventListener("pointerleave", () => {
  heroArt.style.setProperty("--tilt-x", "0deg");
  heroArt.style.setProperty("--tilt-y", "0deg");
});

// Small interactive depth cues on the page's major surfaces.
if (window.matchMedia("(pointer: fine)").matches) {
  document.querySelectorAll(".card").forEach(panel => {
    panel.addEventListener("pointermove", event => {
      const bounds = panel.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      panel.style.transform = `perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 3}deg) translateZ(8px)`;
    });
    panel.addEventListener("pointerleave", () => {
      panel.style.transform = "";
    });
  });
}

// BACK TO TOP

document.querySelector("#panic").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
