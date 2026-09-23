const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();

const themeToggle = document.querySelector("#theme-toggle");

function setTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "bright" : "dark"} theme`);
  themeToggle.title = `Switch to ${isDark ? "bright" : "dark"} theme`;
  themeToggle.querySelector(".theme-icon").textContent = isDark ? "☼" : "☾";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#151815" : "#f5f6f2";

  try {
    localStorage.setItem("pavan-portfolio-theme", isDark ? "dark" : "light");
  } catch {}
}

setTheme(document.documentElement.dataset.theme || "light");
themeToggle.addEventListener("click", () => {
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
});
