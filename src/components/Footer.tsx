import type { ConceptId } from '../brand'
import AskLogo from './AskLogo'

interface FooterProps {
  concept: ConceptId
  bgColor?: string
  textColor?: string
  borderColor?: string
  fontFamily?: string
  logoColor?: string
}

const InstagramIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const TikTokIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.03a8.16 8.16 0 0 0 4.77 1.52V7.13a4.85 4.85 0 0 1-1-.44z" />
  </svg>
)

const PinterestIcon = ({ color }: { color: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={color} aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
)

const footerLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'About', href: '#about' },
  { label: 'Shipping', href: '#' },
  { label: 'Returns', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Privacy', href: '#' },
]

export default function Footer({
  concept,
  bgColor,
  textColor = '#3A2E28',
  borderColor = '#E8D5B7',
  fontFamily,
  logoColor,
}: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor: bgColor,
        borderTop: `1px solid ${borderColor}`,
        padding: '48px 24px 32px',
      }}
      aria-label="Site footer"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          className="flex flex-col md:flex-row"
          style={{ justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, marginBottom: 40 }}
        >
          {/* Logo + tagline */}
          <div>
            <AskLogo color={logoColor ?? textColor} size="md" fontFamily={fontFamily} />
            <p
              style={{
                fontFamily,
                fontSize: '0.82rem',
                color: textColor,
                opacity: 0.5,
                margin: '12px 0 0',
                maxWidth: 220,
                lineHeight: 1.6,
              }}
            >
              Soft pieces for sunny routines. Made with intention.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul
              className="grid grid-cols-2 md:grid-cols-3"
              style={{ listStyle: 'none', margin: 0, padding: 0, gap: '10px 32px' }}
            >
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily,
                      fontSize: '0.78rem',
                      color: textColor,
                      opacity: 0.6,
                      textDecoration: 'none',
                      letterSpacing: '0.06em',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div>
            <p
              style={{
                fontFamily,
                fontSize: '0.7rem',
                color: textColor,
                opacity: 0.45,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Follow
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="#" aria-label="Instagram" style={{ opacity: 0.6, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}>
                <InstagramIcon color={logoColor ?? textColor} />
              </a>
              <a href="#" aria-label="TikTok" style={{ opacity: 0.6, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}>
                <TikTokIcon color={logoColor ?? textColor} />
              </a>
              <a href="#" aria-label="Pinterest" style={{ opacity: 0.6, transition: 'opacity 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}>
                <PinterestIcon color={logoColor ?? textColor} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${borderColor}`,
            paddingTop: 20,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <p
            style={{
              fontFamily,
              fontSize: '0.72rem',
              color: textColor,
              opacity: 0.4,
              margin: 0,
              letterSpacing: '0.04em',
            }}
          >
            © 2025 așk. All rights reserved.
          </p>
          <p
            style={{
              fontFamily,
              fontSize: '0.72rem',
              color: textColor,
              opacity: 0.3,
              margin: 0,
              letterSpacing: '0.04em',
            }}
          >
            Prototype — not for sale.
          </p>
        </div>
      </div>
    </footer>
  )
}
