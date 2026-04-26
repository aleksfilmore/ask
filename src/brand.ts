// ─── Concept image paths ──────────────────────────────────────────────────────
// Each concept uses ONLY its assigned color folder — no cross-mixing.

const PEACH = '/images%20test/Peach'
const LEMON = '/images%20test/Lemon'
const MINT  = '/images%20test/Mint'

/** Concept A — Malibu Clean Girl */
export const peachImgs = {
  hero:       `${PEACH}/Whisk_a6caac1b2a0660ea5694ab118ab3b451dr.jpeg`,
  featSet:    `${PEACH}/Whisk_0939b556dab0dc5854d463cab0866fcfdr.jpeg`,
  featSetAlt: `${PEACH}/Whisk_1cc602692c8ce2c838c4ef2144c7af82dr.jpeg`,
  drop1:      `${PEACH}/Whisk_40e2c1eb924b4ad818c468b758776754dr.jpeg`,
  drop2:      `${PEACH}/Whisk_41e7dbd9d0f9ff1b6c942b50bd712689dr.jpeg`,
  drop3:      `${PEACH}/Whisk_448b887923c5351893c43211296948e5dr.jpeg`,
  life1:      `${PEACH}/Whisk_a957116cf49c4dc882c420a9c5cdfd66dr.jpeg`,
  life2:      `${PEACH}/Whisk_cabc663e4326dcaa3074691a93578147dr.jpeg`,
  life3:      `${PEACH}/Whisk_2deb2b0b1a11260949747ffb6958b19ddr.jpeg`,
  meaning:    `${PEACH}/Whisk_ea29c11a03404b6911e43580035efff8dr.jpeg`,
  card:       `${PEACH}/Whisk_f5b9587f5febf85acfb4b3f90026e02cdr.jpeg`,
  grid1:      `${PEACH}/Whisk_bda0c66e59686568dfa44442f7b3f94adr.jpeg`,
  grid2:      `${PEACH}/Whisk_2f7871cdfc1e547bd7340097f83565bddr.jpeg`,
  grid3:      `${PEACH}/Whisk_5448afe4372625fa71d46ecfa9ec89a2dr.jpeg`,
  extra1:     `${PEACH}/Whisk_77f35499054c97c860f4f114cc36aefadr.jpeg`,
  extra2:     `${PEACH}/Whisk_cc9710d99459c8e9c994e4bc166172ccdr.jpeg`,
}

/** Concept B — LA Sporty Angel */
export const lemonImgs = {
  hero:       `${LEMON}/Whisk_bfe8410cc163013891a42904c38804dcdr.jpeg`,
  featSet:    `${LEMON}/Whisk_55311b1a62623dfb1124b8051658086ddr.jpeg`,
  featSetAlt: `${LEMON}/Whisk_983ccd1f7075411b63140fbcef85bc33dr.jpeg`,
  drop1:      `${LEMON}/Whisk_a5ac83216d8e6b3918a4e83b2b0e3da2dr.jpeg`,
  drop2:      `${LEMON}/Whisk_25571d02bbde90db2154cc6a838884dadr.jpeg`,
  drop3:      `${LEMON}/Whisk_2819430d686054abe4442aa330de2b57dr.jpeg`,
  life1:      `${LEMON}/Whisk_55fc66a1b22cf34aaf24705d3184c9f9dr.jpeg`,
  life2:      `${LEMON}/Whisk_f19552b06a1bf71a53345ec2e98d86e9dr.jpeg`,
  life3:      `${LEMON}/Whisk_28596e8e919e569a719459f1a8fde021dr.jpeg`,
  meaning:    `${LEMON}/Whisk_52d08536a51eedebcdc46c896bf60dbddr.jpeg`,
  card:       `${LEMON}/Whisk_9a346c2911665cd93f44c3fa799a8332dr.jpeg`,
  grid1:      `${LEMON}/Whisk_d04779ff13e642db8474ae531ce720abdr.jpeg`,
  grid2:      `${LEMON}/Whisk_b0285d3378f53099b314a9edcfea131ddr.jpeg`,
  grid3:      `${LEMON}/Whisk_ff80c8e7d9a85b1871b4d661744b33ecdr.jpeg`,
  extra1:     `${LEMON}/Whisk_55fc66a1b22cf34aaf24705d3184c9f9dr (1).jpeg`,
}

/** Concept C — Soft Luxury Calm */
export const mintImgs = {
  hero:       `${MINT}/Whisk_ad759f8a7b603d79240463323c9c9423dr.jpeg`,
  featSet:    `${MINT}/Whisk_1292d0047ed94dc9d4143e848a450cb0dr.jpeg`,
  featSetAlt: `${MINT}/Whisk_6e1c7bebdc24b9fa8104938b3c3a18a3dr.jpeg`,
  drop1:      `${MINT}/Whisk_c787a74a79ef6c4914c4a331ddce8424dr.jpeg`,
  drop2:      `${MINT}/Whisk_73b9cc5090709c0afdd4be24d9b7befcdr.jpeg`,
  drop3:      `${MINT}/Whisk_706f0e47ac4dafbba68481684e183612dr.jpeg`,
  life1:      `${MINT}/Whisk_e74ad1cef649e68bdab4fde8671d8349dr.jpeg`,
  life2:      `${MINT}/Whisk_1d87ad22eec7ecca5974589be8becdfedr.jpeg`,
  life3:      `${MINT}/Whisk_3a9a4da70146046b2704ccb9e6cc6b64dr.jpeg`,
  meaning:    `${MINT}/Whisk_97deaaa54391852994c40d16ced72e03dr.jpeg`,
  card:       `${MINT}/Whisk_5c78ea925f028f4850e4605d9d23c35edr.jpeg`,
  grid1:      `${MINT}/Whisk_dba71fec92fb97384c04fc545fb76b20dr.jpeg`,
  grid2:      `${MINT}/Whisk_3a9a4da70146046b2704ccb9e6cc6b64dr.jpeg`,
  grid3:      `${MINT}/Whisk_706f0e47ac4dafbba68481684e183612dr.jpeg`,
}

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
    id: 'malibu-set-peach',
    name: 'Malibu Set — Peach',
    descriptor: 'Ruffle-trim bra top + high-waist biker shorts',
    price: 88,
    category: 'hoodie',
    img: peachImgs.featSet,
    colors: ['#E8A870', '#FAF7F2', '#8CBFA0', '#F0DC60'],
  },
  {
    id: 'sunset-set-lemon',
    name: 'Sunset Set — Lemon',
    descriptor: 'Ruffle-trim sports bra + shorts',
    price: 88,
    category: 'hoodie',
    img: lemonImgs.featSet,
    colors: ['#F0DC60', '#F9A8C0', '#FAF7F2', '#E8A870'],
  },
  {
    id: 'coast-set-mint',
    name: 'Coast Set — Mint',
    descriptor: 'Clean-line bra top + bike shorts',
    price: 88,
    category: 'hoodie',
    img: mintImgs.featSet,
    colors: ['#8CBFA0', '#F0EDE6', '#E8A870', '#F0DC60'],
  },
]

export const hoodies = products.filter(p => p.category === 'hoodie')
export const bags    = products.filter(p => p.category === 'bag' || p.category === 'pouch')

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Sets',        href: '#sets' },
  { label: 'Tops',        href: '#tops' },
  { label: 'Bottoms',     href: '#bottoms' },
  { label: 'Accessories', href: '#accessories' },
]

export type ConceptId = 'malibu' | 'sporty' | 'luxury'

// ─── Proposal cards (Home selector page) ─────────────────────────────────────

export interface ProposalCard {
  id: ConceptId
  label: string
  route: string
  name: string
  tagline: string
  img: string
  imgAlt: string
  accent: string
  headingFont: string
  headingWeight: number
  headingStyle?: 'italic'
  cta: string
  bg: string
  text: string
}

export const proposalCards: ProposalCard[] = [
  {
    id: 'malibu',
    label: 'A',
    route: '/concept-malibu',
    name: 'Malibu Clean',
    tagline: 'soft, sun-washed, effortless',
    img: peachImgs.hero,
    imgAlt: 'Girl in peach activewear set on the beach, soft morning lifestyle',
    accent: '#E8A870',
    headingFont: '"Cormorant Garamond", Georgia, serif',
    headingWeight: 400,
    headingStyle: 'italic',
    cta: 'View concept',
    bg: '#FAF7F2',
    text: '#1C1714',
  },
  {
    id: 'sporty',
    label: 'B',
    route: '/concept-la-sporty',
    name: 'LA Sporty',
    tagline: 'bright, energetic, in motion',
    img: lemonImgs.card,
    imgAlt: 'Girl in lemon activewear set, skateboarding at the beach',
    accent: '#C8A800',
    headingFont: 'Nunito, sans-serif',
    headingWeight: 900,
    cta: 'View concept',
    bg: '#FFFEF5',
    text: '#1A1A1A',
  },
  {
    id: 'luxury',
    label: 'C',
    route: '/concept-soft-luxury',
    name: 'Soft Luxury',
    tagline: 'calm, minimal, refined',
    img: mintImgs.card,
    imgAlt: 'Girl in mint activewear set, pilates calm',
    accent: '#7ABAAA',
    headingFont: '"Cormorant Garamond", Georgia, serif',
    headingWeight: 300,
    cta: 'View concept',
    bg: '#FAFAFA',
    text: '#111111',
  },
]
