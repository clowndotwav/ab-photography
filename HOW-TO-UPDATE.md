# Updating the site

Everything on the site — photos, titles, the bio, the gear list, the services
cards — is now edited from the **admin centre**. You don't need GitHub Desktop,
you don't need to touch any code, and you can do it from any computer.

**<https://ab-photography.netlify.app/admin/>**

Bookmark that. Changes you save there go live in about a minute.

---

## One-off setup (do this once, then never again)

The admin centre signs in with a GitHub account so it can save changes to the
site. Two ways to do it — pick one.

### Option A — proper sign-in button (do this one)

1. Go to <https://github.com/settings/developers> → **OAuth Apps** →
   **New OAuth App**.
2. Fill it in:
   - **Application name:** `AB Photography Admin`
   - **Homepage URL:** `https://ab-photography.netlify.app`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
     ← this exact URL, it is not a typo
3. **Register application.** Copy the **Client ID**, then
   **Generate a new client secret** and copy that too.
4. In Netlify, open the site → **Project configuration** → **Security** →
   **OAuth** (*not* Identity) → **Authentication Providers** →
   **Install Provider** → **GitHub**. Paste the Client ID and secret.
5. Go to `/admin/` and click **Sign in with GitHub**. Done forever.

### Option B — if you want in right now

On the `/admin/` login screen there's a **Sign In with Token** button.

1. Go to <https://github.com/settings/tokens> → **Fine-grained tokens** →
   **Generate new token**.
2. Give it access to the `ab-photography` repository only, with
   **Contents: Read and write**.
3. Copy the token, paste it into the admin centre.

The token is stored in that browser only, so you'd repeat it on a new
computer. Option A is nicer long-term.

> Whoever signs in needs write access to the GitHub repository. Adam's
> account needs to be added as a collaborator before he can log in.

---

## Finding a photo

Open the admin centre → **Photos**. Every frame on the site is there as a
thumbnail, so you can see what you're editing rather than guess from a title.

- **Search** the box at the top by title.
- **Filter** to one tab — Wildlife, Ice hockey, Formula 1, Motorsport,
  Architecture.
- **Sort** by Position (the order they appear on the site), by Title, or by
  filename.

Click a photo to open it. Change what you need, **Save**, done.

## Adding a photo

1. Admin centre → **Photos** → **New Photo**.
2. **Photo** — drag the file in. Export it from Lightroom first at something
   web-sized: **2000px on the long edge, JPEG quality 80**. A full 45MB export
   will work but will make the page slow to load.
3. **Title** — what shows under the tile.
4. **Which tabs it appears on** — you can tick more than one.
5. **Position** — leave it blank to add the photo at the end of the gallery,
   or put `1` in to send it to the very front.
6. Open whichever of the three sections applies — **Ice hockey details**,
   **Formula 1 details**, **Everything else** — and fill in what you know.
   Everything in them is optional.
7. **Save**.

That's it. Netlify rebuilds on its own.

## Removing a photo

Open it and use **Delete** at the bottom of the form. The photo file itself
stays in the repository; only its entry goes, so nothing else breaks.

### The filter chips build themselves

You never edit a filter list. The chips on each tab are read from the photos:
type a new track, competition or class on a photo and a chip for it appears
the moment it's saved.

A chip row **hides itself when there's only one value in it** — filtering
between one option isn't a filter. So the Ice Hockey tab shows no Competition
row until there are photos from at least two competitions.

The one exception is the **Club** row on the Ice Hockey tab. It stays hidden
until someone picks Perth Womens Ice Hockey League, and then shows all seven
clubs whether or not any photo is tagged with them — each club has its own
page colours, and the chip is how you see them.

### What goes in each field

| Field | Which tab | Examples |
|---|---|---|
| **Subject / Class** | Wildlife | Mammals, Birds, Reptiles |
| | Motorsport | Supercars, Trans Am, Super Utes, Radicals, Motorbikes, Sidecars |
| | Architecture | Towers, Cityscape |
| **Competition** | Ice hockey | Perth Inferno, Perth Womens Ice Hockey League, IHWA Winter Season, Monday Night Scratch Games |
| **Club** | Ice hockey | Wolves, Scouts, Hellcats, Moose, Pandas, Bears, Rampage — picking one colours the whole page in that club's colours |
| **Series** | Formula 1 | F1, F2, F3, Historic F1, Safety Car |
| **Constructor** | Formula 1 | Ferrari, McLaren … plus Medical Car |
| **Driver** | Formula 1 | Surname only — Hamilton, Leclerc, Norris |
| **Track** | Formula 1 | Silverstone, Sepang |
| **Where** | any | Wanneroo Raceway, Perth Ice Arena |
| **Tall tile** | any | Portrait shots **only** — it crops the sides off a landscape frame |

**Driver:** read the number off the car. If you can't see it, leave it blank —
the photo still appears under its team, it just won't show up when someone
picks a driver chip. A wrong driver is worse than a blank one.

---

## Changing the bio, gear list or services

Admin centre → **Page text** → **About & Services**.

- **Bio** — leave a blank line between paragraphs. Wrap words in
  `**double asterisks**` to make them bold.
- **Gear list** — add, remove or reorder rows.
- **Service cards** — the three boxes under "Book the lens."

---

## If something looks wrong

**An edit didn't show up.** Give it a minute, then hard-refresh
(`Ctrl`+`Shift`+`R`). Netlify has to rebuild first — you can watch it happen
under **Deploys** in the Netlify dashboard.

**The admin centre shows a config error on the login screen.** Something in
`admin/config.yml` is malformed. Nothing is broken on the public site — it
keeps serving the last good version.

**A photo tile is blank.** The filename in the entry doesn't match a file that
exists. Re-pick the image in the admin centre.

---

## For developers

The site is plain HTML/CSS/JS with no build step.

| File | What it is |
|---|---|
| `data/gallery.json` | Every photo. Edited by the CMS. |
| `data/about.json` | Bio, gear list, services. Edited by the CMS. |
| `data/tabs.js` | The five tabs and which filter rows each one shows. **Not** CMS-edited — change it here to add a whole new tab or filter row. |
| `js/app.js` | Everything else. Fetches the two JSON files at boot. |
| `admin/config.yml` | What the admin centre can edit. |

Because the data is fetched with `fetch()`, **opening `index.html` straight
from disk won't work** — browsers block `fetch()` on `file://` URLs and you'll
get an empty gallery. To preview locally, serve the folder:

```sh
cd ab-photography
python3 -m http.server 8000
# then open http://localhost:8000
```
