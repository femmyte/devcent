/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: "#FFBA0E",
        primaryPurple: "#E40084",
      },
      fontFamily: {
        space: ["Space Grotesk"],
        dmsans: ["DM Sans"],
        kaushan: ["Kaushan Script"],
        source: ["Source Sans Pro"],
      },
    },
  },
  plugins: [],
};
