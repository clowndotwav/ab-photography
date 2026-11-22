/* ============================================================
   BUILD STEP — data/photos/*.json  ->  data/gallery.json
   ------------------------------------------------------------
   Every photo is its own small file so the admin centre can show
   them as a grid of thumbnails; a collection has to be one file
   per entry for Sveltia to do that. The site still reads a single
   data/gallery.json, so Netlify rebuilds it on every deploy.

   The per-photo files GROUP their fields (hockey / f1 / extra) to
   keep Adam's form short. gallery.json is FLAT. This script is the
   only thing that knows how to get from one to the other — if you
   change the shape in admin/config.yml, change it here too.

   It never fails the deploy. If data/photos is missing or empty,
   or a file is unreadable, it leaves the committed gallery.json
   alone and says so. A site that deploys slightly stale beats a
   site that doesn't deploy.
   ============================================================ */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT   = join(dirname(fileURLToPath(import.meta.url)), "..");
const PHOTOS = join(ROOT, "data", "photos");
const OUT    = join(ROOT, "data", "gallery.json");

/* The flat key order gallery.json has always used. Keeping it stable
   means a rebuild shows up as no diff at all when nothing changed. */
const ORDER = ["src", "title", "cats", "tag", "series", "comp", "team",
               "driver", "track", "session", "loc", "year", "feat",
               "alt", "wm", "exif"];

function flatten(entry) {
  const g = { ...(entry.hockey || {}), ...(entry.f1 || {}), ...(entry.extra || {}) };
  // `team` lives under hockey OR f1 — whichever section the photo used
  const merged = { ...g, src: entry.src, title: entry.title, cats: entry.cats };
  const out = {};
  for (const k of ORDER) if (merged[k] !== undefined && merged[k] !== "") out[k] = merged[k];
  return out;
}

async function main() {
  let names;
  try {
    names = (await readdir(PHOTOS)).filter(n => n.endsWith(".json"));
  } catch {
    console.warn("build-gallery: no data/photos directory — keeping the committed gallery.json");
    return;
  }
  if (!names.length) {
    console.warn("build-gallery: data/photos is empty — keeping the committed gallery.json");
    return;
  }

  const entries = [];
  for (const name of names.sort()) {
    try {
      const e = JSON.parse(await readFile(join(PHOTOS, name), "utf8"));
      if (!e || !e.src) { console.warn(`build-gallery: ${name} has no image, skipped`); continue; }
      entries.push({ ord: typeof e.ord === "number" ? e.ord : Number.MAX_SAFE_INTEGER, name, e });
    } catch (err) {
      console.warn(`build-gallery: ${name} could not be read (${err.message}), skipped`);
    }
  }

  if (!entries.length) {
    console.warn("build-gallery: nothing readable in data/photos — keeping the committed gallery.json");
    return;
  }

  // Position first; a photo added without one falls to the end, newest last.
  entries.sort((a, b) => a.ord - b.ord || a.name.localeCompare(b.name));

  const photos = entries.map(x => flatten(x.e));
  await writeFile(OUT, JSON.stringify({ photos }, null, 2) + "\n", "utf8");
  console.log(`build-gallery: wrote ${photos.length} photos to data/gallery.json`);
}

main().catch(err => {
  // Still not a deploy failure — say what happened and leave the file be.
  console.warn("build-gallery: " + err.message + " — keeping the committed gallery.json");
});
