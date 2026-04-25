import { Link } from 'react-router-dom'
import AskLogo from '../components/AskLogo'
import { images } from '../brand'

const concepts = [
  {
    id: 'malibu',
    route: '/concept-malibu',
    label: 'A',
    name: 'Malibu Magazine',
    tagline: 'Editorial. Warm ivory. Italic serif. Photography-first.',
    img: images.rooftopSunset,
    imgAlt: 'Women in earth-tone hoodies at golden-hour LA rooftop',
    accent: '#C4A882',
    headingFont: '"Playfair Display", Georgia, serif',
    headingStyle: { fontStyle: 'italic' as const, fontWeight: 400 },
    cta: 'Shop the first drop',
    bg: '#F8F6F2',
    text: '#1C1714',
  },
  {
    id: 'sporty',
    route: '/concept-la-sporty',
    label: 'B',
    name: 'LA Sporty Angel',
    tagline: 'Bold. Split layout. Blush accents. Social-native energy.',
    img: images.rooftopPastels,
    imgAlt: 'Women in pastel hoodies on LA rooftop, energetic',
    accent: '#E8B4B8',
    headingFont: 'Nunito, sans-serif',
    headingStyle: { fontWeight: 900 },
    cta: 'Explore the drop',
    bg: '#FEFEFE',
    text: '#1A1A1A',
  },
  {
    id: 'luxury',
    route: '/concept-soft-luxury',
    label: 'C',
    name: 'Soft Luxury',
    tagline: 'Quiet. Pure white. One product per row. Maximum space.',
    img: images.studioSets,
    imgAlt: 'Women in earth-tone matching sets, LA studio',
    accent: '#C8B89A',
    headingFont: '"Cormorant Garamond", Georgia, serif',
    headingStyle: { fontWeight: 300 },
    cta: 'View collection',
    bg: '#FFFFFF',
    text: '#111111',
  },
]

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5F3EF', fontFamily: 'Jost, sans-serif', padding: '48px 24px 64px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <AskLogo color="#1C1714" size="lg" fontFamily='"Cormorant Garamond", Georgia, serif' />
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9A9088', marginTop: 14, marginBottom: 0, fontWeight: 300 }}>
          Brand prototype — choose a direction
        </p>
      </div>

      {/* Concept cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 1100, margin: '0 auto 52px' }} className="grid-cols-1 md:grid-cols-3">
        {concepts.map(c => (
          <Link key={c.id} to={c.route} style={{ textDecoration: 'none' }}>
            <article
              style={{ borderRadius: 16, overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 2px 16px rgba(0,0,0,0.06)', transition: 'transform 0.3s ease, box-shadow 0.3s ease', cursor: 'pointer' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-5px)'; el.style.boxShadow = '0 16px 48px rgba(0,0,0,0.12)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)' }}
            >
              {/* Photo preview */}
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <img src={c.img} alt={c.imgAlt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                {/* subtle dark overlay for text legibility */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.02) 50%, transparent 100%)' }} aria-hidden="true" />

                {/* Label pill */}
                <div style={{ position: 'absolute', top: 16, left: 16, backgroundColor: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(8px)', borderRadius: 999, padding: '5px 14px', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: c.accent, display: 'inline-block', flexShrink: 0 }} aria-hidden="true" />
                  <span style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1a1a1a' }}>
                    Concept {c.label}
                  </span>
                </div>

                {/* Bottom text */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 20px 20px' }}>
                  <h2 style={{ fontFamily: c.headingFont, fontSize: '1.55rem', color: '#fff', margin: 0, marginBottom: 6, lineHeight: 1.15, ...c.headingStyle }}>
                    {c.name}
                  </h2>
                  <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', margin: 0, fontWeight: 300 }}>
                    {c.cta} →
                  </p>
                </div>
              </div>

              {/* Card footer */}
              <div style={{ padding: '16px 20px 18px', backgroundColor: '#fff' }}>
                <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.75rem', color: '#888', margin: 0, lineHeight: 1.5, fontWeight: 300 }}>
                  {c.tagline}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Footnote */}
      <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '0.73rem', color: '#AAA09A', textAlign: 'center', maxWidth: 420, margin: '0 auto', lineHeight: 1.75, fontWeight: 300 }}>
        Three completely different layouts, palettes and typographic systems.<br />
        Use the tab bar at the top of each page to switch between concepts.
      </p>
    </div>
  )
}
