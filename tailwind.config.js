// Every integer 0–100 so modifiers like `text-white/58` or `bg-ivory/97` generate CSS.
const opacity = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)])
)

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      opacity,
      colors: {
        ivory: '#FAF7F2',
        'ivory-mid': '#F0EBE3',
        teak: '#1A0F08',
        'teak-mid': '#3D2415',
        'teak-light': '#7A5C3F',
        gold: '#8A7A2E',
        'gold-warm': '#B59A45',
        'gold-light': '#D4C07A',
        cream: '#FAF7F2',
        panel: '#F2ECE4',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Cormorant"', 'Garamond', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Jost"', '"Futura"', '"Century Gothic"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      // Body copy reads at 15px instead of 14px; labels/buttons at 12.5px instead of 12px.
      fontSize: {
        xs: ['0.78125rem', { lineHeight: '1.6' }],
        sm: ['0.9375rem', { lineHeight: '1.75' }],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.03em',
        'heading': '-0.035em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
