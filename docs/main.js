// Mark that JS is on, so the reveal animation only hides content when it can run.
document.documentElement.classList.add("js");

// Pick the language block that matches this page's <html lang> ("es" or "en").
const LANG = (document.documentElement.lang || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
const ALL = window.GD || {};
// Prefer the page's language block; fall back to English, then to a legacy flat
// GD object (older content.js) so a stale cache degrades gracefully, never blank.
const GD = ALL[LANG] || ALL.en || (ALL.metrics ? ALL : {});
// Defensive defaults: if a content.js has no `strings`, the dynamic bits still
// render instead of throwing and wiping every section.
const S = Object.assign(
  {
    yearsHere: (n) => String(n),
    boardEyebrow: "",
    boardToday: (d) => String(d),
    boardWeek: "",
    lunch: "",
    todayLabel: "",
    weekLabel: "",
    starsAria: (n) => String(n),
    errName: "Please add your name.",
    errPhone: "Please add a phone number.",
    doneWithTime: (t, name) => String(name),
    doneNoTime: (name) => String(name),
  },
  GD.strings || {}
);

const $ = (sel, root = document) => root.querySelector(sel);
const path = (obj, p) => p.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// --- Language switcher: remember the choice so the first-visit redirect stops ---
document.querySelectorAll(".lang-link").forEach((link) => {
  link.addEventListener("click", () => {
    const l = link.getAttribute("data-lang");
    if (l) document.cookie = "ttw_lang=" + l + ";path=/;max-age=31536000";
  });
});

// --- Bind small inline values (town, phone, ratio) from the data file ---
document.querySelectorAll("[data-gd]").forEach((node) => {
  const v = path(GD, node.getAttribute("data-gd"));
  if (v != null && v !== "") node.textContent = v;
});
document.querySelectorAll("[data-gd-href]").forEach((node) => {
  const v = path(GD, node.getAttribute("data-gd-href"));
  if (v) node.setAttribute("href", v);
});

// --- 02 · Metrics ---
const metricsEl = $("#metrics");
if (metricsEl && GD.metrics) {
  GD.metrics.forEach((m) => {
    metricsEl.append(
      el("li", "metric", `<span class="metric-value">${esc(m.value)}</span><span class="metric-label">${esc(m.label)}</span>`)
    );
  });
}

// --- 04 · Timeline ---
const tl = $("#timeline");
if (tl && GD.day) {
  GD.day.forEach((d) => {
    tl.append(
      el(
        "li",
        null,
        `<span class="tl-time">${esc(d.time)}</span><span><span class="tl-title">${esc(d.title)}</span><br><span class="tl-note">${esc(d.note)}</span></span>`
      )
    );
  });
}

// --- 04 · Today's board (with weekly fallback) ---
const board = $("#today-board");
if (board) {
  const today = GD.today || {};
  const live = today.date && today.menu && today.menu.length;
  const menu = live ? today.menu : (GD.weekFallback || {}).menu || [];
  const activity = live ? today.activity : (GD.weekFallback || {}).activity || "";
  const heading = live ? S.boardToday(today.date) : S.boardWeek;
  const menuItems = menu.map((m) => `<li>${esc(m)}</li>`).join("");
  board.innerHTML = `
    <p class="board-eyebrow">${esc(S.boardEyebrow)}</p>
    <h3>${esc(heading)}</h3>
    <div class="board-cols">
      <div>
        <p class="board-label">${esc(S.lunch)}</p>
        <ul class="board-menu">${menuItems}</ul>
      </div>
      <div>
        <p class="board-label">${esc(live ? S.todayLabel : S.weekLabel)}</p>
        <p class="board-activity">${esc(activity)}</p>
      </div>
    </div>`;
}

// --- 05 · People ---
const peopleEl = $("#people");
if (peopleEl && GD.people) {
  GD.people.forEach((p) => {
    const photo = p.photo
      ? `<img class="person-photo" src="${esc(p.photo)}" alt="${esc(p.name)}, ${esc(p.role)}" loading="lazy" width="200" height="200" />`
      : `<div class="photo-ph" role="img" aria-label="${esc(p.name)}"><span class="todo-chip">TODO: photo</span></div>`;
    const years = S.yearsHere(p.years);
    peopleEl.append(
      el(
        "li",
        "person",
        `${photo}<p class="person-name">${esc(p.name)}</p><p class="person-role">${esc(p.role)}</p><span class="person-years">${esc(years)}</span>`
      )
    );
  });
}

// --- 06 · Family voices ---
const voicesEl = $("#voices");
if (voicesEl && GD.voices) {
  GD.voices.forEach((v) => {
    const stars =
      "★".repeat(v.stars) + `<span class="off">${"★".repeat(5 - v.stars)}</span>`;
    const video = v.photo
      ? `<div class="voice-video has-photo"><img src="${esc(v.photo)}" alt="${esc(v.name)}" loading="lazy" width="200" height="200" /><span class="play" aria-hidden="true"></span></div>`
      : `<div class="voice-video"><div class="photo-ph" role="img" aria-label="${esc(v.name)}"><span class="todo-chip">TODO: video</span></div></div>`;
    const reply = v.reply ? `<div class="voice-reply">${esc(v.reply)}</div>` : "";
    voicesEl.append(
      el(
        "li",
        "voice",
        `${video}<div class="voice-stars" aria-label="${esc(S.starsAria(v.stars))}">${stars}</div>` +
          `<p class="voice-line">“${esc(v.line)}”</p>` +
          `<p class="voice-name">${esc(v.name)} <span>· ${esc(v.role)}</span></p>${reply}`
      )
    );
  });
}

// --- 07 · Visit times (keyboard-friendly radio options) ---
const timesEl = $("#visit-times");
if (timesEl && GD.visitTimes) {
  GD.visitTimes.forEach((t, i) => {
    const id = `time-${i}`;
    const label = el("label", "time-option");
    label.setAttribute("for", id);
    label.innerHTML = `<input type="radio" name="visit-time" id="${id}" value="${esc(t)}"${i === 0 ? " checked" : ""} /><span class="dot" aria-hidden="true"></span><span>${esc(t)}</span>`;
    timesEl.append(label);
  });
}

// --- 07 · Form (Phase 1: confirms on screen; Phase 2 wires the SMS to Carmen) ---
const form = $("#visit-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#name").value.trim();
    const phone = $("#phone").value.trim();
    const msg = $("#form-msg");
    const digits = phone.replace(/[^\d]/g, "");
    if (!name) return fail(msg, S.errName);
    if (digits.length < 7) return fail(msg, S.errPhone);
    const time = (form.querySelector('input[name="visit-time"]:checked') || {}).value || "";
    form.hidden = true;
    const done = $("#visit-done");
    done.hidden = false;
    $("#visit-done-detail").textContent = time ? S.doneWithTime(time, name) : S.doneNoTime(name);
    done.setAttribute("tabindex", "-1");
    done.focus();
  });
}
function fail(msg, text) {
  msg.textContent = text;
}

// --- Reveal on scroll (each block fades in as it enters view) ---
const nodes = [];
document
  .querySelectorAll(".trust, .letter, .timeline, .board, .people, .voices, .visit-inner")
  .forEach((n) => {
    n.classList.add("reveal");
    nodes.push(n);
  });

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          obs.unobserve(en.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.04 }
  );
  nodes.forEach((n) => io.observe(n));
} else {
  nodes.forEach((n) => n.classList.add("in"));
}
