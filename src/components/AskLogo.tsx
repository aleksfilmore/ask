interface AskLogoProps {
  color?: string
  size?: 'sm' | 'md' | 'lg'
  fontFamily?: string
}

export default function AskLogo({
  color = '#3A2E28',
  size = 'md',
  fontFamily,
}: AskLogoProps) {
  const sizes = {
    sm: { fontSize: '1.25rem', letterSpacing: '0.18em' },
    md: { fontSize: '1.6rem', letterSpacing: '0.22em' },
    lg: { fontSize: '2.8rem', letterSpacing: '0.28em' },
  }

  const s = sizes[size]

  return (
    <span
      aria-label="așk"
      style={{
        fontFamily: fontFamily ?? '"Playfair Display", Georgia, serif',
        fontSize: s.fontSize,
        letterSpacing: s.letterSpacing,
        color,
        fontWeight: 500,
        fontStyle: 'italic',
        display: 'inline-block',
        lineHeight: 1,
        userSelect: 'none',
      }}
    >
      a<span style={{ fontStyle: 'normal', fontWeight: 400 }}>ș</span>k
    </span>
  )
}
