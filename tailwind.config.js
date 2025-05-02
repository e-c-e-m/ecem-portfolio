/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // ✅ Required for App Router in /src
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Optional, in case you use Pages Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // Optional, if you have a components folder
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      maskImage: {
        custom: "url('/mask.svg')",
      },
    },
  },
  plugins: [],
};
