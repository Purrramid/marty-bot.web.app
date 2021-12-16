module.exports = {
  content: ["public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blurple: "#5865F2", // https://discord.com/branding
        discord: {
          green: "#43B581",
          gray: "#747F8D",
        },
        admin: "#0FDDAA",
        'near-black': "#1a1a1a"
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      }
    },
  },
  plugins: [],
}
