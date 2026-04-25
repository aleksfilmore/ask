import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import CategoryTiles from '../components/CategoryTiles'
import MoodSection from '../components/MoodSection'
import NewsletterSignup from '../components/NewsletterSignup'
import Footer from '../components/Footer'
import ConceptSwitcher from '../components/ConceptSwitcher'
import { featuredProducts, allProducts } from '../brand'

const theme = {
  bg: '#ffffff',
  surface: '#FFF5F8',
  accent: '#FFB3D1',
  accentB: '#FFB899',
  text: '#1A1A2E',
  textMuted: '#888',
  border: '#FFD6E8',
  cta: '#FFB899',
  ctaText: '#1A1A2E',
  heading: 'Nunito, sans-serif',
  body: '"DM Sans", sans-serif',
}

/* ─── Lookbook strip (horizontal scroll) ─── */
function LookbookStrip() {
  const items = [
    { label: '#cleanfit', gradient: 'gradient-sporty-card-1' },
    { label: '#morningSesh', gradient: 'gradient-sporty-card-2' },
    { label: '#softstyle', gradient: 'gradient-sporty-card-3' },
    { label: '#askgirl', gradient: 'gradient-sporty-card-4' },
    { label: '#California', gradient: 'gradient-sporty-card-1' },
  ]

  return (
    <section
      style={{ backgroundColor: theme.bg, padding: '48px 0' }}
      aria-label="Lookbook"
    >
      <div style={{ padding: '0 24px', maxWidth: '1280px', margin: '0 auto', marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2
            style={{
              fontFamily: theme.heading,
              fontSize: '1.8rem',
              fontWeight: 800,
              color: theme.text,
              margin: 0,
            }}
          >
            The lookbook 📸
          </h2>
          <button
            style={{
              fontFamily: theme.body,
              fontSize: '0.78rem',
              color: theme.text,
              opacity: 0.5,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '0.08em',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}
          >
            See all
          </button>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: 12,
          overflowX: 'auto',
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 8,
          scrollbarWidth: 'none',
        }}
        role="list"
        aria-label="Lookbook images"
      >
        {items.map((item, i) => (
          <div
            key={i}
            role="listitem"
            style={{ flexShrink: 0, width: 220, position: 'relative' }}
          >
            <div
              className={item.gradient}
              style={{
                borderRadius: 20,
                height: 280,
                width: '100%',
              }}
              aria-label={`Lookbook photo — ${item.label}`}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 14,
                left: 14,
                backgroundColor: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(6px)',
                borderRadius: 999,
                padding: '6px 14px',
              }}
            >
              <span
                style={{
                  fontFamily: theme.body,
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: theme.text,
                }}
              >
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Energetic banner ─── */
function EnergyBanner() {
  return (
    <div
      className="gradient-sporty-hero"
      style={{
        padding: '32px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        {['activewear', 'for the girls', 'Malibu-made', 'stay soft', 'stay moving'].map((w, i) => (
          <span
            key={i}
            style={{
              fontFamily: theme.heading,
              fontSize: i % 2 === 0 ? '1.4rem' : '1rem',
              fontWeight: i % 2 === 0 ? 800 : 600,
              color: theme.text,
              opacity: i % 2 === 0 ? 0.9 : 0.55,
              letterSpacing: '-0.01em',
            }}
          >
            {w} {i < 4 && <span style={{ opacity: 0.35, marginLeft: 24 }}>·</span>}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ConceptLASporty() {
  return (
    <div style={{ backgroundColor: theme.bg, fontFamily: theme.body, minHeight: '100vh' }}>
      <ConceptSwitcher />
      <Header
        concept="sporty"
        bgColor={`${theme.bg}f0`}
        textColor={theme.text}
        borderColor={theme.border}
        fontFamily={theme.body}
        logoColor={theme.text}
      />

      <main>
        <Hero
          concept="sporty"
          headline={"Made for movement,\nselfies and soft chaos."}
          sub="Sporty essentials and everyday accessories with a California attitude."
          cta="Explore the drop"
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          accentColor={theme.accent}
          ctaColor={theme.cta}
          ctaTextColor={theme.ctaText}
        />

        <EnergyBanner />

        <ProductGrid
          products={featuredProducts}
          concept="sporty"
          title="New arrivals"
          subtitle="Fresh from the studio — grab yours before they're gone."
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          textMutedColor={theme.textMuted}
          surfaceColor={theme.surface}
          bgColor={theme.bg}
          accentColor={theme.accent}
          columns={4}
        />

        <CategoryTiles
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          bgColor={theme.bg}
          accentColor={theme.accent}
        />

        <LookbookStrip />

        <ProductGrid
          products={allProducts.slice(4)}
          concept="sporty"
          title="Also obsessed with"
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          textMutedColor={theme.textMuted}
          surfaceColor={theme.surface}
          bgColor={theme.bg}
          accentColor={theme.accent}
          columns={4}
        />

        <MoodSection
          concept="sporty"
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          accentColor={theme.accent}
          bgColor="#FFF5F8"
        />

        <NewsletterSignup
          concept="sporty"
          headingFont={theme.heading}
          bodyFont={theme.body}
          bgColor={theme.bg}
          textColor={theme.text}
          accentColor={theme.accent}
          ctaColor={theme.cta}
          ctaTextColor={theme.ctaText}
          borderColor={theme.border}
        />
      </main>

      <Footer
        concept="sporty"
        bgColor={theme.bg}
        textColor={theme.text}
        borderColor={theme.border}
        fontFamily={theme.body}
        logoColor={theme.text}
      />
    </div>
  )
}
