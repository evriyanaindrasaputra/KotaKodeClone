module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        sectionOne:
          "url('https://kotakode.com/static/media/BackgroundHome.ae924fd1.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
