/**
 * Concept C — Soft Luxury Calm
 * Tone: Minimal, refined, calm, slightly elevated.
 * Palette: Mint + beige tones.
 * Images: /public/images test/Mint only.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConceptSwitcher from '../components/ConceptSwitcher'
import AskLogo from '../components/AskLogo'
import { mintImgs, navLinks } from '../brand'

const C = {
  bg:      '#FAFAF8',
  warm:    '#F2F5F1',
  ink:     '#111111',
  muted:   '#9A9088',
  rule:    '#DDE8E0',
  accent:  '#7ABAAA',
  accentDk:'#4A9A8A',
  heading: '"Cormorant Garamond", Georgia, serif',
  body:    'Jost, sans-serif',
}

const Rule = () => <div style={{ height: 1, backgroundColor: C.rule, width: '100%' }} aria-hidden="true" />

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: `${C.bg}f8`, backdropFilter: 'blur(18px)',
        borderBottom: `1px solid ${C.rule}`,
      }}
    >
      <div
        style={{ maxWidth: 1400, margin: '0 auto', padding: '0 48px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Link to="/concept-soft-luxury" style={{ textDecoration: 'none' }}>
          <AskLogo color={C.ink} size="md" fontFamily={C.heading} />
        </Link>
        <nav className="hidden md:flex" style={{ gap: 44 }}>
          {navLinks.map(l => (
            <a
              key={l.label} href={l.href}
              style={{ fontFamily: C.body, fontSize: '0.66rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.ink, opacity: 0.38, textDecoration: 'none', fontWeight: 300, transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.38')}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <button aria-label="Bag" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.2" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>
          </button>
          <button
            className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {open
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="1.2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="17" x2="21" y2="17" /></svg>
            }
          </button>
        </div>
      </div>
      {open && (
        <div style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.rule}`, padding: '24px 48px 32px' }}>
          {navLinks.map(l => (
            <a
              key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', fontFamily: C.body, fontSize: '0.8rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: C.ink, textDecoration: 'none', padding: '13px 0', borderBottom: `1px solid ${C.rule}`, fontWeight: 300 }}
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
        src={mintImgs.hero}
        alt="Girl in mint activewear set, calm pilates lifestyle"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      />
      {/* Soft gradient */}
      <div
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,10,0.65) 0%, rgba(8,12,10,0.18) 44%, rgba(8,12,10,0.04) 70%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Centered bottom text */}
      <div
        style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 72, paddingLeft: 24, paddingRight: 24, textAlign: 'center' }}
      >
        <p style={{ fontFamily: C.body, fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', margin: '0 0 18px', fontWeight: 300 }}>
          Drop 01 · Malibu Morning
        </p>
        <h1
          style={{ fontFamily: C.heading, fontSize: 'clamp(2.8rem, 6.5vw, 5.4rem)', fontWeight: 300, color: '#FFFFFF', margin: '0 0 28px', letterSpacing: '0.03em', lineHeight: 1.12, textShadow: '0 1px 32px rgba(0,0,0,0.14)' }}
        >
          soft movement,<br />clear mind
        </h1>
        <p style={{ fontFamily: C.body, fontSize: '0.8rem', color: 'rgba(255,255,255,0.52)', margin: '0 0 36px', lineHeight: 1.75, fontWeight: 300, maxWidth: 380 }}>
          clean silhouettes and calm tones designed for<br />quiet routines and focused energy
        </p>
        <button
          style={{ backgroundColor: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.45)', fontFamily: C.body, fontSize: '0.66rem', letterSpacing: '0.22em', textTransform: 'uppercase', padding: '13px 36px', cursor: 'pointer', transition: 'all 0.25s', fontWeight: 300 }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.85)' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)' }}
        >
          View collection
        </button>
      </div>

      {/* Scroll indicator */}
      <div
        style={{ position: 'absolute', bottom: 28, right: 44, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        aria-hidden="true"
      >
        <div style={{ width: 1, height: 40, backgroundColor: 'rgba(255,255,255,0.35)' }} />
        <span style={{ fontFamily: C.body, fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', writingMode: 'vertical-rl', fontWeight: 300 }}>
          Scroll
        </span>
      </div>
    </section>
  )
}

// ─── Featured Set ─────────────────────────────────────────────────────────────
function FeaturedSet() {
  const colors = ['#7ABAAA', '#F0EDE6', '#E8A870', '#F0DC60']
  const colorNames = ['Mint', 'Beige', 'Peach', 'Lemon']
  const [activeColor, setActiveColor] = useState(0)

  return (
    <section id="sets" style={{ backgroundColor: C.bg }} aria-label="Featured set">
      <Rule />
      <div className="feat-set-grid" style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Image col */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 600 }}>
          <img
            src={mintImgs.featSet}
            alt="Coast Set — Mint, front view"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', minHeight: 600 }}
          />
          <div
            style={{ position: 'absolute', bottom: 20, right: 20, width: 88, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.8)' }}
          >
            <img
              src={mintImgs.featSetAlt}
              alt="Coast Set — back view"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>

        {/* Details col */}
        <div
          style={{ backgroundColor: C.warm, padding: '72px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <p style={{ fontFamily: C.body, fontSize: '0.55rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: C.muted, margin: '0 0 20px', fontWeight: 300 }}>
            Drop 01 · Sets
          </p>
          <h2
            style={{ fontFamily: C.heading, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 300, color: C.ink, margin: '0 0 6px', lineHeight: 1.1, letterSpacing: '0.02em' }}
          >
            Coast Set
          </h2>
          <p style={{ fontFamily: C.heading, fontSize: '1rem', fontWeight: 300, fontStyle: 'italic', color: C.muted, margin: '0 0 28px', letterSpacing: '0.04em' }}>
            — Mint
          </p>

          <div style={{ height: 1, width: 36, backgroundColor: C.accent, margin: '0 0 32px' }} aria-hidden="true" />

          <p style={{ fontFamily: C.body, fontSize: '0.82rem', color: C.muted, margin: '0 0 36px', lineHeight: 1.85, fontWeight: 300, maxWidth: 280 }}>
            Clean-line bra top + bike shorts.<br />
            Breathable stretch fabric in soft mint.<br />
            Designed for quiet routines and focused energy.
          </p>

          <p
            style={{ fontFamily: C.heading, fontSize: '2rem', fontWeight: 300, color: C.ink, margin: '0 0 32px', letterSpacing: '0.02em' }}
          >
            $88
          </p>

          {/* Swatches */}
          <div style={{ margin: '0 0 40px' }}>
            <p style={{ fontFamily: C.body, fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, margin: '0 0 14px', fontWeight: 300 }}>
              Colour — {colorNames[activeColor]}
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {colors.map((col, i) => (
                <button
                  key={col}
                  onClick={() => setActiveColor(i)}
                  aria-label={colorNames[i]}
                  style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: col, border: activeColor === i ? `1.5px solid ${C.ink}` : '1.5px solid rgba(0,0,0,0.1)', cursor: 'pointer', padding: 0, outline: 'none', transition: 'border 0.15s' }}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            style={{ backgroundColor: C.ink, color: C.bg, border: 'none', fontFamily: C.body, fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', padding: '16px 0', cursor: 'pointer', fontWeight: 400, transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.72')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View collection
          </button>
        </div>
      </div>
      <Rule />
    </section>
  )
}

// ─── Drop Section ─────────────────────────────────────────────────────────────
function DropSection() {
  return (
    <section id="tops" style={{ backgroundColor: C.bg, padding: '88px 48px' }} aria-label="Collection drops">
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Drop 01 header */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 44, paddingBottom: 20, borderBottom: `1px solid ${C.rule}` }}>
          <div>
            <p style={{ fontFamily: C.body, fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, margin: '0 0 10px', fontWeight: 300 }}>Available now</p>
            <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 300, color: C.ink, margin: 0, letterSpacing: '0.02em' }}>Drop 01 · Malibu Morning</h2>
          </div>
          <span
            style={{ fontFamily: C.body, fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.accent, border: `1px solid ${C.accent}`, padding: '5px 14px', fontWeight: 300 }}
          >
            Live
          </span>
        </div>

        {/* 3-image grid */}
        <div className="drop-3-grid" style={{ gap: 8, marginBottom: 80 }}>
          {[mintImgs.drop1, mintImgs.drop2, mintImgs.drop3].map((src, i) => (
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

        {/* Coming soon */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', paddingTop: 28, borderTop: `1px solid ${C.rule}` }}>
          <div>
            <p style={{ fontFamily: C.body, fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.muted, margin: '0 0 10px', fontWeight: 300 }}>Next arrival</p>
            <h3 style={{ fontFamily: C.heading, fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 300, color: C.ink, margin: 0, opacity: 0.4, letterSpacing: '0.02em' }}>Drop 02 · Peach Club</h3>
          </div>
          <span
            style={{ fontFamily: C.body, fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted, padding: '5px 14px', border: `1px solid ${C.rule}`, fontWeight: 300 }}
          >
            Coming Soon
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── Lifestyle / Mood ─────────────────────────────────────────────────────────
function LifestyleMood() {
  return (
    <section id="bottoms" aria-label="Lifestyle mood">
      {/* Large hero image */}
      <div style={{ position: 'relative', height: '72vh', minHeight: 480, overflow: 'hidden' }}>
        <img
          src={mintImgs.life1}
          alt="Mint activewear, calm morning routine"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div
          style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,12,10,0.38) 0%, transparent 55%)' }}
          aria-hidden="true"
        />
      </div>

      {/* Mood caption */}
      <div style={{ backgroundColor: C.warm, padding: '52px 48px', textAlign: 'center' }}>
        <p
          style={{ fontFamily: C.heading, fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', fontStyle: 'italic', fontWeight: 300, color: C.muted, letterSpacing: '0.08em', margin: 0, lineHeight: 2 }}
        >
          stillness&nbsp;&nbsp;·&nbsp;&nbsp;control&nbsp;&nbsp;·&nbsp;&nbsp;elegance&nbsp;&nbsp;·&nbsp;&nbsp;simplicity
        </p>
      </div>

      {/* 2-image split */}
      <div className="mood-2col" style={{ maxWidth: 1400, margin: '0 auto', backgroundColor: C.bg }}>
        <div style={{ overflow: 'hidden' }}>
          <img
            src={mintImgs.life2}
            alt="Mint activewear, lifestyle"
            style={{ width: '100%', height: '100%', minHeight: 400, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>
        <div style={{ overflow: 'hidden' }}>
          <img
            src={mintImgs.grid1}
            alt="Mint activewear, movement"
            style={{ width: '100%', height: '100%', minHeight: 400, objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}

// ─── Brand Meaning ────────────────────────────────────────────────────────────
function BrandMeaning() {
  return (
    <section
      style={{ backgroundColor: C.bg, padding: '100px 48px' }}
      aria-label="Brand meaning"
    >
      <Rule />
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '80px 0 0' }} className="brand-meaning-2col">

        {/* Image */}
        <div style={{ overflow: 'hidden' }}>
          <img
            src={mintImgs.meaning}
            alt="Mint activewear editorial"
            style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 0 0 16px' }}>
          <p style={{ fontFamily: C.body, fontSize: '0.55rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: C.muted, margin: '0 0 32px', fontWeight: 300 }}>
            about the name
          </p>

          <h2
            style={{ fontFamily: C.heading, fontSize: 'clamp(4rem, 9vw, 7.5rem)', fontWeight: 300, fontStyle: 'italic', color: C.ink, margin: '0 0 16px', lineHeight: 0.88, letterSpacing: '-0.01em' }}
          >
            așk
          </h2>

          <div style={{ height: 1, width: 36, backgroundColor: C.accent, margin: '0 0 36px' }} aria-hidden="true" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            <p style={{ fontFamily: C.heading, fontSize: 'clamp(0.85rem, 1.6vw, 1rem)', fontStyle: 'italic', fontWeight: 300, color: C.muted, margin: '0 0 5px', letterSpacing: '0.02em' }}>
              (noun) — a Turkish word for
            </p>
            <p style={{ fontFamily: C.heading, fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 300, fontStyle: 'italic', color: C.ink, margin: '0 0 36px', lineHeight: 1.3, letterSpacing: '0.01em' }}>
              a love that consumes,<br />softens, and transforms.
            </p>

            <p style={{ fontFamily: C.body, fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, margin: '0 0 10px', fontWeight: 300 }}>
              more than romance
            </p>
            <p style={{ fontFamily: C.heading, fontSize: 'clamp(1rem, 2vw, 1.35rem)', fontStyle: 'italic', fontWeight: 300, color: C.ink, opacity: 0.65, margin: '0 0 36px', lineHeight: 1.5 }}>
              devotion. longing. passion.
            </p>

            <p style={{ fontFamily: C.heading, fontSize: 'clamp(0.82rem, 1.5vw, 0.96rem)', fontStyle: 'italic', fontWeight: 300, color: C.muted, margin: '0 0 4px' }}>
              the kind of love you carry,
            </p>
            <p style={{ fontFamily: C.heading, fontSize: 'clamp(0.82rem, 1.5vw, 0.96rem)', fontStyle: 'italic', fontWeight: 300, color: C.muted, margin: '0 0 48px' }}>
              not just feel.
            </p>

            <div style={{ height: 1, width: 28, backgroundColor: C.rule, margin: '0 0 22px' }} aria-hidden="true" />

            <p style={{ fontFamily: C.heading, fontSize: '0.85rem', fontStyle: 'italic', fontWeight: 300, color: C.accent, margin: 0, letterSpacing: '0.04em' }}>
              așk — woven into every detail.
            </p>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 80 }}>
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
    <section
      id="accessories"
      style={{ backgroundColor: C.warm, padding: '100px 48px', textAlign: 'center' }}
    >
      <div style={{ maxWidth: 400, margin: '0 auto' }}>
        <p style={{ fontFamily: C.body, fontSize: '0.55rem', letterSpacing: '0.26em', textTransform: 'uppercase', color: C.muted, margin: '0 0 20px', fontWeight: 300 }}>
          Drop 01 · Malibu Morning
        </p>
        <h2
          style={{ fontFamily: C.heading, fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, color: C.ink, margin: '0 0 14px', letterSpacing: '0.02em' }}
        >
          join the list.
        </h2>
        <p style={{ fontFamily: C.body, fontSize: '0.8rem', color: C.muted, lineHeight: 1.85, margin: '0 0 48px', fontWeight: 300 }}>
          Quiet arrivals. Early access. Nothing more.
        </p>

        {done ? (
          <p style={{ fontFamily: C.heading, fontStyle: 'italic', fontWeight: 300, fontSize: '1.1rem', color: C.ink }}>
            You're on the list. See you soon.
          </p>
        ) : (
          <form
            onSubmit={e => { e.preventDefault(); if (email) setDone(true) }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}
          >
            <label htmlFor="nl-luxury" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Email address</label>
            <input
              id="nl-luxury"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              style={{ width: '100%', backgroundColor: 'transparent', border: 'none', borderBottom: `1px solid ${C.rule}`, padding: '12px 0', fontFamily: C.body, fontSize: '0.86rem', color: C.ink, outline: 'none', fontWeight: 300, textAlign: 'center', letterSpacing: '0.04em' }}
              onFocus={e => (e.currentTarget.style.borderBottomColor = C.accent)}
              onBlur={e => (e.currentTarget.style.borderBottomColor = C.rule)}
            />
            <button
              type="submit"
              style={{ fontFamily: C.body, fontSize: '0.58rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: C.ink, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 5, fontWeight: 400, marginTop: 4, transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.42')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
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
      <div
        style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}
      >
        <AskLogo color={C.ink} size="sm" fontFamily={C.heading} />
        <nav style={{ display: 'flex', gap: 32 }}>
          {navLinks.map(l => (
            <a
              key={l.label} href={l.href}
              style={{ fontFamily: C.body, fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted, textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
              onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <Link to="/"
            style={{ fontFamily: C.body, fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, textDecoration: 'none', fontWeight: 300, transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = C.ink)}
            onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
          >
            ← All concepts
          </Link>
          <p style={{ fontFamily: C.body, fontSize: '0.58rem', color: C.rule, letterSpacing: '0.08em', margin: 0, fontWeight: 300 }}>
            © 2025 așk
          </p>
        </div>
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
