import type { ConceptId } from '../brand'

interface HeroProps {
  concept: ConceptId
  headline: string
  sub: string
  cta: string
  headingFont?: string
  bodyFont?: string
  textColor?: string
  accentColor?: string
  ctaColor?: string
  ctaTextColor?: string
}

export default function Hero({
  concept,
  headline,
  sub,
  cta,
  headingFont,
  bodyFont,
  textColor = '#3A2E28',
  accentColor = '#F4A98A',
  ctaColor = '#3A2E28',
  ctaTextColor = '#FFF8F0',
}: HeroProps) {
  const gradClass =
    concept === 'malibu'
      ? 'gradient-malibu-hero'
      : concept === 'sporty'
      ? 'gradient-sporty-hero'
      : 'gradient-luxury-hero'

  const heroFontSize =
    concept === 'luxury' ? 'clamp(2.8rem, 7vw, 5.5rem)' :
    concept === 'sporty' ? 'clamp(2.4rem, 6.5vw, 5rem)' :
    'clamp(2.8rem, 7vw, 5.8rem)'

  const fontWeight =
    concept === 'luxury' ? 300 :
    concept === 'sporty' ? 800 :
    500

  return (
    <section
      className={gradClass}
      style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'flex-end',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 0 72px',
      }}
      aria-label="Hero section"
    >
      {/* Decorative floating shapes */}
      {concept === 'sporty' && (
        <>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '8%',
              right: '5%',
              width: 240,
              height: 240,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.35)',
              filter: 'blur(40px)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '2%',
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: 'rgba(255,179,209,0.4)',
              filter: 'blur(32px)',
            }}
          />
        </>
      )}

      {concept === 'malibu' && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '12%',
            right: '8%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.28)',
            filter: 'blur(50px)',
          }}
        />
      )}

      {concept === 'luxury' && (
        <>
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '45%',
              height: '100%',
              background: 'linear-gradient(135deg, #DEB5A0 0%, #E8D5B7 100%)',
              opacity: 0.4,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '8%',
              right: '8%',
              width: 1,
              height: '75%',
              backgroundColor: 'rgba(44,44,44,0.12)',
            }}
          />
        </>
      )}

      {/* Large background wordmark */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: concept === 'luxury' ? '12%' : concept === 'sporty' ? '8%' : '10%',
          left: concept === 'luxury' ? 'auto' : '50%',
          right: concept === 'luxury' ? '-2%' : 'auto',
          transform: concept === 'luxury' ? 'none' : 'translateX(-50%)',
          fontFamily: headingFont,
          fontSize: 'clamp(8rem, 25vw, 22rem)',
          fontWeight: concept === 'sporty' ? 900 : concept === 'luxury' ? 300 : 600,
          color: 'rgba(255,255,255,0.18)',
          lineHeight: 1,
          userSelect: 'none',
          whiteSpace: 'nowrap',
          letterSpacing: '0.05em',
          fontStyle: concept === 'malibu' ? 'italic' : 'normal',
          pointerEvents: 'none',
        }}
      >
        așk
      </div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          width: '100%',
          padding: '0 24px',
        }}
      >
        {/* Tag pill */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(8px)',
            borderRadius: 999,
            padding: '8px 18px',
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: accentColor,
              display: 'inline-block',
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: bodyFont,
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: textColor,
            }}
          >
            {concept === 'sporty' ? 'New Drop — Summer 2025' : concept === 'luxury' ? 'Collection — Summer 2025' : 'First Drop — Summer 2025'}
          </span>
        </div>

        <h1
          style={{
            fontFamily: headingFont,
            fontSize: heroFontSize,
            fontWeight,
            color: textColor,
            margin: 0,
            marginBottom: 20,
            lineHeight: 1.1,
            maxWidth: concept === 'luxury' ? 600 : 720,
            whiteSpace: 'pre-line',
            fontStyle: concept === 'malibu' ? 'italic' : 'normal',
            letterSpacing: concept === 'luxury' ? '0.01em' : 'normal',
          }}
        >
          {headline}
        </h1>

        <p
          style={{
            fontFamily: bodyFont,
            fontSize: concept === 'luxury' ? '1rem' : '1.05rem',
            color: textColor,
            opacity: 0.7,
            maxWidth: 460,
            margin: 0,
            marginBottom: 36,
            lineHeight: 1.65,
            letterSpacing: concept === 'luxury' ? '0.02em' : 'normal',
          }}
        >
          {sub}
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            style={{
              backgroundColor: ctaColor,
              color: ctaTextColor,
              border: 'none',
              borderRadius: concept === 'sporty' ? 999 : concept === 'luxury' ? 4 : 12,
              padding: concept === 'sporty' ? '16px 36px' : '15px 32px',
              fontSize: '0.82rem',
              fontFamily: bodyFont,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.16)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)'
            }}
            aria-label={cta}
          >
            {cta}
          </button>

          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: bodyFont,
              fontSize: '0.82rem',
              color: textColor,
              opacity: 0.6,
              letterSpacing: '0.08em',
              textDecoration: 'underline',
              textUnderlineOffset: 4,
              padding: 0,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '0.6')}
          >
            {concept === 'sporty' ? 'See the lookbook' : concept === 'luxury' ? 'Learn about the brand' : 'Our story'}
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 28,
          right: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          opacity: 0.4,
        }}
      >
        <span style={{ fontFamily: bodyFont, fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: textColor, writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 40, backgroundColor: textColor, opacity: 0.4 }} />
      </div>
    </section>
  )
}
