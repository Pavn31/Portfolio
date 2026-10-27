const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const progress = document.querySelector("#progress");

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const reveals = document.querySelectorAll(".reveal");
if (reducedMotion) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const siblings = [...entry.target.parentElement.children];
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.14 },
  );

  reveals.forEach((element) => observer.observe(element));
}

document.querySelectorAll(".project-card[data-repo]").forEach((card) => {
  const openRepository = () => {
    window.open(card.dataset.repo, "_blank", "noopener,noreferrer");
  };

  card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;
    openRepository();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openRepository();
  });
});
