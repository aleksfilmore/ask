import { useState } from 'react'
import type { ConceptId } from '../brand'

interface NewsletterSignupProps {
  concept: ConceptId
  headingFont?: string
  bodyFont?: string
  bgColor?: string
  textColor?: string
  accentColor?: string
  ctaColor?: string
  ctaTextColor?: string
  borderColor?: string
}

export default function NewsletterSignup({
  concept,
  headingFont,
  bodyFont,
  bgColor,
  textColor = '#3A2E28',
  accentColor = '#F4A98A',
  ctaColor = '#3A2E28',
  ctaTextColor = '#FFF8F0',
  borderColor = '#E8D5B7',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const headings = {
    malibu: 'Be the first to know.',
    sporty: 'Drop alerts. No spam.',
    luxury: 'Join the list.',
  }
  const subs = {
    malibu: 'Get early access to drops, behind-the-scenes and sunshine updates.',
    sporty: "Sign up and we'll text/email you when something drops. That's it.",
    luxury: 'Receive new arrivals and quiet updates. Nothing more.',
  }
  const placeholders = {
    malibu: 'your@email.com',
    sporty: 'drop my email here ✉️',
    luxury: 'your@email.com',
  }
  const buttons = {
    malibu: 'Join the waitlist',
    sporty: 'I\'m in',
    luxury: 'Subscribe',
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  const gradClass =
    concept === 'malibu'
      ? 'gradient-malibu-card-3'
      : concept === 'sporty'
      ? 'gradient-sporty-hero'
      : 'gradient-luxury-card-2'

  return (
    <section
      style={{ padding: '80px 24px', backgroundColor: bgColor }}
      id="newsletter"
      aria-label="Newsletter signup"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          className={gradClass}
          style={{
            borderRadius: concept === 'luxury' ? 8 : concept === 'sporty' ? 32 : 28,
            padding: '64px 48px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative circles */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 200,
              height: 200,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.15)',
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: -60,
              left: -60,
              width: 250,
              height: 250,
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2
              style={{
                fontFamily: headingFont,
                fontSize: concept === 'luxury' ? '2.6rem' : concept === 'sporty' ? '2.4rem' : '2.4rem',
                fontWeight: concept === 'luxury' ? 300 : concept === 'sporty' ? 800 : 500,
                color: textColor,
                margin: 0,
                marginBottom: 12,
                fontStyle: concept === 'malibu' ? 'italic' : 'normal',
              }}
            >
              {headings[concept]}
            </h2>

            <p
              style={{
                fontFamily: bodyFont,
                fontSize: '0.95rem',
                color: textColor,
                opacity: 0.7,
                margin: 0,
                marginBottom: 36,
                lineHeight: 1.6,
              }}
            >
              {subs[concept]}
            </p>

            {submitted ? (
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: concept === 'sporty' ? 20 : 12,
                  padding: '18px 32px',
                  display: 'inline-block',
                }}
              >
                <span
                  style={{
                    fontFamily: headingFont,
                    fontSize: '1.1rem',
                    color: textColor,
                    fontStyle: concept === 'malibu' ? 'italic' : 'normal',
                  }}
                >
                  {concept === 'sporty' ? 'You\'re on the list 🌸' : 'You\'re on the list. See you soon.'}
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  gap: 12,
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
                aria-label="Email signup form"
              >
                <label htmlFor={`newsletter-${concept}`} className="sr-only">
                  Email address
                </label>
                <input
                  id={`newsletter-${concept}`}
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder={placeholders[concept]}
                  style={{
                    flex: '1 1 240px',
                    maxWidth: 340,
                    backgroundColor: 'rgba(255,255,255,0.75)',
                    backdropFilter: 'blur(8px)',
                    border: `1.5px solid ${borderColor}`,
                    borderRadius: concept === 'sporty' ? 999 : concept === 'luxury' ? 4 : 12,
                    padding: '14px 20px',
                    fontSize: '0.9rem',
                    fontFamily: bodyFont,
                    color: textColor,
                    outline: 'none',
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = accentColor)}
                  onBlur={e => (e.currentTarget.style.borderColor = borderColor)}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: ctaColor,
                    color: ctaTextColor,
                    border: 'none',
                    borderRadius: concept === 'sporty' ? 999 : concept === 'luxury' ? 4 : 12,
                    padding: '14px 28px',
                    fontSize: '0.82rem',
                    fontFamily: bodyFont,
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {buttons[concept]}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
