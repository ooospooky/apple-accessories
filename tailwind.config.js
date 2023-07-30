/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-black",
    "bg-gray-200",
    "bg-rose-500",
    "bg-blue-500",
    "bg-stone-700",
    "bg-orange-900",
    "bg-green-950",
    "bg-yellow-300",
    "bg-zinc-700",
    "bg-lime-400",
    "bg-orange-400",
    "bg-purple-400",
    "bg-blue-900",
    "bg-yellow-200",
    "bg-orange-200",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        h1: "#1d1d1f",
        h2: "#1d1d1f",
        h3: "#1d1d1f",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
