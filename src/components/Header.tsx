import { useState } from 'react'
import { Link } from 'react-router-dom'
import AskLogo from './AskLogo'
import { navLinks, type ConceptId } from '../brand'

interface HeaderProps {
  concept: ConceptId
  bgColor?: string
  textColor?: string
  borderColor?: string
  fontFamily?: string
  logoColor?: string
}

const SearchIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const AccountIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
)

const BagIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const MenuIcon = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const CloseIcon = ({ color }: { color: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export default function Header({
  concept,
  bgColor = '#FFF8F0',
  textColor = '#3A2E28',
  borderColor = '#E8D5B7',
  fontFamily,
  logoColor,
}: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const logoRoute = concept === 'malibu' ? '/concept-malibu' : concept === 'sporty' ? '/concept-la-sporty' : '/concept-soft-luxury'

  return (
    <header
      style={{
        backgroundColor: bgColor,
        borderBottom: `1px solid ${borderColor}`,
        fontFamily: fontFamily,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
      }}
    >
      <div
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}
        className="flex items-center justify-between h-16 md:h-20"
      >
        {/* Logo */}
        <Link to={logoRoute} aria-label="așk home">
          <AskLogo color={logoColor ?? textColor} size="md" fontFamily={fontFamily} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: textColor,
                fontFamily: fontFamily,
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                opacity: 0.75,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-4 md:gap-5">
          <button aria-label="Search" className="hidden md:flex" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <SearchIcon color={textColor} />
          </button>
          <button aria-label="Account" className="hidden md:flex" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <AccountIcon color={textColor} />
          </button>
          <button aria-label="Shopping bag" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, position: 'relative' }}>
            <BagIcon color={textColor} />
            <span
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: concept === 'sporty' ? '#FFB3D1' : '#F4A98A',
              }}
            />
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          >
            {menuOpen ? <CloseIcon color={textColor} /> : <MenuIcon color={textColor} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          style={{
            backgroundColor: bgColor,
            borderTop: `1px solid ${borderColor}`,
            padding: '24px',
          }}
          aria-label="Mobile navigation"
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: textColor,
                    fontFamily: fontFamily,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
