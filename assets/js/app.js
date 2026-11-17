/* MEL Consultant portfolio — interactive behaviour. Content lives in data.js */
(() => {
  const P = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const isPlaceholder = v => !v || /^\[.*\]$/.test(v);
  const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
  const charts = {};

  /* ---------- Theme ---------- */
  const store = { get(k) { try { return localStorage.getItem(k); } catch { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch {} } };
  const saved = store.get("theme");
  if (saved) document.documentElement.dataset.theme = saved;
  else if (matchMedia("(prefers-color-scheme: light)").matches) document.documentElement.dataset.theme = "light";
  $("#themeBtn").addEventListener("click", () => {
    const t = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = t; store.set("theme", t);
    refreshCharts(); setTiles();
  });

  /* ---------- Nav, progress, menu ---------- */
  const nav = $("#nav"), prog = $("#progress");
  const sections = $$("main section[id]");
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    prog.style.width = (scrollY / max * 100) + "%";
    let cur = "";
    sections.forEach(s => { if (scrollY >= s.offsetTop - 140) cur = s.id; });
    $$(".nav-links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  $("#menuBtn").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  $$(".nav-links a").forEach(a => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));

  /* ---------- Hero ---------- */
  $("#heroName").textContent = P.person.name;
  $("#heroSummary").textContent = P.person.summary;
  $("#loc").textContent = P.person.location;
  if (P.person.availability) $("#avail").textContent = P.person.availability;
  if (P.donorsLabel) $("#donorsLabel").textContent = P.donorsLabel;
  $("#cvBtn").href = P.person.cv;
  $("#year").textContent = new Date().getFullYear();

  // typing effect
  (function type() {
    const el = $("#typed"); let r = 0, i = 0, del = false;
    (function tick() {
      const word = P.person.roles[r];
      el.textContent = word.slice(0, i);
      if (!del && i < word.length) i++;
      else if (del && i > 0) i--;
      else if (!del) { del = true; return setTimeout(tick, 1600); }
      else { del = false; r = (r + 1) % P.person.roles.length; }
      setTimeout(tick, del ? 40 : 85);
    })();
  })();

  // KPI cards with count-up
  const kpiWrap = $("#kpis");
  P.kpis.forEach(k => kpiWrap.append(h("div", "kpi", `<b data-to="${k.value}" data-pre="${k.prefix || ""}" data-suf="${k.suffix}">${k.prefix || ""}0${k.suffix}</b><span>${k.label}</span>${k.src ? `<small>${k.src}</small>` : ""}`)));
  const countUp = el => {
    const to = +el.dataset.to, pre = el.dataset.pre || "", suf = el.dataset.suf, t0 = performance.now(), dur = 1600;
    (function step(t) {
      const p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(to * e).toLocaleString() + suf;
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  };

  // donors marquee (list repeated for a seamless loop)
  const dTrack = $("#donors");
  [...P.donors, ...P.donors].forEach(d => dTrack.append(h("span", null, d)));

  // animated data-network background
  (function network() {
    const c = $("#heroCanvas"), ctx = c.getContext("2d");
    let W, H, pts = [], mouse = { x: -999, y: -999 };
    const resize = () => {
      W = c.width = c.offsetWidth * devicePixelRatio; H = c.height = c.offsetHeight * devicePixelRatio;
      const n = Math.min(90, Math.floor(c.offsetWidth / 16));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4 }));
    };
    c.parentElement.addEventListener("mousemove", e => { const r = c.getBoundingClientRect(); mouse = { x: (e.clientX - r.left) * devicePixelRatio, y: (e.clientY - r.top) * devicePixelRatio }; });
    addEventListener("resize", resize); resize();
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    (function draw() {
      ctx.clearRect(0, 0, W, H);
      const a = css("--accent"), link = 130 * devicePixelRatio;
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 150 * devicePixelRatio) { p.x += (p.x - mouse.x) * .01; p.y += (p.y - mouse.y) * .01; }
      });
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
        if (d < link) { ctx.strokeStyle = a; ctx.globalAlpha = (1 - d / link) * .35; ctx.lineWidth = devicePixelRatio; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
      }
      ctx.globalAlpha = .8; ctx.fillStyle = a;
      pts.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, 1.8 * devicePixelRatio, 0, 7); ctx.fill(); });
      ctx.globalAlpha = 1;
      if (!reduce) requestAnimationFrame(draw);
    })();
  })();

  /* ---------- Theory of Change ---------- */
  const grid = $("#tocGrid"), svg = $("#tocLines"), detail = $("#tocDetail");
  const nodes = {}, colOf = {};
  P.toc.forEach(col => {
    const cEl = h("div", "toc-col"); cEl.dataset.col = col.col;
    cEl.append(h("h3", null, col.col + (col.stat ? `<span class="toc-stat">${col.stat}</span>` : "")));
    const wrap = h("div", "toc-items"); cEl.append(wrap);
    col.items.forEach(it => {
      const b = h("button", "toc-node", it.t); b.dataset.id = it.id;
      nodes[it.id] = { ...it, el: b }; colOf[it.id] = col.col;
      b.addEventListener("click", () => { stopWalk(); selectToc(it.id); });
      wrap.append(b);
    });
    grid.append(cEl);
  });
  const edges = [];
  Object.values(nodes).forEach(n => n.to.forEach(t => edges.push([n.id, t])));
  function drawLines() {
    const box = svg.getBoundingClientRect();
    svg.innerHTML = "";
    edges.forEach(([a, b]) => {
      const A = nodes[a].el.getBoundingClientRect(), B = nodes[b].el.getBoundingClientRect();
      const x1 = A.right - box.left, y1 = A.top + A.height / 2 - box.top, x2 = B.left - box.left, y2 = B.top + B.height / 2 - box.top, mx = (x1 + x2) / 2;
      const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`);
      p.dataset.a = a; p.dataset.b = b; svg.append(p);
    });
    if (selected) markPaths(chain(selected));
    else if (walkPath) $$("path", svg).forEach(p => p.classList.toggle("on", walkPath.indexOf(p.dataset.b) === walkPath.indexOf(p.dataset.a) + 1 && walkPath.includes(p.dataset.a)));
  }
  let selected = null;
  const markPaths = on => $$("path", svg).forEach(p => p.classList.toggle("on", on.has(p.dataset.a) && on.has(p.dataset.b)));
  function chain(id) {
    const down = new Set([id]), up = new Set([id]);
    const goDown = i => nodes[i].to.forEach(t => { if (!down.has(t)) { down.add(t); goDown(t); } });
    const goUp = i => edges.forEach(([a, b]) => { if (b === i && !up.has(a)) { up.add(a); goUp(a); } });
    goDown(id); goUp(id);
    return new Set([...down, ...up]);
  }
  function focusNodes(on, edgeOn) {
    Object.values(nodes).forEach(x => { x.el.classList.toggle("on", on.has(x.id)); x.el.classList.toggle("dim", !on.has(x.id)); });
    svg.classList.add("focus");
    $$("path", svg).forEach(p => p.classList.toggle("on", edgeOn(p.dataset.a, p.dataset.b)));
  }
  function showDetail(id, stepText) {
    const n = nodes[id];
    const cell = (k, v) => v ? `<div><b>${k}</b><span>${v}</span></div>` : "";
    detail.innerHTML = `<span class="tag">${colOf[id]}${stepText ? " · " + stepText : ""}</span><h4>${n.t}</h4><p class="muted">${n.d}</p>
      <div class="lf">${cell("Indicator", n.ind)}${cell("Evidence", n.mov)}${cell("Example", n.ex)}${cell("Assumption", n.as)}</div>`;
  }
  function selectToc(id) {
    const on = chain(id);
    selected = id; walkPath = null;
    focusNodes(on, (a, b) => on.has(a) && on.has(b));
    showDetail(id);
  }
  // "Walk me through it": plays the tocWalk path one column at a time
  let walkTimer = null, walkPath = null;
  const walkBtn = $("#tocWalk"), stepEl = $("#tocStep");
  function walkStep(i) {
    const path = P.tocWalk || [];
    if (i >= path.length) { stopWalk(); stepEl.textContent = "Done. Click any box to explore further."; return; }
    const sofar = path.slice(0, i + 1), on = new Set(sofar);
    walkPath = sofar; selected = null;
    focusNodes(on, (a, b) => sofar.indexOf(b) === sofar.indexOf(a) + 1 && sofar.includes(a));
    showDetail(path[i], `Step ${i + 1} of ${path.length}`);
    stepEl.textContent = `Step ${i + 1} of ${path.length}: ${colOf[path[i]]}`;
    walkTimer = setTimeout(() => walkStep(i + 1), 3200);
  }
  function stopWalk() { clearTimeout(walkTimer); walkTimer = null; walkBtn.textContent = "▶ Walk me through it"; }
  walkBtn.addEventListener("click", () => {
    if (walkTimer) { stopWalk(); stepEl.textContent = "Paused."; return; }
    walkBtn.textContent = "⏸ Pause"; walkStep(0);
  });

  // Assumptions strip + method badges
  if (P.tocAssumptions) {
    $("#assumeTitle").textContent = P.tocAssumptions.title;
    P.tocAssumptions.items.forEach(x => $("#assumeGrid").append(h("div", "as-card",
      `<span class="link">${x.link}</span><p>${x.a}</p><small><b>Monitor:</b> ${x.monitor}</small><small><b>Risk:</b> ${x.risk}</small>`)));
  }
  (P.methods || []).forEach(m => $("#methodList").append(h("span", "method", m)));

  addEventListener("resize", drawLines);
  addEventListener("load", drawLines);
  if (document.fonts) document.fonts.ready.then(drawLines);
  drawLines();
  selectToc("m1"); // open with Impact selected so the detail box is never empty

  /* ---------- Projects ---------- */
  const sectors = ["All", ...new Set(P.projects.map(p => p.sector))];
  const fWrap = $("#filters"), pWrap = $("#projects");
  sectors.forEach((s, i) => {
    const c = h("button", "chip" + (i ? "" : " on"), s);
    c.addEventListener("click", () => {
      $$(".chip", fWrap).forEach(x => x.classList.remove("on")); c.classList.add("on");
      $$(".project", pWrap).forEach(card => card.classList.toggle("hide", s !== "All" && card.dataset.sector !== s));
    });
    fWrap.append(c);
  });
  P.projects.forEach(p => {
    const card = h("article", "project reveal", `
      <div class="meta"><span class="sector">${p.sector}</span><span>${p.year}</span></div>
      <h3>${p.title}</h3>
      <div class="meta"><span>${p.org}</span></div>
      <p>${p.summary}</p>
      <div class="tags">${p.tools.map(t => `<span>${t}</span>`).join("")}</div>
      <span class="more">Read case study →</span>`);
    card.dataset.sector = p.sector; card.id = "p-" + p.id; card.tabIndex = 0;
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty("--mx", x + "px"); card.style.setProperty("--my", y + "px");
      card.style.transform = `perspective(900px) rotateX(${(y / r.height - .5) * -5}deg) rotateY(${(x / r.width - .5) * 5}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => card.style.transform = "");
    card.addEventListener("click", () => openProject(p));
    card.addEventListener("keydown", e => { if (e.key === "Enter") openProject(p); });
    pWrap.append(card);
  });

  /* ---------- Testimonials ---------- */
  const qWrap = $("#quotes");
  (P.testimonials || []).forEach(t => qWrap.append(h("figure", "quote", `
    <blockquote>“${t.quote}”</blockquote>
    <figcaption><b>${t.name}</b><span>${t.role}</span><small>${t.source} · ${t.date}</small></figcaption>`)));
  if (P.testimonialsLink) { const a = h("a", "more", "Read more recommendations on LinkedIn →"); a.href = P.testimonialsLink; a.target = "_blank"; a.rel = "noopener"; qWrap.after(a); }
  if (!(P.testimonials || []).length) qWrap.parentElement.remove();

  const modal = $("#modal");
  function openProject(p) {
    $("#modalBody").innerHTML = `
      <span class="sector">${p.sector} · ${p.year}</span>
      <h3 id="mTitle">${p.title}</h3>
      <p class="muted">${p.org}</p>
      <div class="steps">
        <div class="step"><b>Problem</b><p>${p.problem}</p></div>
        <div class="step"><b>What I built</b><p>${p.built}</p></div>
        <div class="step"><b>Result</b><p>${p.result}</p></div>
      </div>
      ${p.chart ? `<div class="panel"><div class="chart-box"><canvas id="mChart"></canvas></div></div>` : ""}
      <div class="tags" style="margin-top:1rem">${p.tools.map(t => `<span>${t}</span>`).join("")}</div>`;
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    if (p.chart) {
      charts.modal?.destroy();
      const pal = palette();
      charts.modal = new Chart($("#mChart"), {
        type: p.chart.type,
        data: { labels: p.chart.labels, datasets: [{ label: p.chart.label, data: p.chart.data, backgroundColor: [pal.a, pal.b, pal.c], borderRadius: 8, borderWidth: 0 }] },
        options: baseOpts({ legend: p.chart.type === "doughnut" })
      });
    }
    $("#modalClose").focus();
  }
  const closeModal = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; };
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  /* ---------- Gallery + image viewer ---------- */
  const gGrid = $("#galleryGrid"), lb = $("#lightbox");
  let gIdx = 0;
  (P.gallery || []).forEach((g, i) => {
    const it = h("article", "g-item reveal", `
      <div class="g-img"><img src="${g.img}" alt="${g.title}" loading="lazy"><span class="zoom">View full size</span></div>
      <div class="g-body"><span class="sector">${g.tag}</span><h3>${g.title}</h3><p>${g.caption}</p></div>`);
    it.tabIndex = 0;
    it.addEventListener("click", () => openLb(i));
    it.addEventListener("keydown", e => { if (e.key === "Enter") openLb(i); });
    gGrid.append(it);
  });
  function showLb(i) {
    const g = P.gallery[(gIdx = (i + P.gallery.length) % P.gallery.length)];
    $("#lbImg").src = g.img; $("#lbImg").alt = g.title;
    $("#lbCap").innerHTML = `<b>${g.title}</b>${g.caption}`;
  }
  function openLb(i) { showLb(i); lb.classList.add("open"); lb.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; $("#lbClose").focus(); }
  const closeLb = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; };
  $("#lbClose").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", () => showLb(gIdx - 1));
  $("#lbNext").addEventListener("click", () => showLb(gIdx + 1));
  lb.addEventListener("click", e => { if (e.target === lb || e.target.tagName === "FIGURE") closeLb(); });
  addEventListener("keydown", e => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLb(); if (e.key === "ArrowLeft") showLb(gIdx - 1); if (e.key === "ArrowRight") showLb(gIdx + 1);
  });

  /* ---------- Chart helpers ---------- */
  function palette() { return { a: css("--accent"), b: css("--accent2"), c: css("--accent3"), text: css("--muted"), line: css("--line") }; }
  function baseOpts({ legend = false, scales = true, max } = {}) {
    const pal = palette();
    Chart.defaults.color = pal.text; Chart.defaults.font.family = "Inter, system-ui, sans-serif";
    const o = { responsive: true, maintainAspectRatio: false, animation: { duration: 700 },
      plugins: { legend: { display: legend, position: "bottom", labels: { boxWidth: 12, usePointStyle: true } } } };
    if (scales) o.scales = { x: { grid: { display: false }, border: { color: pal.line } }, y: { grid: { color: pal.line }, border: { display: false }, beginAtZero: true, max } };
    return o;
  }

  /* ---------- Live demo dashboard (synthetic data) ---------- */
  let seed = 42; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const wards = ["Kilala", "Mbitini", "Kathonzweni", "Wote/Nziu"];
  const practices = ["Drip irrigation", "Certified seed", "IPM", "Soil testing", "Post-harvest"];
  const farmers = Array.from({ length: 640 }, () => {
    const female = rnd() < .56, young = rnd() < .42, w = Math.floor(rnd() * 4);
    const base = 380 + rnd() * 260 + w * 25;
    const adopt = practices.map((_, i) => rnd() < [.48, .66, .37, .29, .52][i] + (young ? .08 : 0) + (female ? .03 : 0));
    const lift = 1 + adopt.filter(Boolean).length * .07 + rnd() * .1;
    return { ward: wards[w], gender: female ? "Female" : "Male", age: young ? "18–35" : "36+", adopt, base, end: base * lift, week: Math.floor(rnd() * 8) };
  });
  const fWard = $("#fWard");
  ["All", ...wards].forEach(w => fWard.append(new Option(w)));
  ["#fWard", "#fGender", "#fAge"].forEach(s => $(s).addEventListener("change", renderDash));

  function renderDash() {
    const w = fWard.value, g = $("#fGender").value, a = $("#fAge").value;
    const rows = farmers.filter(f => (w === "All" || f.ward === w) && (g === "All" || f.gender === g) && (a === "All" || f.age === a));
    const n = rows.length || 1, pal = palette();
    const fem = rows.filter(r => r.gender === "Female").length;
    const adoptRate = practices.map((_, i) => Math.round(rows.filter(r => r.adopt[i]).length / n * 100));
    const anyAdopt = Math.round(rows.filter(r => r.adopt.filter(Boolean).length >= 2).length / n * 100);
    const base = rows.reduce((s, r) => s + r.base, 0) / n, end = rows.reduce((s, r) => s + r.end, 0) / n;
    $("#dashKpis").innerHTML = `
      <div class="dkpi"><span>Respondents</span><b>${rows.length}</b><small>of ${farmers.length} surveyed</small></div>
      <div class="dkpi"><span>Women reached</span><b>${Math.round(fem / n * 100)}%</b><small>target 50%</small></div>
      <div class="dkpi"><span>Adopted 2+ practices</span><b>${anyAdopt}%</b><small>target 60%</small></div>
      <div class="dkpi"><span>Yield change</span><b>+${Math.round((end - base) / base * 100)}%</b><small>baseline → endline</small></div>`;
    const weeks = Array.from({ length: 8 }, (_, i) => rows.filter(r => r.week === i).length);

    const upsert = (key, el, cfg) => {
      if (charts[key]) { charts[key].data = cfg.data; charts[key].update(); }
      else charts[key] = new Chart($(el), cfg);
    };
    upsert("adopt", "#cAdopt", { type: "bar", data: { labels: practices, datasets: [{ data: adoptRate, backgroundColor: pal.a, borderRadius: 6 }] },
      options: { ...baseOpts({ max: 100 }), indexAxis: "y" } });
    upsert("yield", "#cYield", { type: "bar", data: { labels: ["Baseline", "Endline"], datasets: [{ data: [Math.round(base), Math.round(end)], backgroundColor: [pal.c, pal.b], borderRadius: 8 }] }, options: baseOpts() });
    upsert("gender", "#cGender", { type: "doughnut", data: { labels: ["Female", "Male"], datasets: [{ data: [fem, rows.length - fem], backgroundColor: [pal.b, pal.c], borderWidth: 0 }] },
      options: { ...baseOpts({ legend: true, scales: false }), cutout: "65%" } });
    upsert("subs", "#cSubs", { type: "line", data: { labels: weeks.map((_, i) => "Wk " + (i + 1)), datasets: [{ data: weeks, borderColor: pal.a, backgroundColor: pal.a + "33", fill: true, tension: .4, pointRadius: 3 }] }, options: baseOpts() });
  }

  /* ---------- Skills: evidence, not self-ratings ---------- */
  const toolGrid = $("#toolGrid");
  P.skills.forEach(s => {
    const keys = s.name.toLowerCase().split(/\s*\/\s*/);
    const hits = P.projects.filter(p => p.tools.some(t => keys.some(k => t.toLowerCase().includes(k) || k.includes(t.toLowerCase()))));
    const card = h("div", "tool reveal", `
      <div class="tool-head"><h4>${s.name}</h4>${hits.length ? `<span class="tool-count">${hits.length} case ${hits.length > 1 ? "studies" : "study"}</span>` : ""}</div>
      ${s.evidence ? `<p class="tool-ev">${s.evidence}</p>` : ""}`);
    if (hits.length) {
      const ul = h("ul", "tool-hits");
      hits.forEach(p => {
        const b = h("button", null, `${p.title}<span>${p.org} · ${p.year}</span>`);
        b.addEventListener("click", () => openProject(p));
        const li = h("li"); li.append(b); ul.append(li);
      });
      card.append(ul);
    }
    toolGrid.append(card);
  });

  /* ---------- Map ---------- */
  let map, tiles;
  function setTiles() {
    if (!map) return;
    if (tiles) map.removeLayer(tiles);
    const dark = document.documentElement.dataset.theme === "dark";
    tiles = L.tileLayer(`https://{s}.basemaps.cartocdn.com/${dark ? "dark_all" : "light_all"}/{z}/{x}/{y}{r}.png`, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>', maxZoom: 18 }).addTo(map);
  }
  function initMap() {
    if (map || typeof L === "undefined") return;
    map = L.map("map", { scrollWheelZoom: false }).setView([-0.9, 36.4], 7);
    setTiles();
    const icon = L.divIcon({ className: "", html: '<div class="pin"></div>', iconSize: [16, 16] });
    const list = $("#placeList");
    P.places.forEach(pl => {
      const m = L.marker([pl.lat, pl.lng], { icon }).addTo(map).bindPopup(`<b>${pl.name}</b><br>${pl.note}`);
      const li = h("li", null, `<b>${pl.name}</b><span>${pl.note}</span>`);
      li.addEventListener("click", () => { map.flyTo([pl.lat, pl.lng], 9, { duration: 1.2 }); m.openPopup(); });
      list.append(li);
    });
  }

  /* ---------- Timeline ---------- */
  const tl = $("#timeline");
  P.timeline.forEach((t, i) => {
    const li = h("li", "tl reveal", `
      <button class="tl-btn" aria-expanded="false">
        <div class="tl-when">${t.when} · ${t.where}</div>
        <div class="tl-role">${t.role}<i>+</i></div>
        <div class="tl-org">${t.org}</div>
        <div class="tl-body"><ul>${t.points.map(p => `<li>${p}</li>`).join("")}</ul></div>
      </button>`);
    const btn = $(".tl-btn", li), body = $(".tl-body", li);
    btn.addEventListener("click", () => {
      const open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      body.style.maxHeight = open ? body.scrollHeight + "px" : 0;
    });
    tl.append(li);
    if (i === 0) setTimeout(() => btn.click(), 50);
  });
  P.certifications.forEach(c => $("#certs").append(h("span", "cert", c)));

  /* ---------- Services & contact ---------- */
  P.services.forEach((s, i) => $("#services").append(h("div", "service reveal", `<span class="num">0${i + 1}</span><h4>${s.t}</h4><p>${s.d}</p>`)));
  const cl = $("#contactLinks"), L2 = P.person.links;
  const addLink = (label, url) => { if (!isPlaceholder(url)) { const a = h("a", "btn btn-ghost btn-sm", label); a.href = url; if (/^https?:/.test(url)) { a.target = "_blank"; a.rel = "noopener"; } cl.append(a); } };
  if (!isPlaceholder(P.person.email)) addLink("✉ " + P.person.email, "mailto:" + P.person.email);
  if (!isPlaceholder(P.person.phone)) addLink("WhatsApp", "https://wa.me/" + P.person.phone.replace(/\D/g, ""));
  addLink("LinkedIn", L2.linkedin); addLink("Upwork", L2.upwork); addLink("Fiverr", L2.fiverr); addLink("GitHub", L2.github);

  $("#contactForm").addEventListener("submit", async e => {
    e.preventDefault();
    const f = e.target, note = $("#formNote"), data = new FormData(f);
    if (data.get("_honey")) return; // spam bot
    if (!isPlaceholder(P.person.formEndpoint)) {
      note.textContent = "Sending…";
      try {
        data.delete("_honey");
        data.append("_subject", "Portfolio enquiry: " + data.get("need"));
        data.append("_template", "table");
        const r = await fetch(P.person.formEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        note.textContent = r.ok ? "Thank you! I'll get back to you shortly." : "Something went wrong. Please email me directly.";
        if (r.ok) f.reset();
      } catch { note.textContent = "Network error. Please email me directly."; }
    } else if (!isPlaceholder(P.person.email)) {
      const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nNeed: ${data.get("need")}\n\n${data.get("message")}`;
      location.href = `mailto:${P.person.email}?subject=${encodeURIComponent("Portfolio enquiry: " + data.get("need"))}&body=${encodeURIComponent(body)}`;
    } else note.textContent = "Contact form not set up yet (add your email or form link in data.js).";
  });

  /* ---------- Reveal on scroll + lazy init ---------- */
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    if (en.target.classList.contains("hero-card")) $$("b[data-to]", en.target).forEach(countUp);
    io.unobserve(en.target);
  }), { threshold: .12 });
  $$(".reveal").forEach(el => io.observe(el));

  const lazy = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    if (en.target.id === "demo") renderDash();
    if (en.target.id === "skills") { initMap(); setTimeout(() => map && map.invalidateSize(), 300); }
    if (en.target.id === "toc") setTimeout(drawLines, 900);
    lazy.unobserve(en.target);
  }), { rootMargin: "200px" });
  ["#demo", "#skills", "#toc"].forEach(s => lazy.observe($(s)));

  function refreshCharts() {
    if (charts.adopt) { ["adopt", "yield", "gender", "subs"].forEach(k => { charts[k].destroy(); delete charts[k]; }); renderDash(); }
  }
})();
