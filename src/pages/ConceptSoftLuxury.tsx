/**
 * Concept C — Soft Luxury
 * Identity: Quiet luxury. Pure white. One product per row. Cormorant Light.
 * Layout: Maximum negative space. No decorative elements. Photography and type only.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConceptSwitcher from '../components/ConceptSwitcher'
import AskLogo from '../components/AskLogo'
import { images, hoodies, bags, navLinks } from '../brand'

const C = {
  bg: '#FFFFFF',
  warm: '#F8F5F1',
  ink: '#111111',
  muted: '#9A9088',
  rule: '#E4DDD6',
  accent: '#9A7B55',
  heading: '"Cormorant Garamond", Georgia, serif',
  body: 'Jost, sans-serif',
}

const Rule = () => <div style={{ height: 1, backgroundColor: C.rule, width: '100%' }} aria-hidden="true" />

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: `${C.bg}f8`, backdropFilter: 'blur(16px)', borderBottom: `1px solid ${C.rule}` }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/concept-soft-luxury" style={{ textDecoration: 'none' }}>
          <AskLogo color={C.ink} size="md" fontFamily={C.heading} />
        </Link>
        <nav className="hidden md:flex" style={{ gap: 44 }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} style={{ fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: C.ink, opacity: 0.4, textDecoration: 'none', fontWeight: 300, transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')} onMouseLeave={e => (e.currentTarget.style.opacity = '0.4')}>{l.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <button aria-label="Bag" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.2" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          </button>
          <button className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="17" x2="21" y2="17"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.rule}`, padding: '28px 48px' }}>
          {navLinks.map(l => <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ display: 'block', fontFamily: C.body, fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.ink, textDecoration: 'none', padding: '12px 0', fontWeight: 300 }}>{l.label}</a>)}
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position: 'relative', height: '94vh', minHeight: 560, overflow: 'hidden' }} aria-label="Hero">
      <img src={images.studioSets} alt="Women in earth-tone matching sets, LA studio" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
      {/* Dark scrim — heaviest at bottom where text sits */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,9,7,0.72) 0%, rgba(12,9,7,0.28) 40%, rgba(12,9,7,0.06) 70%, transparent 100%)' }} aria-hidden="true" />

      {/* Centered minimal text */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 64, paddingLeft: 24, paddingRight: 24, textAlign: 'center' }}>
        <p style={{ fontFamily: C.body, fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16, fontWeight: 300 }}>
          Drop 01 — Studio
        </p>
        <h1 style={{ fontFamily: C.heading, fontSize: 'clamp(2.6rem, 6vw, 5rem)', fontWeight: 300, color: '#FFFFFF', margin: 0, letterSpacing: '0.04em', lineHeight: 1.15, textShadow: '0 1px 24px rgba(0,0,0,0.18)' }}>
          everything you<br />reach for<br />without thinking.
        </h1>
      </div>

      {/* Scroll cue */}
      <div style={{ position: 'absolute', bottom: 28, right: 44, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }} aria-hidden="true">
        <div style={{ width: 1, height: 44, backgroundColor: 'rgba(255,255,255,0.4)' }} />
        <span style={{ fontFamily: C.body, fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', writingMode: 'vertical-rl', fontWeight: 300 }}>Scroll</span>
      </div>
    </section>
  )
}

// ─── Opening statement ────────────────────────────────────────────────────────
function OpeningStatement() {
  return (
    <section style={{ backgroundColor: C.bg, padding: '80px 48px 64px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }} className="intro-2col">
        <div style={{ paddingTop: 8 }}>
          <p style={{ fontFamily: C.body, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginBottom: 20, fontWeight: 300 }}>About</p>
          <span style={{ fontFamily: C.heading, fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 300, color: C.accent, display: 'block', lineHeight: 1, marginBottom: 20, letterSpacing: '0.02em' }}>I.</span>
          <p style={{ fontFamily: C.heading, fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 300, color: C.ink, lineHeight: 1.5, margin: 0, letterSpacing: '0.02em' }}>
            The outfit you reach for first.<br />Made worth reaching for.
          </p>
        </div>
        <div>
          <p style={{ fontFamily: C.body, fontSize: '0.88rem', color: C.muted, lineHeight: 1.9, margin: 0, fontWeight: 300, paddingTop: 8 }}>
            Started at 15 because nothing felt considered enough. așk is the fix: lace-edged hoodies you actually keep, sequin bags that earn their place in every photo, pouches that make the everyday feel like something.
          </p>
          <p style={{ fontFamily: C.body, fontSize: '0.88rem', color: C.muted, lineHeight: 1.9, margin: '20px 0 0', fontWeight: 300 }}>
            California light. Romanian heart. First collection available now.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Single product row ────────────────────────────────────────────────────────
function ProductRow({ product, reverse = false }: { product: typeof hoodies[0]; reverse?: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div>
      <Rule />
      <div style={{}} className={reverse ? 'luxury-row-reverse' : 'luxury-row-normal'}>
        {/* Image */}
        <div style={{ order: reverse ? 1 : 0, overflow: 'hidden', backgroundColor: C.warm, position: 'relative' }}
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <img src={product.img} alt={product.name}
            style={{ width: '100%', height: '100%', minHeight: 440, objectFit: product.category === 'hoodie' && !product.img.includes('webp') ? 'cover' : 'cover', objectPosition: 'center top', transform: hovered ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }} />
          {hovered && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 32, background: 'linear-gradient(to top, rgba(0,0,0,0.12) 0%, transparent 40%)' }}>
              <button style={{ fontFamily: C.body, fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.ink, backgroundColor: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(6px)', border: 'none', padding: '9px 22px', cursor: 'pointer', fontWeight: 400 }}>Quick view</button>
            </div>
          )}
        </div>

        {/* Text */}
        <div style={{ order: reverse ? 0 : 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '56px 64px', backgroundColor: C.bg }}>
          <p style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, marginBottom: 20, fontWeight: 300 }}>
            {product.category === 'hoodie' ? 'Hoodies' : 'Accessories'} — No. {String(hoodies.indexOf(product) + 1).padStart(2, '0')}
          </p>
          <h3 style={{ fontFamily: C.heading, fontSize: 'clamp(2rem, 3vw, 3rem)', fontWeight: 300, color: C.ink, margin: 0, marginBottom: 16, letterSpacing: '0.02em', lineHeight: 1.15 }}>
            {product.name}
          </h3>
          <p style={{ fontFamily: C.body, fontSize: '0.82rem', color: C.muted, margin: 0, marginBottom: 32, lineHeight: 1.7, fontWeight: 300 }}>
            {product.descriptor}
          </p>

          {product.colors && product.colors.length > 0 && (
            <div style={{ display: 'flex', gap: 10, marginBottom: 32, alignItems: 'center' }}>
              <span style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted, fontWeight: 300, marginRight: 4 }}>Available in</span>
              {product.colors.map(col => (
                <span key={col} title={col} style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: col, border: '1px solid rgba(0,0,0,0.08)', display: 'inline-block' }} />
              ))}
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <span style={{ fontFamily: C.heading, fontSize: '1.6rem', fontWeight: 300, color: C.ink, letterSpacing: '0.02em' }}>${product.price}</span>
            <button style={{ fontFamily: C.body, fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.ink, background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4, fontWeight: 400, transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.45')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Brand image ──────────────────────────────────────────────────────────────
function BrandImage() {
  return (
    <div style={{ height: '65vh', overflow: 'hidden', position: 'relative' }}>
      <img src={images.laWindow} alt="Three women in muted hoodies, LA studio with palm trees" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />      {/* Oversized logo watermark — editorial label treatment */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }} aria-hidden="true">
        <span style={{ fontFamily: C.heading, fontSize: 'clamp(7rem, 20vw, 18rem)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,255,255,0.13)', letterSpacing: '0.12em', userSelect: 'none', lineHeight: 1 }}>
          așk
        </span>
      </div>    </div>
  )
}

// ─── Accessories row ──────────────────────────────────────────────────────────
function AccessoriesRow() {
  const items = bags.slice(0, 4)
  return (
    <section style={{ backgroundColor: C.bg, padding: '80px 48px' }} id="bags" aria-label="Accessories">
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <Rule />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '40px 0' }}>
          <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(1.8rem, 2.5vw, 2.6rem)', fontWeight: 300, color: C.ink, margin: 0, letterSpacing: '0.02em' }}>Accessories</h2>
          <button style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3, fontWeight: 300 }}>View all</button>
        </div>
        <div style={{}} className="product-grid-4col">
          {items.map(p => (
            <article key={p.id} style={{ cursor: 'pointer' }}>
              <div style={{ backgroundColor: C.warm, marginBottom: 20, overflow: 'hidden' }}>
                <img src={p.img} alt={p.name} className="img-hover" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'contain', objectPosition: 'center', padding: 20 }} />
              </div>
              <h3 style={{ fontFamily: C.heading, fontSize: '1.1rem', fontWeight: 300, color: C.ink, margin: 0, marginBottom: 4, letterSpacing: '0.02em' }}>{p.name}</h3>
              <p style={{ fontFamily: C.body, fontSize: '0.7rem', color: C.muted, margin: 0, marginBottom: 10, letterSpacing: '0.08em', fontWeight: 300, textTransform: 'uppercase' }}>{p.descriptor}</p>
              <span style={{ fontFamily: C.heading, fontSize: '1rem', fontWeight: 300, color: C.ink }}>${p.price}</span>
            </article>
          ))}
        </div>
        <Rule />
      </div>
    </section>
  )
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  return (
    <section style={{ backgroundColor: C.warm, padding: '100px 48px', textAlign: 'center' }} id="newsletter">
      <div style={{ maxWidth: 440, margin: '0 auto' }}>
        <p style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: C.muted, marginBottom: 20, fontWeight: 300 }}>Correspondence</p>
        <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: C.ink, margin: 0, marginBottom: 12, letterSpacing: '0.02em' }}>Join the list.</h2>
        <p style={{ fontFamily: C.body, fontSize: '0.82rem', color: C.muted, lineHeight: 1.75, marginBottom: 44, fontWeight: 300 }}>Receive new arrivals and quiet updates. Nothing more.</p>
        {done ? (
          <p style={{ fontFamily: C.heading, fontSize: '1.1rem', fontWeight: 300, color: C.ink, fontStyle: 'italic' }}>You're on the list. See you soon.</p>
        ) : (
          <form onSubmit={e => { e.preventDefault(); if (email) setDone(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
            <label htmlFor="newsletter-c" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Email address</label>
            <input id="newsletter-c" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={{ width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: `1px solid ${C.rule}`, padding: '12px 0', fontFamily: C.body, fontSize: '0.88rem', color: C.ink, outline: 'none', fontWeight: 300, textAlign: 'center', letterSpacing: '0.04em' }} onFocus={e => (e.currentTarget.style.borderBottomColor = C.ink)} onBlur={e => (e.currentTarget.style.borderBottomColor = C.rule)} />
            <button type="submit" style={{ fontFamily: C.body, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.ink, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 4, fontWeight: 400, marginTop: 8, transition: 'opacity 0.2s' }} onMouseEnter={e => (e.currentTarget.style.opacity = '0.45')} onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.rule}`, padding: '32px 48px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <AskLogo color={C.ink} size="sm" fontFamily={C.heading} />
        <div style={{ display: 'flex', gap: 32 }}>
          {['Shipping', 'Returns', 'Privacy'].map(l => (
            <a key={l} href="#" style={{ fontFamily: C.body, fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, textDecoration: 'none', fontWeight: 300 }}>{l}</a>
          ))}
        </div>
        <p style={{ fontFamily: C.body, fontSize: '0.62rem', color: C.muted, margin: 0, fontWeight: 300, letterSpacing: '0.08em' }}>© 2025 așk</p>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ConceptSoftLuxury() {
  return (
    <div style={{ backgroundColor: C.bg, fontFamily: C.body }}>
      <ConceptSwitcher />
      <Header />
      <main>
        <Hero />
        <OpeningStatement />
        {hoodies.slice(0, 3).map((p, i) => <ProductRow key={p.id} product={p} reverse={i % 2 !== 0} />)}
        <BrandImage />
        <AccessoriesRow />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
