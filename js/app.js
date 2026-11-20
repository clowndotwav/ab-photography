/* =============================================================
   AB PHOTOGRAPHY — app.js
   Vanilla JS, no dependencies, no build step.
   ============================================================= */
(function () {
  "use strict";

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Photos were served for a while with "Cache-Control: immutable, max-age=1yr".
  // The filenames are stable but their CONTENTS were replaced (the watermark was
  // moved into the corner and switched to black on ice), so any browser that
  // loaded the site during that window is pinned to the OLD picture for a year
  // and will never re-ask. Changing the URL is the only way to reach those
  // browsers. Bump this token whenever the image files are reprocessed.
  const PHOTO_VER = "wm2";
  const photoURL = (src) => src + (src.indexOf("?") < 0 ? "?v=" : "&v=") + PHOTO_VER;

  let GALLERY      = [];    // filled from data/gallery.json at boot
  let activeTab    = TABS[0].id;
  let activeFilters = {};   // { filterKey: value } — "All" means no constraint
  let visible    = [];
  let lbIdx      = 0;

  const photosFor = (tabId) => GALLERY.filter(p => p.cats.includes(tabId));

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, m =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
  }

  /* ---------- ACCENT: the whole site recolours per tab ---------- */
  function setAccent(hsl) {
    const [h, s, l] = hsl.split(" ");
    const r = document.documentElement.style;
    r.setProperty("--accent-h", h);
    r.setProperty("--accent-s", s);
    r.setProperty("--accent-l", l);
  }

  /* ---------- TEAM COLOURS ----------
     If any active chip names a team in FILTER_THEMES, the chrome
     takes that team's colours. The grid is deliberately left alone.
     Falls back to the tab's own accent the moment the chip is
     cleared, the tab changes, or the value has no theme. */
  /* Embers. Built once per theme change and torn down the moment the
     chip clears, so nothing animates when no team is selected. Anyone
     who has asked for reduced motion gets none at all. */
  /* A narrow screen gets fewer: eighty flakes is two animations each,
     and phones are where that bites. */
  const emberCount = (shaped) => (window.innerWidth < 720 ? (shaped ? 18 : 34)
                                                   : (shaped ? 44 : 80));

  function setEmbers(theme, key) {
    let layer = $(".embers");
    if (!theme || !theme.embers || reduceMotion) {
      if (layer) layer.remove();
      return;
    }
    // Rebuild when the TEAM changes — the flakes carry that team's
    // colours and shape, so leaving the old layer up would keep Wolves
    // yellow drifting over a Moose page. Same team, leave it running.
    if (layer && layer.dataset.theme === key) return;
    if (layer) layer.remove();
    layer = document.createElement("div");
    layer.className = "embers";
    layer.dataset.theme = key;
    layer.setAttribute("aria-hidden", "true");

    const rnd = (lo, hi) => lo + Math.random() * (hi - lo);

    /* Paw prints and a dog bone, as masks. Inline so there is no extra
       request and the shape can still be tinted per flake. */
    const svg = (body, vb) => "url(\"data:image/svg+xml;utf8," +
      encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' viewBox='" + vb +
        "' fill='black'>" + body + "</svg>") + "\")";
    const PAW = svg("<ellipse cx='12' cy='16.5' rx='6.2' ry='5.2'/>" +
                    "<ellipse cx='4.6' cy='9.6' rx='2.7' ry='3.2'/>" +
                    "<ellipse cx='9.6' cy='5.6' rx='2.7' ry='3.3'/>" +
                    "<ellipse cx='15' cy='5.6' rx='2.7' ry='3.3'/>" +
                    "<ellipse cx='19.8' cy='9.9' rx='2.7' ry='3.2'/>", "0 0 24 24");
    const BONE = svg("<rect x='7' y='5.6' width='18' height='4.8' rx='2.4'/>" +
                     "<circle cx='6.4' cy='5.2' r='3.9'/><circle cx='6.4' cy='10.8' r='3.9'/>" +
                     "<circle cx='25.6' cy='5.2' r='3.9'/><circle cx='25.6' cy='10.8' r='3.9'/>",
                     "0 0 32 16");
    const shaped = theme.shape === "paws";

    const frag = document.createDocumentFragment();
    for (let i = 0; i < emberCount(shaped); i++) {
      const e = document.createElement("span");
      e.className = "ember";
      // shapes need room to be legible; slivers do not
      const w = shaped ? rnd(8, 16) : rnd(1.6, 4);
      e.style.setProperty("--x",     rnd(-2, 100).toFixed(2) + "vw");
      e.style.setProperty("--w",     w.toFixed(1) + "px");
      e.style.setProperty("--h",     (shaped ? w : w * rnd(1.2, 3.2)).toFixed(1) + "px");
      e.style.setProperty("--o",     rnd(0.45, 1).toFixed(2));
      e.style.setProperty("--drift", rnd(-11, 11).toFixed(1) + "vw");
      e.style.setProperty("--d",     rnd(12, 32).toFixed(1) + "s");
      e.style.setProperty("--delay", (-rnd(0, 32)).toFixed(1) + "s");

      const flake = document.createElement("i");
      // two thirds in the warmer colour: it reads as fire, not confetti
      flake.style.setProperty("--c", Math.random() < 0.66 ? theme.b : theme.a);
      // shapes read better turning slowly — a spinning paw is a blur
      flake.style.setProperty("--spin", (shaped ? rnd(9, 20) : rnd(2.4, 8)).toFixed(1) + "s");
      if (shaped) {
        e.classList.add("is-shaped");
        const paw = Math.random() < 0.62;
        flake.style.setProperty("--shape", paw ? PAW : BONE);
        if (!paw) e.style.setProperty("--h", (w * 0.5).toFixed(1) + "px");  // bones are wide
      }
      // half tumble the other way, so they do not all turn together
      if (Math.random() < 0.5) flake.style.animationDirection = "reverse";
      flake.style.animationDelay = (-rnd(0, 8)).toFixed(1) + "s";

      e.appendChild(flake);
      frag.appendChild(e);
    }
    layer.appendChild(frag);
    document.body.appendChild(layer);
  }

  function applyFilterTheme(meta) {
    const themes = (typeof FILTER_THEMES !== "undefined") ? FILTER_THEMES : {};
    const hit = Object.keys(activeFilters)
      .map(k => activeFilters[k])
      .find(v => v && v !== "All" && themes[v]);
    const r = document.documentElement.style;

    if (!hit) {
      r.removeProperty("--team-a");
      r.removeProperty("--team-b");
      document.body.classList.remove("has-team");
      setEmbers(null, null);
      if (meta) setAccent(meta.accent);
      return;
    }
    const t = themes[hit];
    r.setProperty("--team-a", t.a);
    r.setProperty("--team-b", t.b);
    setAccent(t.accent || t.a);
    document.body.classList.add("has-team");
    setEmbers(t, hit);
  }

  /* ---------- TABS ---------- */
  const tabsEl = $("#tabs");
  const pillEl = $("#tabPill");

  function buildTabs() {
    TABS.forEach((t, i) => {
      const b = document.createElement("button");
      b.className = "tab";
      b.type = "button";
      b.setAttribute("role", "tab");
      b.id = "tab-" + t.id;
      b.dataset.tab = t.id;
      b.setAttribute("aria-selected", i === 0 ? "true" : "false");
      b.tabIndex = i === 0 ? 0 : -1;
      b.innerHTML = t.label + '<span class="tab-count">' + photosFor(t.id).length + "</span>";
      b.addEventListener("click", () => selectTab(t.id));
      tabsEl.appendChild(b);
    });

    tabsEl.addEventListener("keydown", (e) => {
      const keys = { ArrowLeft: -1, ArrowRight: 1 };
      if (!(e.key in keys)) return;
      e.preventDefault();
      const ids = TABS.map(t => t.id);
      const next = ids[(ids.indexOf(activeTab) + keys[e.key] + ids.length) % ids.length];
      selectTab(next);
      $("#tab-" + next).focus();
    });
  }

  function movePill() {
    const btn = $('.tab[data-tab="' + activeTab + '"]');
    if (!btn) return;
    pillEl.style.width = btn.offsetWidth + "px";
    pillEl.style.transform = "translateX(" + btn.offsetLeft + "px)";
  }

  function selectTab(id) {
    activeTab = id;
    const meta = TABS.find(t => t.id === id);
    activeFilters = {};
    filtersFor(meta).forEach(f => { activeFilters[f.key] = "All"; });

    $$(".tab").forEach(b => {
      const on = b.dataset.tab === id;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
    });

    setAccent(meta.accent);
    $("#tabBlurb").textContent = meta.blurb;
    movePill();
    buildFilters(meta);
    renderGrid();
  }

  /* ---------- FILTER DEFINITIONS ----------
     A tab declares `filters: [{ key, label, order? }]`. Chip values are read
     from the photos themselves, so adding a photo with a new circuit or
     session makes its chip appear automatically — nothing else to edit.
     Tabs with no `filters` fall back to a single row of `tag` chips. */
  function filtersFor(meta) {
    return meta.filters && meta.filters.length
      ? meta.filters
      : [{ key: "tag", label: "Subject" }];
  }

  function valuesFor(key, photos, order) {
    const seen = [];
    photos.forEach(p => { const v = p[key]; if (v && seen.indexOf(v) === -1) seen.push(v); });
    if (order && order.length) {
      seen.sort((a, b) => {
        const ia = order.indexOf(a), ib = order.indexOf(b);
        return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
      });
    } else {
      seen.sort((a, b) => String(b).localeCompare(String(a), undefined, { numeric: true }));
    }
    return seen;
  }

  /* The filter rows cascade: a row offers values drawn from the photos
     left by the rows ABOVE it, never by the rows below. Pick F2 and the
     Team row stops offering Ferrari, because Team sits under Series.

     Deliberately one-directional. Narrowing in both directions sounds
     tidier but traps you: picking Ferrari would leave Series with only
     "F1" to offer, the row would hide itself for having nothing to
     choose between, and there would be no way back to F2 without
     clearing everything. Rows are listed in tabs.js widest first. */
  function photosAbove(meta, defs, upto) {
    const keys = defs.slice(0, upto).map(d => d.key);
    return photosFor(meta.id).filter(p =>
      keys.every(k => {
        const want = activeFilters[k];
        return !want || want === "All" || p[k] === want;
      })
    );
  }

  /* ---------- FILTER CHIP ROWS ---------- */
  function buildFilters(meta, focusKey, focusValue) {
    const wrap = $("#chips");
    wrap.innerHTML = "";
    const defs = filtersFor(meta);

    /* Clear any selection the rows above have just made impossible, or
       picking F2 would leave Team on Ferrari and the grid empty. Top
       down in one pass, since each row only depends on the ones above. */
    defs.forEach((def, i) => {
      const v = activeFilters[def.key];
      if (v && v !== "All" &&
          valuesFor(def.key, photosAbove(meta, defs, i), def.order).indexOf(v) === -1) {
        activeFilters[def.key] = "All";
      }
    });

    defs.forEach((def, i) => {
      const values = valuesFor(def.key, photosAbove(meta, defs, i), def.order);
      if (values.length < 2) return;            // a lone value filters nothing

      const row = document.createElement("div");
      row.className = "chip-row";
      row.dataset.key = def.key;

      const label = document.createElement("span");
      label.className = "chip-label";
      label.textContent = def.label || def.key;
      row.appendChild(label);

      ["All"].concat(values).forEach(v => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "chip" + (v === "All" ? " chip-all" : "")
                    + (activeFilters[def.key] === v ? " is-on" : "");
        b.textContent = v;
        b.setAttribute("aria-pressed", activeFilters[def.key] === v ? "true" : "false");
        b.addEventListener("click", () => {
          activeFilters[def.key] = v;
          // the other rows have to react, so rebuild rather than retint
          buildFilters(meta, def.key, v);
          renderGrid();
        });
        row.appendChild(b);
      });

      wrap.appendChild(row);
    });

    // a reset that only appears once something is actually narrowed
    const reset = document.createElement("button");
    reset.type = "button";
    reset.id = "filterReset";
    reset.className = "chip chip-reset";
    reset.textContent = "Clear filters";
    reset.addEventListener("click", () => selectTab(activeTab));
    wrap.appendChild(reset);
    syncReset();
    applyFilterTheme(meta);

    // the rebuild replaced the chip that was just clicked — put focus back
    if (focusKey) {
      const again = $$(".chip", wrap).filter(c => {
        const r = c.closest(".chip-row");
        return r && r.dataset.key === focusKey && c.textContent === focusValue;
      })[0];
      if (again) again.focus();
    }
  }

  function activeCount() {
    return Object.keys(activeFilters).filter(k => activeFilters[k] && activeFilters[k] !== "All").length;
  }

  function syncReset() {
    const r = $("#filterReset");
    if (r) r.classList.toggle("is-shown", activeCount() > 0);
  }

  /* ---------- GRID ---------- */
  const gridEl = $("#grid");

  function placeholder(p) {
    return '<div class="ph"><span class="ph-note">' +
           esc(p.src.replace(/^images\//, "")) + "</span></div>";
  }

  function renderGrid() {
    const list = photosFor(activeTab).filter(p =>
      Object.keys(activeFilters).every(k => {
        const want = activeFilters[k];
        return !want || want === "All" || p[k] === want;
      })
    );
    visible = list;
    gridEl.innerHTML = "";
    syncReset();
    const counter = $("#gridCount");
    if (counter) counter.textContent = list.length + (list.length === 1 ? " frame" : " frames");

    if (!list.length) {
      const active = Object.keys(activeFilters)
        .filter(k => activeFilters[k] && activeFilters[k] !== "All")
        .map(k => activeFilters[k]);
      gridEl.innerHTML = '<p class="empty">Nothing filed under ' +
        (active.length ? '&ldquo;' + esc(active.join(" + ")) + '&rdquo;' : "this tab") + ' yet.</p>';
      return;
    }

    list.forEach((p, i) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card" + (p.feat ? " is-feat" : "");
      card.setAttribute("aria-label", "Open " + p.title + " full screen");

      card.innerHTML =
        '<div class="card-media' + (p.ar ? " has-ratio" : "") + '"' +
             (p.ar ? ' style="--ar:' + esc(p.ar) + '"' : "") + ">" +
          '<span class="card-badge">' + esc(p.tag || p.team || p.session || "") + "</span>" +
          '<span class="card-expand" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>' +
          "</span>" +
          placeholder(p) +
          (p.wm ? "" : '<span class="wm-overlay" aria-hidden="true"></span>') +
        "</div>" +
        '<div class="card-body">' +
          '<span class="card-title">' + esc(p.title) + "</span>" +
          '<span class="card-meta">' +
            ((p.loc || p.track) ? "<span>" + esc(p.loc || p.track) + "</span>" : "") +
            (p.year ? "<span><i>" + esc(p.year) + "</i></span>" : "") +
          "</span>" +
        "</div>";

      if (p.src) {
        const img = new Image();
        img.alt = p.alt || p.title;
        img.decoding = "async";
        const fitMedia = () => {
          if (p.ar || !img.naturalWidth) return;
          const box = card.querySelector(".card-media");
          if (!box || card.classList.contains("is-feat")) return;
          box.style.setProperty("--ar", img.naturalWidth + " / " + img.naturalHeight);
          box.classList.add("has-ratio");
        };

        const swapIn = () => {
          // the grid may have re-rendered while this was loading
          if (!card.isConnected) return;
          const media = $(".card-media", card);
          if (!media || $("img", media)) return;
          const ph = $(".ph", media);
          if (ph) ph.remove();
          media.appendChild(img);
        };

        img.addEventListener("load", swapIn);          // listener BEFORE src
        img.src = photoURL(p.src);
        if (img.complete && img.naturalWidth) swapIn(); // already cached
      }

      card.addEventListener("click", () => openLightbox(i));
      gridEl.appendChild(card);

      if (reduceMotion) card.classList.add("is-in");
      else setTimeout(() => card.classList.add("is-in"), 40 * Math.min(i, 12));
    });
  }

  /* ---------- LIGHTBOX ---------- */
  const lb = $("#lightbox");
  let lastFocus = null;

  function openLightbox(i) {
    lastFocus = document.activeElement;
    lbIdx = i;
    lb.classList.add("is-open");
    document.body.classList.add("is-locked");
    paintLightbox();
    $("#lbClose").focus();
  }

  function closeLightbox() {
    lb.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    if (lastFocus) lastFocus.focus();
  }

  function step(dir) {
    if (!visible.length) return;
    lbIdx = (lbIdx + dir + visible.length) % visible.length;
    paintLightbox();
  }

  function paintLightbox() {
    const p = visible[lbIdx];
    if (!p) return;

    $("#lbIndex").textContent = lbIdx + 1;
    $("#lbTotal").textContent = visible.length;
    $("#lbTitle").textContent = p.title;
    $("#lbLoc").textContent   = [p.loc || p.track, p.year].filter(Boolean).join(" · ");

    const fig = $("#lbFigure");
    // A photo whose file already carries a watermark (p.wm) gets nothing extra;
    // anything else — notably photos added later through /admin — gets the mark
    // drawn over it so nothing is ever shown unmarked.
    fig.classList.toggle("has-wm-overlay", !p.wm);
    fig.innerHTML =
      '<div class="lb-ph">' +
        '<span class="ph-title">' + esc(p.title) + "</span>" +
        '<span class="ph-note">' + esc(p.src) + "</span>" +
      "</div>";

    if (p.src) {
      const img = new Image();
      img.alt = p.alt || p.title;
      const show = () => { if (visible[lbIdx] === p) { fig.innerHTML = ""; fig.appendChild(img); } };
      img.addEventListener("load", show);
      img.src = photoURL(p.src);
      if (img.complete && img.naturalWidth) show();
    }

    const ex = p.exif || {};
    $("#lbExif").innerHTML = [
      // context first — session is no longer a filter, but it's worth knowing
      p.series && p.series !== "F1"
                ? "<span>Series <b>"   + esc(p.series)  + "</b></span>" : "",
      p.team    ? "<span>Team <b>"     + esc(p.team)    + "</b></span>" : "",
      p.driver  ? "<span>Driver <b>"   + esc(p.driver)  + "</b></span>" : "",
      p.comp    ? "<span>Comp <b>"     + esc(p.comp)    + "</b></span>" : "",
      p.session ? "<span>Session <b>"  + esc(p.session) + "</b></span>" : "",
      ex.cam    ? "<span>Body <b>"     + esc(ex.cam)    + "</b></span>" : "",
      ex.lens   ? "<span>Lens <b>"     + esc(ex.lens)   + "</b></span>" : "",
      ex.set    ? "<span>Exposure <b>" + esc(ex.set)    + "</b></span>" : ""
    ].join("");

    [visible[lbIdx + 1], visible[lbIdx - 1]].forEach(n => { if (n && n.src) new Image().src = photoURL(n.src); });
  }

  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => step(-1));
  $("#lbNext").addEventListener("click", () => step(1));
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.classList.contains("lb-stage")) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft")  step(-1);
  });

  let touchX = null;
  lb.addEventListener("touchstart", e => { touchX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", e => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 55) step(dx < 0 ? 1 : -1);
    touchX = null;
  }, { passive: true });

  /* ---------- NAV / SCROLL ---------- */
  const nav = $("#nav"), navLinks = $("#navLinks"), navToggle = $("#navToggle");
  const progress = $("#progress"), toTop = $("#toTop");

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  $$("#navLinks a").forEach(a => a.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));

  toTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));

  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("is-stuck", y > 20);
    toTop.classList.toggle("is-on", y > 600);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", movePill);

  const navObs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      $$("#navLinks a").forEach(a =>
        a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["work", "about", "services", "contact"].forEach(id => {
    const el = document.getElementById(id); if (el) navObs.observe(el);
  });

  const revealObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-in");
      obs.unobserve(en.target);
    });
  }, { threshold: 0.12 });

  // Called again after the services cards are injected from about.json, so
  // late-arriving .reveal elements still animate in.
  function observeReveals() {
    $$(".reveal").forEach(el => {
      if (!el.classList.contains("is-in")) revealObs.observe(el);
    });
  }
  observeReveals();

  /* ---------- TICKER ---------- */
  const words = ["Wildlife", "Formula 1", "Ice Hockey", "Supercars", "Motorbikes",
                 "Rally", "Birds of Prey", "Trackside", "Perth WA", "Prints & Licensing"];
  $("#ticker").innerHTML = ("<span>" + words.join("</span><span>") + "</span>").repeat(2);

  /* ---------- CONTACT FORM ---------- */
  const form = $("#contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;

    [["#fName",  v => v.trim().length > 1],
     ["#fEmail", v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())],
     ["#fMsg",   v => v.trim().length > 4]
    ].forEach(([sel, test]) => {
      const input = $(sel), field = input.closest(".field");
      const good = test(input.value);
      field.classList.toggle("has-error", !good);
      if (!good && ok) { input.focus(); ok = false; }
    });

    if (!ok) return;

    // No backend on a static site — this opens the visitor's mail client with
    // everything pre-filled. To collect submissions properly, see README §6.
    const d = new FormData(form);
    const body = [
      "Name: "  + d.get("name"),
      "Email: " + d.get("email"),
      "Type: "  + d.get("type"),
      "Date: "  + (d.get("date") || "not set"),
      "",
      d.get("message")
    ].join("\n");

    window.location.href = "mailto:djadambridge@gmail.com"
      + "?subject=" + encodeURIComponent("Shoot enquiry — " + d.get("type"))
      + "&body=" + encodeURIComponent(body);

    const status = $("#formStatus");
    status.textContent = "Opening your email app with the enquiry ready to send. If nothing happens, call 0451 328 542.";
    status.classList.add("is-on");
    form.reset();
  });

  $$(".field input, .field textarea").forEach(el =>
    el.addEventListener("input", () => el.closest(".field").classList.remove("has-error")));

  /* ---------- CONTENT FROM data/about.json ----------
     The bio, kit list and services are loaded rather than hardcoded, so the
     admin centre at /admin can edit them without anyone touching HTML. */
  function mdInline(t) {
    // the only markup the bio needs: **bold**
    return esc(t).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function renderAbout(data) {
    const a = data && data.about;
    if (a) {
      if (a.eyebrow) $("#aboutEyebrow").textContent = a.eyebrow;
      const h = $("#aboutHeading");
      if (h && a.heading) h.innerHTML = a.heading.split("\n").map(esc).join("<br>");
      const bio = $("#aboutBio");
      if (bio && a.bio) {
        bio.innerHTML = a.bio.split(/\n{2,}/)
          .map(par => "<p>" + mdInline(par.trim()) + "</p>").join("");
      }
      const kit = $("#aboutKit");
      if (kit && Array.isArray(a.kit)) {
        kit.innerHTML = a.kit.map(r =>
          '<div class="kit-row"><dt>' + esc(r.label) + "</dt><dd>" +
          esc(r.value) + "</dd></div>").join("");
      }
    }

    const sv = data && data.services;
    if (sv) {
      if (sv.eyebrow) $("#svcEyebrow").textContent = sv.eyebrow;
      if (sv.heading) $("#svcHeading").textContent = sv.heading;
      if (sv.intro)   $("#svcIntro").textContent   = sv.intro;
      const list = $("#svcList");
      if (list && Array.isArray(sv.items)) {
        list.innerHTML = sv.items.map(it =>
          '<article class="svc reveal"><span class="svc-num">' + esc(it.num) +
          "</span><h3>" + esc(it.title) + "</h3><p>" + esc(it.body) +
          "</p></article>").join("");
      }
    }
  }

  /* ---------- BOOT ---------- */
  function start() {
    $("#year").textContent = new Date().getFullYear();
    buildTabs();
    selectTab(TABS[0].id);
    observeReveals();
    onScroll();
    window.addEventListener("load", movePill);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(movePill);
  }

  function loadJSON(url) {
    return fetch(url, { cache: "no-cache" }).then(r => {
      if (!r.ok) throw new Error(url + " -> HTTP " + r.status);
      return r.json();
    });
  }

  Promise.all([
    loadJSON("data/gallery.json").catch(e => { console.error(e); return { photos: [] }; }),
    loadJSON("data/about.json").catch(e => { console.error(e); return null; })
  ]).then(([g, about]) => {
    GALLERY = (g && g.photos) || [];
    if (about) renderAbout(about);
    start();
    if (!GALLERY.length) {
      console.warn("No photos loaded. If you opened index.html straight from disk, " +
                   "the browser blocks fetch() on file:// URLs — run a local server " +
                   "instead (see HOW-TO-UPDATE.md).");
    }
  });
})();
