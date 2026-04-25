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
      {/* dark veil — very subtle, just enough for text */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(20,16,12,0.52) 0%, rgba(20,16,12,0.08) 55%, transparent 100%)' }} aria-hidden="true" />

      {/* Bottom-left editorial text block */}
      <div style={{ position: 'absolute', bottom: 56, left: 40, maxWidth: 540 }} className="animate-fade-up">
        <p style={{ fontFamily: C.body, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,248,240,0.65)', marginBottom: 18 }}>
          Summer Collection — 001
        </p>
        <h1 style={{ fontFamily: C.heading, fontSize: 'clamp(2.6rem, 6vw, 5.2rem)', fontWeight: 400, fontStyle: 'italic', color: '#F8F5F0', lineHeight: 1.08, margin: 0, marginBottom: 28, letterSpacing: '-0.01em' }}>
          Soft pieces for<br />sunny routines.
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
            Founded by a 15-year-old with an eye for beautiful things. Hoodies, bags and accessories made for the girl who wants to feel put-together without trying too hard.
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

// ─── Editorial product row ─────────────────────────────────────────────────────
function ProductRow({ product, index }: { product: typeof hoodies[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const isEven = index % 2 === 0
  return (
    <div
      style={{ gap: 0, borderTop: `1px solid ${C.rule}` }}
      className={isEven ? 'product-row-even' : 'product-row-odd'}
    >
      <div style={{ order: isEven ? 0 : 1, overflow: 'hidden', position: 'relative' }}
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <img src={product.img} alt={product.name}
          style={{ width: '100%', height: '100%', minHeight: 460, objectFit: 'cover', objectPosition: 'center top', transform: hovered ? 'scale(1.04)' : 'scale(1)', transition: 'transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)' }} />
        {hovered && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 24, background: 'linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 50%)' }}>
            <span style={{ fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 2, padding: '10px 22px' }}>Quick View</span>
          </div>
        )}
      </div>
      <div style={{ order: isEven ? 1 : 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '48px 56px', backgroundColor: C.bg }}>
        <p style={{ fontFamily: C.body, fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 16 }}>
          {product.category === 'hoodie' ? 'Hoodies' : 'Bags'}
        </p>
        <h3 style={{ fontFamily: C.heading, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, fontStyle: 'italic', color: C.ink, margin: 0, marginBottom: 14, lineHeight: 1.1 }}>
          {product.name}
        </h3>
        <p style={{ fontFamily: C.body, fontSize: '0.88rem', color: C.muted, margin: 0, marginBottom: 28, lineHeight: 1.6 }}>
          {product.descriptor}
        </p>
        {product.colors && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
            {product.colors.map(c => (
              <span key={c} title={c} style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: c, border: '1.5px solid rgba(0,0,0,0.1)', display: 'inline-block' }} />
            ))}
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={{ fontFamily: C.heading, fontSize: '1.5rem', fontWeight: 400, color: C.ink }}>${product.price}</span>
          <button style={{ fontFamily: C.body, fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.ink, background: 'none', border: `1px solid ${C.ink}`, borderRadius: 2, padding: '11px 24px', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = C.ink; e.currentTarget.style.color = C.bg }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = C.ink }}>
            Add to bag
          </button>
        </div>
      </div>
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
          {hoodies.slice(0, 4).map((p, i) => <ProductRow key={p.id} product={p} index={i} />)}
        </section>
        <ImageBreak />
        <AccessoriesGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
