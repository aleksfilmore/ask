/**
 * Concept B — LA Sporty Angel
 * Tone: Energetic, playful, social, movement-driven.
 * Palette: Yellow + pink accents.
 * Images: /public/images test/Lemon only.
 */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConceptSwitcher from '../components/ConceptSwitcher'
import AskLogo from '../components/AskLogo'
import { lemonImgs, navLinks } from '../brand'

const C = {
  bg:      '#FFFEF8',
  surface: '#FEFCE8',
  ink:     '#1A1A1A',
  muted:   '#888',
  yellow:  '#F0DC5A',
  pink:    '#F9A8C0',
  pill:    '#FEF9C3',
  heading: 'Nunito, sans-serif',
  body:    '"DM Sans", sans-serif',
}

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        backgroundColor: `${C.bg}f5`, backdropFilter: 'blur(14px)',
        borderBottom: `1.5px solid ${C.pill}`,
      }}
    >
      <div
        style={{ maxWidth: 1320, margin: '0 auto', padding: '0 28px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Link to="/concept-la-sporty" style={{ textDecoration: 'none' }}>
          <AskLogo color={C.ink} size="md" fontFamily={C.heading} />
        </Link>
        <nav className="hidden md:flex" style={{ gap: 28 }}>
          {navLinks.map(l => (
            <a
              key={l.label} href={l.href}
              style={{ fontFamily: C.heading, fontSize: '0.78rem', fontWeight: 800, color: C.ink, opacity: 0.45, textDecoration: 'none', transition: 'opacity 0.2s', letterSpacing: '-0.01em', textTransform: 'uppercase' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.45')}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button aria-label="Bag" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="2" strokeLinecap="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>
          </button>
          <button
            className="md:hidden" onClick={() => setOpen(v => !v)} aria-label="Menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            {open
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            }
          </button>
        </div>
      </div>
      {open && (
        <div style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.pill}`, padding: '16px 28px 24px' }}>
          {navLinks.map(l => (
            <a
              key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ display: 'block', fontFamily: C.heading, fontSize: '1rem', fontWeight: 800, color: C.ink, textDecoration: 'none', padding: '10px 0', borderBottom: `1px solid ${C.pill}`, textTransform: 'uppercase' }}
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
        src={lemonImgs.hero}
        alt="Girl in lemon yellow activewear set, beach run lifestyle"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
      />
      {/* Gradient — stronger at bottom */}
      <div
        style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.1) 50%, transparent 100%)' }}
        aria-hidden="true"
      />

      {/* Live drop tag */}
      <div
        style={{ position: 'absolute', top: 28, left: 28, backgroundColor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', borderRadius: 999, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: 8 }}
      >
        <span
          className="live-blip"
          style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.yellow, display: 'inline-block', flexShrink: 0 }}
          aria-hidden="true"
        />
        <span style={{ fontFamily: C.heading, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.08em', color: C.ink, textTransform: 'uppercase' }}>
          Drop 01 · Malibu Morning · Live now
        </span>
      </div>

      {/* Copy */}
      <div style={{ position: 'absolute', bottom: 60, left: 36, maxWidth: 560 }} className="animate-fade-up">
        <h1
          style={{ fontFamily: C.heading, fontSize: 'clamp(3rem, 7vw, 5.8rem)', fontWeight: 900, color: '#FFFFFF', lineHeight: 0.96, margin: '0 0 24px', letterSpacing: '-0.03em' }}
        >
          move like<br />you mean it
        </h1>
        <p style={{ fontFamily: C.body, fontSize: '0.9rem', color: 'rgba(255,255,255,0.62)', margin: '0 0 36px', lineHeight: 1.65, maxWidth: 360, fontWeight: 400 }}>
          lightweight sets for beach runs, iced coffees,<br />and everything in between
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <button
            style={{ backgroundColor: C.yellow, color: C.ink, border: 'none', borderRadius: 999, padding: '15px 32px', fontFamily: C.heading, fontSize: '0.8rem', fontWeight: 900, letterSpacing: '-0.01em', cursor: 'pointer', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Explore the drop
          </button>
          <button
            style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: 999, padding: '15px 24px', fontFamily: C.heading, fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', backdropFilter: 'blur(8px)' }}
          >
            View lookbook
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
function Marquee() {
  const text = ' drop 01 · malibu morning · move like you mean it · lemon sets dropping now · '
  return (
    <div style={{ backgroundColor: C.yellow, padding: '12px 0', overflow: 'hidden' }} aria-hidden="true">
      <div className="marquee-track" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            style={{ fontFamily: C.heading, fontSize: '0.78rem', fontWeight: 900, color: C.ink, letterSpacing: '0.02em', textTransform: 'lowercase' }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Featured Set ─────────────────────────────────────────────────────────────
function FeaturedSet() {
  const colors = ['#F0DC5A', '#F9A8C0', '#FAF7F2', '#E8A870']
  const colorNames = ['Lemon', 'Pink', 'Cream', 'Peach']
  const [activeColor, setActiveColor] = useState(0)

  return (
    <section id="sets" style={{ backgroundColor: C.bg }} aria-label="Featured set">
      <div className="feat-set-grid" style={{ maxWidth: 1320, margin: '0 auto' }}>

        {/* Details col — left on this concept */}
        <div
          style={{ backgroundColor: C.surface, padding: '64px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: 0 }}
        >
          <p style={{ fontFamily: C.heading, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.yellow, margin: '0 0 16px' }}>
            Drop 01 · Sets
          </p>
          <h2
            style={{ fontFamily: C.heading, fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, color: C.ink, margin: '0 0 6px', lineHeight: 1.0, letterSpacing: '-0.025em' }}
          >
            Sunset Set
          </h2>
          <p style={{ fontFamily: C.heading, fontSize: '1rem', fontWeight: 700, color: C.muted, margin: '0 0 28px', letterSpacing: '-0.01em' }}>
            — Lemon
          </p>

          <div style={{ height: 3, width: 32, backgroundColor: C.yellow, margin: '0 0 28px', borderRadius: 999 }} aria-hidden="true" />

          <p style={{ fontFamily: C.body, fontSize: '0.86rem', color: C.muted, margin: '0 0 32px', lineHeight: 1.7, maxWidth: 280 }}>
            Ruffle-trim sports bra + biker shorts.<br />
            Ultra-light stretch. Made for movement, stays for the coffee run.
          </p>

          <p style={{ fontFamily: C.heading, fontSize: '1.8rem', fontWeight: 900, color: C.ink, margin: '0 0 28px', letterSpacing: '-0.02em' }}>
            $88
          </p>

          {/* Swatches */}
          <div style={{ margin: '0 0 36px' }}>
            <p style={{ fontFamily: C.heading, fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.muted, margin: '0 0 10px' }}>
              {colorNames[activeColor]}
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {colors.map((col, i) => (
                <button
                  key={col}
                  onClick={() => setActiveColor(i)}
                  aria-label={colorNames[i]}
                  style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: col, border: activeColor === i ? `2.5px solid ${C.ink}` : '2px solid rgba(0,0,0,0.08)', cursor: 'pointer', padding: 0, outline: 'none', transition: 'border 0.15s' }}
                />
              ))}
            </div>
          </div>

          <button
            style={{ backgroundColor: C.ink, color: '#fff', border: 'none', borderRadius: 999, padding: '16px 0', fontFamily: C.heading, fontSize: '0.8rem', fontWeight: 900, cursor: 'pointer', transition: 'opacity 0.2s', letterSpacing: '-0.01em' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.78')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Explore the drop
          </button>
        </div>

        {/* Image col */}
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 560, order: 1 }}>
          <img
            src={lemonImgs.featSet}
            alt="Sunset Set — Lemon, front view"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', minHeight: 560 }}
          />
          <div style={{ position: 'absolute', bottom: 20, right: 20, width: 90, overflow: 'hidden', border: '2.5px solid rgba(255,255,255,0.95)', borderRadius: 4 }}>
            <img
              src={lemonImgs.featSetAlt}
              alt="Sunset Set — back view"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Drop Section ─────────────────────────────────────────────────────────────
function DropSection() {
  return (
    <section id="tops" style={{ backgroundColor: C.bg, padding: '80px 28px' }} aria-label="Collection drops">
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>

        {/* Drop 01 */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, paddingBottom: 20, borderBottom: `1.5px solid ${C.pill}` }}>
          <div>
            <p style={{ fontFamily: C.heading, fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted, margin: '0 0 6px' }}>Now live</p>
            <h2 style={{ fontFamily: C.heading, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 900, color: C.ink, margin: 0, letterSpacing: '-0.02em' }}>Drop 01 · Malibu Morning</h2>
          </div>
          <span
            style={{ fontFamily: C.heading, fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.ink, backgroundColor: C.yellow, padding: '7px 16px', borderRadius: 999 }}
          >
            Live
          </span>
        </div>

        {/* 3-image grid */}
        <div className="drop-3-grid" style={{ gap: 12, marginBottom: 72 }}>
          {[lemonImgs.drop1, lemonImgs.drop2, lemonImgs.drop3].map((src, i) => (
            <div key={i} style={{ overflow: 'hidden', borderRadius: 16 }}>
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
        <div style={{ borderRadius: 20, backgroundColor: C.surface, padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <p style={{ fontFamily: C.heading, fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.muted, margin: '0 0 6px' }}>Coming next</p>
            <h3 style={{ fontFamily: C.heading, fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 900, color: C.ink, margin: 0, letterSpacing: '-0.02em', opacity: 0.6 }}>Drop 02 · Peach Club</h3>
          </div>
          <span
            style={{ fontFamily: C.heading, fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, border: `1.5px solid ${C.muted}`, borderRadius: 999, padding: '8px 18px' }}
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
    <section id="bottoms" aria-label="Lifestyle">
      {/* Full-bleed lifestyle image */}
      <div style={{ position: 'relative', height: '70vh', minHeight: 480, overflow: 'hidden' }}>
        <img
          src={lemonImgs.life1}
          alt="Girl in lemon activewear, beach lifestyle movement"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.45) 0%, transparent 60%)' }} aria-hidden="true" />
        <p
          style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', fontFamily: C.heading, fontSize: 'clamp(1rem, 3vw, 1.6rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.01em', textAlign: 'center', whiteSpace: 'nowrap' }}
        >
          movement · laughter · sunshine · confidence
        </p>
      </div>

      {/* 3-image grid */}
      <div className="drop-3-grid" style={{ gap: 6, backgroundColor: C.bg }}>
        {[lemonImgs.grid1, lemonImgs.life2, lemonImgs.grid2].map((src, i) => (
          <div key={i} style={{ overflow: 'hidden' }}>
            <img
              src={src}
              alt={`Lemon lifestyle shot ${i + 1}`}
              style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Brand Meaning ────────────────────────────────────────────────────────────
function BrandMeaning() {
  return (
    <section
      style={{ backgroundColor: C.ink, padding: '80px 28px' }}
      aria-label="Brand meaning"
    >
      <div className="brand-meaning-2col" style={{ maxWidth: 1320, margin: '0 auto', gap: 64 }}>

        {/* Image */}
        <div style={{ overflow: 'hidden', borderRadius: 20 }}>
          <img
            src={lemonImgs.meaning}
            alt="Lemon activewear editorial mood"
            style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
          />
        </div>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontFamily: C.heading, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: '0 0 32px' }}>
            about the name
          </p>

          <h2
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(4rem, 8vw, 6.5rem)', fontWeight: 400, fontStyle: 'italic', color: C.yellow, margin: '0 0 20px', lineHeight: 0.9 }}
          >
            așk
          </h2>

          <div style={{ height: 3, width: 28, backgroundColor: C.yellow, margin: '0 0 32px', borderRadius: 999 }} aria-hidden="true" />

          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', margin: '0 0 6px' }}>
            (noun) — a Turkish word for
          </p>
          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)', fontStyle: 'italic', color: '#fff', margin: '0 0 28px', lineHeight: 1.25, fontWeight: 400 }}>
            a love that consumes,<br />softens, and transforms.
          </p>

          <p style={{ fontFamily: C.heading, fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', margin: '0 0 8px' }}>
            more than romance
          </p>
          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1rem, 2vw, 1.35rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.65)', margin: '0 0 28px', lineHeight: 1.5 }}>
            devotion. longing. passion.
          </p>

          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(0.85rem, 1.6vw, 1rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', margin: '0 0 4px' }}>
            the kind of love you carry,
          </p>
          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(0.85rem, 1.6vw, 1rem)', fontStyle: 'italic', color: 'rgba(255,255,255,0.45)', margin: '0 0 40px' }}>
            not just feel.
          </p>

          <div style={{ height: 1, width: 28, backgroundColor: 'rgba(255,255,255,0.15)', margin: '0 0 20px' }} aria-hidden="true" />

          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '0.88rem', fontStyle: 'italic', color: C.yellow, margin: 0, letterSpacing: '0.04em' }}>
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
      style={{ backgroundColor: C.surface, padding: '80px 28px', textAlign: 'center' }}
    >
      <p style={{ fontFamily: C.heading, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.muted, margin: '0 0 14px' }}>
        Drop 02 · Peach Club
      </p>
      <h2
        style={{ fontFamily: C.heading, fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: C.ink, margin: '0 0 10px', letterSpacing: '-0.025em' }}
      >
        be first in line.
      </h2>
      <p style={{ fontFamily: C.body, fontSize: '0.88rem', color: C.muted, margin: '0 auto 40px', lineHeight: 1.7, maxWidth: 320 }}>
        Drop alerts. New colorways. Nothing you didn't ask for.
      </p>

      {done ? (
        <p style={{ fontFamily: C.heading, fontSize: '1.1rem', fontWeight: 900, color: C.ink }}>You're on the list ⚡</p>
      ) : (
        <form
          onSubmit={e => { e.preventDefault(); if (email) setDone(true) }}
          style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 460, margin: '0 auto' }}
        >
          <label htmlFor="nl-sporty" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0,0,0,0)' }}>Email address</label>
          <input
            id="nl-sporty"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="drop my email here"
            style={{ flex: '1 1 220px', maxWidth: 300, backgroundColor: '#fff', border: 'none', borderRadius: 999, padding: '14px 22px', fontFamily: C.body, fontSize: '0.88rem', color: C.ink, outline: 'none', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
          />
          <button
            type="submit"
            style={{ backgroundColor: C.ink, color: '#fff', border: 'none', borderRadius: 999, padding: '14px 28px', fontFamily: C.heading, fontSize: '0.78rem', fontWeight: 900, cursor: 'pointer', transition: 'opacity 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            I'm in
          </button>
        </form>
      )}
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ backgroundColor: C.ink, padding: '32px 28px' }}>
      <div
        style={{ maxWidth: 1320, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}
      >
        <AskLogo color="#fff" size="sm" fontFamily={C.heading} />
        <nav style={{ display: 'flex', gap: 20 }}>
          {navLinks.map(l => (
            <a
              key={l.label} href={l.href}
              style={{ fontFamily: C.heading, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Link to="/"
            style={{ fontFamily: C.heading, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
          >
            ← All concepts
          </Link>
          <p style={{ fontFamily: C.body, fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', margin: 0 }}>© 2025 așk</p>
        </div>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ConceptLASporty() {
  return (
    <div style={{ backgroundColor: C.bg, fontFamily: C.body }}>
      <ConceptSwitcher />
      <Header />
      <main>
        <Hero />
        <Marquee />
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

