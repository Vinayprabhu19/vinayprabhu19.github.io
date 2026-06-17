# CLAUDE.md — Project Context for Claude Code

## What this repo is

A Harry Potter-themed interactive resume website for Vinay Prabhu, deployed on GitHub Pages. It is a pure static site: no build step, no npm, no framework. The entire app is `index.html` + `css/style.css` + `js/script.js` + `js/swipe.js` + jQuery.

**Active branch:** `prod` (this is both the development and production branch — it deploys directly to GitHub Pages).

---

## Architecture at a glance

The page is a single wide `#container` div (~20,000px wide). All "scenes" are absolutely positioned children of that container. Navigation works by shifting every scene's `left` CSS property simultaneously on each keypress or swipe — there is no real scrolling.

```
#container (overflow: hidden, full viewport)
  ├── #scene1-container      — Home / intro
  ├── #scene1-bcontainer     — Parallax background layer (moves at 0.45× speed)
  ├── #level1                — About / personal info
  ├── #level1-p2             — Education & experience
  ├── #level2                — Skills (programming, design)  [lower vertical layer]
  ├── #level3                — Web / tech skills             [upper vertical layer]
  ├── #level4                — Projects
  ├── #finish                — Victory / contact
  ├── #ground-container      — Persistent ground/tile/bridge strip
  └── #vinay                 — Player character (fixed screen position)
```

Levels 2 and 3 exist on different vertical layers. The container scrolls vertically (via jQuery `.animate()` on `scrollTop`) when the player crosses the level 2 gate (going down) and again when crossing the level 3 gate (going back up). The character's `bottom` CSS value jumps accordingly.

---

## Key variables in `js/script.js`

| Variable | Purpose |
|----------|---------|
| `pos` | Running sum of horizontal distance travelled (pixels × factorW) |
| `factorW` | `screenWidth / 1920` — scales all distances to the current viewport |
| `factorH` | `screenWidth / 1080` (used for height scaling, note: uses width intentionally) |
| `finish` | Boolean; set `true` when the player reaches the end — freezes further movement |
| `instAnimation` | Boolean; prevents the education cards animation from replaying |
| `vb` | Tracks vertical layer (0 = normal, 1 = adjusted) |

---

## Movement model

Each `moveRight()` or `moveLeft()` call:
1. Increments/decrements `pos` by `100 * factorW`.
2. Shifts **every** scene div's `left` by `±100 * factorW` (scene1-bcontainer moves at `±45 * factorW` for parallax).
3. Checks `pos` ranges to drive secondary animations (train, car, Hagrid bike, education cards, character visibility).
4. Checks whether `#level2`, `#level3`, `#level4`, or `#finish` has crossed the `1000 * factorW` threshold and triggers level-transition side-effects (vertical scroll, character swap, win state).

Swipe events (from `js/swipe.js`) fire `moveRight()` or `moveLeft()` twice to give a bigger step per swipe.

---

## Character animation

`#vinay` cycles through CSS classes `vinay1`–`vinay10` (right-facing walk), `vinay6`–`vinay8` (left-facing walk), and `vinaywr` / `vanaywl` (win pose). Each class sets a different `background-image` pointing to `img/vinay/v*.png`. The cycle is driven by `setTimeout` chains inside `changeVinayPosRight()` and `changeVinayPosLeft()`.

In Level 4, `#vinay` is hidden and replaced by the `#hagrid-bike` element which swaps between `hagrid-bike1` and `hagrid-bike2` CSS classes (left/right-facing motorcycle sprites).

---

## Responsive behaviour

- All pixel distances are multiplied by `factorW` (`screenWidth / 1920`), so the layout scales to any viewport width.
- On portrait screens (`screenHeight > screenWidth`), clouds are repositioned to stay visible.
- On narrow screens (`screenWidth < 1300`), the name/banner positions are overridden.

---

## Editing guide

### Change personal info
Edit text content directly in `index.html` — look for `#DOB`, `#SM`, `#PU`, `#QL`, `#work1`, `#college1`, `#college2`, `#aggregate1`, `#aggregate2`.

### Change contact links
In `index.html`, find `#contactGmail` and `#contactLinkedIn` anchor tags and update the `href` attributes.

### Add a project
Add a new `<div id="new-project">` inside `#level4` in `index.html`, style it in `style.css` with `position: absolute` and appropriate `left`/`bottom` values relative to the level4 container.

### Change background images
Background images for skill sections are CSS `background` properties on `#programming-container`, `#design-container`, `#web1`, `#web2`. Update them in `style.css`.

### Adjust movement speed
Change the `100` multiplier in `moveRight()`/`moveLeft()` (line ~57–68 in `script.js`). Increasing it makes each keypress move further.

---

## Things to be careful about

- **`pos` is not pixel-accurate after scaling.** It accumulates `100 * factorW` per step, so all threshold comparisons in `script.js` must also be multiplied by `factorW` to be screen-size-correct. Some existing thresholds are inconsistent (e.g., lines 128–133 compare raw `pos` to `2400`/`3900` without factorW).
- **No build step** means changes go live after a simple `git push` to `prod`. Test locally with a static server before pushing.
- **jQuery `.animate()` on `scrollTop`** is used for the vertical level transitions — do not remove jQuery without replacing these calls.
- **`check1()` is defined but commented out** in the `$(document).ready` block. It's a debug helper that fast-forwards the player to Level 4.

---

## Deployment

GitHub Pages serves directly from the `prod` branch root. Push to `prod` to deploy. No CI, no workflow files.
