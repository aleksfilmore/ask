import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import MoodSection from '../components/MoodSection'
import NewsletterSignup from '../components/NewsletterSignup'
import Footer from '../components/Footer'
import ConceptSwitcher from '../components/ConceptSwitcher'
import { featuredProducts, allProducts } from '../brand'

const theme = {
  bg: '#FFF8F0',
  surface: '#FEFBF6',
  accent: '#F4A98A',
  text: '#3A2E28',
  textMuted: '#8C7B72',
  border: '#E8D5B7',
  cta: '#3A2E28',
  ctaText: '#FFF8F0',
  heading: '"Playfair Display", Georgia, serif',
  body: 'Inter, sans-serif',
}

/* ─── Lookbook strip unique to Malibu ─── */
function FeaturedDrop() {
  const strips = [
    { label: 'Just arrived', gradient: 'gradient-malibu-card-1' },
    { label: 'Most loved', gradient: 'gradient-malibu-card-3' },
    { label: 'The set', gradient: 'gradient-malibu-card-2' },
  ]
  return (
    <section style={{ backgroundColor: '#FFF8F0', padding: '40px 24px 0' }} aria-label="Featured drop lookbook">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 32 }}>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: theme.accent,
              display: 'inline-block',
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontFamily: theme.body,
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: theme.text,
              opacity: 0.55,
              fontWeight: 500,
            }}
          >
            Featured drop
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 12 }}>
          {strips.map((strip, i) => (
            <div
              key={strip.label}
              className={strip.gradient}
              style={{
                borderRadius: 20,
                aspectRatio: i === 1 ? '3/4' : '4/5',
                position: 'relative',
                overflow: 'hidden',
              }}
              aria-label={`${strip.label} mood image`}
            >
              <div
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  backgroundColor: 'rgba(255,248,240,0.75)',
                  backdropFilter: 'blur(8px)',
                  borderRadius: 8,
                  padding: '8px 14px',
                }}
              >
                <span
                  style={{
                    fontFamily: theme.heading,
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: theme.text,
                  }}
                >
                  {strip.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Scrolling marquee strip ─── */
function MarqueeStrip() {
  const text = ' Soft pieces · Clean girl · Malibu mood · First drop · Sun-washed · '
  return (
    <div
      style={{
        backgroundColor: theme.text,
        padding: '14px 0',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: 'inline-block',
          animation: 'marquee 22s linear infinite',
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            style={{
              fontFamily: theme.heading,
              fontSize: '0.85rem',
              fontStyle: 'italic',
              color: '#FFF8F0',
              letterSpacing: '0.08em',
            }}
          >
            {text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default function ConceptMalibu() {
  return (
    <div style={{ backgroundColor: theme.bg, fontFamily: theme.body, minHeight: '100vh' }}>
      <ConceptSwitcher />
      <Header
        concept="malibu"
        bgColor={`${theme.bg}e8`}
        textColor={theme.text}
        borderColor={theme.border}
        fontFamily={theme.body}
        logoColor={theme.text}
      />

      <main>
        <Hero
          concept="malibu"
          headline={"Soft pieces for\nsunny routines."}
          sub="Activewear, hoodies, tees and accessories with a clean Malibu mood."
          cta="Shop the first drop"
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          accentColor={theme.accent}
          ctaColor={theme.cta}
          ctaTextColor={theme.ctaText}
        />

        <MarqueeStrip />

        <FeaturedDrop />

        <ProductGrid
          products={featuredProducts}
          concept="malibu"
          title="Bestsellers"
          subtitle="The pieces everyone keeps coming back for."
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
          concept="malibu"
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          accentColor={theme.accent}
          bgColor="#FEFBF6"
        />

        <ProductGrid
          products={allProducts.slice(4)}
          concept="malibu"
          title="All pieces"
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          textMutedColor={theme.textMuted}
          surfaceColor={theme.surface}
          bgColor={theme.bg}
          accentColor={theme.accent}
          columns={4}
        />

        <NewsletterSignup
          concept="malibu"
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
        concept="malibu"
        bgColor={theme.bg}
        textColor={theme.text}
        borderColor={theme.border}
        fontFamily={theme.body}
        logoColor={theme.text}
      />
    </div>
  )
}
