# Pavan Badiger · Portfolio

> Curious by nature. Builder by choice.

A dark, matte, editorial-style personal portfolio for **Pavan Badiger**, an AI & Data Science student at Angadi Institute of Technology & Management, Belagavi.

🔗 **Live:** [pavn31.dpdns.org](https://pavn31.dpdns.org)

---

## ✨ Features

- Dark matte theme with subtle grain, scanlines and a faint cursor glow
- Hero section with profile image and stylised stamp
- Project cards with tags and direct GitHub links
- About section with skill tags
- Contact section with email, GitHub and LinkedIn
- Responsive layout with a mobile **INDEX** menu
- Custom favicon and Apple touch icon
- No frameworks, no build step, pure HTML / CSS / JS

---

## 🧰 Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript
- Google Fonts: **Unbounded** and **DM Mono**

---

## 📁 Project Structure

```
.
├── index.html        # Page structure and content
├── style.css         # Theme, layout and responsive styles
├── script.js         # Mobile menu, cursor glow, back-to-top
└── assets/
    ├── Icon.jpeg     # Favicon
    └── Profile.svg   # Hero profile image
```

---

## 🚀 Run Locally

No installation needed.

1. Clone the repo:
```bash
   git clone https://github.com/Pavn31/portfolio.git
   cd portfolio
```
2. Open `index.html` in your browser.

Or run a quick local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## 🛠 Customisation

- **Colours:** edit the variables in the `:root` block at the top of `style.css`.
- **Content:** edit text directly in `index.html`.
- **Projects:** copy an `<article class="card">` block in the `#projects` section and update the title, description, tags and GitHub link.
- **Favicon:** replace `assets/Icon.jpeg` (keep the same filename or update the `<link rel="icon">` path).
- **Profile image:** replace `assets/Profile.svg` and update the `<img>` `src` in the hero section.

---

## 📬 Contact

- Email: [pavanbadiger@gmail.com](mailto:pavanbadiger@gmail.com)
- GitHub: [@Pavn31](https://github.com/Pavn31)
- LinkedIn: [pavn-badiger](https://www.linkedin.com/in/pavn-badiger/)

---

## 📄 License

This project is for personal use. Feel free to take inspiration, but please don't copy it as-is for your own portfolio.