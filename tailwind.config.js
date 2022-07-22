/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extends: {},
  },
  safelist: [
    {
      pattern: /bg-(red|green|indigo|blue|white)-(100|200|300|500|600)/,
    },
  ],
  plugins: [],
};
