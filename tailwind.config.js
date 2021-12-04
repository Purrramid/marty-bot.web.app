module.exports = {
  mode: "jit",
  purge: ["public/**/*.html"],
  darkMode: "media",
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
      gridTemplateColumns: {
        '2-auto': 'repeat(2, auto)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
