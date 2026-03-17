export interface ThriftBrand {
  id: string
  name: string
  emoji: string
  category: 'band-tees' | 'denim' | 'streetwear' | 'character-tees' | 'avoid'
  era: string
  whatToLookFor: string
  buyPrice: string
  sellPrice: string
  wherToSell: string
  hotTip: string
}

export const thriftBrands: ThriftBrand[] = [
  {
    id: 'levis',
    name: "Levi's 501/550/505",
    emoji: '👖',
    category: 'denim',
    era: '1980s–1990s',
    whatToLookFor: 'Orange tab on back pocket. Two horse paper patch. "Made in USA" label inside waistband. Straight leg or slight taper.',
    buyPrice: '$10–20',
    sellPrice: '$50–150+',
    wherToSell: 'Depop, eBay, Vinted',
    hotTip: "Orange tab = vintage. Two horse patch = authentic. Check the back pocket — if it says 501 and it's faded naturally, that's money.",
  },
  {
    id: 'nirvana',
    name: 'Nirvana (vintage tee)',
    emoji: '🎸',
    category: 'band-tees',
    era: '1989–1994',
    whatToLookFor: 'Single-stitch collar and sleeves. Screen print that feels cracked/faded naturally. "Made in USA" tag. Fruit of the Loom or Hanes tag.',
    buyPrice: '$5–20',
    sellPrice: '$100–500+',
    wherToSell: 'eBay (best for band tees), Grailed, Depop',
    hotTip: "Single stitch = pre-1994. If the print is cracked, that's patina, not damage — it actually adds value. Check for tour dates on the back.",
  },
  {
    id: 'grateful-dead',
    name: 'Grateful Dead (vintage tee)',
    emoji: '☠️',
    category: 'band-tees',
    era: '1970s–1990s',
    whatToLookFor: 'Single-stitch. Vintage tag (Hanes, Fruit of the Loom). Specific tour dates print on back. Original 70s/80s/90s artwork styles.',
    buyPrice: '$5–25',
    sellPrice: '$200–2000+',
    wherToSell: 'eBay, Grailed',
    hotTip: "Grateful Dead shirts are some of the most valuable vintage tees. Even 90s repros sell for $80+. Tour dates on the back = the premium version.",
  },
  {
    id: 'metallica',
    name: 'Metallica (vintage tee)',
    emoji: '🤘',
    category: 'band-tees',
    era: '1980s–1990s',
    whatToLookFor: 'Single-stitch. Master of Puppets, Black Album, Ride the Lightning eras. Made in USA tag.',
    buyPrice: '$5–15',
    sellPrice: '$80–400+',
    wherToSell: 'eBay, Grailed, Depop',
    hotTip: "Black Album era (1991) is the most accessible vintage Metallica. Even non-tour shirts from that era sell for $80+.",
  },
  {
    id: 'calvin-klein',
    name: 'Calvin Klein (90s denim)',
    emoji: '⭐',
    category: 'denim',
    era: '1990s',
    whatToLookFor: 'Classic CK logo waistband. High-waist styles. Mom jeans or straight cut. "Made in USA" if possible.',
    buyPrice: '$8–15',
    sellPrice: '$40–100',
    wherToSell: 'Depop, Vinted, Poshmark',
    hotTip: 'High-waist 90s CK jeans are huge right now. The higher the waist and the more vintage the wash, the more they sell for.',
  },
  {
    id: 'harley-davidson',
    name: 'Harley-Davidson',
    emoji: '🏍️',
    category: 'streetwear',
    era: '1980s–1990s',
    whatToLookFor: 'City-specific designs (Chicago HD, NYC HD). Flame/eagle graphics. Single-stitch if possible. Paper thin worn fabric.',
    buyPrice: '$5–12',
    sellPrice: '$40–80',
    wherToSell: 'eBay, Depop, Vinted',
    hotTip: 'City-specific HD shirts sell for more than generic designs. Chicago Harley Davidson shirt hits different.',
  },
  {
    id: 'disney-vintage',
    name: 'Disney Character Tees',
    emoji: '🐭',
    category: 'character-tees',
    era: '1980s–1990s',
    whatToLookFor: 'Single-stitch. Velva Sheen or Fruit of the Loom tag. Mickey, Minnie, Goofy, classic era characters. Faded print.',
    buyPrice: '$4–12',
    sellPrice: '$30–100',
    wherToSell: 'Depop, eBay, Vinted',
    hotTip: "Velva Sheen brand Disney shirts are collector items. If the Disney character looks \"old school\" not modern — that's the one you want.",
  },
  {
    id: 'looney-tunes',
    name: 'Looney Tunes (Vintage)',
    emoji: '🐰',
    category: 'character-tees',
    era: '1990s',
    whatToLookFor: 'Bugs Bunny, Tweety, Taz. Made by Changes or Delta Pro Weight. All-over print styles. Sun-faded.',
    buyPrice: '$5–15',
    sellPrice: '$35–120',
    wherToSell: 'Depop, Grailed, eBay',
    hotTip: "90s Looney Tunes are having a huge moment right now. The 'gangster' Bugs Bunny tees are the most valuable.",
  },
  {
    id: 'avoid-replicas',
    name: 'AVOID: Obvious Replicas',
    emoji: '🚫',
    category: 'avoid',
    era: 'Any',
    whatToLookFor: 'Too-perfect prints. New-feeling fabric with fake distressing. No real brand tag. Generic "vintage style" labels.',
    buyPrice: 'Any',
    sellPrice: '$0 (worthless)',
    wherToSell: "Don't buy these",
    hotTip: "If the print looks TOO clean and crisp for a vintage shirt, it's probably a reproduction. Real vintage shirts have natural wear — not artificial distressing.",
  },
  {
    id: 'avoid-fast-fashion',
    name: 'AVOID: Fast Fashion Brands',
    emoji: '❌',
    category: 'avoid',
    era: 'Any',
    whatToLookFor: 'H&M, Zara, Forever 21, Shein. These have zero resale value even when thrifted.',
    buyPrice: 'Any',
    sellPrice: '$0–2 (not worth it)',
    wherToSell: "Don't buy for resale",
    hotTip: "Fast fashion goes TO the thrift store, not through it. Skip these entirely unless it's something truly special.",
  },
]

export function getBrandsByCategory(category: string): ThriftBrand[] {
  if (category === 'all') return thriftBrands
  return thriftBrands.filter(b => b.category === category)
}
