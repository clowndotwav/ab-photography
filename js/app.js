/* =============================================================
   AB PHOTOGRAPHY — app.js
   Vanilla JS, no dependencies, no build step.
   ============================================================= */
(function () {
  "use strict";

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let activeTab  = TABS[0].id;
  let activeChip = "All";
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
    activeTab  = id;
    activeChip = "All";
    const meta = TABS.find(t => t.id === id);

    $$(".tab").forEach(b => {
      const on = b.dataset.tab === id;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
    });

    setAccent(meta.accent);
    $("#tabBlurb").textContent = meta.blurb;
    movePill();
    buildChips(meta.chips);
    renderGrid();
  }

  /* ---------- FILTER CHIPS ---------- */
  function buildChips(chips) {
    const wrap = $("#chips");
    wrap.innerHTML = "";
    chips.forEach(c => {
      const b = document.createElement("button");
      b.className = "chip" + (c === activeChip ? " is-on" : "");
      b.type = "button";
      b.textContent = c;
      b.setAttribute("aria-pressed", c === activeChip ? "true" : "false");
      b.addEventListener("click", () => {
        activeChip = c;
        $$(".chip", wrap).forEach(x => {
          const on = x.textContent === c;
          x.classList.toggle("is-on", on);
          x.setAttribute("aria-pressed", on ? "true" : "false");
        });
        renderGrid();
      });
      wrap.appendChild(b);
    });
  }

  /* ---------- GRID ---------- */
  const gridEl = $("#grid");

  function placeholder(p) {
    return '<div class="ph"><span class="ph-note">' +
           esc(p.src.replace(/^images\//, "")) + "</span></div>";
  }

  function renderGrid() {
    const list = photosFor(activeTab).filter(p => activeChip === "All" || p.tag === activeChip);
    visible = list;
    gridEl.innerHTML = "";

    if (!list.length) {
      gridEl.innerHTML = '<p class="empty">No frames filed under &ldquo;' + esc(activeChip) + '&rdquo; yet.</p>';
      return;
    }

    list.forEach((p, i) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card" + (p.feat ? " is-feat" : "");
      card.setAttribute("aria-label", "Open " + p.title + " full screen");

      card.innerHTML =
        '<div class="card-media">' +
          '<span class="card-badge">' + esc(p.tag) + "</span>" +
          '<span class="card-expand" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>' +
          "</span>" +
          placeholder(p) +
        "</div>" +
        '<div class="card-body">' +
          '<span class="card-title">' + esc(p.title) + "</span>" +
          '<span class="card-meta">' +
            (p.loc  ? "<span>" + esc(p.loc) + "</span>" : "") +
            (p.year ? "<span><i>" + esc(p.year) + "</i></span>" : "") +
          "</span>" +
        "</div>";

      if (p.src) {
        const img = new Image();
        img.alt = p.alt || p.title;
        img.decoding = "async";

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
        img.src = p.src;
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
    $("#lbLoc").textContent   = [p.loc, p.year].filter(Boolean).join(" · ");

    const fig = $("#lbFigure");
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
      img.src = p.src;
      if (img.complete && img.naturalWidth) show();
    }

    const ex = p.exif || {};
    $("#lbExif").innerHTML = [
      ex.cam  ? "<span>Body <b>"     + esc(ex.cam)  + "</b></span>" : "",
      ex.lens ? "<span>Lens <b>"     + esc(ex.lens) + "</b></span>" : "",
      ex.set  ? "<span>Exposure <b>" + esc(ex.set)  + "</b></span>" : ""
    ].join("");

    [visible[lbIdx + 1], visible[lbIdx - 1]].forEach(n => { if (n && n.src) new Image().src = n.src; });
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
  $$(".reveal").forEach(el => revealObs.observe(el));

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

    window.location.href = "mailto:hello@abphotography.com.au"
      + "?subject=" + encodeURIComponent("Shoot enquiry — " + d.get("type"))
      + "&body=" + encodeURIComponent(body);

    const status = $("#formStatus");
    status.textContent = "Opening your email app with the enquiry ready to send. If nothing happens, call 0451 328 542.";
    status.classList.add("is-on");
    form.reset();
  });

  $$(".field input, .field textarea").forEach(el =>
    el.addEventListener("input", () => el.closest(".field").classList.remove("has-error")));

  /* ---------- BOOT ---------- */
  $("#year").textContent = new Date().getFullYear();
  buildTabs();
  selectTab(TABS[0].id);
  onScroll();
  window.addEventListener("load", movePill);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(movePill);
})();
