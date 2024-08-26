/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

      },
      borderRadius: {
        'custom': '30px 0px 30px 0px',
      },
      backgroundColor:{
       "light-rgb" : 'rgba(98, 195, 198, 0.3)',
       "light-red": "rgba(161, 12, 12, 0.05)",
       "thin-blue":"rgba(98,195,198,0.1)",
      },
      colors:{
        "light-blue":"rgba(98, 195, 198, 0.3)",
      },
      fontFamily:{
        "sora": ["Sora", "sans-serif"],
        "manrope": ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
};
