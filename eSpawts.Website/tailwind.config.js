module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or class
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        reg: "url('/src/Images/dota2_art.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
