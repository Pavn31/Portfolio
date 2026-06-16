// =========================
// SMOOTH SCROLL ACTIVE LINKS
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if(
            scrollY >= sectionTop &&
            scrollY < sectionTop + section.offsetHeight
        ){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }
    });

});

// =========================
// REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".card, .about-text, .contact-box, .section-title"
);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
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

    if(window.scrollY > 50){
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

    if(!profileImage) return;

    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;

    profileImage.style.transform =
    `translate(${x}px, ${y}px) scale(1.02)`;

});
const toggleBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
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
    modal.classList.add("active");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.classList.remove("active");
    }
});