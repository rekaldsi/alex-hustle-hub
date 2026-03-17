/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: { DEFAULT: '#FF2D78', 500: '#FF2D78' },
        yellow: { DEFAULT: '#FFE600', 500: '#FFE600' },
        mint: { DEFAULT: '#00E5A0', 500: '#00E5A0' },
        purple: { DEFAULT: '#8B5CF6', 500: '#8B5CF6' },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
