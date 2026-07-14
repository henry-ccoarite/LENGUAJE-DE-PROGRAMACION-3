// ============================================================
// tailwind.config.js — fonts + the pill-radius override.
// Loaded right after the Tailwind CDN script, before anything
// else, so the JIT compiler picks it up.
// ============================================================
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Instrument Serif"', "serif"],
        body: ["Barlow", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "9999px",
      },
    },
  },
};
