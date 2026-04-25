import { Link, useLocation } from 'react-router-dom'

const CONCEPTS = [
  { id: 'malibu',  label: 'A — Malibu',    route: '/concept-malibu',      accent: '#C4A882' },
  { id: 'sporty',  label: 'B — LA Sporty',  route: '/concept-la-sporty',   accent: '#E8B4B8' },
  { id: 'luxury',  label: 'C — Soft Luxury',route: '/concept-soft-luxury', accent: '#C8B89A' },
]

export default function ConceptSwitcher() {
  const { pathname } = useLocation()

  return (
    <nav
      aria-label="Concept switcher"
      style={{ position: 'sticky', top: 0, zIndex: 100, display: 'flex', justifyContent: 'center', padding: '10px 24px', backgroundColor: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
    >
      <div style={{ display: 'flex', gap: 3, backgroundColor: 'rgba(0,0,0,0.05)', borderRadius: 999, padding: 3 }}>
        {CONCEPTS.map(c => {
          const active = pathname === c.route || (pathname === '/' && c.route === '/concept-malibu')
          return (
            <Link
              key={c.id}
              to={c.route}
              aria-current={active ? 'page' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '7px 18px', borderRadius: 999, textDecoration: 'none',
                fontSize: '0.7rem', fontFamily: 'Jost, Inter, sans-serif',
                fontWeight: active ? 500 : 400, letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: active ? '#1a1a1a' : 'rgba(0,0,0,0.4)',
                backgroundColor: active ? '#ffffff' : 'transparent',
                boxShadow: active ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.2s ease', whiteSpace: 'nowrap',
              }}
            >
              {active && <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: c.accent, flexShrink: 0 }} aria-hidden="true" />}
              {c.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
