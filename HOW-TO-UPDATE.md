# Updating the site once it's on Netlify

**Short answer to "can we edit it in Netlify?" — no, not the content.**
Netlify is a *host*, not an editor. Its dashboard handles domains, HTTPS,
deploy history and form submissions, but there is nowhere in it to type a new
caption or drop in a photo. You edit the files, Netlify serves them.

There are three ways to do that, from least to most setup.

---

## Option 1 — Drag the folder again (what you have now)

Edit the files on the PC → Netlify dashboard → your site → **Deploys** → drag
the folder onto the drop zone. Live in about five seconds.

- **Setup:** none, it already works
- **Good for:** occasional batches of photos
- **Annoying because:** you need the folder and that specific computer

---

## Option 2 — GitHub + Netlify (the sweet spot) ⭐

Put the folder in a free GitHub repo and connect it to Netlify once. After
that, **every change you save in GitHub redeploys the site automatically**,
usually within 30 seconds.

The part that matters for you: GitHub has a built-in web editor. You can open
`data/gallery.js` in any browser — including a phone — click the pencil icon,
add a photo block, hit *Commit*, and the site updates itself. Photos can be
uploaded by dragging them straight onto the `images/` folder page on github.com.

- **Setup:** ~20 minutes once (free GitHub account, push the folder, connect it
  in Netlify under *Add new site → Import an existing project*)
- **Good for:** everything, honestly
- **Bonus:** full version history, so a bad edit is one click to undo

---

## Option 3 — A proper admin login for Adam

A Git-based CMS gives him a real admin screen at `/admin`: log in, drag photos
in, type captions in form fields, hit publish. No code, no GitHub, no you.

Use **Sveltia CMS**, not the older Decap/Netlify CMS — Netlify Identity (the
login system Decap relied on) is being deprecated, whereas Sveltia
authenticates against GitHub directly and is actively maintained.

- **Setup:** a few hours, and it needs Option 2 in place first
- **Good for:** if Adam wants to manage his own photos without asking you
- **Worth it when:** he's adding photos most weeks, not twice a year

---

## Recommendation

Start with **Option 1** — it works today and costs nothing.

Move to **Option 2** as soon as the real photos land, because that's when
you'll be making lots of small edits and dragging a folder each time gets old
fast. It also means the site is backed up somewhere other than one PC.

Only build **Option 3** if Adam actually asks for it.
