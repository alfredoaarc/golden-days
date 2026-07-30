// Residencia Alentia — inyecta los datos de fuente única (content.js) y
// enciende las pequeñas interacciones. Sin JS, la página sigue siendo legible
// (los <details> del FAQ y el contenido funcionan igual).
document.documentElement.classList.add("js");

var A = window.ALENTIA || {};
var LANG = (document.documentElement.lang || "es").toLowerCase().indexOf("en") === 0 ? "en" : "es";

function pick(v) { return v && typeof v === "object" && (v.es || v.en) ? (v[LANG] || v.es) : v; }

// --- Valores de texto (data-var) ---
var addr = A.address || {};
var avail = A.availability || {};
var prices = A.prices || {};
var vars = {
  "telDisplay": A.telDisplay,
  "email": A.email,
  "registro": A.registro,
  "years": A.years,
  "ratio": A.ratio,
  "visitHours": pick(A.visitHours),
  "address.street": addr.street,
  "address.full": (addr.postal || "") + " " + (addr.city || "") + " · " + (addr.locality || ""),
  "availabilityUpdated": avail.updated ? pick(avail.updated) : "",
  "prices.permanent": prices.permanent,
  "prices.temporary": prices.temporary,
  "prices.convalescence": prices.convalescence,
  "prices.dayCentre": prices.dayCentre
};
document.querySelectorAll("[data-var]").forEach(function (n) {
  var k = n.getAttribute("data-var");
  if (vars[k] != null && vars[k] !== "") n.textContent = vars[k];
});

// --- Enlaces (data-link): tel, WhatsApp, email, mapa ---
var links = {
  tel: A.tel ? "tel:" + A.tel : null,
  wa: A.whatsapp ? "https://wa.me/" + A.whatsapp : null,
  email: A.email ? "mailto:" + A.email : null,
  maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(((addr.locality || "") + " " + (addr.city || "")).trim() || "Madrid")
};
document.querySelectorAll("[data-link]").forEach(function (n) {
  var k = n.getAttribute("data-link");
  if (links[k]) n.setAttribute("href", links[k]);
});

// --- Insignia de plazas (una sola fuente: content.js) ---
var STR = {
  es: { open: "Plazas disponibles", closed: "Consúltanos disponibilidad", updated: "Última actualización: " },
  en: { open: "Places available", closed: "Ask us about availability", updated: "Last updated: " }
}[LANG];
document.querySelectorAll("[data-avail]").forEach(function (badge) {
  var t = badge.querySelector("[data-avail-text]");
  var u = badge.querySelector("[data-avail-updated]");
  if (t) t.textContent = avail.open ? STR.open : STR.closed;
  if (u) u.textContent = STR.updated + (avail.updated ? pick(avail.updated) : "");
  if (!avail.open) badge.classList.add("is-closed");
});

// --- Año automático en el pie ---
document.querySelectorAll("[data-year]").forEach(function (n) {
  n.textContent = String(new Date().getFullYear());
});

// --- Selector de idioma: recuerda la elección para no volver a redirigir ---
document.querySelectorAll(".lang-link").forEach(function (link) {
  link.addEventListener("click", function () {
    var l = link.getAttribute("data-lang");
    if (l) document.cookie = "ttw_lang=" + l + ";path=/;max-age=31536000";
  });
});

// --- Aparición al hacer scroll (respeta prefers-reduced-motion vía CSS) ---
var nodes = [];
document.querySelectorAll(".pricing, .day, .know, .team, .facilities, .steps, .testimonials, .faq, .visit")
  .forEach(function (n) { n.classList.add("reveal"); nodes.push(n); });
if ("IntersectionObserver" in window) {
  var io = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.03 });
  nodes.forEach(function (n) { io.observe(n); });
} else {
  nodes.forEach(function (n) { n.classList.add("in"); });
}
