/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(124 58 237)', // violet-600
      },
      fontFamily: {
        // Tipografía arriesgada y fresca para títulos
        'display': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        // Tipografía moderna y cálida para cuerpo
        'sans': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
