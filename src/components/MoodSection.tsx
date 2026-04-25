import type { ConceptId } from '../brand'

interface MoodSectionProps {
  concept: ConceptId
  headingFont?: string
  bodyFont?: string
  textColor?: string
  accentColor?: string
  bgColor?: string
}

const moodContent = {
  malibu: {
    headline: 'Born in California.\nMade for your morning.',
    body: 'așk started with a simple idea: what if your activewear felt as good as a slow morning in the sun? We make pieces for the girls who wake up early, stretch by the window, and carry a tote everywhere.',
    stats: [
      { num: '8', label: 'First Drop Pieces' },
      { num: '100%', label: 'Made with intention' },
      { num: '2025', label: 'Founded' },
    ],
  },
  sporty: {
    headline: 'Move. Post.\nRepeat.',
    body: "ashk is the brand for girls who are always somewhere — the gym, the coffee shop, the group chat. Our pieces keep up with your energy and still look good in photos.",
    stats: [
      { num: '∞', label: 'Outfit combos' },
      { num: '8', label: 'Iconic pieces' },
      { num: '24/7', label: 'Wearable' },
    ],
  },
  luxury: {
    headline: 'Quiet pieces\nfor loud days.',
    body: 'We believe style should feel effortless. așk is about finding the perfect thing and wearing it forever. Clean lines, soft textures, and details you notice only up close.',
    stats: [
      { num: '8', label: 'Curated pieces' },
      { num: 'Zero', label: 'Excess' },
      { num: '∞', label: 'Wears per piece' },
    ],
  },
}

export default function MoodSection({
  concept,
  headingFont,
  bodyFont,
  textColor = '#3A2E28',
  accentColor = '#F4A98A',
  bgColor,
}: MoodSectionProps) {
  const content = moodContent[concept]

  const gradClass =
    concept === 'malibu'
      ? 'gradient-malibu-mood'
      : concept === 'sporty'
      ? 'gradient-sporty-hero'
      : 'gradient-luxury-hero'

  return (
    <section
      style={{ backgroundColor: bgColor, padding: '80px 24px' }}
      id="about"
      aria-label="About așk"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          className="grid md:grid-cols-2"
          style={{ gap: 48, alignItems: 'center' }}
        >
          {/* Visual block */}
          <div
            className={gradClass}
            style={{
              borderRadius: concept === 'luxury' ? 8 : concept === 'sporty' ? 28 : 24,
              aspectRatio: '4/5',
              position: 'relative',
              overflow: 'hidden',
            }}
            aria-hidden="true"
          >
            {/* Decorative overlaid wordmark */}
            <div
              style={{
                position: 'absolute',
                bottom: 32,
                left: 32,
                fontFamily: headingFont,
                fontSize: concept === 'luxury' ? '4rem' : '4.5rem',
                fontWeight: concept === 'luxury' ? 300 : concept === 'sporty' ? 800 : 500,
                color: 'rgba(255,255,255,0.35)',
                lineHeight: 1,
                fontStyle: concept === 'malibu' ? 'italic' : 'normal',
                letterSpacing: '0.08em',
                userSelect: 'none',
              }}
            >
              așk
            </div>

            {/* Abstract shape */}
            <div
              style={{
                position: 'absolute',
                top: 32,
                right: 32,
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.25)',
              }}
            />
          </div>

          {/* Text block */}
          <div>
            <h2
              style={{
                fontFamily: headingFont,
                fontSize: concept === 'luxury' ? '2.8rem' : concept === 'sporty' ? '2.4rem' : '2.6rem',
                fontWeight: concept === 'luxury' ? 300 : concept === 'sporty' ? 800 : 500,
                color: textColor,
                margin: 0,
                marginBottom: 24,
                lineHeight: 1.18,
                whiteSpace: 'pre-line',
                fontStyle: concept === 'malibu' ? 'italic' : 'normal',
              }}
            >
              {content.headline}
            </h2>

            <p
              style={{
                fontFamily: bodyFont,
                fontSize: '1rem',
                color: textColor,
                opacity: 0.7,
                lineHeight: 1.75,
                margin: 0,
                marginBottom: 44,
                maxWidth: 440,
              }}
            >
              {content.body}
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: 40 }}>
              {content.stats.map(stat => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: headingFont,
                      fontSize: '2rem',
                      fontWeight: concept === 'sporty' ? 800 : 500,
                      color: textColor,
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontFamily: bodyFont,
                      fontSize: '0.72rem',
                      color: textColor,
                      opacity: 0.5,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
