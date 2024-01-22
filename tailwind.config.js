/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{html,js,jsx}",
    "./src/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        layout: "704px",
      },
    },
  },
  plugins: [],
};
