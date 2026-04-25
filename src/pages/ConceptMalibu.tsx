/**
 * Concept A — Malibu Magazine
 * Identity: Vogue-editorial. Warm ivory. Large italic Playfair. Photos do everything.
 * Layout: Asymmetric. Full-bleed imagery. Editorial feature rows. Staggered grid.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConceptSwitcher from '../components/ConceptSwitcher'
import AskLogo from '../components/AskLogo'
import { images, hoodies, bags, navLinks } from '../brand'

const C = {
  bg: '#F8F6F2',
  ink: '#1C1714',
  muted: '#8A7E75',
  rule: '#E2DBD3',
  accent: '#C4A882',
  heading: '"Playfair Display", Georgia, serif',
  body: 'Inter, sans-serif',
}

// ─── Header ──────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: `${C.bg}f0`, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.rule}` }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/concept-malibu" style={{ textDecoration: 'none' }}>
          <AskLogo color={C.ink} size="md" fontFamily={C.heading} />
        </Link>
        <nav className="hidden md:flex" style={{ gap: 36 }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} style={{ fontFamily: C.body, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.ink, opacity: 0.55, textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')} onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}>{l.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <button aria-label="Bag" style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', padding: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </button>
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.rule}`, padding: '24px 32px' }}>
          {navLinks.map(l => <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', fontFamily: C.body, fontSize: '1rem', color: C.ink, textDecoration: 'none', padding: '10px 0' }}>{l.label}</a>)}
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position: 'relative', height: '95vh', minHeight: 600, overflow: 'hidden' }} aria-label="Hero">
      <img src={images.rooftopSunset} alt="Women in așk hoodies at golden hour, LA rooftop" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      {/* dark veil */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,16,12,0.52) 0%, rgba(20,16,12,0.08) 55%, transparent 100%)' }} aria-hidden="true" />

      {/* Oversized watermark — editorial logo treatment */}
      <div
        style={{ position: 'absolute', bottom: -48, right: -16, fontFamily: C.heading, fontSize: 'clamp(9rem, 24vw, 22rem)', fontStyle: 'italic', fontWeight: 500, color: 'rgba(255,255,255,0.055)', letterSpacing: '0.08em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none', overflow: 'hidden' }}
        aria-hidden="true"
      >
        așk
      </div>

      {/* Bottom-left editorial text block */}
      <div style={{ position: 'absolute', bottom: 56, left: 40, maxWidth: 540 }} className="animate-fade-up">
        <p style={{ fontFamily: C.body, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,248,240,0.65)', marginBottom: 18 }}>
          Drop 01 — Malibu Morning
        </p>
        <h1 style={{ fontFamily: C.heading, fontSize: 'clamp(2.6rem, 6vw, 5.2rem)', fontWeight: 400, fontStyle: 'italic', color: '#F8F5F0', lineHeight: 1.08, margin: 0, marginBottom: 28, letterSpacing: '-0.01em' }}>
          late mornings,<br />clean sets,<br />no rush.
        </h1>
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: C.body, fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F8F5F0', textDecoration: 'underline', textUnderlineOffset: 5, padding: 0, transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Shop the first drop
        </button>
      </div>

      {/* Issue number — top right */}
      <div style={{ position: 'absolute', top: 32, right: 36 }} aria-hidden="true">
        <p style={{ fontFamily: C.heading, fontSize: '0.78rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>Vol. I</p>
      </div>
    </section>
  )
}

// ─── Editorial intro ──────────────────────────────────────────────────────────
function EditorialIntro() {
  return (
    <section style={{ backgroundColor: C.bg, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1320, margin: '0 auto' }} className="editorial-about-grid">
        <div>
          <p style={{ fontFamily: C.body, fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 20 }}>
            About așk
          </p>
          <p style={{ fontFamily: C.body, fontSize: '0.92rem', color: C.ink, lineHeight: 1.85, opacity: 0.72, marginBottom: 24, maxWidth: 320 }}>
            Started at 15 with one standard: nothing makes it in unless it's worth reaching for. Hoodies with real details. Bags you'll actually keep. Accessories that earn their place.
          </p>
          <p style={{ fontFamily: C.body, fontSize: '0.92rem', color: C.ink, lineHeight: 1.85, opacity: 0.72, maxWidth: 320 }}>
            California light, Romanian heart.
          </p>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 4 }}>
          <img src={images.couchLifestyle} alt="Women in pastel hoodies relaxing indoors, lifestyle" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} className="img-hover" />
        </div>
      </div>
    </section>
  )
}

// ─── Editorial Feature — first product, full-bleed spread ─────────────────
function EditorialFeature({ product }: { product: typeof hoodies[0] }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ position: 'relative', height: '85vh', minHeight: 560, overflow: 'hidden', borderTop: `1px solid ${C.rule}` }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >
      <img
        src={product.img} alt={product.name}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', transform: hovered ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,16,12,0.64) 0%, rgba(20,16,12,0.12) 48%, transparent 72%)' }} aria-hidden="true" />

      {/* Issue marker */}
      <div style={{ position: 'absolute', top: 36, right: 44 }} aria-hidden="true">
        <p style={{ fontFamily: C.heading, fontStyle: 'italic', fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', margin: 0 }}>No. 01</p>
      </div>

      {/* Bottom-left editorial caption */}
      <div style={{ position: 'absolute', bottom: 56, left: 44, maxWidth: 520 }}>
        <p style={{ fontFamily: C.body, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,248,240,0.5)', marginBottom: 16 }}>
          Hoodies — Drop 01
        </p>
        <h3 style={{ fontFamily: C.heading, fontSize: 'clamp(2.8rem, 5.5vw, 5.2rem)', fontWeight: 400, fontStyle: 'italic', color: '#F8F5F0', margin: 0, marginBottom: 14, lineHeight: 1.04 }}>
          {product.name}
        </h3>
        <p style={{ fontFamily: C.body, fontSize: '0.84rem', color: 'rgba(255,248,240,0.55)', margin: 0, marginBottom: 28, lineHeight: 1.5 }}>
          {product.descriptor}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontFamily: C.heading, fontStyle: 'italic', fontSize: '1.5rem', fontWeight: 400, color: 'rgba(255,248,240,0.88)' }}>${product.price}</span>
          <button
            style={{ background: 'none', border: '1px solid rgba(248,245,240,0.4)', color: '#F8F5F0', fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '10px 22px', cursor: 'pointer', borderRadius: 2, transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(248,245,240,0.14)'; e.currentTarget.style.borderColor = 'rgba(248,245,240,0.8)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(248,245,240,0.4)' }}
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Editorial Strip — 3-up horizontal panel, vertical dividers ────────────
function EditorialStrip({ products }: { products: typeof hoodies }) {
  const [hovered, setHovered] = useState<string | null>(null)
  return (
    <div style={{ borderTop: `1px solid ${C.rule}`, backgroundColor: C.bg }} className="editorial-strip-grid">
      {products.map((p, i) => (
        <div
          key={p.id}
          style={{ borderRight: i < products.length - 1 ? `1px solid ${C.rule}` : 'none', cursor: 'pointer' }}
          onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}
        >
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <img
              src={p.img} alt={p.name}
              style={{ width: '100%', aspectRatio: '2/3', objectFit: 'cover', objectPosition: 'center top', display: 'block', transform: hovered === p.id ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)' }}
            />
            {hovered === p.id && (
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 20, background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 52%)' }}>
                <span style={{ fontFamily: C.body, fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', backgroundColor: 'rgba(255,255,255,0.14)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.28)', borderRadius: 2, padding: '8px 18px' }}>Quick View</span>
              </div>
            )}
          </div>
          <div style={{ padding: '20px 28px 30px', borderTop: `1px solid ${C.rule}` }}>
            <p style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted, marginBottom: 10 }}>
              No. {String(i + 2).padStart(2, '0')}
            </p>
            <h3 style={{ fontFamily: C.heading, fontSize: '1.3rem', fontWeight: 400, fontStyle: 'italic', color: C.ink, margin: 0, marginBottom: 6, lineHeight: 1.18 }}>
              {p.name}
            </h3>
            <p style={{ fontFamily: C.body, fontSize: '0.72rem', color: C.muted, margin: 0, marginBottom: 16 }}>{p.descriptor}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: C.heading, fontSize: '1.1rem', fontWeight: 400, fontStyle: 'italic', color: C.ink }}>${p.price}</span>
              {p.colors && (
                <div style={{ display: 'flex', gap: 6 }}>
                  {p.colors.map(c => <span key={c} style={{ width: 11, height: 11, borderRadius: '50%', backgroundColor: c, border: '1.5px solid rgba(0,0,0,0.1)', display: 'inline-block' }} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Full-width image break ───────────────────────────────────────────────────
function ImageBreak() {
  return (
    <div style={{ height: '70vh', overflow: 'hidden', position: 'relative' }}>
      <img src={images.studioSets} alt="Women in earth-tone matching sets, editorial" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(20,16,12,0.22)' }}>
        <p style={{ fontFamily: C.heading, fontSize: 'clamp(2rem, 5vw, 4.5rem)', fontStyle: 'italic', fontWeight: 400, color: '#F8F5F0', textAlign: 'center', letterSpacing: '0.02em', maxWidth: 700, padding: '0 24px' }}>
          "Made for girls who like simple things done beautifully."
        </p>
      </div>
    </div>
  )
}

// ─── Accessories grid ─────────────────────────────────────────────────────────
function AccessoriesGrid() {
  const items = bags.slice(0, 6)
  return (
    <section style={{ backgroundColor: C.bg, padding: '80px 32px' }} id="bags" aria-label="Bags & accessories">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        <div style={{ borderTop: `1px solid ${C.rule}`, paddingTop: 40, marginBottom: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontStyle: 'italic', fontWeight: 400, color: C.ink, margin: 0 }}>Bags & pouches</h2>
          <span style={{ fontFamily: C.body, fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted }}>{items.length} pieces</span>
        </div>
        <div style={{ gap: 24 }} className="product-grid-3col">
          {items.map(p => (
            <article key={p.id} className="product-card" style={{ cursor: 'pointer' }}>
              <div style={{ overflow: 'hidden', borderRadius: 2, marginBottom: 16, position: 'relative', backgroundColor: '#F0EBE4' }}>
                <img src={p.img} alt={p.name} className="img-hover" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'contain', objectPosition: 'center', padding: 12 }} />
                <div className="quick-view" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(28,23,20,0.06)' }}>
                  <span style={{ fontFamily: C.body, fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.ink, backgroundColor: 'rgba(248,246,242,0.9)', backdropFilter: 'blur(4px)', padding: '8px 18px', borderRadius: 1 }}>Quick View</span>
                </div>
              </div>
              <h3 style={{ fontFamily: C.heading, fontSize: '1rem', fontWeight: 400, fontStyle: 'italic', color: C.ink, margin: 0, marginBottom: 4 }}>{p.name}</h3>
              <p style={{ fontFamily: C.body, fontSize: '0.72rem', color: C.muted, margin: 0, marginBottom: 8 }}>{p.descriptor}</p>
              <span style={{ fontFamily: C.body, fontSize: '0.82rem', color: C.ink }}>${p.price}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <section style={{ backgroundColor: '#1C1714', padding: '96px 32px', textAlign: 'center' }} id="newsletter">
      <p style={{ fontFamily: C.body, fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(248,246,242,0.4)', marginBottom: 20 }}>Stay close</p>
      <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(2rem, 4vw, 3.4rem)', fontStyle: 'italic', fontWeight: 400, color: '#F8F6F2', margin: 0, marginBottom: 12 }}>Be the first to know.</h2>
      <p style={{ fontFamily: C.body, fontSize: '0.88rem', color: 'rgba(248,246,242,0.5)', marginBottom: 44, lineHeight: 1.7 }}>Early access to drops, behind-the-scenes and quiet updates.</p>
      {done ? (
        <p style={{ fontFamily: C.heading, fontSize: '1.1rem', fontStyle: 'italic', color: '#C4A882' }}>You're on the list. See you soon.</p>
      ) : (
        <form onSubmit={e => { e.preventDefault(); if (email) setDone(true) }} style={{ display: 'flex', justifyContent: 'center', gap: 0, maxWidth: 440, margin: '0 auto' }}>
          <label htmlFor="newsletter-a" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Email address</label>
          <input id="newsletter-a" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={{ flex: 1, backgroundColor: 'rgba(248,246,242,0.07)', border: 'none', borderBottom: '1px solid rgba(248,246,242,0.2)', padding: '14px 0', fontFamily: C.body, fontSize: '0.88rem', color: '#F8F6F2', outline: 'none', borderRadius: 0 }} />
          <button type="submit" style={{ backgroundColor: C.accent, color: '#1C1714', border: 'none', padding: '14px 28px', fontFamily: C.body, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer', transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Join
          </button>
        </form>
      )}
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1714', borderTop: '1px solid rgba(248,246,242,0.08)', padding: '40px 32px 32px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
        <AskLogo color="#F8F6F2" size="sm" fontFamily={C.heading} />
        <p style={{ fontFamily: C.body, fontSize: '0.68rem', color: 'rgba(248,246,242,0.3)', letterSpacing: '0.08em', margin: 0 }}>© 2025 așk — prototype</p>
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function ConceptMalibu() {
  return (
    <div style={{ backgroundColor: C.bg, fontFamily: C.body }}>
      <ConceptSwitcher />
      <Header />
      <main>
        <Hero />
        <EditorialIntro />
        <section id="shop" aria-label="Hoodies collection" style={{ backgroundColor: C.bg }}>
          <EditorialFeature product={hoodies[0]} />
          <EditorialStrip products={hoodies.slice(1, 4)} />
        </section>
        <ImageBreak />
        <AccessoriesGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
