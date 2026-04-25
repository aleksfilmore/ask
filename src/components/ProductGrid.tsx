import type { Product, ConceptId } from '../brand'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
  concept: ConceptId
  title?: string
  subtitle?: string
  headingFont?: string
  bodyFont?: string
  accentColor?: string
  textColor?: string
  textMutedColor?: string
  surfaceColor?: string
  bgColor?: string
  columns?: 2 | 4
}

export default function ProductGrid({
  products,
  concept,
  title,
  subtitle,
  headingFont,
  bodyFont,
  accentColor,
  textColor = '#3A2E28',
  textMutedColor,
  surfaceColor,
  bgColor,
  columns = 4,
}: ProductGridProps) {
  return (
    <section
      style={{ backgroundColor: bgColor, padding: '80px 24px' }}
      id="shop"
      aria-labelledby={title ? 'grid-title' : undefined}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {(title || subtitle) && (
          <div style={{ marginBottom: 48, maxWidth: 480 }}>
            {title && (
              <h2
                id="grid-title"
                style={{
                  fontFamily: headingFont,
                  fontSize: concept === 'luxury' ? '2.4rem' : concept === 'sporty' ? '2rem' : '2.2rem',
                  fontWeight: concept === 'luxury' ? 300 : concept === 'sporty' ? 800 : 500,
                  color: textColor,
                  margin: 0,
                  marginBottom: 12,
                  lineHeight: 1.15,
                  letterSpacing: concept === 'luxury' ? '0.02em' : 'normal',
                  fontStyle: concept === 'malibu' ? 'italic' : 'normal',
                }}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p style={{
                fontFamily: bodyFont,
                fontSize: '0.95rem',
                color: textMutedColor ?? textColor,
                opacity: 0.65,
                margin: 0,
                lineHeight: 1.6,
              }}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            gap: concept === 'luxury' ? 48 : 20,
          }}
          className={`grid grid-cols-2 ${columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-2'}`}
        >
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              concept={concept}
              headingFont={headingFont}
              bodyFont={bodyFont}
              accentColor={accentColor}
              textColor={textColor}
              surfaceColor={surfaceColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
