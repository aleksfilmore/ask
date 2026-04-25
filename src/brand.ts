// ─── Image paths ─────────────────────────────────────────────────────────────
// All images live in /public/images test/ (space is URL-encoded)

const IMG = '/images%20test'

export const images = {
  // Lifestyle / group shots
  rooftopSunset:   `${IMG}/Whisk_17eeb6c67aa2b9886d244fd7158e057cdr.jpeg`,  // 4 girls, earth tones, LA sunset — editorial
  beachPortrait:   `${IMG}/Whisk_2a2222ccd2b7bb2bbd840e5526b310cadr.jpeg`,  // solo beach portrait, olive hoodie
  rooftopPastels:  `${IMG}/Whisk_43c4ac386de911da666443579924b4e6dr.jpeg`,  // 6 girls, pastel hoodies, energy
  beachGroup:      `${IMG}/Whisk_608f1be727cd1ddb3db48dd2b70707e0dr.jpeg`,  // large beach group
  studioNeutral:   `${IMG}/Whisk_6122389d1ce573f99424a8ad1ac2bca4dr.jpeg`,  // 4 people studio, ash tones — luxury
  sunsetGirls:     `${IMG}/Whisk_6774587127c64dca9614c5e815e27ca8dr.jpeg`,  // 3 laughing girls, palm trees
  studioFive:      `${IMG}/Whisk_79d653c34028c5e91c1446a19a6f2b0ddr.jpeg`,  // 5 people studio, neutrals
  couchLifestyle:  `${IMG}/Whisk_9880000bd0591afb95843aec7d85a46fdr.jpeg`,  // indoor couch, pastels, cozy
  yellowBeach:     `${IMG}/Whisk_cda8aaf7ef2a6a5b7814bad21487dfa8dr.jpeg`,  // solo yellow hoodie, golden hour
  brandMark:       `${IMG}/Whisk_d1fd52716bbb523af1d46dbeecb580cedr.jpeg`,  // logo image
  studioSets:      `${IMG}/Whisk_f3dd2a8862cc477ad5045e5d9807deb9dr.jpeg`,  // 4 girls earth sets, editorial
  laWindow:        `${IMG}/Whisk_7cac450568564a6bdae41a1b2b31b3ffdr.jpeg`,  // 3 girls LA studio window, muted purple/sage/cream

  // Hoodie products
  greyHoodieModel: `${IMG}/089C781B-F572-45A8-A90E-05C339870A7C.webp`,
  blackHoodieModel:`${IMG}/IMG-8694.webp`,
  heartHoodieFront:`${IMG}/1_591f104e-b5a5-444c-924d-506d3d67d341.webp`,
  cafeHoodieBack:  `${IMG}/107_2x_9e59dd00-8392-4a4d-850e-de6afb7a4483.webp`,
  berryHoodieBack: `${IMG}/25_2x_a395493b-2541-4c7b-88a0-f2835ad93d94.webp`,
  laceFrontHoodie: `${IMG}/99_2x_058ea73e-037e-4130-8e3d-ef718b823615.webp`,

  // Bags & accessories
  pinkSequinBag:   `${IMG}/78C51CF1-5346-4C08-BD3E-1E92EDCB5719.webp`,
  mintSequinBag:   `${IMG}/5710AB08-E1C2-43DB-9EB0-8AE92C26982F.webp`,
  pearlTote:       `${IMG}/8F667357-11EB-4C0F-B330-1EA013CBB47C.webp`,
  floralPouch:     `${IMG}/53D250FF-E5D3-425D-80E6-97E134D7E201.webp`,
  parisPouch:      `${IMG}/CB29608E-ECC9-4B6A-8389-507E5FD7A35F.webp`,
  sofiaPouch:      `${IMG}/FullSizeRender_805c742e-4986-42cd-b4a2-39ebc5c467c0.webp`,
}

// Fix typo in tote filename
images.pearlTote = `${IMG}/8F667357-11EB-4C0F-B330-1EA013CBB74C.webp`

// ─── Products ────────────────────────────────────────────────────────────────

export interface Product {
  id: string
  name: string
  descriptor: string
  price: number
  category: 'hoodie' | 'bag' | 'pouch'
  img: string
  colors?: string[]
}

export const products: Product[] = [
  {
    id: 'lace-trim-hoodie',
    name: 'Lace Trim Hoodie',
    descriptor: 'Oversized, lace-edged hood & cuffs',
    price: 68,
    category: 'hoodie',
    img: images.greyHoodieModel,
    colors: ['#D4D0CC', '#1A1A1A', '#F5F0E8'],
  },
  {
    id: 'lace-zip-hoodie',
    name: 'Lace Zip Hoodie',
    descriptor: 'Zip-front, delicate lace inset',
    price: 72,
    category: 'hoodie',
    img: images.blackHoodieModel,
    colors: ['#1A1A1A', '#D4D0CC'],
  },
  {
    id: 'wildflower-hoodie',
    name: 'Wildflower Hoodie',
    descriptor: 'Heart embroidery, lace pocket trim',
    price: 64,
    category: 'hoodie',
    img: images.heartHoodieFront,
    colors: ['#F5F0E8', '#E8D4C0'],
  },
  {
    id: 'cafe-hoodie',
    name: 'Café Hoodie',
    descriptor: 'Illustrated back print, relaxed fit',
    price: 68,
    category: 'hoodie',
    img: images.cafeHoodieBack,
    colors: ['#F5F0E8'],
  },
  {
    id: 'berry-rich-hoodie',
    name: 'Berry Rich Hoodie',
    descriptor: '"Expensive bites" blueberry print',
    price: 68,
    category: 'hoodie',
    img: images.berryHoodieBack,
    colors: ['#F5F0E8'],
  },
  {
    id: 'pink-sequin-bag',
    name: 'Pink Sequin Bag',
    descriptor: 'Slouchy shoulder bag + mini pouch',
    price: 58,
    category: 'bag',
    img: images.pinkSequinBag,
    colors: ['#E8A4B0', '#8CC4B0'],
  },
  {
    id: 'mint-sequin-bag',
    name: 'Mint Sequin Bag',
    descriptor: 'Slouchy shoulder bag + mini pouch',
    price: 58,
    category: 'bag',
    img: images.mintSequinBag,
    colors: ['#8CC4B0', '#E8A4B0'],
  },
  {
    id: 'pearl-tote',
    name: 'Pearl Tote',
    descriptor: 'Sequin canvas tote, everyday carry',
    price: 48,
    category: 'bag',
    img: images.pearlTote,
    colors: ['#F0EBE0'],
  },
  {
    id: 'garden-pouch',
    name: 'Garden Pouch',
    descriptor: 'Floral print, zip top',
    price: 28,
    category: 'pouch',
    img: images.floralPouch,
    colors: ['#FFFFFF'],
  },
  {
    id: 'paris-pouch',
    name: 'Paris Edit Pouch',
    descriptor: 'Paris-themed print, cube zip',
    price: 28,
    category: 'pouch',
    img: images.parisPouch,
    colors: ['#FFFFFF'],
  },
  {
    id: 'archive-pouch',
    name: 'Archive Pouch',
    descriptor: 'Sofia Coppola Archive print',
    price: 28,
    category: 'pouch',
    img: images.sofiaPouch,
    colors: ['#FFFFFF'],
  },
  {
    id: 'lace-front-hoodie',
    name: 'Lace Front Hoodie',
    descriptor: 'Floral crochet appliqué, lace cuffs',
    price: 64,
    category: 'hoodie',
    img: images.laceFrontHoodie,
    colors: ['#F5F0E8'],
  },
]

export const hoodies = products.filter(p => p.category === 'hoodie')
export const bags = products.filter(p => p.category === 'bag' || p.category === 'pouch')

// ─── Nav ─────────────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Hoodies', href: '#hoodies' },
  { label: 'Bags', href: '#bags' },
  { label: 'Accessories', href: '#accessories' },
  { label: 'About', href: '#about' },
]

export type ConceptId = 'malibu' | 'sporty' | 'luxury'

// ─── Proposal cards ───────────────────────────────────────────────────────────
// Centralised metadata for the 3 design proposals.
// Consumed by Home.tsx (comparison grid) and ConceptSwitcher.

export interface ProposalCard {
  id: ConceptId
  /** Single uppercase letter identifier: A, B, or C */
  label: string
  route: string
  name: string
  tagline: string
  img: string
  imgAlt: string
  /** Accent / highlight colour */
  accent: string
  headingFont: string
  headingWeight: number
  headingStyle?: 'italic'
  cta: string
  /** Page background colour */
  bg: string
  /** Primary text colour */
  text: string
}

export const proposalCards: ProposalCard[] = [
  {
    id: 'malibu',
    label: 'A',
    route: '/concept-malibu',
    name: 'Malibu Magazine',
    tagline: 'Editorial. Warm ivory. Italic serif. Photography-first.',
    img: images.rooftopSunset,
    imgAlt: 'Women in earth-tone hoodies at golden-hour LA rooftop',
    accent: '#C4A882',
    headingFont: '"Playfair Display", Georgia, serif',
    headingWeight: 400,
    headingStyle: 'italic',
    cta: 'Shop the first drop',
    bg: '#F8F6F2',
    text: '#1C1714',
  },
  {
    id: 'sporty',
    label: 'B',
    route: '/concept-la-sporty',
    name: 'LA Sporty Angel',
    tagline: 'Bold. Split layout. Blush accents. Social-native energy.',
    img: images.rooftopPastels,
    imgAlt: 'Women in pastel hoodies on LA rooftop, energetic',
    accent: '#E8B4B8',
    headingFont: 'Nunito, sans-serif',
    headingWeight: 900,
    cta: 'Explore the drop',
    bg: '#FEFEFE',
    text: '#1A1A1A',
  },
  {
    id: 'luxury',
    label: 'C',
    route: '/concept-soft-luxury',
    name: 'Soft Luxury',
    tagline: 'Quiet. Pure white. One product per row. Maximum space.',
    img: images.studioSets,
    imgAlt: 'Women in earth-tone matching sets, LA studio',
    accent: '#C8B89A',
    headingFont: '"Cormorant Garamond", Georgia, serif',
    headingWeight: 300,
    cta: 'View collection',
    bg: '#FFFFFF',
    text: '#111111',
  },
]
