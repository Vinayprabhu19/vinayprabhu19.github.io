# Vinay Prabhu — Interactive Resume

A Harry Potter-themed interactive resume/portfolio website built as a side-scrolling game. Instead of a traditional PDF, visitors navigate a pixelated world using arrow keys or swipe gestures, moving through levels that reveal education, skills, and projects.

**Live site:** [vinayprabhu19.github.io](https://vinayprabhu19.github.io)

---

## What it is

A single-page, zero-build-step static website hosted on GitHub Pages. The entire experience is one HTML file, one CSS file, two JS files (plus jQuery), and a folder of PNG/WOFF assets.

The player controls a character (Vinay) who walks right through four levels:

| Level | Theme | Content |
|-------|-------|---------|
| Home | Mountains & clouds | Instructions, name banner |
| Level 1 | Bangalore cityscape | DOB, personal traits, education, work experience |
| Level 2 | Hogwarts castle / Chamber | Programming skills, Design skills |
| Level 3 | Forest | Web scripting & programming |
| Level 4 | Flying motorcycle | Projects list |
| Finish | Victory screen | Contact links (Gmail, LinkedIn) |

---

## Controls

| Input | Action |
|-------|--------|
| `→` Right arrow key | Move forward |
| `←` Left arrow key | Move back |
| Swipe left | Move forward |
| Swipe right | Move back |

---

## Project structure

```
vinayprabhu19.github.io/
├── index.html          # Entire page structure — all scenes, levels, elements
├── css/
│   └── style.css       # All styling: layout, animations, character sprites, backgrounds
├── js/
│   ├── script.js       # Game logic: movement, position tracking, animations
│   ├── swipe.js        # Touch/swipe event detection for mobile
│   └── jquery-3.1.1.js # jQuery dependency
├── fonts/
│   ├── font1.woff      # Heading font (Harry Potter style)
│   ├── font2.woff      # Body font
│   ├── font3.woff      # Accent font
│   └── font4.woff      # Secondary accent font
└── img/
    ├── vinay/          # Character walk cycle: v1.png–v10.png, win-l.png, win-r.png
    └── *.png / *.jpg   # All backgrounds, characters, UI elements
```

---

## How to run locally

No build step needed. Open `index.html` directly in a browser:

```bash
# Option 1 — just open the file
open index.html

# Option 2 — serve locally (avoids any file:// quirks)
python -m http.server 8080
# then visit http://localhost:8080
```

---

## How to deploy

Push to the `prod` branch. GitHub Pages serves the site automatically from the repo root.

---

## Customising content

All visible content lives in `index.html`. Each section is a `<div>` with a descriptive `id`:

- Personal info: `#DOB`, `#SM`, `#PU`, `#QL` inside `#level1-bcontainer`
- Education: `#college1`, `#college2`, `#aggregate1`, `#aggregate2`
- Work: `#work1`
- Skills: `#programming`, `#design`, `#web`
- Projects: `#android`, `#python`, `#vector-art`, `#web-dev`, `#papers`, `#CSI`
- Contact links: `#contactGmail`, `#contactLinkedIn` (anchor `href` attributes in `#finish`)

Background images for skill sections are set via CSS on `#programming-container`, `#design-container`, `#web1`, `#web2`.

---

## Tech stack

- HTML5 / CSS3 / vanilla JavaScript
- jQuery 3.1.1 (DOM manipulation, `.animate()`)
- No framework, no bundler, no package manager
- GitHub Pages (static hosting)
