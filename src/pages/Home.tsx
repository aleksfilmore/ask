import { Link } from 'react-router-dom'
import AskLogo from '../components/AskLogo'
import { concepts } from '../brand'

const conceptRoutes = {
  malibu: '/concept-malibu',
  sporty: '/concept-la-sporty',
  luxury: '/concept-soft-luxury',
}

const conceptGradients = {
  malibu: 'gradient-malibu-hero',
  sporty: 'gradient-sporty-hero',
  luxury: 'gradient-luxury-hero',
}

const conceptAccents = {
  malibu: '#F4A98A',
  sporty: '#FFB3D1',
  luxury: '#DEB5A0',
}

const conceptHeadingFonts = {
  malibu: '"Playfair Display", Georgia, serif',
  sporty: 'Nunito, sans-serif',
  luxury: '"Cormorant Garamond", Georgia, serif',
}

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#FAFAF8',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <AskLogo color="#2C2C2C" size="lg" />
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.8rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#2C2C2C',
            opacity: 0.4,
            marginTop: 12,
            marginBottom: 0,
          }}
        >
          Brand prototype — choose a direction
        </p>
      </div>

      {/* Concept cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: 20, maxWidth: 1100, width: '100%', marginBottom: 56 }}
      >
        {concepts.map(concept => (
          <Link
            key={concept.id}
            to={conceptRoutes[concept.id]}
            style={{ textDecoration: 'none' }}
            aria-label={`Preview concept ${concept.label}: ${concept.name}`}
          >
            <div
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 2px 20px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)'
              }}
            >
              {/* Preview gradient */}
              <div
                className={conceptGradients[concept.id]}
                style={{
                  aspectRatio: '3/4',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 28,
                }}
              >
                {/* Concept label pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    left: 20,
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: 999,
                    padding: '6px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: '50%',
                      backgroundColor: conceptAccents[concept.id],
                      display: 'inline-block',
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#1a1a1a',
                    }}
                  >
                    {concept.label}
                  </span>
                </div>

                {/* Preview wordmark */}
                <div
                  style={{
                    fontFamily: conceptHeadingFonts[concept.id],
                    fontSize: '3.5rem',
                    fontWeight: concept.id === 'luxury' ? 300 : concept.id === 'sporty' ? 800 : 500,
                    color: 'rgba(255,255,255,0.3)',
                    lineHeight: 1,
                    userSelect: 'none',
                    fontStyle: concept.id === 'malibu' ? 'italic' : 'normal',
                    letterSpacing: '0.08em',
                    marginBottom: 16,
                  }}
                  aria-hidden="true"
                >
                  așk
                </div>

                {/* Hero text preview */}
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.65)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 12,
                    padding: '14px 16px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: conceptHeadingFonts[concept.id],
                      fontSize: '0.95rem',
                      fontWeight: concept.id === 'luxury' ? 400 : concept.id === 'sporty' ? 700 : 500,
                      color: '#1a1a1a',
                      margin: 0,
                      marginBottom: 4,
                      fontStyle: concept.id === 'malibu' ? 'italic' : 'normal',
                    }}
                  >
                    {concept.heroHeadline.replace('\n', ' ')}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.72rem',
                      color: '#1a1a1a',
                      opacity: 0.55,
                      margin: 0,
                    }}
                  >
                    {concept.heroCta} →
                  </p>
                </div>
              </div>

              {/* Card footer */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '18px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#1a1a1a',
                      margin: 0,
                      marginBottom: 2,
                    }}
                  >
                    {concept.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.73rem',
                      color: '#888',
                      margin: 0,
                    }}
                  >
                    {concept.tagline}
                  </p>
                </div>
                <span
                  style={{
                    backgroundColor: conceptAccents[concept.id],
                    borderRadius: 999,
                    padding: '8px 16px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    letterSpacing: '0.06em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Preview →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom note */}
      <p
        style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.78rem',
          color: '#888',
          textAlign: 'center',
          maxWidth: 480,
          lineHeight: 1.7,
        }}
      >
        Each concept is a fully separate landing page with its own palette, typography and layout.
        Click any card to explore it, then use the tab bar at the top to switch between concepts.
      </p>
    </div>
  )
}
