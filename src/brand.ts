// ─── Brand data for așk ───────────────────────────────────────────────────────

export type ConceptId = 'malibu' | 'sporty' | 'luxury'

export interface ColorPalette {
  bg: string
  surface: string
  accent: string
  text: string
  textMuted: string
  border: string
  cta: string
  ctaText: string
}

export interface ConceptTheme {
  id: ConceptId
  name: string
  label: string
  tagline: string
  heroHeadline: string
  heroSub: string
  heroCta: string
  colors: ColorPalette
  fonts: {
    heading: string
    body: string
  }
}

export const concepts: ConceptTheme[] = [
  {
    id: 'malibu',
    name: 'Malibu Clean Girl',
    label: 'A — Malibu',
    tagline: 'Bright, airy, sun-washed — premium but playful.',
    heroHeadline: 'Soft pieces for\nsunny routines.',
    heroSub: 'Activewear, hoodies, tees and accessories with a clean Malibu mood.',
    heroCta: 'Shop the first drop',
    colors: {
      bg: '#FFF8F0',
      surface: '#FEFBF6',
      accent: '#F4A98A',
      text: '#3A2E28',
      textMuted: '#8C7B72',
      border: '#E8D5B7',
      cta: '#3A2E28',
      ctaText: '#FFF8F0',
    },
    fonts: {
      heading: '"Playfair Display", Georgia, serif',
      body: 'Inter, sans-serif',
    },
  },
  {
    id: 'sporty',
    name: 'LA Sporty Angel',
    label: 'B — LA Sporty',
    tagline: 'Energetic, social-media-ready, California attitude.',
    heroHeadline: 'Made for movement,\nselfies and soft chaos.',
    heroSub: 'Sporty essentials and everyday accessories with a California attitude.',
    heroCta: 'Explore the drop',
    colors: {
      bg: '#ffffff',
      surface: '#FFF5F8',
      accent: '#FFB3D1',
      text: '#1A1A2E',
      textMuted: '#888',
      border: '#FFD6E8',
      cta: '#FFB899',
      ctaText: '#1A1A2E',
    },
    fonts: {
      heading: 'Nunito, sans-serif',
      body: '"DM Sans", sans-serif',
    },
  },
  {
    id: 'luxury',
    name: 'Soft Luxury',
    label: 'C — Soft Luxury',
    tagline: 'Minimal, grown-up, refined — simple things done beautifully.',
    heroHeadline: 'Everyday pieces with\na little sun on them.',
    heroSub: 'Minimal activewear and accessories for girls who like simple things done beautifully.',
    heroCta: 'View collection',
    colors: {
      bg: '#FAFAF8',
      surface: '#F5F0E8',
      accent: '#DEB5A0',
      text: '#2C2C2C',
      textMuted: '#8A8078',
      border: '#E8D5B7',
      cta: '#2C2C2C',
      ctaText: '#FAFAF8',
    },
    fonts: {
      heading: '"Cormorant Garamond", Georgia, serif',
      body: 'Jost, sans-serif',
    },
  },
]

// ─── Product Data ─────────────────────────────────────────────────────────────

export interface ProductColor {
  label: string
  hex: string
}

export interface Product {
  id: string
  name: string
  descriptor: string
  price: number
  category: 'activewear' | 'hoodies' | 'tees' | 'accessories'
  colors: ProductColor[]
  gradientClass: {
    malibu: string
    sporty: string
    luxury: string
  }
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 'malibu-zip-hoodie',
    name: 'Malibu Zip Hoodie',
    descriptor: 'Soft French terry, easy zip',
    price: 68,
    category: 'hoodies',
    colors: [
      { label: 'Peach', hex: '#F4A98A' },
      { label: 'Cream', hex: '#FFF8F0' },
      { label: 'Sky Blue', hex: '#C8DFF0' },
    ],
    gradientClass: {
      malibu: 'gradient-malibu-card-1',
      sporty: 'gradient-sporty-card-1',
      luxury: 'gradient-luxury-card-1',
    },
    featured: true,
  },
  {
    id: 'soft-hour-tee',
    name: 'Soft Hour Tee',
    descriptor: 'Weightless cotton, relaxed fit',
    price: 34,
    category: 'tees',
    colors: [
      { label: 'White', hex: '#FFFFFF' },
      { label: 'Sand', hex: '#E8D5B7' },
      { label: 'Blush', hex: '#F4A98A' },
    ],
    gradientClass: {
      malibu: 'gradient-malibu-card-2',
      sporty: 'gradient-sporty-card-2',
      luxury: 'gradient-luxury-card-2',
    },
    featured: true,
  },
  {
    id: 'sunset-ribbed-set',
    name: 'Sunset Ribbed Set',
    descriptor: 'Matching top & leggings, ribbed',
    price: 78,
    category: 'activewear',
    colors: [
      { label: 'Peach', hex: '#F4A98A' },
      { label: 'Warm Tan', hex: '#C9956A' },
    ],
    gradientClass: {
      malibu: 'gradient-malibu-card-3',
      sporty: 'gradient-sporty-card-3',
      luxury: 'gradient-luxury-card-3',
    },
    featured: true,
  },
  {
    id: 'clean-girl-cap',
    name: 'Clean Girl Cap',
    descriptor: 'Washed twill, embroidered logo',
    price: 28,
    category: 'accessories',
    colors: [
      { label: 'Cream', hex: '#FFF8F0' },
      { label: 'White', hex: '#FFFFFF' },
      { label: 'Sage', hex: '#B8C9A3' },
    ],
    gradientClass: {
      malibu: 'gradient-malibu-card-4',
      sporty: 'gradient-sporty-card-4',
      luxury: 'gradient-luxury-card-4',
    },
    featured: true,
  },
  {
    id: 'peach-club-tote',
    name: 'Peach Club Tote',
    descriptor: 'Canvas carryall with zip pocket',
    price: 42,
    category: 'accessories',
    colors: [
      { label: 'Peach', hex: '#F4A98A' },
      { label: 'Ivory', hex: '#F5F0E8' },
    ],
    gradientClass: {
      malibu: 'gradient-malibu-card-1',
      sporty: 'gradient-sporty-card-1',
      luxury: 'gradient-luxury-card-1',
    },
  },
  {
    id: 'la-morning-leggings',
    name: 'LA Morning Leggings',
    descriptor: 'High-waist, four-way stretch',
    price: 58,
    category: 'activewear',
    colors: [
      { label: 'Black', hex: '#1A1A1A' },
      { label: 'Navy', hex: '#1B2A4A' },
      { label: 'Dusty Pink', hex: '#D4A4B4' },
    ],
    gradientClass: {
      malibu: 'gradient-malibu-card-2',
      sporty: 'gradient-sporty-card-2',
      luxury: 'gradient-luxury-card-2',
    },
  },
  {
    id: 'cloud-crop-top',
    name: 'Cloud Crop Top',
    descriptor: 'Cropped, bralette-style, buttery soft',
    price: 24,
    category: 'activewear',
    colors: [
      { label: 'White', hex: '#FFFFFF' },
      { label: 'Sky Blue', hex: '#87CEEB' },
      { label: 'Lilac', hex: '#C8B4D8' },
    ],
    gradientClass: {
      malibu: 'gradient-malibu-card-3',
      sporty: 'gradient-sporty-card-3',
      luxury: 'gradient-luxury-card-3',
    },
  },
  {
    id: 'mini-gym-pouch',
    name: 'Mini Gym Pouch',
    descriptor: 'Zip pouch for essentials',
    price: 32,
    category: 'accessories',
    colors: [
      { label: 'Peach', hex: '#F4A98A' },
      { label: 'White', hex: '#FFFFFF' },
      { label: 'Silver', hex: '#C0C0C0' },
    ],
    gradientClass: {
      malibu: 'gradient-malibu-card-4',
      sporty: 'gradient-sporty-card-4',
      luxury: 'gradient-luxury-card-4',
    },
  },
]

export const featuredProducts = products.filter(p => p.featured)
export const allProducts = products

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Activewear', href: '#activewear' },
  { label: 'Hoodies & Tees', href: '#hoodies' },
  { label: 'Accessories', href: '#accessories' },
  { label: 'About', href: '#about' },
]
