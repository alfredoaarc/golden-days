/*
 * Residencia Alentia — datos editables (fuente única).
 * =====================================================
 * TODO lo que cambia con el tiempo vive AQUÍ y en ningún otro sitio:
 * teléfono, WhatsApp, email, plazas disponibles, precios y nº de registro.
 * main.js los inyecta en la página (busca los atributos data-var / data-link),
 * así que nunca hay un precio ni un dato de plazas duplicado en el código.
 *
 * Para actualizar plazas: cambia `availability.open` (true/false) y el mes.
 * Para cambiar un precio: cámbialo aquí una vez.
 *
 * DEMO ficticia. Datos inventados con formato verosímil.
 */
window.ALENTIA = {
  name: "Residencia Alentia",

  // --- Contacto (una sola vez) ---
  tel: "+34910555250", // enlace tel:
  telDisplay: "910 555 250", // como se muestra
  whatsapp: "34611084250", // wa.me/34611084250
  email: "info@residenciaalentia.es",

  // --- Confianza ---
  years: "18", // años abiertos
  ratio: "1 : 6", // cuidador por residentes, de media (día)
  registro: "Registro C.A.M. nº S-4821", // ficticio, formato verosímil
  regNumber: "S-4821", // solo el número, para la franja de confianza

  // --- Ubicación (genérica, noroeste de Madrid) ---
  address: {
    street: "Calle del Olivar, 28",
    locality: "Mirasierra",
    city: "Madrid",
    postal: "28035",
    region: "Comunidad de Madrid",
  },
  // Horario de visitas (solo la franja horaria; el "todos los días, de" va en el texto)
  visitHours: { es: "10:00 a 20:00", en: "10:00–20:00" },

  // --- Plazas: UNA sola constante. Cámbiala cuando cambie la disponibilidad. ---
  availability: {
    open: true, // ¿hay plaza ahora mismo?
    updated: { es: "julio de 2026", en: "July 2026" },
  },

  // --- Precios orientativos: UNA sola constante por concepto ---
  // Solo el número; el "desde", el "€/mes" y el "/día" van en el texto de la página.
  prices: {
    permanent: "1.950", // €/mes
    temporary: "79", // €/día
    convalescence: "89", // €/día
    dayCentre: "690", // €/mes
  },
};
