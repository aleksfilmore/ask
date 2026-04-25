/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Concept A — Malibu Clean Girl
        cream: '#FFF8F0',
        sand: '#E8D5B7',
        peach: '#F4A98A',
        'pale-yellow': '#F7E4A0',
        'soft-blue': '#C8DFF0',
        // Concept B — LA Sporty Angel
        bubblegum: '#FFB3D1',
        'peach-b': '#FFB899',
        'sky-b': '#87CEEB',
        chrome: '#C0C0C0',
        // Concept C — Soft Luxury
        ivory: '#F5F0E8',
        'muted-peach': '#DEB5A0',
        champagne: '#E8D5B7',
        charcoal: '#2C2C2C',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in': 'slideIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
