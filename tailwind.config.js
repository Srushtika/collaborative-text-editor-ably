/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: [
        "Inter",
        "ui-sans-serif",
        "system-ui"
        // other fallback fonts
      ],
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui"
        // other fallback fonts
      ]
    }
  },
  plugins: []
};
