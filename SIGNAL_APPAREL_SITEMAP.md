# SIGNAL APPAREL — Website Sitemap & Build Specification
## For Claude Code Implementation

---

## BRAND IDENTITY & DESIGN SYSTEM

### Aesthetic Direction
**Concept:** "Crypto UX Designer" — the intersection of hardware brutalism, 8-bit pixel art, and dark-mode terminal aesthetics. Not loud. Not cheap. Precise, technical, and slightly menacing. Like a Bloomberg terminal designed by someone who holds CryptoPunks.

**Tone:** Ominous minimalism. Every element feels like it knows something the viewer doesn't. Data is sacred. The product is inevitable.

**Visual Language:**
- Dark base: #0A0A0A (near-black) with #0F0F0F surface layers
- Primary accent: #F7931A (Bitcoin orange) — used sparingly, maximum impact
- Secondary accent: #00FF41 (matrix green) — for live data elements only
- Tertiary: #627EEA (Ethereum purple) for ETH product line
- Text primary: #E8E8E8
- Text secondary: #666666
- Danger/down: #FF3B30
- Success/up: #00D4AA
- Grid lines: rgba(255,255,255,0.04)

**Typography:**
- Display/Hero: "Neue Bit" or "Space Mono" (monospace, technical)
- Headlines: "IBM Plex Mono" — technical authority
- Body: "Inter" at 15px — clean legibility
- Data/numbers: "JetBrains Mono" — for all live price displays
- Accent labels: All-caps, 0.15em letter-spacing, 11px

**Motion Philosophy:**
- Data elements flicker on load like CRT screens
- Hover states: subtle green glow, 120ms transition
- Page transitions: horizontal scan line wipe
- Live price numbers: flip/tick animation on update
- Cursor: custom crosshair with BTC symbol
- Scroll: parallax on hero only, nothing gratuitous

**Layout System:**
- Max content width: 1280px
- Base grid: 12-column, 24px gutters
- Section padding: 120px vertical
- Mobile breakpoints: 768px, 480px

**Reusable Components:**
- `<LivePriceTicker />` — animated price with up/down color
- `<PixelArtDisplay />` — 32x8 simulated LED matrix
- `<GlitchText />` — occasional glitch animation on headlines
- `<DataBadge />` — small technical label/chip
- `<CRTOverlay />` — subtle scanline texture overlay on hero sections
- `<CountdownTimer />` — for product launches and drops
- `<TerminalBlock />` — code/command display aesthetic

---

## SITE ARCHITECTURE

```
SIGNAL APPAREL
├── / (Home)
├── /shop
│   ├── /shop/btc-ticker-shirt
│   ├── /shop/eth-ticker-shirt
│   ├── /shop/multi-coin-shirt
│   └── /shop/fear-greed-badge
├── /technology
├── /build
├── /collective (Future Products — Locked/Mysterious)
├── /checkout
├── /account
│   ├── /account/dashboard
│   └── /account/subscription
└── /about
```

---

## PAGE 1: HOME ( / )

### Purpose
Convert first-time visitors from crypto Twitter, conferences, and word of mouth. Establish brand authority immediately. The homepage should feel like booting into a system — not visiting a store.

### Hero Section — "THE SIGNAL"
**Full viewport height. Dark. Immersive.**

Layout: Two-column on desktop (60/40 split), full-width stack on mobile.

Left column:
- Eyebrow label: `[ WEARABLE HARDWARE // SERIES 001 ]` — monospace, matrix green, small caps
- Main headline (H1): `YOUR CONVICTION.` (newline) `ON YOUR CHEST.` — IBM Plex Mono, 72px desktop / 48px mobile, white, tight leading
- Subhead: `Live Bitcoin price. Cellular data. No phone required. Real-time, always on.` — 18px, #999, max-width 480px
- CTA Primary: `[ ACQUIRE ]` — Bitcoin orange background, black text, monospace font, no border-radius (sharp corners only), 52px height
- CTA Secondary: `[ HOW IT WORKS → ]` — ghost button, white border, same dimensions
- Live data strip below CTAs: `BTC $[LIVE PRICE] ▲ [CHANGE]%` — JetBrains Mono, matrix green, flickering cursor

Right column:
- Product hero image: shirt in dark environment, LED matrix glowing, photographed from slight above angle
- Floating data overlays on image: technical annotations like `GPIO 23 // DATA` `3000mAh // 60hr` `CAT-M1 // CELLULAR` — small monospace labels with connecting lines (like engineering diagrams)
- Subtle scanline CRT overlay on image

Below fold indicator: `▼ SCROLL` — blinking, centered, very small

### Section 2 — "THE PROBLEM"
**Narrow centered column. Typography-driven. No images.**

Eyebrow: `[ SIGNAL VS NOISE ]`
Headline: `Everyone talks about Bitcoin.` (newline) `You wear the proof.`
Body copy (3 short paragraphs): The identity signaling rationale. Why a shirt that shows live price is different from a t-shirt with a logo. The conversation it starts.

Stat blocks (3 horizontal):
- `256` — LED pixels
- `60s` — Update interval  
- `6hr` — Battery life

### Section 3 — "THE MATRIX" (Product Feature Showcase)
**Full-width dark section with animated LED matrix simulation**

Center: Large simulated WS2812B 8x32 matrix in the browser — actual CSS/JS grid of 256 dot elements. Animated to scroll "BTC: $[LIVE PRICE]" in real time via CoinGecko API fetch.

Below matrix: Three feature columns
1. `CELLULAR FIRST` — SIM7080G module, works anywhere with cell coverage
2. `OPEN SOURCE CORE` — ESP32 architecture, documented firmware
3. `PREMIUM BUILD` — Bella+Canvas blank, custom carrier PCB, TPU enclosure

### Section 4 — "THE LINE" (Product Grid)
**4-column grid on desktop, 2 on tablet, 1 on mobile**

Products shown as dark product cards with:
- Simulated LED display thumbnail
- Product name in monospace
- Price
- Stock indicator: `[ 7 REMAINING ]` or `[ SOLD OUT ]` or `[ PRE-ORDER ]`
- Quick add to cart

### Section 5 — "SIGNAL FEED" (Social Proof)
**Horizontal scroll ticker of user-submitted photos/quotes**
- Dark cards, photo + handle + quote
- Auto-scrolling, pause on hover
- "SUBMIT YOUR SIGNAL" CTA at end

### Section 6 — "THE COLLECTIVE TEASER"
**Full-width dark section — deliberately mysterious**
Static image of pixelated CryptoPunk silhouette, heavily blurred. Text:

`[ CLASSIFIED // Q3 2025 ]`
`Something is coming.`
`The Collective.`
`→ Get early access` — email capture only. No further explanation.

### Footer
- Logo mark (pixel art signal waveform)
- Nav links in two columns
- Live BTC price ticker in footer (always visible)
- Data subscription status: `SIGNAL NETWORK // ONLINE` with green pulse dot
- Legal: `SIGNAL APPAREL LLC // EST. 2025`
- Social: Twitter/X, Instagram — icon only, no labels

---

## PAGE 2: SHOP — PRODUCT LISTING ( /shop )

### Layout
Full-width header with live price ticker scrolling across — all products, all coins.

Filter bar (sticky on scroll):
- `ALL` `BTC` `ETH` `MULTI-COIN` `ACCESSORIES`
- Sort: `NEWEST` `PRICE ↑` `PRICE ↓` `MOST WANTED`

Product grid: 3-column desktop, 2 tablet, 1 mobile

### Product Card Spec
```
┌─────────────────────────┐
│  [SIMULATED LED DISPLAY] │  ← animated, shows live price
│  [PRODUCT PHOTO HOVER]   │  ← crossfade on hover
├─────────────────────────┤
│  SERIES 001              │  ← eyebrow, matrix green, 11px
│  BTC LIVE TICKER SHIRT   │  ← product name, 18px mono
│  ─────────────────────   │
│  $299.00                 │  ← price, white, 22px
│  [ IN STOCK: 12 ]        │  ← live inventory badge
│  [ SELECT SIZE → ]       │  ← CTA, full width
└─────────────────────────┘
```

Hover state: Card border glows Bitcoin orange, LED display animates faster

---

## PAGE 3: PRODUCT DETAIL — BTC TICKER SHIRT ( /shop/btc-ticker-shirt )

### Hero
Split layout: 60% product imagery left, 40% purchase panel right — sticky on scroll.

**Image gallery (left):**
- Primary: Hero lifestyle shot
- Secondary: Close-up of LED matrix displaying live price
- Tertiary: Flat lay showing components (ESP32 module, battery, matrix)
- Quaternary: Back view
- Video thumbnail: 15-second demo clip of price updating

**Purchase panel (right — sticky):**
```
BTC LIVE TICKER SHIRT
─────────────────────────────
Series 001 // Cellular Edition

[ LIVE PRICE DEMO ]  ← miniature matrix in panel, live

$299.00
+ $4.99/mo data service (first 3 months free)

SIZE: [ XS ] [ S ] [ M ] [ L ] [ XL ] [ 2XL ]
      ↑ sizing guide link

COLOR: ● BLACK  ○ CHARCOAL

SHIP: 5–8 business days

[ ADD TO CART ]  ← Bitcoin orange, full width, 56px

[ ♡ SAVE TO WISHLIST ]

───────────────────────
✓  Cellular — no Wi-Fi required
✓  Live BTC price every 60 seconds
✓  6-hour battery life
✓  Removable modular panel
✓  Flexible WS2812B 8x32 matrix
✓  Custom carrier PCB
✓  1-year data service included
```

**Tabbed content section (below fold):**
Tabs: `SPECS` | `TECH` | `SETUP` | `FAQ`

**SPECS tab:**
Full technical specifications in terminal/table format:
- MCU: ESP32-WROOM-32
- Display: WS2812B 8x32 flexible matrix, 256 RGB LEDs
- Connectivity: SIM7080G Cat-M1/NB-IoT cellular
- Battery: 3000mAh LiPo, protected, 6hr runtime
- Data refresh: 60-second interval via CoinGecko API
- Brightness: Adjustable 10–100% via companion web portal
- Charge: USB-C, 2hr full charge
- Enclosure: TPU flexible 3D printed
- Garment: Bella+Canvas 3001, 100% Airlume cotton
- Wash: Remove electronics module, cold wash, hang dry
- Dimensions: Matrix panel 256mm x 64mm

**TECH tab:** Links to /technology page with tech stack overview

**SETUP tab:** 3-step setup flow with illustrations
1. Activate SIM via QR code (30 seconds)
2. Power on — shirt connects automatically
3. Wear it

**FAQ tab:** 8–10 common questions in accordion format

---

## PAGE 4: TECHNOLOGY ( /technology )

### Purpose
Establish technical credibility. This page is read by makers, engineers, and technically literate buyers. It should feel like internal documentation made beautiful — a technical whitepaper with the aesthetic of a dark mode IDE.

### Section 1 — "ARCHITECTURE"
**Full-width terminal/diagram aesthetic**

Headline: `[ SYSTEM ARCHITECTURE ]`
Subhead: `Every component selected for reliability, repairability, and signal integrity.`

Large architectural flow diagram rendered in SVG/CSS (not an image):
```
[ COINGECKO API ]
        ↓  HTTPS/JSON
[ SIM7080G // CAT-M1 CELLULAR ]
        ↓  UART
[ ESP32-WROOM-32 // MCU ]
        ↓  GPIO 23 // 800kHz
[ WS2812B 8x32 // 256 LEDs ]
        
[ 3000mAh LiPo ]
        ↓  3.7V
[ TP4056 // CHARGE CIRCUIT ]
        ↓
[ MT3608 // 5V BOOST CONVERTER ]
        ↓  5V REGULATED
[ MATRIX + MCU POWER RAILS ]
```

Each node: Dark card, component name, function description, hover reveals specs.

### Section 2 — "COMPONENT DEEP DIVE"
**Horizontal scrolling cards on mobile, 3-column grid desktop**

One card per major component:
1. ESP32-WROOM-32
2. WS2812B Flexible Matrix
3. SIM7080G Cellular Module
4. LiPo Power System
5. Custom Carrier PCB
6. TPU Enclosure

Each card: Component photo, specs table, why we chose it, link to datasheet.

### Section 3 — "DATA FLOW"
**Animated sequence — shows how a price update travels from API to LEDs**

Step-by-step animated flow (CSS animation or Framer Motion):
1. CoinGecko API sends JSON response
2. ESP32 parses `$.bitcoin.usd`
3. Value converted to pixel string
4. NeoMatrix renders scrolling text
5. 256 LEDs update simultaneously

Timeline indicator on left showing milliseconds at each step.

### Section 4 — "POWER ARCHITECTURE"
**Circuit diagram aesthetic — dark background, trace-style lines**

Visual showing power flow, charge circuit, boost converter, regulated rails. Not a real schematic — an illustrated diagram designed to be readable by non-engineers while satisfying engineers.

Battery life calculator (interactive):
- Slider: Brightness 10–100%
- Slider: Update frequency 30s–300s
- Output: Estimated runtime in hours

### Section 5 — "FIRMWARE"
**Code terminal aesthetic**

Headline: `[ OPEN SOURCE CORE ]`
Body: Philosophy on open firmware, OTA updates, community contributions.

Code block (syntax highlighted, dark terminal):
```cpp
// SIGNAL APPAREL // SERIES 001 FIRMWARE
// ESP32 + SIM7080G + WS2812B

void fetchBTCPrice() {
  http.begin(client, COINGECKO_ENDPOINT);
  int httpCode = http.GET();
  if (httpCode == HTTP_CODE_OK) {
    String payload = http.getString();
    float price = parsePrice(payload);
    updateDisplay(price);
  }
}
```

GitHub link CTA: `[ VIEW FULL SOURCE → ]`

### Section 6 — "CERTIFICATIONS & SAFETY"
- FCC component certification (ESP32 module)
- LiPo safety: PCM protection, UL-spec cells
- General liability insurance coverage noted
- Wash and care instructions

---

## PAGE 5: BUILD PROCESS ( /build )

### Purpose
Transparency as a brand asset. Show the craft. Makers will respect it. Non-technical buyers will be impressed by it. Both audiences are targets.

### Section 1 — "FROM CONCEPT TO CHEST"
**Large headline section**

`[ BUILD PROCESS ]`
`Hardware is hard. We made it look easy.`

Five-phase timeline (horizontal on desktop, vertical mobile):
```
[ PHASE 01 ]     [ PHASE 02 ]     [ PHASE 03 ]     [ PHASE 04 ]     [ PHASE 05 ]
PCB DESIGN   →   ASSEMBLY     →   FIRMWARE     →   GARMENT      →   QA & SHIP
2 weeks          1 week           1 week           1 week           48 hours
```

### Section 2 — "PCB DESIGN"
Split: PCB render/photo left, process text right.

Content: KiCad design, JLCPCB fabrication, assembly process, why custom PCB vs. breakout boards.

### Section 3 — "COMPONENT SOURCING"
**BOM table — styled as spreadsheet/terminal**

Full BOM displayed with sources, lead times, and why each component was selected. Transparent pricing philosophy — "you're not paying for mystery markup, you're paying for engineering, testing, and guarantee."

| Component | Source | Lead Time |
|---|---|---|
| ESP32-WROOM-32 | Mouser (US stock) | 2–3 days |
| WS2812B 8x32 | Direct factory, Shenzhen | 14–21 days |
| SIM7080G | Botletics distributor | 5–7 days |
| ... | ... | ... |

### Section 4 — "ASSEMBLY"
**Photo essay style — process photography**

4–6 photos with captions:
1. Raw PCBs arriving
2. SMD component placement
3. ESP32 module soldering
4. Matrix wiring with silicone wire
5. Enclosure test fit
6. Final assembly in garment

### Section 5 — "FIRMWARE FLASH & QA"
**Terminal/code aesthetic**

QA checklist shown as terminal output:
```
[ SIGNAL APPAREL // QA PROTOCOL v1.2 ]
─────────────────────────────────────
✓ Power on sequence — PASS
✓ Cellular registration — PASS
✓ API fetch — BTC: $[PRICE] — PASS
✓ Display render — 256/256 pixels — PASS
✓ Battery runtime — 6.2hr @ 50% brightness — PASS
✓ Charge circuit — 2.1hr full charge — PASS
✓ Flex stress test — 50 cycles — PASS
─────────────────────────────────────
UNIT #0047 // CLEARED FOR SHIPMENT
```

### Section 6 — "GARMENT INTEGRATION"
Photos and description of:
- Shirt selection (Bella+Canvas)
- Matrix panel channel sewing
- Modular removable system
- Velcro attachment spec
- Local production partner note (Bay Area)

### Section 7 — "BY THE NUMBERS"
**Stat showcase — large typographic display**

```
256    LEDs per shirt
 14    components per unit
  3    hours assembly time
 50    flex-cycle stress test
100%   QA inspected before ship
  1    year data service included
```

---

## PAGE 6: THE COLLECTIVE — FUTURE PRODUCTS ( /collective )

### Purpose
Mystery. Hype. FOMO. This page should feel like discovering a hidden terminal. Information is deliberately incomplete. The aesthetic is darker, more ominous than the rest of the site. Think ARG (alternate reality game) aesthetics meets hardware product roadmap.

### Full Page Design
**Completely different visual treatment from rest of site.**

Background: Animated matrix rain (green characters falling, very subtle opacity — 0.03). Dark #040404.

**Entry experience:** Page loads with terminal boot sequence animation:
```
SIGNAL_COLLECTIVE.EXE
LOADING...
██████████░░░░░░░░░░ 52%
ACCESS LEVEL: RESTRICTED
DECRYPTION KEY REQUIRED
...
PARTIAL ACCESS GRANTED
```

Then page reveals — but everything is partially redacted, glitched, or encrypted.

### Section 1 — "CLEARANCE LEVEL"
Eyebrow: `[ CLASSIFIED // FUTURE PRODUCT ROADMAP ]`
Headline (with glitch animation): `THE COLLECTIVE IS COMING.`
Subhead: `You're early. That's either wise or reckless. We haven't decided which.`

Email gate: Enter email to "unlock" more content — reveals one additional teaser card per product.

### Section 2 — "PRODUCT DOSSIERS" (Redacted)
**6 product cards — partially revealed, partially redacted**

Each card design:
```
┌─────────────────────────────┐
│  [CLASSIFIED IMAGE]          │  ← blurred/pixelated silhouette
│  ████████ XXXXXX ██████      │  ← name partially redacted
├─────────────────────────────┤
│  DOSSIER: CB-002             │  ← code name only
│  STATUS: ████████████        │  ← status redacted
│  ETA: [REDACTED]             │
│                              │
│  "██████ the NFT holder      │  ← partial description
│   ██████ commercial rights   │
│   ████ animated on-chain ██" │
│                              │
│  [ REQUEST EARLY ACCESS ]    │  ← email capture
└─────────────────────────────┘
```

**The 6 Dossiers (partially revealed content):**

**CB-002: PUNK SERIES**
Revealed: "Licensed. Animated. Your Punk. On your chest."
Redacted: Pricing, availability, specific license details
Silhouette: Pixelated CryptoPunk outline

**CB-003: ETH COLLECTIVE**
Revealed: "Same architecture. Different signal. Different tribe."
Redacted: ETH shirt — color palette, launch date
Silhouette: ETH diamond shape in pixel art

**CB-004: THE BADGE**
Revealed: "Smaller. Cheaper. Always watching."
Redacted: Form factor — wearable wallet balance badge
Silhouette: Small rectangle with glow

**CB-005: FEAR/GREED WEARABLE**
Revealed: "One number. Everyone in crypto knows what it means."
Redacted: Form factor not specified
Silhouette: Meter/gauge shape

**CB-006: THE JACKET**
Revealed: "16x64. The back is a billboard."
Redacted: Everything else
Silhouette: Back of jacket with glowing panel

**CB-007: [FULLY REDACTED]**
Revealed: Nothing. Just static and a counter: `[CLASSIFIED] // 1,247 people are watching this dossier`

### Section 3 — "THE SIGNAL NETWORK"
**Cryptic stats — deliberately mysterious**

```
[ SIGNAL NETWORK STATUS ]
──────────────────────────
Active units in field:   [REDACTED]
Cities with signal:      [REDACTED]
Collective waitlist:     1,247
Data requests/day:       [REDACTED]
Next drop:               WHEN IT'S READY
──────────────────────────
```

### Section 4 — "EARLY ACCESS"
**Simple email capture — no explanation needed**

`[ JOIN THE COLLECTIVE ]`
`Early access. First allocation. No spam.`
Email input + submit button (matrix green).

Footer of this page only: `THIS PAGE SELF-DESTRUCTS WHEN THE DROP HAPPENS.`

---

## PAGE 7: CHECKOUT ( /checkout )

### Layout
Clean, minimal. Trust signals. No distractions.

**Three-column → single column mobile:**
1. Order summary (right sidebar)
2. Shipping form (center)
3. Payment (Stripe embedded)

**Design details:**
- Live BTC price in header (always visible on site)
- Security badges: SSL, Stripe, package protection
- Subscription upsell at checkout: "Add data service — $4.99/mo — first 3 months free"
- Order summary shows LED matrix simulation of product with their name as scrolling text (nice touch)

**Post-purchase page:**
Terminal animation confirming order:
```
ORDER CONFIRMED // #SA-0048
────────────────────────────
UNIT ASSIGNMENT: IN QUEUE
FIRMWARE: LATEST // v2.1.4
SIM: PROVISIONING...
SHIP DATE: [DATE]
TRACKING: WILL SIGNAL WHEN READY
────────────────────────────
WELCOME TO THE SIGNAL.
```

---

## PAGE 8: ACCOUNT DASHBOARD ( /account/dashboard )

### Purpose
Customer retention, subscription management, firmware updates, order history.

### Layout
Left sidebar nav + main content area. Dark, data-dense, terminal aesthetic.

**Sidebar nav:**
```
[ SIGNAL APPAREL ]
──────────────────
○  MY SIGNAL
○  SUBSCRIPTION
○  ORDERS
○  FIRMWARE
○  EARLY ACCESS
○  SUPPORT
```

**Main panel — MY SIGNAL:**
- Live view of your shirt's current display (simulated matrix, pulling live price)
- Unit ID, firmware version, last update timestamp
- Signal strength indicator (cellular)
- Battery level (if unit supports reporting)
- Brightness control slider (pushes to device via OTA)
- Coin configuration: toggle which assets display, set order

**SUBSCRIPTION panel:**
- Plan: Signal Basic $4.99/mo or Signal Pro $9.99/mo
- Data usage this month
- Next billing date
- API calls remaining
- Cancel/upgrade options

**FIRMWARE panel:**
- Current version
- Changelog (terminal style)
- `[ UPDATE FIRMWARE ]` button — triggers OTA push
- Rollback option

---

## PAGE 9: ABOUT ( /about )

### Content
Lean. Anti-corporate. Authentic.

**Section 1: Origin**
Headline: `Built because it didn't exist.`
Short founder story — engineering background, the Bitcoin conviction, the shirt at a conference, the reactions.

**Section 2: Philosophy**
Three principles in large typographic display:
1. `SIGNAL OVER NOISE` — We only build things that mean something
2. `OPEN BY DEFAULT` — Firmware is public. No black boxes.
3. `HARDWARE IS PERMANENT` — We build to last, not to landfill

**Section 3: Production**
Where it's made (Bay Area), who does the garment work, how many units per run, the QA philosophy.

**Section 4: Contact**
Simple. Email only. Response time expectation. No chat widget.

---

## TECHNICAL IMPLEMENTATION NOTES FOR CLAUDE CODE

### Stack Recommendation
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS + custom CSS variables
- Animation: Framer Motion for page transitions, CSS for micro-animations
- Live data: CoinGecko public API (no key required for basic endpoints)
- Matrix simulation: HTML5 Canvas or CSS Grid with JS animation
- E-commerce: Shopify Storefront API or Stripe + custom backend
- Auth: NextAuth.js for account system
- Email capture: ConvertKit or Klaviyo API

### Key API Integrations
```javascript
// CoinGecko live price (free tier)
const PRICE_ENDPOINT = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true'

// Update interval: 60 seconds client-side
// Display: JetBrains Mono, color-coded by change direction
```

### LED Matrix Simulation Component
Build a CSS/Canvas 8x32 grid of 256 dot elements (12px each, 2px gap, #1a1a1a background, glow effect on active pixels). Animate text scrolling via JavaScript character-to-pixel rendering. This component appears on: Hero, product pages, purchase panel, account dashboard.

### Performance Requirements
- LCP < 2.5s
- No layout shift on price ticker updates
- Matrix simulation throttled to 30fps
- Images: WebP, lazy loaded below fold
- Fonts: Self-hosted, preloaded

### Mobile Priority
The primary discovery channel is social media — most first visits are mobile. Hero section must be fully impactful at 375px. Matrix simulation must work on mobile at smaller scale. Checkout must be one-thumb operable.

### SEO Priority Pages
- /shop/btc-ticker-shirt (primary commercial intent)
- /technology (maker/engineer audience)
- / (brand terms)

Meta title pattern: `[Product] — Live Crypto Wearable Hardware | Signal Apparel`

---

## CONTENT REQUIREMENTS CHECKLIST

Before build, prepare:
- [ ] Hero product photography (dark background, LED glowing)
- [ ] Component flat lay photography
- [ ] Process/assembly photography (6 images)
- [ ] 15-second product demo video (price updating on shirt)
- [ ] Founder bio (2–3 sentences, no corporate speak)
- [ ] Technical specs confirmed for all components
- [ ] CoinGecko API endpoint tested
- [ ] Privacy policy and terms of service (legal requirement)
- [ ] Return/refund policy
- [ ] Shipping rates confirmed

---

*SIGNAL APPAREL // SITEMAP v1.0 // CONFIDENTIAL*
*Built for Claude Code implementation*
*All measurements in px unless noted*
