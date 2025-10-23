/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#a855f7",
            light: "#d8b4fe",
            dark: "#7e22ce",
          },
        },
        animation: {
          fadeIn: "fadeIn 0.6s ease-out",
          bounceSlow: "bounce 2s infinite",
          typing: "typing 3.5s steps(40, end)",
          blink: "blink 1s step-end infinite",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "translateY(-10px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          typing: {
            "0%": { width: "0%" },
            "100%": { width: "100%" },
          },
          blink: {
            "50%": { opacity: 0 },
          },
        },
      },
    },
    plugins: [],
  };
  