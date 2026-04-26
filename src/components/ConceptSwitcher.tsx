import { Link, useLocation } from 'react-router-dom'

const CONCEPTS = [
  { id: 'malibu',  label: 'A — Malibu Clean', route: '/concept-malibu',      accent: '#E8A870' },
  { id: 'sporty',  label: 'B — LA Sporty',     route: '/concept-la-sporty',   accent: '#F0DC5A' },
  { id: 'luxury',  label: 'C — Soft Luxury',   route: '/concept-soft-luxury', accent: '#7ABAAA' },
]

export default function ConceptSwitcher() {
  const { pathname } = useLocation()

  return (
    <nav
      aria-label="Concept switcher"
      style={{
        position: 'sticky', top: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '9px 20px',
        backgroundColor: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
        flexWrap: 'wrap', justifyContent: 'center',
      }}
    >
      {/* Back to overview */}
      <Link
        to="/"
        aria-label="Back to concept overview"
        style={{
          fontFamily: 'Jost, Inter, sans-serif', fontSize: '0.63rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'rgba(0,0,0,0.36)', textDecoration: 'none',
          transition: 'color 0.2s', flexShrink: 0,
          paddingRight: 4,
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.78)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(0,0,0,0.36)')}
      >
        ← Overview
      </Link>

      {/* Divider */}
      <div style={{ width: 1, height: 14, backgroundColor: 'rgba(0,0,0,0.12)', flexShrink: 0 }} aria-hidden="true" />

      {/* Concept tabs */}
      <div style={{ display: 'flex', gap: 3, backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 999, padding: 3 }}>
        {CONCEPTS.map(c => {
          const active = pathname === c.route
          return (
            <Link
              key={c.id}
              to={c.route}
              aria-current={active ? 'page' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '7px 16px', borderRadius: 999, textDecoration: 'none',
                fontSize: '0.66rem', fontFamily: 'Jost, Inter, sans-serif',
                fontWeight: active ? 500 : 400, letterSpacing: '0.09em',
                textTransform: 'uppercase',
                color: active ? '#1a1a1a' : 'rgba(0,0,0,0.4)',
                backgroundColor: active ? '#ffffff' : 'transparent',
                boxShadow: active ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s ease', whiteSpace: 'nowrap',
              }}
            >
              {active && (
                <span
                  style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: c.accent, flexShrink: 0 }}
                  aria-hidden="true"
                />
              )}
              {c.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
