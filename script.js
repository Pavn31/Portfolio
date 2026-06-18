// =========================
// SMOOTH SCROLL ACTIVE LINKS
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;

    if (scrollY >= sectionTop && scrollY < sectionTop + section.offsetHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// =========================
// REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
  ".card, .about-text, .contact-box, .section-title",
);

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.borderBottom = "1px solid #333";
  } else {
    navbar.style.borderBottom = "1px solid #222";
  }
});

// =========================
// HERO IMAGE PARALLAX
// =========================

const profileImage = document.querySelector(".hero-profile img");

window.addEventListener("mousemove", (e) => {
  if (!profileImage) return;

  let x = (window.innerWidth / 2 - e.pageX) / 40;
  let y = (window.innerHeight / 2 - e.pageY) / 40;

  profileImage.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
});
const toggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
} else {
  toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
});
const modal = document.getElementById("projectModal");
const projectCard = document.querySelector("#projects .card");
const closeModal = document.querySelector(".close-modal");

projectCard.addEventListener("click", () => {
  console.log("CARD CLICKED");
  modal.classList.add("active");
  console.log(modal);
  console.log(modal.classList);
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
const heroName = document.getElementById("hero-name");

let clickCount = 0;

heroName.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 5) {
    alert("🚀 Easter Egg Found!");
    clickCount = 0;
  }
});
const logo = document.getElementById("logo");

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];

    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

let clickCount = 0;

logo.addEventListener("click", (e) => {
  e.preventDefault();

  clickCount++;
  console.log("Logo clicked:", clickCount);

  if (clickCount === 5) {
    alert("🚀 Easter Egg Found!");
    canvas.style.display = "block";

    const matrixInterval = setInterval(drawMatrix, 33);

    setTimeout(() => {
      clearInterval(matrixInterval);

      canvas.style.display = "none";
    }, 10000);

    clickCount = 0;
  }
});
function updateClock() {
  const now = new Date();

  document.getElementById("clock").textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);

updateClock();

const quotes = [
  "Code. Sleep. Repeat.",
  "Build. Break. Learn.",
  "Stay curious.",
  "Consistency beats motivation.",
  "Small progress is still progress.",
];

document.getElementById("quote").textContent =
  quotes[Math.floor(Math.random() * quotes.length)];
fetch("https://api.github.com/users/Pavn31")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("github-user").textContent = data.login;

    document.getElementById("github-repos").textContent = data.public_repos;

    document.getElementById("github-followers").textContent = data.followers;

    document.getElementById("github-following").textContent = data.following;
  })
  .catch((error) => {
    console.error(error);
  });
