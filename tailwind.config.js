/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Concept A · Coastal Editorial ────────────────────────────────
        'a-bg':    '#F5F3EF', // warm off-white
        'a-ink':   '#1E1B18', // warm near-black
        'a-muted': '#8A7F76', // driftwood
        'a-rule':  '#DDD5C8', // warm rule line
        'a-slate': '#6E8A8F', // single coastal accent
        'a-sand':  '#C9B89A', // warm sand
        'a-dark':  '#1E1B18', // footer / dark sections

        // ── Concept B · Off-Duty Athletic ────────────────────────────────
        'b-bg':    '#FAFAF8', // bone white
        'b-ink':   '#1A1A1A', // strong
        'b-muted': '#787570', // warm grey
        'b-oat':   '#EDE8DE', // warm surface / hero right panel
        'b-clay':  '#B06A45', // terracotta — single accent
        'b-slate': '#5C6B74', // slate blue

        // ── Concept C · Quiet Resort ─────────────────────────────────────
        'c-bg':    '#FFFFFF', // pure white
        'c-linen': '#EDE6DA', // warm linen / product bg
        'c-ink':   '#1A1512', // warm deep black
        'c-muted': '#9A9088', // warm muted
        'c-sand':  '#C9B49A', // sun-bleached
        'c-rule':  '#E4DCD2', // subtle divider
      },

      fontFamily: {
        playfair:  ['"Playfair Display"', 'Georgia', 'serif'],
        inter:     ['Inter', 'system-ui', 'sans-serif'],
        nunito:    ['Nunito', 'sans-serif'],
        dm:        ['"DM Sans"', 'sans-serif'],
        'dm-serif':['DM Serif Display', 'Georgia', 'serif'],
        jost:      ['Jost', 'sans-serif'],
      },

      maxWidth: {
        editorial: '1320px',
        resort:    '1400px',
      },

      letterSpacing: {
        widest2: '0.22em',
      },

      keyframes: {
        fadeUp:  { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
        marquee:   'marquee 24s linear infinite',
      },
    },
  },
  plugins: [],
}
