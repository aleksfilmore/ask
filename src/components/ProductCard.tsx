import type { Product, ConceptId } from '../brand'

interface ProductCardProps {
  product: Product
  concept: ConceptId
  headingFont?: string
  bodyFont?: string
  accentColor?: string
  textColor?: string
  surfaceColor?: string
}

export default function ProductCard({
  product,
  concept,
  headingFont,
  bodyFont,
  accentColor = '#F4A98A',
  textColor = '#3A2E28',
  surfaceColor = '#FEFBF6',
}: ProductCardProps) {
  return (
    <article
      className="product-card-wrapper"
      style={{
        backgroundColor: surfaceColor,
        borderRadius: concept === 'sporty' ? '24px' : concept === 'luxury' ? '4px' : '20px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
      }}
      tabIndex={0}
      role="button"
      aria-label={`View ${product.name} — $${product.price}`}
      onKeyDown={e => { if (e.key === 'Enter') e.currentTarget.click() }}
    >
      {/* Product image */}
      <div className="product-image-wrapper" style={{ aspectRatio: '3/4', position: 'relative', backgroundColor: '#F0EBE4', overflow: 'hidden' }}>
        <img
          src={product.img}
          alt={product.name}
          className="img-hover"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
        />

        {/* Quick View overlay */}
        <div
          className="quick-view-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '20px',
            background: 'linear-gradient(to top, rgba(0,0,0,0.18) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        >
          <span
            style={{
              backgroundColor: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(8px)',
              borderRadius: 999,
              padding: '10px 28px',
              fontSize: '0.72rem',
              fontFamily: bodyFont,
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: textColor,
              whiteSpace: 'nowrap',
            }}
          >
            Quick View
          </span>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: concept === 'luxury' ? '20px 4px' : '18px 20px 20px' }}>
        <h3
          style={{
            fontFamily: headingFont,
            fontSize: concept === 'luxury' ? '1rem' : '0.95rem',
            fontWeight: concept === 'luxury' ? 400 : 600,
            color: textColor,
            margin: 0,
            marginBottom: 4,
            letterSpacing: concept === 'luxury' ? '0.02em' : 'normal',
          }}
        >
          {product.name}
        </h3>

        <p
          style={{
            fontFamily: bodyFont,
            fontSize: '0.78rem',
            color: textColor,
            opacity: 0.55,
            margin: 0,
            marginBottom: 14,
            letterSpacing: '0.02em',
          }}
        >
          {product.descriptor}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Color dots */}
          <div style={{ display: 'flex', gap: 6 }} role="list" aria-label="Available colors">
            {product.colors?.map(hex => (
              <span
                key={hex}
                role="listitem"
                title={hex}
                aria-label={hex}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  backgroundColor: hex,
                  border: hex === '#FFFFFF' || hex === '#FFF8F0' || hex === '#F5F0E8' || hex === '#FAFAF8'
                    ? '1.5px solid rgba(0,0,0,0.12)' : 'none',
                  display: 'inline-block',
                }}
              />
            ))}
          </div>

          {/* Price */}
          <span
            style={{
              fontFamily: bodyFont,
              fontSize: '0.9rem',
              fontWeight: 600,
              color: textColor,
              letterSpacing: '0.01em',
            }}
          >
            ${product.price}
          </span>
        </div>
      </div>
    </article>
  )
}
