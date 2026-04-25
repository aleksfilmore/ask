import Header from '../components/Header'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import MoodSection from '../components/MoodSection'
import NewsletterSignup from '../components/NewsletterSignup'
import Footer from '../components/Footer'
import ConceptSwitcher from '../components/ConceptSwitcher'
import { featuredProducts, allProducts } from '../brand'

const theme = {
  bg: '#FAFAF8',
  surface: '#F5F0E8',
  accent: '#DEB5A0',
  text: '#2C2C2C',
  textMuted: '#8A8078',
  border: '#E8D5B7',
  cta: '#2C2C2C',
  ctaText: '#FAFAF8',
  heading: '"Cormorant Garamond", Georgia, serif',
  body: 'Jost, sans-serif',
}

/* ─── Accessories highlight ─── */
function AccessoriesHighlight() {
  const items = [
    {
      name: 'Clean Girl Cap',
      desc: 'Washed twill',
      price: '$28',
      gradient: 'gradient-luxury-card-4',
    },
    {
      name: 'Peach Club Tote',
      desc: 'Canvas carryall',
      price: '$42',
      gradient: 'gradient-luxury-card-1',
    },
    {
      name: 'Mini Gym Pouch',
      desc: 'Zip essentials',
      price: '$32',
      gradient: 'gradient-luxury-card-3',
    },
  ]

  return (
    <section
      style={{ backgroundColor: theme.surface, padding: '80px 24px' }}
      id="accessories"
      aria-label="Accessories highlight"
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: 56, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <p
              style={{
                fontFamily: theme.body,
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: theme.text,
                opacity: 0.45,
                margin: 0,
                marginBottom: 8,
              }}
            >
              Carry with you
            </p>
            <h2
              style={{
                fontFamily: theme.heading,
                fontSize: '2.4rem',
                fontWeight: 300,
                color: theme.text,
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              Accessories
            </h2>
          </div>
          <button
            style={{
              fontFamily: theme.body,
              fontSize: '0.72rem',
              color: theme.text,
              opacity: 0.45,
              background: 'none',
              border: `1px solid ${theme.border}`,
              borderRadius: 4,
              padding: '10px 20px',
              cursor: 'pointer',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.borderColor = theme.text
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = '0.45'
              e.currentTarget.style.borderColor = theme.border
            }}
          >
            View all
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: 32 }}
        >
          {items.map(item => (
            <article key={item.name} style={{ cursor: 'pointer' }}>
              <div
                className={item.gradient}
                style={{
                  borderRadius: 4,
                  aspectRatio: '4/3',
                  marginBottom: 20,
                }}
                aria-label={`${item.name} product image`}
              />
              <div style={{ padding: '0 2px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    marginBottom: 4,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: theme.heading,
                      fontSize: '1.25rem',
                      fontWeight: 400,
                      color: theme.text,
                      margin: 0,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {item.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: theme.body,
                      fontSize: '0.88rem',
                      color: theme.text,
                      opacity: 0.65,
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: theme.body,
                    fontSize: '0.78rem',
                    color: theme.text,
                    opacity: 0.45,
                    margin: 0,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Editorial divider ─── */
function EditorialDivider({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: '0 24px',
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      }}
      aria-hidden="true"
    >
      <div style={{ flex: 1, height: 1, backgroundColor: theme.border }} />
      <span
        style={{
          fontFamily: theme.heading,
          fontSize: '0.85rem',
          color: theme.text,
          opacity: 0.35,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          fontStyle: 'italic',
        }}
      >
        {text}
      </span>
      <div style={{ flex: 1, height: 1, backgroundColor: theme.border }} />
    </div>
  )
}

export default function ConceptSoftLuxury() {
  return (
    <div style={{ backgroundColor: theme.bg, fontFamily: theme.body, minHeight: '100vh' }}>
      <ConceptSwitcher />
      <Header
        concept="luxury"
        bgColor={`${theme.bg}f2`}
        textColor={theme.text}
        borderColor={theme.border}
        fontFamily={theme.body}
        logoColor={theme.text}
      />

      <main>
        <Hero
          concept="luxury"
          headline={"Everyday pieces with\na little sun on them."}
          sub="Minimal activewear and accessories for girls who like simple things done beautifully."
          cta="View collection"
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          accentColor={theme.accent}
          ctaColor={theme.cta}
          ctaTextColor={theme.ctaText}
        />

        <div style={{ padding: '64px 0 0' }}>
          <EditorialDivider text="The collection" />
        </div>

        <ProductGrid
          products={featuredProducts}
          concept="luxury"
          title="Editorial pieces"
          subtitle="Minimal, considered, made to be worn everywhere."
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          textMutedColor={theme.textMuted}
          surfaceColor={theme.bg}
          bgColor={theme.bg}
          accentColor={theme.accent}
          columns={4}
        />

        <div style={{ padding: '0 0 64px' }}>
          <EditorialDivider text="Accessories" />
        </div>

        <AccessoriesHighlight />

        <div style={{ padding: '64px 0 0' }}>
          <EditorialDivider text="About" />
        </div>

        <MoodSection
          concept="luxury"
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          accentColor={theme.accent}
          bgColor={theme.bg}
        />

        <div style={{ padding: '0 0 64px' }}>
          <EditorialDivider text="All pieces" />
        </div>

        <ProductGrid
          products={allProducts.slice(4)}
          concept="luxury"
          headingFont={theme.heading}
          bodyFont={theme.body}
          textColor={theme.text}
          textMutedColor={theme.textMuted}
          surfaceColor={theme.bg}
          bgColor={theme.bg}
          accentColor={theme.accent}
          columns={4}
        />

        <NewsletterSignup
          concept="luxury"
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
        concept="luxury"
        bgColor={theme.bg}
        textColor={theme.text}
        borderColor={theme.border}
        fontFamily={theme.body}
        logoColor={theme.text}
      />
    </div>
  )
}
