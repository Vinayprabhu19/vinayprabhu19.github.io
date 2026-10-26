# Vinay Prabhu — Interactive 3D Resume

Three.js side-scrolling resume, following the original Harry Potter-inspired journey through Bengaluru, Platform 9¾, experience, education, the hidden chamber, cloud gardens, projects, and contact.

Production domain: https://vinayprabhu.dev/

- `index.html`: standalone production bundle, including Three.js, procedural models, resume download, and project screenshot. No runtime dependencies or build step on GitHub Pages.
- `classic.html`: previous 2D portfolio, using the retained css, js, img, and fonts directories.
- `CNAME`: custom domain, vinayprabhu.dev.
- `.nojekyll`: serve the static files directly.

## Controls

Arrow keys / A and D, swipe, or touch arrows to travel. M opens chapters, R opens the resume, E opens a nearby project, W waves at a nearby character, and P opens photo mode. Audio is opt-in. Reduced-motion settings are respected.

## Publishing

GitHub Pages publishes the prod branch root. The editable source is in the local enchanted-resume project: run node build.cjs, then copy the resulting enchanted-resume-3d.html to this repository as index.html. Commit and push to prod.

## Domain setup

In Porkbun DNS, replace parking records for the apex and www with:

| Type | Host | Value |
| --- | --- | --- |
| A | @ / blank | 185.199.108.153 |
| A | @ / blank | 185.199.109.153 |
| A | @ / blank | 185.199.110.153 |
| A | @ / blank | 185.199.111.153 |
| CNAME | www | vinayprabhu19.github.io |

Preserve unrelated email and verification records. Porkbun may show the apex host as blank instead of @.

In repository Settings → Pages, confirm the source is prod / root, the custom domain is vinayprabhu.dev, then enable Enforce HTTPS after DNS verification and certificate issuance.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
