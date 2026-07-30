/*
 * Golden Days — editable content (bilingual).
 * Everything a home would change lives here. Edit the text and numbers below;
 * you never need to touch the layout. Anything marked TODO needs a real asset.
 *
 * Two languages: `es` (Spanish, the default at "/") and `en` (English, at "/en/").
 * main.js picks the block that matches the page's <html lang>. Keep both in sync
 * when you edit — especially the "today" board, which you change every morning.
 */
window.GD = {
  // ============================ SPANISH ============================
  es: {
    home: {
      name: "Golden Days",
      town: "Fairfield", // TODO: pueblo real
      phone: "(555) 210-4488", // TODO: teléfono real
      phoneHref: "tel:+15552104488", // TODO: teléfono real (E.164)
      residents: 36,
      dayRatio: "1 cuidador por cada 3, de día",
    },

    // 02 · Barra de confianza. Cifras de EJEMPLO para esta demo: sustitúyelas
    // por los datos verificados del hogar y guarda la fuente. Todo debe ser cierto.
    metrics: [
      { value: "31", label: "Años abiertos" },
      { value: "1 : 3", label: "Cuidadores por residente, de día" },
      { value: "9.4", label: "Valoración media de las familias" },
      { value: "0", label: "Sanciones del regulador" },
    ],

    // 04 · Un día aquí (8:00–21:00)
    day: [
      { time: "8:00", title: "Desayuno juntos", note: "Café recién hecho, pan caliente, sin prisa." },
      { time: "10:30", title: "Fisioterapia y movimiento suave", note: "Con Rosa, cada mañana." },
      { time: "13:00", title: "Comida, hecha en casa", note: "Una cocina, platos de verdad, repetir si quieres." },
      { time: "16:30", title: "Taller", note: "Pintura, música o salir al jardín." },
      { time: "17:30", title: "Café y merienda", note: "La hora más animada y feliz del día." },
      { time: "20:00", title: "Cena y calma", note: "Luego una película, o pronto a la cama: ellos eligen." },
    ],

    // 04 · La pizarra de hoy (el elemento estrella). Edítala cada mañana.
    // Deja `date` vacío para mostrar el resumen semanal, más suave.
    today: {
      date: "martes", // p. ej. "martes" — o "" para ocultar hoy y mostrar la semana
      menu: ["Sopa de lentejas", "Pollo asado con patatas", "Manzana al horno con canela"],
      activity: "Música en directo con Tomás en la sala del jardín, 16:30",
    },
    weekFallback: {
      menu: ["Un primer plato casero y caliente", "Un guiso del día", "Un postre casero"],
      activity: "Algo que hacer juntos: música, manualidades o el jardín",
    },

    // 05 · Las personas. Los años aquí es el número que más confianza da.
    people: [
      { name: "Dra. Elena", role: "Médica del hogar", years: 12, photo: "/img/elena.svg" }, // ilustración de marca — sustituir por foto real cuando la tengas
      { name: "Rosa", role: "Enfermera", years: 9, photo: "/img/rosa.svg" }, // ilustración de marca — sustituir por foto real cuando la tengas
      { name: "Miguel", role: "Cuidador de planta", years: 7, photo: "/img/miguel.svg" }, // ilustración de marca — sustituir por foto real cuando la tengas
      { name: "Carmen", role: "Enseña el hogar a las familias", years: 15, photo: "/img/carmen.svg" }, // ilustración de marca — sustituir por foto real cuando la tengas
    ],

    // 06 · Voces de las familias. Miniaturas ilustradas de marca (sustitúyelas por
    // vídeos reales). Se deja a propósito una reseña honesta de 3 estrellas.
    voices: [
      { name: "Ana", role: "hija de una residente", line: "Mi padre discutió con toda la idea. Ahora lo llama su casa.", stars: 5, photo: "/img/ana.svg" },
      {
        name: "Marta",
        role: "hija de una residente",
        line: "Las dos primeras semanas fueron duras, y la ropa se mezcló más de una vez.",
        stars: 3,
        reply: "Tenías razón, Marta: cambiamos cómo etiquetamos todo después de tu visita. Gracias por empujarnos a mejorar. — El equipo",
        photo: "/img/marta.svg",
      },
      { name: "Luis", role: "hijo de una residente", line: "Me mandan una foto cada vez que mamá tiene un buen día. Me siento cerca, aunque esté lejos.", stars: 5, photo: "/img/luis.svg" },
    ],

    // 07 · Horas para visitar. Preferencias suaves: Carmen confirma la hora exacta por teléfono.
    visitTimes: [
      "Mar · comida, 13:00",
      "Mié · mañana, 11:00",
      "Jue · comida, 13:00",
      "Sáb · café y merienda, 17:00",
    ],

    // Frases que main.js genera al vuelo. No suelen cambiar.
    strings: {
      yearsHere: (n) => (n === 1 ? "1 año aquí" : `${n} años aquí`),
      boardEyebrow: "En la pizarra de la cocina",
      boardToday: (d) => `Hoy — ${d}`,
      boardWeek: "Esta semana",
      lunch: "Comida",
      todayLabel: "Hoy",
      weekLabel: "Esta semana",
      starsAria: (n) => `${n} de 5`,
      errName: "Añade tu nombre para que Carmen sepa por quién preguntar.",
      errPhone: "Añade un teléfono al que Carmen pueda llamarte.",
      doneWithTime: (t, name) => `Hemos apuntado ${t}. Carmen llamará a ${name} para confirmar, sin ningún compromiso.`,
      doneNoTime: (name) => `Carmen llamará a ${name} para buscar una hora que te venga bien.`,
    },
  },

  // ============================ ENGLISH ============================
  en: {
    home: {
      name: "Golden Days",
      town: "Fairfield", // TODO: real town
      phone: "(555) 210-4488", // TODO: real phone number
      phoneHref: "tel:+15552104488", // TODO: real phone (E.164)
      residents: 36,
      dayRatio: "1 carer for every 3, by day",
    },

    metrics: [
      { value: "31", label: "Years open" },
      { value: "1 : 3", label: "Carers per resident, by day" },
      { value: "9.4", label: "Average family rating" },
      { value: "0", label: "Regulator sanctions" },
    ],

    day: [
      { time: "8:00", title: "Breakfast together", note: "Fresh coffee, warm bread, no rush." },
      { time: "10:30", title: "Physio & gentle movement", note: "With Rosa, hands-on every morning." },
      { time: "13:00", title: "Lunch, cooked in-house", note: "One kitchen, real plates, second helpings." },
      { time: "16:30", title: "Workshop", note: "Painting, music, or out in the garden." },
      { time: "17:30", title: "Coffee and cake", note: "The busiest, happiest hour of the day." },
      { time: "20:00", title: "Dinner and quiet", note: "Then a film — or an early night, their choice." },
    ],

    today: {
      date: "Tuesday", // e.g. "Tuesday" — or "" to hide today and show the week
      menu: ["Lentil soup", "Roast chicken & potatoes", "Baked apple with cinnamon"],
      activity: "Live music with Tomás in the garden room, 4:30",
    },
    weekFallback: {
      menu: ["A hot homemade starter", "A cooked-in main", "A homemade dessert"],
      activity: "Something to do together — music, crafts, or the garden",
    },

    people: [
      { name: "Dr. Elena", role: "House doctor", years: 12, photo: "/img/elena.svg" }, // brand illustration — swap for a real photo when you have one
      { name: "Rosa", role: "Nurse", years: 9, photo: "/img/rosa.svg" }, // brand illustration — swap for a real photo when you have one
      { name: "Miguel", role: "Floor carer", years: 7, photo: "/img/miguel.svg" }, // brand illustration — swap for a real photo when you have one
      { name: "Carmen", role: "She shows families around", years: 15, photo: "/img/carmen.svg" }, // brand illustration — swap for a real photo when you have one
    ],

    voices: [
      { name: "Ana", role: "daughter of a resident", line: "My father argued about the whole idea. Now he calls it home.", stars: 5, photo: "/img/ana.svg" },
      {
        name: "Marta",
        role: "daughter of a resident",
        line: "The first two weeks were hard, and the laundry got mixed up more than once.",
        stars: 3,
        reply: "You were right, Marta — we changed how we label everything after your visit. Thank you for pushing us to be better. — The team",
        photo: "/img/marta.svg",
      },
      { name: "Luis", role: "son of a resident", line: "They send me a photo whenever Mum has a good day. I feel close, even from far away.", stars: 5, photo: "/img/luis.svg" },
    ],

    visitTimes: [
      "Tue · lunch, 1:00 pm",
      "Wed · morning, 11:00 am",
      "Thu · lunch, 1:00 pm",
      "Sat · coffee & cake, 5:00 pm",
    ],

    strings: {
      yearsHere: (n) => (n === 1 ? "1 year here" : `${n} years here`),
      boardEyebrow: "On the kitchen board",
      boardToday: (d) => `Today — ${d}`,
      boardWeek: "This week",
      lunch: "Lunch",
      todayLabel: "Today",
      weekLabel: "This week",
      starsAria: (n) => `${n} out of 5`,
      errName: "Please add your name so Carmen knows who to ask for.",
      errPhone: "Please add a phone number Carmen can call you on.",
      doneWithTime: (t, name) => `We've noted ${t}. Carmen will call ${name} to confirm — no pressure either way.`,
      doneNoTime: (name) => `Carmen will call ${name} to find a time that suits you.`,
    },
  },
};
