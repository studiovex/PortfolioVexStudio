/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#05050A',
          secondary: '#090910',
          tertiary: '#0E0E18',
        },
        surface: '#13131E',
        cream: {
          DEFAULT: '#F0EDE6',
          muted: '#9896A0',
          dark: '#5A5864',
        },
        vex: {
          green: {
            DEFAULT: '#00F587',
            dark: '#00C46E',
          },
          violet: {
            DEFAULT: '#8B47FF',
            dark: '#6A2FE0',
          },
          steel: '#A0A0B0',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        num: ['Bebas Neue', 'sans-serif'],
        italic: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
