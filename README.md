# Portfolio Website — Starter Template

A production-ready, fully responsive personal portfolio built with **HTML5, CSS3 and Vanilla JavaScript only** (no frameworks, no libraries). Designed as a clean starting point you can customize with your own name, photo, bio, and projects.

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file (all sections live here)
├── css/
│   └── style.css       # All styles, organized by section
├── js/
│   └── script.js       # All interactivity, organized by feature
├── assets/
│   ├── images/         # Put your profile photo & project screenshots here
│   ├── icons/          # Extra icons (optional — most icons are inline SVG)
│   └── favicon/        # Your favicon
└── README.md
```

## 🚀 Getting Started

No build tools or installation required.

1. Download / clone the `portfolio` folder.
2. Open `index.html` directly in your browser, **or** serve it locally for the best experience (recommended so relative paths & fonts behave exactly like production):
   ```bash
   # Using Python
   python3 -m http.server 8080

   # Using VS Code
   # Install the "Live Server" extension, then right-click index.html → "Open with Live Server"
   ```
3. Visit `http://localhost:8080` in your browser.

## ✏️ How to Customize

Everything is commented so you can find things fast. Look for section comments like `<!-- HERO SECTION -->` in `index.html` and `/* HERO */` in `style.css`.

| What to change | Where |
|---|---|
| Your name, title, bio | Hero, About and Footer sections in `index.html` |
| Profile picture | Replace the `.hero-photo-placeholder` div with `<img src="assets/images/profile.jpg" alt="Your Name">` |
| Social links (GitHub, LinkedIn, Email) | `href` attributes in the Hero and Contact sections |
| Technologies shown | Duplicate/remove `.tech-card` blocks in the Technologies section |
| Projects | Duplicate/remove `.project-card` blocks in the Projects section — each is self-contained and easy to copy |
| Project images | Replace the gradient `.project-thumb` div with an `<img>` tag pointing to `assets/images/` |
| Colors / theme | CSS variables at the top of `style.css` (`:root { ... }`) |
| Fonts | `<link>` tags in the `<head>` of `index.html` + `--font-display` / `--font-body` variables in `style.css` |

## 🎨 Design Tokens

All colors, spacing and radii are defined once as CSS custom properties in `css/style.css`:

```css
--color-bg: #071426;        /* Background */
--color-card: #0f1d35;      /* Cards */
--color-primary: #3b82f6;   /* Primary */
--color-secondary: #60a5fa; /* Secondary */
--color-accent: #f97316;    /* Accent */
--color-text: #ffffff;      /* Text */
--color-text-secondary: #b8c4d6; /* Secondary text */
```

Change a value once and it updates everywhere.

## ⚙️ Features

- Fixed, blurred (glassmorphism) navigation bar with active-section highlighting
- Fully responsive layout (desktop, laptop, tablet, mobile) — no horizontal scroll
- Hero, About, Technologies, Projects, Contact sections + Footer
- 8 interactive technology cards with hover effects
- 6 duplicable project cards with tags, GitHub and Live Demo links
- Smooth scrolling navigation with keyboard-accessible focus handling
- Scroll-triggered fade-in animations (`IntersectionObserver`)
- Mobile hamburger menu
- Back-to-top button
- Respects `prefers-reduced-motion`
- Semantic HTML, ARIA labels, visible focus states, good color contrast

## 🧩 Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Uses standard, well-supported CSS and JS features (`backdrop-filter` gracefully degrades to a solid background in browsers without support).

## 📄 License

Free to use and modify for your own personal portfolio.
