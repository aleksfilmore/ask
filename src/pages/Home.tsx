import { useState } from 'react'
import { Link } from 'react-router-dom'
import { proposalCards } from '../brand'

const SERIF = '"Cormorant Garamond", Georgia, serif'
const SANS  = 'Jost, sans-serif'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF8F4', fontFamily: SANS }}>

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section style={{ textAlign: 'center', padding: '80px 24px 64px' }}>
        <h1
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(4.5rem, 15vw, 10rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#1C1714',
            margin: 0,
            lineHeight: 0.9,
            letterSpacing: '-0.01em',
          }}
        >
          a<span style={{ fontStyle: 'normal', fontWeight: 300 }}>ș</span>k
        </h1>

        <p
          style={{
            fontFamily: SANS,
            fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
            fontWeight: 300,
            color: '#9A8A7E',
            letterSpacing: '0.04em',
            marginTop: 32,
            marginBottom: 0,
            lineHeight: 1.9,
            maxWidth: 420,
            margin: '32px auto 0',
          }}
        >
          movement wear inspired by love, softness, and confidence
        </p>

        <div
          style={{ width: 36, height: 1, backgroundColor: '#C8B8A8', margin: '40px auto' }}
          aria-hidden="true"
        />

        <p
          style={{
            fontFamily: SANS,
            fontSize: '0.65rem',
            fontWeight: 400,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: '#B0A090',
            margin: 0,
          }}
        >
          choose your mood
        </p>
      </section>

      {/* ── Concept cards ─────────────────────────────────────────── */}
      <section style={{ padding: '0 20px 88px' }} aria-label="Choose a concept">
        <div className="home-cards-grid" style={{ maxWidth: 1180, margin: '0 auto', gap: 20 }}>
          {proposalCards.map(c => (
            <ConceptCard key={c.id} card={c} />
          ))}
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────── */}
      <footer style={{ textAlign: 'center', padding: '28px 24px 52px', borderTop: '1px solid #EDE7DF' }}>
        <p
          style={{
            fontFamily: SANS,
            fontSize: '0.62rem',
            color: '#C0B0A4',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          așk — activewear for girls
        </p>
      </footer>
    </div>
  )
}

// ─── Concept Card ─────────────────────────────────────────────────────────────

function ConceptCard({ card }: { card: (typeof proposalCards)[0] }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      to={card.route}
      style={{ textDecoration: 'none', display: 'block' }}
      aria-label={`${card.name} — ${card.tagline}`}
    >
      <article
        style={{
          borderRadius: 4,
          overflow: 'hidden',
          backgroundColor: '#fff',
          boxShadow: hovered
            ? '0 24px 64px rgba(0,0,0,0.13)'
            : '0 2px 18px rgba(0,0,0,0.06)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition:
            'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
          <img
            src={card.img}
            alt={card.imgAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              transform: hovered ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
              display: 'block',
            }}
          />

          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.04) 44%, transparent 100%)',
            }}
            aria-hidden="true"
          />

          {/* Concept letter pill */}
          <div
            style={{
              position: 'absolute',
              top: 18,
              left: 18,
              width: 38,
              height: 38,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontFamily: SERIF,
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: '#1C1714',
                lineHeight: 1,
                fontWeight: 400,
              }}
            >
              {card.label}
            </span>
          </div>

          {/* Bottom overlay text */}
          <div
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '36px 24px 22px' }}
          >
            <h2
              style={{
                fontFamily: card.headingFont,
                fontSize: '1.6rem',
                fontWeight: card.headingWeight,
                fontStyle: card.headingStyle ?? 'normal',
                color: '#FFFFFF',
                margin: 0,
                marginBottom: 7,
                lineHeight: 1.08,
                letterSpacing: card.headingStyle === 'italic' ? '-0.01em' : '-0.025em',
              }}
            >
              {card.name}
            </h2>
            <p
              style={{
                fontFamily: SANS,
                fontSize: '0.68rem',
                color: 'rgba(255,255,255,0.58)',
                margin: 0,
                fontWeight: 300,
                letterSpacing: '0.03em',
              }}
            >
              {card.tagline}
            </p>
          </div>
        </div>

        {/* Card footer */}
        <div
          style={{
            padding: '18px 24px 22px',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: card.accent,
              display: 'inline-block',
              flexShrink: 0,
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: SANS,
              fontSize: '0.64rem',
              fontWeight: 500,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#1C1714',
              opacity: hovered ? 1 : 0.5,
              transition: 'opacity 0.2s',
            }}
          >
            {card.cta} →
          </span>
        </div>
      </article>
    </Link>
  )
}
