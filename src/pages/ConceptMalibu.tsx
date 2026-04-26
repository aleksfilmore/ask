/**
 * Concept A — Malibu Clean Girl
 * Tone: Calm, soft, sun-washed, minimal, effortless.
 * Palette: Peach + cream dominant.
 * Images: /public/images test/Peach only.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConceptSwitcher from '../components/ConceptSwitcher'
import AskLogo from '../components/AskLogo'
import { peachImgs, navLinks } from '../brand'

const C = {
  bg:       '#FAF7F2',
  warm:     '#F5EFE5',
  ink:      '#2A1F1A',
  muted:    '#9A8A7E',
  rule:     '#E4D8CC',
  accent:   '#E8A870',
  accentDk: '#C07840',
  heading:  '"Cormorant Garamond", Georgia, serif',
  body:     'Jost, sans-serif',
}

// ─── Header ──────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: `${C.bg}f2`, backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.rule}`,
      }}
    >
      <div
        style={{
          maxWidth: 1320, margin: '0 auto', padding: '0 32px',
          height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Link to="/concept-malibu" style={{ textDecoration: 'none' }}>
          <AskLogo color={C.ink} size="md" fontFamily={C.heading} />
        </Link>

        <nav className="hidden md:flex" style={{ gap: 36 }}>
          {navLinks.map(l => (
            <a
              key={l.label} href={l.href}
              style={{
                fontFamily: C.body, fontSize: '0.68rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', color: C.ink, opacity: 0.5,
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <button aria-label="Bag" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
          <button
            className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {open
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.5" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            }
          </button>
        </div>
      </div>

      {open && (
        <div style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.rule}`, padding: '20px 32px 28px' }}>
          {navLinks.map(l => (
            <a
              key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', fontFamily: C.body, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.ink, textDecoration: 'none', padding: '11px 0', borderBottom: `1px solid ${C.rule}`, opacity: 0.7 }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{ position: 'relative', height: '96vh', minHeight: 600, overflow: 'hidden' }}
      aria-label="Hero"
    >
      <img
        src={peachImgs.hero}
        alt="Girl in peach activewear set, soft morning beach lifestyle"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      />
      {/* Gradient */}
      <div
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,12,8,0.62) 0%, rgba(18,12,8,0.08) 52%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Watermark */}
      <div
        style={{ position: 'absolute', bottom: -40, right: -8, fontFamily: C.heading, fontSize: 'clamp(8rem, 22vw, 20rem)', fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.04)', letterSpacing: '0.06em', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}
        aria-hidden="true"
      >
        așk
      </div>

      {/* Bottom-left copy */}
      <div style={{ position: 'absolute', bottom: 60, left: 40, maxWidth: 520 }} className="animate-fade-up">
        <p style={{ fontFamily: C.body, fontSize: '0.62rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(255,246,238,0.6)', marginBottom: 20, margin: '0 0 20px' }}>
          Drop 01 · Malibu Morning
        </p>
        <h1
          style={{ fontFamily: C.heading, fontSize: 'clamp(2.8rem, 6.5vw, 5.6rem)', fontWeight: 400, fontStyle: 'italic', color: '#FAF6F0', lineHeight: 1.05, margin: '0 0 28px', letterSpacing: '-0.01em' }}
        >
          late mornings,<br />soft sets,<br />no rush
        </h1>
        <p style={{ fontFamily: C.body, fontSize: '0.82rem', color: 'rgba(255,246,238,0.58)', margin: '0 0 32px', lineHeight: 1.7, maxWidth: 340, fontWeight: 300 }}>
          activewear made for slow starts, warm light,<br />and days that unfold naturally
        </p>
        <button
          style={{ backgroundColor: 'rgba(255,246,238,0.92)', color: '#2A1F1A', border: 'none', fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '14px 32px', cursor: 'pointer', borderRadius: 1, transition: 'opacity 0.2s', fontWeight: 500 }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Shop the set
        </button>
      </div>
    </section>
  )
}

// ─── Featured Set ─────────────────────────────────────────────────────────────
function FeaturedSet() {
  const colors = ['#E8A870', '#FAF7F2', '#8CBFA0', '#F0DC60']
  const colorNames = ['Peach', 'Cream', 'Mint', 'Lemon']
  const [activeColor, setActiveColor] = useState(0)

  return (
    <section id="sets" style={{ backgroundColor: C.bg }} aria-label="Featured set">
      <div className="feat-set-grid" style={{ maxWidth: 1320, margin: '0 auto' }}>

        {/* Images col */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 560 }}>
          <img
            src={peachImgs.featSet}
            alt="Malibu Set — Peach, front view"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', minHeight: 560 }}
          />
          {/* Alt angle thumb */}
          <div
            style={{ position: 'absolute', bottom: 20, right: 20, width: 90, overflow: 'hidden', border: '2px solid rgba(255,255,255,0.9)' }}
          >
            <img
              src={peachImgs.featSetAlt}
              alt="Malibu Set — back view"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>

        {/* Details col */}
        <div
          style={{ backgroundColor: C.warm, padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <p style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: C.muted, margin: '0 0 16px', fontWeight: 400 }}>
            Drop 01 · Sets
          </p>
          <h2
            style={{ fontFamily: C.heading, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400, fontStyle: 'italic', color: C.ink, margin: '0 0 8px', lineHeight: 1.1 }}
          >
            Malibu Set
          </h2>
          <p style={{ fontFamily: C.heading, fontSize: '1rem', fontWeight: 300, fontStyle: 'italic', color: C.muted, margin: '0 0 24px' }}>
            — Peach
          </p>

          {/* Rule */}
          <div style={{ height: 1, backgroundColor: C.rule, margin: '0 0 28px', width: 40 }} aria-hidden="true" />

          <p style={{ fontFamily: C.body, fontSize: '0.84rem', color: C.ink, opacity: 0.7, margin: '0 0 32px', lineHeight: 1.75, fontWeight: 300, maxWidth: 280 }}>
            Ruffle-trim bra top + high-waist biker shorts.<br />
            Soft stretch fabric. Made to move in, made to be seen.
          </p>

          {/* Price */}
          <p
            style={{ fontFamily: C.heading, fontSize: '1.8rem', fontWeight: 400, fontStyle: 'italic', color: C.ink, margin: '0 0 28px' }}
          >
            $88
          </p>

          {/* Color swatches */}
          <div style={{ margin: '0 0 36px' }}>
            <p style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted, margin: '0 0 12px', fontWeight: 400 }}>
              Colour — {colorNames[activeColor]}
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {colors.map((col, i) => (
                <button
                  key={col}
                  onClick={() => setActiveColor(i)}
                  aria-label={colorNames[i]}
                  style={{
                    width: 26, height: 26, borderRadius: '50%', backgroundColor: col,
                    border: activeColor === i ? `2px solid ${C.ink}` : '2px solid rgba(0,0,0,0.08)',
                    cursor: 'pointer', padding: 0, outline: 'none',
                    boxShadow: activeColor === i ? 'none' : 'none',
                    transition: 'border 0.15s',
                  }}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            style={{ backgroundColor: C.ink, color: C.bg, border: 'none', fontFamily: C.body, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '16px 0', cursor: 'pointer', fontWeight: 500, transition: 'opacity 0.2s', borderRadius: 1 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.78')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Shop the set
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── Drop Section ─────────────────────────────────────────────────────────────
function DropSection() {
  return (
    <section id="tops" style={{ backgroundColor: C.bg, padding: '88px 32px' }} aria-label="Collection drops">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>

        {/* Drop 01 header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40, paddingBottom: 24, borderBottom: `1px solid ${C.rule}` }}>
          <div>
            <p style={{ fontFamily: C.body, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, margin: '0 0 8px', fontWeight: 400 }}>Now available</p>
            <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 400, fontStyle: 'italic', color: C.ink, margin: 0 }}>Drop 01 · Malibu Morning</h2>
          </div>
          <span style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.bg, backgroundColor: C.accent, padding: '6px 14px', borderRadius: 2, fontWeight: 500 }}>Live</span>
        </div>

        {/* 3-image grid */}
        <div className="drop-3-grid" style={{ gap: 12, marginBottom: 80 }}>
          {[peachImgs.drop1, peachImgs.drop2, peachImgs.drop3].map((src, i) => (
            <div key={i} style={{ overflow: 'hidden' }}>
              <img
                src={src}
                alt={`Malibu Morning drop image ${i + 1}`}
                className="img-hover"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>
          ))}
        </div>

        {/* Drop 02 teaser */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 28, borderTop: `1px solid ${C.rule}` }}>
          <div>
            <p style={{ fontFamily: C.body, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, margin: '0 0 8px', fontWeight: 400 }}>Coming next</p>
            <h3 style={{ fontFamily: C.heading, fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 400, fontStyle: 'italic', color: C.ink, margin: 0, opacity: 0.5 }}>Drop 02 · Peach Club</h3>
          </div>
          <span style={{ fontFamily: C.body, fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, backgroundColor: C.warm, border: `1px solid ${C.rule}`, padding: '6px 14px', borderRadius: 2 }}>Coming Soon</span>
        </div>
      </div>
    </section>
  )
}

// ─── Lifestyle / Mood ─────────────────────────────────────────────────────────
function LifestyleMood() {
  return (
    <section id="bottoms" style={{ backgroundColor: C.warm }} aria-label="Lifestyle">
      <div className="mood-2col" style={{ maxWidth: 1320, margin: '0 auto' }}>

        {/* Large image */}
        <div style={{ overflow: 'hidden' }}>
          <img
            src={peachImgs.life1}
            alt="Girl in peach set, beach morning lifestyle"
            style={{ width: '100%', height: '100%', minHeight: 480, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>

        {/* Stacked smaller images + caption */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ overflow: 'hidden', flex: 1 }}>
            <img
              src={peachImgs.life2}
              alt="Peach activewear, soft lifestyle shot"
              style={{ width: '100%', height: '100%', minHeight: 240, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
          <div style={{ overflow: 'hidden', flex: 1 }}>
            <img
              src={peachImgs.grid1}
              alt="Peach activewear, beach movement"
              style={{ width: '100%', height: '100%', minHeight: 240, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* Mood caption */}
      <div style={{ textAlign: 'center', padding: '48px 24px 64px' }}>
        <p
          style={{ fontFamily: C.heading, fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', fontStyle: 'italic', fontWeight: 300, color: C.muted, letterSpacing: '0.06em', margin: 0, lineHeight: 1.9 }}
        >
          quiet confidence&nbsp;&nbsp;·&nbsp;&nbsp;beach mornings&nbsp;&nbsp;·&nbsp;&nbsp;soft movement
        </p>
      </div>
    </section>
  )
}

// ─── Brand Meaning ────────────────────────────────────────────────────────────
function BrandMeaning() {
  return (
    <section
      style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#1C1410' }}
      aria-label="Brand meaning"
    >
      {/* Full-bleed image background */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src={peachImgs.meaning}
          alt="Peach activewear, editorial mood"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(16,10,6,0.88) 0%, rgba(16,10,6,0.52) 60%, rgba(16,10,6,0.28) 100%)' }}
          aria-hidden="true"
        />
      </div>

      {/* Editorial text */}
      <div
        style={{ position: 'relative', zIndex: 1, padding: '96px 40px 96px', maxWidth: 600 }}
      >
        {/* Word mark */}
        <p
          style={{ fontFamily: C.heading, fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,246,236,0.45)', margin: '0 0 40px', fontWeight: 300 }}
        >
          about the name
        </p>

        <h2
          style={{ fontFamily: C.heading, fontSize: 'clamp(3.5rem, 10vw, 7rem)', fontWeight: 400, fontStyle: 'italic', color: '#FAF0E4', margin: '0 0 24px', lineHeight: 0.9, letterSpacing: '-0.01em' }}
        >
          așk
        </h2>

        <div style={{ height: 1, width: 40, backgroundColor: C.accent, margin: '0 0 40px' }} aria-hidden="true" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <p style={{ fontFamily: C.heading, fontSize: 'clamp(0.88rem, 1.8vw, 1.05rem)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,246,236,0.55)', margin: '0 0 6px', letterSpacing: '0.02em' }}>
            (noun) — a Turkish word for
          </p>
          <p style={{ fontFamily: C.heading, fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontWeight: 400, fontStyle: 'italic', color: '#FAF0E4', margin: '0 0 32px', lineHeight: 1.2, letterSpacing: '-0.01em' }}>
            a love that consumes,<br />softens, and transforms.
          </p>

          <p style={{ fontFamily: C.body, fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,246,236,0.38)', margin: '0 0 10px', fontWeight: 300 }}>
            more than romance
          </p>
          <p style={{ fontFamily: C.heading, fontSize: 'clamp(1.1rem, 2.2vw, 1.5rem)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,246,236,0.72)', margin: '0 0 32px', lineHeight: 1.4 }}>
            devotion. longing. passion.
          </p>

          <p style={{ fontFamily: C.heading, fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,246,236,0.52)', margin: '0 0 4px' }}>
            the kind of love you carry,
          </p>
          <p style={{ fontFamily: C.heading, fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(255,246,236,0.52)', margin: '0 0 48px' }}>
            not just feel.
          </p>

          <div style={{ height: 1, width: 32, backgroundColor: 'rgba(255,246,236,0.2)', margin: '0 0 24px' }} aria-hidden="true" />

          <p style={{ fontFamily: C.heading, fontSize: 'clamp(0.78rem, 1.4vw, 0.9rem)', fontStyle: 'italic', color: C.accent, margin: 0, letterSpacing: '0.04em' }}>
            așk — woven into every detail.
          </p>
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
    <section
      id="accessories"
      style={{ backgroundColor: C.bg, padding: '96px 32px', textAlign: 'center', borderTop: `1px solid ${C.rule}` }}
    >
      <p style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: C.muted, margin: '0 0 18px' }}>
        Drop 01 · Malibu Morning
      </p>
      <h2
        style={{ fontFamily: C.heading, fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontStyle: 'italic', fontWeight: 400, color: C.ink, margin: '0 0 14px' }}
      >
        be first to know.
      </h2>
      <p style={{ fontFamily: C.body, fontSize: '0.84rem', color: C.muted, margin: '0 auto 48px', lineHeight: 1.75, fontWeight: 300, maxWidth: 340 }}>
        Early access, quiet updates, and nothing you didn't ask for.
      </p>

      {done ? (
        <p style={{ fontFamily: C.heading, fontStyle: 'italic', fontSize: '1.1rem', color: C.accentDk }}>
          You're on the list. See you soon.
        </p>
      ) : (
        <form
          onSubmit={e => { e.preventDefault(); if (email) setDone(true) }}
          style={{ display: 'flex', maxWidth: 420, margin: '0 auto', gap: 0 }}
        >
          <label htmlFor="nl-malibu" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>
            Email address
          </label>
          <input
            id="nl-malibu"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            style={{ flex: 1, backgroundColor: 'transparent', border: 'none', borderBottom: `1px solid ${C.rule}`, padding: '13px 0', fontFamily: C.body, fontSize: '0.86rem', color: C.ink, outline: 'none', borderRadius: 0 }}
          />
          <button
            type="submit"
            style={{ backgroundColor: C.ink, color: C.bg, border: 'none', padding: '13px 26px', fontFamily: C.body, fontSize: '0.66rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.78')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
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
    <footer style={{ backgroundColor: C.warm, borderTop: `1px solid ${C.rule}`, padding: '36px 32px 28px' }}>
      <div
        style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}
      >
        <AskLogo color={C.ink} size="sm" fontFamily={C.heading} />
        <nav style={{ display: 'flex', gap: 24 }}>
          {navLinks.map(l => (
            <a
              key={l.label} href={l.href}
              style={{ fontFamily: C.body, fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
              onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/" style={{ fontFamily: C.body, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
            onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
          >
            ← All concepts
          </Link>
          <p style={{ fontFamily: C.body, fontSize: '0.6rem', color: C.rule, letterSpacing: '0.08em', margin: 0 }}>
            © 2025 așk
          </p>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ConceptMalibu() {
  return (
    <div style={{ backgroundColor: C.bg, fontFamily: C.body }}>
      <ConceptSwitcher />
      <Header />
      <main>
        <Hero />
        <FeaturedSet />
        <DropSection />
        <LifestyleMood />
        <BrandMeaning />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

