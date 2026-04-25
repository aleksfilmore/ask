import { Link } from 'react-router-dom'
import AskLogo from '../components/AskLogo'
import { proposalCards } from '../brand'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5F3EF', fontFamily: 'Jost, sans-serif', padding: '48px 24px 72px' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 52 }}>
        <AskLogo color="#1C1714" size="lg" fontFamily='"Cormorant Garamond", Georgia, serif' />
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9A9088', marginTop: 16, marginBottom: 16, fontWeight: 300 }}>
          Brand prototype — choose a direction
        </p>
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.88rem', color: '#6B6159', maxWidth: 480, margin: '0 auto', lineHeight: 1.8, fontWeight: 300 }}>
          Activewear, hoodies, bags &amp; accessories — California attitude, Romanian heart.
          <br />Three visual directions for the first drop. Pick the one that feels right.
        </p>
      </div>

      {/* Concept cards grid — stacks 1→2→3 columns */}
      <div style={{ maxWidth: 1100, margin: '0 auto 56px', gap: 20 }} className="concept-cards-grid">
        {proposalCards.map(c => (
          <Link key={c.id} to={c.route} style={{ textDecoration: 'none', display: 'block' }}>
            <article
              style={{
                borderRadius: 16, overflow: 'hidden', backgroundColor: '#fff',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer',
                height: '100%',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.11)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)'
              }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img
                  src={c.img}
                  alt={c.imgAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
                {/* gradient veil */}
                <div
                  style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.02) 48%, transparent 100%)' }}
                  aria-hidden="true"
                />

                {/* Concept label pill */}
                <div style={{ position: 'absolute', top: 16, left: 16, backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', borderRadius: 999, padding: '5px 13px', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: c.accent, display: 'inline-block', flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.63rem', fontWeight: 500, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#1a1a1a' }}>
                    Concept {c.label}
                  </span>
                </div>

                {/* Overlay text */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '28px 22px 20px' }}>
                  <h2
                    style={{
                      fontFamily: c.headingFont,
                      fontSize: '1.5rem',
                      color: '#fff',
                      margin: 0,
                      marginBottom: 7,
                      lineHeight: 1.15,
                      fontWeight: c.headingWeight,
                      fontStyle: c.headingStyle ?? 'normal',
                    }}
                  >
                    {c.name}
                  </h2>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.62)', margin: 0, fontWeight: 300 }}>
                    {c.cta} →
                  </p>
                </div>
              </div>

              {/* Card footer */}
              <div style={{ padding: '16px 22px 20px', backgroundColor: '#fff' }}>
                <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.75rem', color: '#888', margin: 0, lineHeight: 1.55, fontWeight: 300 }}>
                  {c.tagline}
                </p>
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span
                    style={{
                      fontFamily: 'Jost, sans-serif', fontSize: '0.63rem', fontWeight: 500,
                      letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1C1714',
                      backgroundColor: '#F0EDE8', borderRadius: 999, padding: '5px 14px',
                    }}
                  >
                    View concept →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Footnote */}
      <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.72rem', color: '#B0A79F', textAlign: 'center', maxWidth: 440, margin: '0 auto', lineHeight: 1.8, fontWeight: 300 }}>
        Three layouts, three palettes, three typographic systems.
        <br />Use the bar at the top of each page to switch between concepts.
      </p>
    </div>
  )
}
