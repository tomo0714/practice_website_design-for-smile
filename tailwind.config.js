module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "first-view":
          "url('/images/photo-of-people-looking-on-tablet-1@2x-min.png')",
        about: "url('/images/about-img@2x-min.png')",
      },
    },
  },
  plugins: [],
};
