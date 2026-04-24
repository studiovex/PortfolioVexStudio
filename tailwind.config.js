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
          DEFAULT: '#050508',
          secondary: '#0A0A10',
          tertiary: '#101018',
          card: '#0D0D14',
        },
        surface: {
          DEFAULT: '#14141E',
          hover: '#1A1A28',
        },
        cream: {
          DEFAULT: '#EDEBE4',
          muted: '#8B8998',
          dark: '#55536A',
        },
        vex: {
          green: {
            DEFAULT: '#00F587',
            light: '#4DFFA8',
            dark: '#00C46E',
          },
          violet: {
            DEFAULT: '#8B5CF6',
            light: '#A78BFA',
            dark: '#6D28D9',
          },
        },
        accent: {
          blue: '#38BDF8',
          orange: '#FB923C',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
