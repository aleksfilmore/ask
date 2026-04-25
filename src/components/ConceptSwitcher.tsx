import { Link, useLocation } from 'react-router-dom'
import { concepts } from '../brand'

interface ConceptSwitcherProps {
  floating?: boolean
}

const conceptRoutes = {
  malibu: '/concept-malibu',
  sporty: '/concept-la-sporty',
  luxury: '/concept-soft-luxury',
}

const conceptAccents = {
  malibu: '#F4A98A',
  sporty: '#FFB3D1',
  luxury: '#DEB5A0',
}

export default function ConceptSwitcher({ floating = false }: ConceptSwitcherProps) {
  const location = useLocation()

  const isActive = (route: string) => location.pathname === route || (location.pathname === '/' && route === '/concept-malibu')

  return (
    <nav
      aria-label="Concept switcher"
      style={{
        position: floating ? 'fixed' : 'sticky',
        top: floating ? 'auto' : 0,
        bottom: floating ? 24 : 'auto',
        left: floating ? '50%' : 'auto',
        transform: floating ? 'translateX(-50%)' : 'none',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: floating ? 0 : '16px 24px',
        backgroundColor: floating ? 'transparent' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: floating ? 'none' : '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 4,
          backgroundColor: floating ? 'rgba(20,20,20,0.88)' : 'rgba(0,0,0,0.06)',
          borderRadius: 999,
          padding: 4,
          backdropFilter: floating ? 'blur(16px)' : 'none',
          boxShadow: floating ? '0 8px 32px rgba(0,0,0,0.18)' : 'none',
        }}
      >
        {concepts.map(concept => {
          const route = conceptRoutes[concept.id]
          const active = isActive(route)
          const accent = conceptAccents[concept.id]

          return (
            <Link
              key={concept.id}
              to={route}
              aria-current={active ? 'page' : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 20px',
                borderRadius: 999,
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: active ? 600 : 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: active ? (floating ? '#1a1a1a' : '#1a1a1a') : (floating ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.45)'),
                backgroundColor: active ? (floating ? '#ffffff' : '#ffffff') : 'transparent',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
                boxShadow: active ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
              }}
            >
              {active && (
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: accent,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
              )}
              {concept.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
