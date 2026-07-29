/*
 * Golden Days — editable content.
 * Everything a home would change lives here. Edit the text and numbers below;
 * you never need to touch the layout. Anything marked TODO needs a real asset.
 */
window.GD = {
  home: {
    name: "Golden Days",
    town: "Fairfield", // TODO: real town
    phone: "(555) 210-4488", // TODO: real phone number
    phoneHref: "tel:+15552104488", // TODO: real phone (E.164)
    residents: 36,
    dayRatio: "1 carer for every 3, by day",
  },

  // 02 · Trust bar. SAMPLE figures for this demo — replace with the home's
  // verified data and keep the source on file. Each claim must be true.
  metrics: [
    { value: "31", label: "Years open" },
    { value: "1 : 3", label: "Carers per resident, by day" },
    { value: "9.4", label: "Average family rating" },
    { value: "0", label: "Regulator sanctions" },
  ],

  // 04 · A day here (8:00–21:00)
  day: [
    { time: "8:00", title: "Breakfast together", note: "Fresh coffee, warm bread, no rush." },
    { time: "10:30", title: "Physio & gentle movement", note: "With Rosa, hands-on every morning." },
    { time: "13:00", title: "Lunch, cooked in-house", note: "One kitchen, real plates, second helpings." },
    { time: "16:30", title: "Workshop", note: "Painting, music, or out in the garden." },
    { time: "17:30", title: "Coffee and cake", note: "The busiest, happiest hour of the day." },
    { time: "20:00", title: "Dinner and quiet", note: "Then a film — or an early night, their choice." },
  ],

  // 04 · Today's board (the signature element). Edit this every morning.
  // Leave `date` empty to show the gentler weekly fallback instead.
  today: {
    date: "Tuesday", // e.g. "Tuesday" — or "" to hide today and show the week
    menu: ["Lentil soup", "Roast chicken & potatoes", "Baked apple with cinnamon"],
    activity: "Live music with Tomás in the garden room, 4:30",
  },
  weekFallback: {
    menu: ["A hot homemade starter", "A cooked-in main", "A homemade dessert"],
    activity: "Something to do together — music, crafts, or the garden",
  },

  // 05 · The people. Years here is the number families trust most.
  people: [
    { name: "Dr. Elena", role: "House doctor", years: 12, photo: "" }, // TODO: real photo
    { name: "Rosa", role: "Nurse", years: 9, photo: "" }, // TODO: real photo
    { name: "Miguel", role: "Floor carer", years: 7, photo: "" }, // TODO: real photo
    { name: "Carmen", role: "She shows families around", years: 15, photo: "" }, // TODO: real photo
  ],

  // 06 · Family voices. Real video testimonials go here (TODO). One honest
  // 3-star review is kept on purpose, with the team's reply below it.
  voices: [
    { name: "Ana", role: "daughter of a resident", line: "My father argued about the whole idea. Now he calls it home.", stars: 5, photo: "" },
    {
      name: "Marta",
      role: "daughter of a resident",
      line: "The first two weeks were hard, and the laundry got mixed up more than once.",
      stars: 3,
      reply: "You were right, Marta — we changed how we label everything after your visit. Thank you for pushing us to be better. — The team",
      photo: "",
    },
    { name: "Luis", role: "son of a resident", line: "They send me a photo whenever Mum has a good day. I feel close, even from far away.", stars: 5, photo: "" },
  ],

  // 07 · Visit times. Soft preferences — Carmen confirms the exact time by phone.
  visitTimes: [
    "Tue · lunch, 1:00 pm",
    "Wed · morning, 11:00 am",
    "Thu · lunch, 1:00 pm",
    "Sat · coffee & cake, 5:00 pm",
  ],
};
