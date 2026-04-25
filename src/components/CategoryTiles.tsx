interface Category {
  label: string
  count: string
  gradientClass: string
  emoji?: string
}

interface CategoryTilesProps {
  headingFont?: string
  bodyFont?: string
  textColor?: string
  bgColor?: string
  accentColor?: string
}

const categories: Category[] = [
  { label: 'Activewear', count: '12 pieces', gradientClass: 'gradient-sporty-tile-1' },
  { label: 'Hoodies', count: '6 styles', gradientClass: 'gradient-sporty-tile-2' },
  { label: 'Tees & Tops', count: '8 styles', gradientClass: 'gradient-sporty-tile-3' },
  { label: 'Accessories', count: '10 items', gradientClass: 'gradient-sporty-tile-4' },
]

export default function CategoryTiles({
  headingFont,
  bodyFont,
  textColor = '#1A1A2E',
  bgColor = '#ffffff',
  accentColor = '#FFB3D1',
}: CategoryTilesProps) {
  return (
    <section style={{ backgroundColor: bgColor, padding: '72px 24px' }} aria-label="Shop by category">
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: headingFont,
            fontSize: '1.9rem',
            fontWeight: 800,
            color: textColor,
            margin: 0,
            marginBottom: 36,
            letterSpacing: '-0.01em',
          }}
        >
          Shop by vibe
        </h2>

        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 16 }}
        >
          {categories.map(cat => (
            <button
              key={cat.label}
              aria-label={`Shop ${cat.label}`}
              style={{
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '1/1.2',
                display: 'block',
                width: '100%',
                textAlign: 'left',
              }}
            >
              <div
                className={cat.gradientClass}
                style={{ position: 'absolute', inset: 0 }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px 18px',
                  background: 'linear-gradient(to top, rgba(255,255,255,0.25) 0%, transparent 60%)',
                }}
              >
                <span
                  style={{
                    fontFamily: headingFont,
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#1A1A2E',
                    display: 'block',
                    marginBottom: 2,
                  }}
                >
                  {cat.label}
                </span>
                <span
                  style={{
                    fontFamily: bodyFont,
                    fontSize: '0.75rem',
                    color: '#1A1A2E',
                    opacity: 0.65,
                  }}
                >
                  {cat.count}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
