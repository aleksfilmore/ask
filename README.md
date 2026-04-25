# așk — Brand Prototype

A visual prototype for the **așk** fashion/lifestyle brand. Three fully independent landing page concepts built with Vite + React + TypeScript + Tailwind CSS.

## Running the prototype

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## Routes

| URL | Concept |
|-----|---------|
| `/` | Home — overview + concept switcher |
| `/concept-malibu` | Concept A: Malibu Clean Girl |
| `/concept-la-sporty` | Concept B: LA Sporty Angel |
| `/concept-soft-luxury` | Concept C: Soft Luxury |

The sticky tab bar at the top of each concept page lets you switch between all three instantly.

---

## The three concepts

### A — Malibu Clean Girl
**Palette:** cream · sand · peach · pale yellow · soft blue  
**Fonts:** Playfair Display (serif headings) + Inter (body)  
**Vibe:** Bright, airy, sun-washed — premium but playful. Feels like a slow morning in Malibu. Italic serif headings, large negative space, editorial product cards. Marquee strip + lookbook mood block.

### B — LA Sporty Angel
**Palette:** white · peach · bubblegum pink · sky blue · chrome/silver  
**Fonts:** Nunito (rounded sans) + DM Sans (body)  
**Vibe:** Energetic, social-media-ready, California attitude. Bold type, category tiles, horizontal lookbook strip with hashtags. More dynamic layout — made for girls who are always somewhere.

### C — Soft Luxury
**Palette:** warm white · ivory · muted peach · champagne · charcoal  
**Fonts:** Cormorant Garamond (refined serif) + Jost (minimal sans)  
**Vibe:** Minimal, grown-up, refined. Editorial dividers, maximum negative space, clean grid. Feels like a fashion magazine editorial — simple things done beautifully.

---

## Component map

| Component | Purpose |
|-----------|---------|
| `AskLogo` | SVG-style wordmark with preserved `ș` |
| `Header` | Sticky nav — concept-aware colors, mobile hamburger |
| `Hero` | Full-bleed hero with CSS gradient bg, floating wordmark |
| `ProductCard` | Gradient image placeholder, color dots, Quick View hover |
| `ProductGrid` | Responsive grid of ProductCards, optional title/subtitle |
| `CategoryTiles` | 2×2 category grid (Concept B only) |
| `MoodSection` | Brand story — gradient visual + stats + copy |
| `NewsletterSignup` | Email form (no backend) |
| `Footer` | Logo, links, social icons (IG · TikTok · Pinterest) |
| `ConceptSwitcher` | Sticky tab bar linking all 3 concepts |

---

## Data

All product data, colors, typography tokens and nav links live in [`src/brand.ts`](src/brand.ts). Edit there to update products across all three concepts simultaneously.

---

## What's next (production)

- **Shopify Basic** ($29/month billed yearly) — gives products, inventory, payments, shipping, discount codes, blogging, and room to scale.
- Choose one concept direction and rebuild it as a Shopify Liquid theme (or Shopify Hydrogen for a custom React storefront later).
- Replace CSS gradient placeholders with real product photography.
- Add real Google Analytics + Meta Pixel before launch.

---

*Prototype only — no payments, no backend, no real products. Made with intention.*
