module.exports = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        desalime: "#93AE00",
        desadarkgreen: "#364B00",
        desalightgreen: "#699F00",
        desalightgray: "#E3E3E3",
        desadarkgray: "#464646",
        desablack: "#1C1C1C",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
