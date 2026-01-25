/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(255 107 107)', // Coral/Salmon principal
        'primary-hover': 'rgb(255 85 85)', // Coral más oscuro
        secondary: 'rgb(255 160 107)', // Naranja melocotón
        accent: 'rgb(255 190 152)', // Melocotón claro
        coral: {
          50: '#FFF4F1',
          100: '#FFE8E0',
          200: '#FFD4C4',
          300: '#FFB89C',
          400: '#FF9B7A',
          500: '#FF6B6B',
          600: '#FF5555',
          700: '#E63E3E',
          800: '#CC2B2B',
          900: '#991F1F',
        },
        peach: {
          50: '#FFF9F5',
          100: '#FFF4ED',
          200: '#FFE8D9',
          300: '#FFDCBB',
          400: '#FFC89E',
          500: '#FFA06B',
          600: '#FF8E53',
          700: '#F57D3E',
          800: '#E06629',
          900: '#B34F1E',
        },
        cream: {
          50: '#FEFCFA',
          100: '#FEF9F5',
          200: '#FEF5F1',
          300: '#FEF1EB',
          400: '#FEEDE5',
          500: '#FDE9DF',
          600: '#F5D6C8',
          700: '#E8C0AD',
          800: '#D8A88E',
          900: '#C08B6E',
        },
      },
      fontFamily: {
        // Tipografía arriesgada y fresca para títulos
        'display': ['var(--font-space-grotesk)', 'Nunito', 'system-ui', 'sans-serif'],
        // Tipografía moderna y cálida para cuerpo
        'sans': ['var(--font-dm-sans)', 'Nunito', 'Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'coral': '0 4px 16px rgba(255, 107, 107, 0.3)',
        'coral-lg': '0 8px 32px rgba(255, 107, 107, 0.4)',
        'peach': '0 4px 16px rgba(255, 160, 107, 0.3)',
        'success': '0 4px 16px rgba(52, 211, 153, 0.3)',
        'warning': '0 4px 16px rgba(251, 191, 36, 0.3)',
      },
    },
  },
  plugins: [],
}
