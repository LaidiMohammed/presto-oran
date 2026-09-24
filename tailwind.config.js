/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#0a0a0b',
          900: '#121214',
          800: '#1c1c1f',
          700: '#2a2a2e',
          600: '#3f3f45'
        },
        gold: {
          300: '#e8cf8f',
          400: '#d9b96a',
          500: '#c9a24b',
          600: '#a8833a'
        },
        cream: '#f5f0e8',
        smoke: '#8e8e93'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      letterSpacing: { mega: '0.35em' },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 55s linear infinite',
        kenburns: 'kenburns 18s ease-in-out infinite alternate',
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 7s ease-in-out infinite'
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        kenburns: { '0%': { transform: 'scale(1) translate(0,0)' }, '100%': { transform: 'scale(1.15) translate(-1.5%,1.5%)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } }
      }
    }
  },
  plugins: []
};
