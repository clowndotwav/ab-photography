# AB Photography — website

A single-page, interactive photography site for Adam Bridge (AB Photography).
Plain HTML, CSS and JavaScript — **no build step, no npm, no framework**.
Double-click `index.html` and it runs.

---

## ⚠️ Read this first: what's real and what isn't

This started as a design draft, so some content is **invented placeholder copy**.
Don't publish it as-is.

**Real and verified:**

- Phone `0451 328 542`
- ABN `22 167 097 329`
- Instagram `@ABPhotography2026` and the Facebook page
- The logo, the safety car photo, Adam's name, Perth WA

**Still invented — must be replaced or removed before launch:**

| What | Where |
|---|---|
| The whole About bio | `index.html` → About section |
| Camera bodies and lenses | `index.html` → the `kit` list (now says "Confirm before launch") |
| Every photo title, location, year and EXIF except the safety car | `data/gallery.js` |
| `hello@abphotography.com.au` | doesn't exist yet — see below |
| The three Services descriptions | `index.html` → Services section |

**The email is the live blocker.** `hello@abphotography.com.au` only works once
the domain is registered *and* forwarding is switched on (DEPLOY.md covers it).
If the site goes up before that, swap it for Adam's current address — it appears
in `index.html` three times and `js/app.js` once.

---

## 1. Opening it

**Quickest:** double-click `index.html`.

**In Visual Studio:** `File → Open → Web Site…` → pick this folder → `Ctrl+F5`.

**In VS Code** (nicer for this): open the folder, install the *Live Server*
extension, right-click `index.html` → **Open with Live Server**. Every save
refreshes the browser.

---

## 2. Adding the photos

Every tile shows a styled placeholder with the filename it's waiting for.
**To make a photo appear, save the image at that exact path.** That's the whole job.

```
images/
  wildlife/    wildlife-01.jpg … wildlife-06.jpg
  sports/      sports-01.jpg … sports-05.jpg
  motorsport/  motorsport-01.jpg … motorsport-06.jpg
  hero.jpg                (the big shot in the hero panel)
  about-portrait.jpg      (the About section)
  og-cover.jpg            (preview image when the link is shared)
  mark.png                (the AB monogram in the nav)
  favicon.png
```

Refresh and the placeholder swaps itself out. If a file is missing the
placeholder simply stays, so the site never looks half-built.

### Lightroom export settings

JPEG, sRGB, **quality 76–80, long edge 2000px**. That's roughly 400–700 KB —
sharp on a 4K screen, still quick to load. Bigger is wasted on a browser.

---

## 3. Adding, removing or re-labelling photos

Everything lives in **`data/gallery.js`** — one block per photo:

```js
{ src: "images/motorsport/motorsport-07.jpg", title: "Late Braking, Turn 6",
  cats: ["motorsport"], tag: "Supercars", loc: "Wanneroo Raceway", year: "2026",
  exif: { cam: "Canon R3", lens: "RF 400mm f/2.8", set: "1/250s · f/8 · ISO 200" } },
```

- `cats` — which tab(s) it appears under; a photo can be in more than one
- `tag` — the filter chip it sits under, must match a chip in `TABS` below
- `feat: true` — taller tile, stands out in the grid
- `exif` — optional, shows as chips in the full-screen viewer
- Leave `loc`, `year` or `exif` out entirely and they just don't render

Tabs and chips are defined in `TABS` at the bottom of the same file. Each tab's
`accent` is the colour the whole site shifts to when it's active.

---

## 4. Making the contact form collect enquiries

As written, the form validates then opens the visitor's email app with
everything pre-filled. Works everywhere, costs nothing, but some people have no
mail client set up.

To collect submissions properly (free tier is plenty):

1. Sign up at **formspree.io**, create a form, copy the endpoint URL
2. In `index.html`:
   ```html
   <form class="form reveal" id="contactForm" action="https://formspree.io/f/YOURID" method="POST">
   ```
3. In `js/app.js`, replace the `window.location.href = "mailto:…"` block with
   `form.submit();`

---

## 5. Going live

See **DEPLOY.md** — free hosting in 60 seconds, buying
`abphotography.com.au`, what it costs, and pointing one at the other.

---

## 6. What's in the box

```
index.html          the whole page — nav, hero, galleries, about, services, contact
css/styles.css      all styling, in 12 numbered sections
js/app.js           tabs, filters, grid, lightbox, form, scroll effects
data/gallery.js     >>> the file you edit to manage photos <<<
images/             photos and logo
DEPLOY.md           how to put it on the internet
```

### Behaviour worth knowing

- **Tabs recolour the site.** Wildlife green, Sports ice blue, Motorsport
  orange — glows, buttons and highlights all follow.
- **Lightbox**: click any tile. `←` `→` browse, `Esc` close, swipe on mobile.
  Only cycles through the photos currently filtered.
- **Keyboard accessible** — tabs respond to arrow keys, focus returns correctly
  when the viewer closes.
- **Respects reduced-motion**, works down to a 320px phone, prints cleanly.
