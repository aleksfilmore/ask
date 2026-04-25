/**
 * Concept B — LA Sporty Angel
 * Identity: Social-native energy. Bold Nunito Black. Blush/rose. Split layouts. Mixed-size grid.
 * Layout: Split hero, staggered product asymmetry, scrolling photo strip, momentum.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConceptSwitcher from '../components/ConceptSwitcher'
import AskLogo from '../components/AskLogo'
import { images, hoodies, bags, navLinks } from '../brand'

const C = {
  bg: '#FEFEFE',
  surface: '#FDF5F6',
  ink: '#1A1A1A',
  muted: '#8A8080',
  blush: '#E8B4B8',
  rose: '#D4848C',
  pill: '#FDE8EA',
  heading: 'Nunito, sans-serif',
  body: '"DM Sans", sans-serif',
}

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: `${C.bg}f4`, backdropFilter: 'blur(12px)', borderBottom: `1.5px solid ${C.pill}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/concept-la-sporty" style={{ textDecoration: 'none' }}>
          <AskLogo color={C.ink} size="md" fontFamily={C.heading} />
        </Link>
        <nav className="hidden md:flex" style={{ gap: 32 }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} style={{ fontFamily: C.heading, fontSize: '0.82rem', fontWeight: 700, color: C.ink, opacity: 0.5, textDecoration: 'none', transition: 'opacity 0.2s', letterSpacing: '-0.01em' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')} onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}>{l.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button aria-label="Bag" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="2" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </button>
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.pill}`, padding: '20px 28px' }}>
          {navLinks.map(l => <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', fontFamily: C.heading, fontSize: '1.05rem', fontWeight: 700, color: C.ink, textDecoration: 'none', padding: '10px 0' }}>{l.label}</a>)}
        </div>
      )}
    </header>
  )
}

// ─── Split Hero ───────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{}} className="hero-split-2col" aria-label="Hero">
      {/* Left: stacked photos */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: 480 }}>
        <img src={images.rooftopPastels} alt="Women in pastel hoodies on LA rooftop" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        {/* floating tag */}
        <div style={{ position: 'absolute', bottom: 28, left: 24, backgroundColor: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(8px)', borderRadius: 999, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="live-blip" style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: C.blush, display: 'inline-block' }} aria-hidden="true" />
          <span style={{ fontFamily: C.heading, fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.06em', color: C.ink }}>Drop 02 — Peach Club</span>
        </div>
      </div>

      {/* Right: bold headline */}
      <div style={{ backgroundColor: C.surface, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '56px 48px' }}>
        <p style={{ fontFamily: C.heading, fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.blush, marginBottom: 20 }}>
          Drop 02 — Peach Club
        </p>
        <h1 style={{ fontFamily: C.heading, fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 900, color: C.ink, lineHeight: 1.06, margin: 0, marginBottom: 20, letterSpacing: '-0.02em' }}>
          LA energy,<br />even when<br />you're not in LA.
        </h1>
        <p style={{ fontFamily: C.body, fontSize: '0.95rem', color: C.muted, lineHeight: 1.65, marginBottom: 36, maxWidth: 340 }}>
          Not a trend. Made for the life you're actually living.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button style={{ backgroundColor: C.ink, color: '#fff', border: 'none', borderRadius: 999, padding: '14px 32px', fontFamily: C.heading, fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', cursor: 'pointer', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Explore the drop
          </button>
          <button style={{ backgroundColor: C.pill, color: C.rose, border: 'none', borderRadius: 999, padding: '14px 24px', fontFamily: C.heading, fontSize: '0.82rem', fontWeight: 800, cursor: 'pointer' }}>
            See lookbook
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
function Marquee() {
  const text = ' drop 02 · peach club · LA energy · not a trend · made for your actual life · '
  return (
    <div style={{ backgroundColor: C.blush, padding: '13px 0', overflow: 'hidden' }} aria-hidden="true">
      <div className="marquee-track" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{ fontFamily: C.heading, fontSize: '0.82rem', fontWeight: 800, color: '#fff', letterSpacing: '0.06em', textTransform: 'lowercase' }}>{text}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Asymmetric product grid ──────────────────────────────────────────────────
function ProductGrid() {
  const [hovered, setHovered] = useState<string | null>(null)
  const featured = hoodies[0]
  const rest = hoodies.slice(1, 4)

  return (
    <section style={{ backgroundColor: C.bg, padding: '72px 28px' }} id="shop" aria-label="Hoodies">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 36 }}>
          <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: C.ink, margin: 0, letterSpacing: '-0.02em' }}>New arrivals</h2>
          <button style={{ fontFamily: C.heading, fontSize: '0.78rem', fontWeight: 700, color: C.muted, background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.06em' }}>View all →</button>
        </div>

        {/* First row: 1 big + 2 small */}
        <div style={{ gap: 16, marginBottom: 16 }} className="product-grid-async">
          {/* Big card */}
          <div className="product-card" style={{ cursor: 'pointer', gridRow: '1 / 2', overflow: 'hidden', borderRadius: 20, backgroundColor: '#F5EEF0' }}
            onMouseEnter={() => setHovered(featured.id)} onMouseLeave={() => setHovered(null)}>
            <div style={{ overflow: 'hidden', position: 'relative', aspectRatio: '3/4' }}>
              <img src={featured.img} alt={featured.name} className="img-hover" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
              {hovered === featured.id && (
                <div className="quick-view" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 20, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)' }}>
                  <span style={{ fontFamily: C.heading, fontSize: '0.72rem', fontWeight: 800, color: '#fff', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)', borderRadius: 999, padding: '8px 18px' }}>Quick View</span>
                </div>
              )}
            </div>
            <div style={{ padding: '18px 20px 22px' }}>
              <h3 style={{ fontFamily: C.heading, fontSize: '1rem', fontWeight: 800, color: C.ink, margin: 0, marginBottom: 2, letterSpacing: '-0.01em' }}>{featured.name}</h3>
              <p style={{ fontFamily: C.body, fontSize: '0.78rem', color: C.muted, margin: 0, marginBottom: 10 }}>{featured.descriptor}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 6 }}>{featured.colors?.map(c => <span key={c} style={{ width: 13, height: 13, borderRadius: '50%', backgroundColor: c, border: '1.5px solid rgba(0,0,0,0.1)' }} />)}</div>
                <span style={{ fontFamily: C.heading, fontSize: '0.9rem', fontWeight: 800, color: C.ink }}>${featured.price}</span>
              </div>
            </div>
          </div>

          {/* Small cards */}
          {rest.map(p => (
            <div key={p.id} className="product-card" style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: 20, backgroundColor: '#F5EEF0' }}
              onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}>
              <div style={{ overflow: 'hidden', position: 'relative', aspectRatio: '1/1' }}>
                <img src={p.img} alt={p.name} className="img-hover" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                {hovered === p.id && (
                  <div className="quick-view" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 16, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 60%)' }}>
                    <span style={{ fontFamily: C.heading, fontSize: '0.68rem', fontWeight: 800, color: '#fff', backgroundColor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(6px)', borderRadius: 999, padding: '6px 14px' }}>Quick View</span>
                  </div>
                )}
              </div>
              <div style={{ padding: '14px 16px 18px' }}>
                <h3 style={{ fontFamily: C.heading, fontSize: '0.88rem', fontWeight: 800, color: C.ink, margin: 0, marginBottom: 2 }}>{p.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <div style={{ display: 'flex', gap: 5 }}>{p.colors?.map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: c, border: '1.5px solid rgba(0,0,0,0.1)' }} />)}</div>
                  <span style={{ fontFamily: C.heading, fontSize: '0.85rem', fontWeight: 800, color: C.ink }}>${p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Scrolling lookbook photo strip ───────────────────────────────────────────
function LookbookStrip() {
  const shots = [
    { src: images.sunsetGirls, label: '#softchaos' },
    { src: images.beachPortrait, label: '#askgirl' },
    { src: images.yellowBeach, label: '#californiamood' },
    { src: images.beachGroup, label: '#malibuvibes' },
    { src: images.laWindow, label: '#cleanfit' },
  ]
  return (
    <section style={{ backgroundColor: C.surface, padding: '64px 0' }} aria-label="Lookbook">
      <div style={{ padding: '0 28px', maxWidth: 1320, margin: '0 auto 24px' }}>
        <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, color: C.ink, margin: 0, letterSpacing: '-0.02em' }}>The lookbook</h2>
      </div>
      <div className="no-scrollbar" style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingLeft: 28, paddingRight: 28, paddingBottom: 4 }}>
        {shots.map((s, i) => (
          <div key={i} style={{ flexShrink: 0, width: 220, position: 'relative', borderRadius: 20, overflow: 'hidden' }}>
            <img src={s.src} alt={s.label} style={{ width: '100%', height: 300, objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 14, left: 12, backgroundColor: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)', borderRadius: 999, padding: '5px 12px' }}>
              <span style={{ fontFamily: C.heading, fontSize: '0.7rem', fontWeight: 800, color: C.ink }}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Bags section ────────────────────────────────────────────────────────────
function BagsSection() {
  const [hovered, setHovered] = useState<string | null>(null)
  return (
    <section style={{ backgroundColor: C.bg, padding: '72px 28px' }} id="bags" aria-label="Bags and accessories">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 36 }}>
          <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 900, color: C.ink, margin: 0, letterSpacing: '-0.02em' }}>Carry everything</h2>
        </div>
        <div style={{ gap: 16 }} className="product-grid-3col">
          {bags.slice(0, 6).map(p => (
            <div key={p.id} className="product-card" style={{ cursor: 'pointer', borderRadius: 20, overflow: 'hidden', backgroundColor: C.surface }}
              onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}>
              <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1/1', backgroundColor: '#F5EDE8' }}>
                <img src={p.img} alt={p.name} className="img-hover" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', padding: 16 }} />
                {hovered === p.id && (
                  <div className="quick-view" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(232,180,184,0.12)' }}>
                    <span style={{ fontFamily: C.heading, fontSize: '0.72rem', fontWeight: 800, color: C.ink, backgroundColor: 'rgba(255,255,255,0.9)', borderRadius: 999, padding: '8px 18px' }}>Quick View</span>
                  </div>
                )}
              </div>
              <div style={{ padding: '14px 18px 18px' }}>
                <h3 style={{ fontFamily: C.heading, fontSize: '0.9rem', fontWeight: 800, color: C.ink, margin: 0, marginBottom: 2 }}>{p.name}</h3>
                <p style={{ fontFamily: C.body, fontSize: '0.75rem', color: C.muted, margin: 0, marginBottom: 8 }}>{p.descriptor}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 5 }}>{p.colors?.map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: c, border: '1.5px solid rgba(0,0,0,0.1)' }} />)}</div>
                  <span style={{ fontFamily: C.heading, fontSize: '0.88rem', fontWeight: 800, color: C.ink }}>${p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Energy banner ─────────────────────────────────────────────────────────────
function EnergyBanner() {
  return (
    <div style={{ position: 'relative', height: 420, overflow: 'hidden' }} aria-hidden="true">
      <img src={images.couchLifestyle} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(232,180,184,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
        <p style={{ fontFamily: C.heading, fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', textAlign: 'center', margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          Wear it your way.
        </p>
        <p style={{ fontFamily: C.body, fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginTop: 16 }}>
          New colorways dropping soon.
        </p>
      </div>
    </div>
  )
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <section style={{ backgroundColor: C.pill, padding: '80px 28px', textAlign: 'center' }} id="newsletter">
      <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: C.ink, margin: 0, marginBottom: 8, letterSpacing: '-0.02em' }}>Drop alerts. No spam.</h2>
      <p style={{ fontFamily: C.body, fontSize: '0.9rem', color: C.muted, marginBottom: 36 }}>Sign up and we'll hit you when something drops. That's it.</p>
      {done ? (
        <p style={{ fontFamily: C.heading, fontSize: '1.2rem', fontWeight: 800, color: C.rose }}>You're on the list 🌸</p>
      ) : (
        <form onSubmit={e => { e.preventDefault(); if (email) setDone(true) }} style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <label htmlFor="newsletter-b" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Email address</label>
          <input id="newsletter-b" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="drop my email here" style={{ flex: '1 1 220px', maxWidth: 300, backgroundColor: '#fff', border: 'none', borderRadius: 999, padding: '14px 22px', fontFamily: C.body, fontSize: '0.9rem', color: C.ink, outline: 'none', boxShadow: '0 2px 12px rgba(212,132,140,0.12)' }} />
          <button type="submit" style={{ backgroundColor: C.rose, color: '#fff', border: 'none', borderRadius: 999, padding: '14px 28px', fontFamily: C.heading, fontSize: '0.82rem', fontWeight: 800, cursor: 'pointer', transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            I'm in
          </button>
        </form>
      )}
    </section>
  )
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ backgroundColor: C.ink, padding: '36px 28px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <AskLogo color="#fff" size="sm" fontFamily={C.heading} />
        <p style={{ fontFamily: C.body, fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2025 așk — prototype</p>
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ConceptLASporty() {
  return (
    <div style={{ backgroundColor: C.bg, fontFamily: C.body }}>
      <ConceptSwitcher />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ProductGrid />
        <LookbookStrip />
        <EnergyBanner />
        <BagsSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
