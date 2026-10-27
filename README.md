# Vinay Prabhu — Interactive Resume

Production: https://vinayprabhu.dev/

A responsive, standalone resume with animated introduction, scroll chapters, project filters, career and education timelines, AI workflow diagrams, and NearMint app-release infographics.

- `index.html`: current production site; no build step or runtime dependencies.
- `docs/Vinay_Prabhu_Resume.docx`: updated Word resume.
- `enchanted-previous.html`: previous 3D resume, preserved before redesign deployment.
- `classic.html`: original 2D portfolio.
- `CNAME`: custom domain configuration.
- `.nojekyll`: serve static files directly.

## Publishing

GitHub Pages publishes the `prod` branch root. The editable local source is `../enchanted-resume-3d.html`. Copy it to `index.html`, copy the current Word resume into `docs/`, validate, then commit and push to `prod`.

Desktop uses full-screen chapter transitions. Touch layouts allow natural scrolling through long chapters. Reduced motion, keyboard focus, and browser print-to-PDF are supported.
