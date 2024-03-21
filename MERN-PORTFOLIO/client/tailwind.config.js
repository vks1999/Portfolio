/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#F97316",
        tertiary: "#54D6BB",
      },
    },
    screens: {
      'sm': '640px',   // Small screens, default
      'md': '768px',   // Medium screens, default
      'lg': '1024px',  // Large screens, default
      'xl': '1280px',  // Extra large screens, default
      '2xl': '1536px', // Additional large screens, default
    },
  },
  plugins: [],
};
