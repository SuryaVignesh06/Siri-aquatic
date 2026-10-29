# Siri Aquatic Solutions Pvt. Ltd. — Website Plan & UI Rules

**Tagline:** Quality Comes First
**Document type:** Complete UI/UX plan, page-by-page specification, motion system, logo usage rules and acceptance rules
**Version:** 1.2 (see changelog, Section 23)
**Inputs analysed:** (1) reference site `suyogaqua.com`, (2) *Suyog Aqua Complete Website Build Guide*, (3) Siri Aquatic Solutions logo, (4) IGIN "Drops" page, (5) the dark glass **air-purifier product-showcase screenshot** (layout reference for the Product Showcase, Section 8)
**Scope note:** Tech stack is intentionally not mandated. Where implementation hints help, they are in boxed "Implementation note" lines and are non-binding.

### What is new in v1.2 (quick read)
1. **Hero is now a full-bleed background video with a text mask.** A giant "SIRI AQUATIC" headline is a window onto the video. On scroll the text **zooms in** until the letters fill the screen and the full video is revealed (Section 7).
2. **Product showcase is rebuilt to match the screenshot:** headline + glass spec card on the left, tall product cut-out in the centre, product title card with animated wave and a "Main Info" tile grid on the right (Section 8).
3. **Scroll system rewritten:** an *arrival* sequence, scroll-linked reveals, and defined **section-to-section transitions** for every home section (Section 9).
4. **Logo usage spec added:** exact variants, clear space, sizes, placements, video-overlay rules, favicon/OG/PDF uses and the asset hand-off (Section 2 and Section 22).

---

## 0. Read this first (important decisions)

1. **The reference sites belong to other companies.** Everything on `suyogaqua.com` (Made in Taiwan, Germany-formulated probiotics, 80+ countries, model numbers, product names) is *Suyog's* claim. The air-purifier screenshot is a different industry (99.97%, HEPA H13, 45 W, 750 sq ft are *its* claims). Use all references as **structural and stylistic references only**. Do not copy any claim, spec, product name, number, image, copy line or brand artwork onto the Siri site unless Siri confirms it is true for Siri's own products.
2. **Every `[bracketed]` item is a placeholder** the Siri team must fill and approve.
3. **Animation vs. trust.** The Suyog guide says "trust, clarity and speed over decorative animation." This plan keeps that rule while delivering a strongly animated site by separating motion into three classes:
   - **Signature motion** (hero text-mask zoom, logo story, product showcase scrub): rich, but it never blocks reading, ordering or contact, and it never hijacks native scrolling.
   - **Transition motion** (arrival, section-to-section): consistent, short, skippable.
   - **Utility motion** (hover, focus, reveal, loading): subtle and fast.
   All obey Section 9, including `prefers-reduced-motion`.
4. **Claims governance.** No growth, FCR, immunity, disease-prevention, water-quality, oxygen-transfer or performance claims for any product (equipment or pond-care) without evidence and compliance review. Showcase stats (Section 8) are placeholders until verified.
5. **Scroll is never hijacked.** Scroll-linked animation reads the scroll position; it never blocks, reverses or overrides it. "Pinned" sections are sticky sections inside normal page scroll, not scroll traps.
6. **The logo is never redrawn by hand or recoloured.** It is traced/cleaned once into the approved SVG set (Section 2) and used only from that set.

---

## 1. Brand foundations

### 1.1 What the logo is made of
| Element | What it is | Meaning to reuse in UI |
|---|---|---|
| Curled line at top-left | Shrimp antenna / feeler | Entry point for draw animation; "curious, alert" motif |
| Shrimp body outline | Monoline, geometric | Style rule: **monoline, rounded, geometric** for all icons |
| Wheel with 6 spokes | Paddle-wheel aerator | Hero symbol. Spinning wheel = oxygen / life / progress |
| Orange block with black dot | Shrimp eye / body segment | Warm accent: highlights, "attention" |
| Teal block with black dot | Fish eye | Cool accent: action and water |
| Fish with forked tail | Fish silhouette sharing the wheel | "Equipment that serves the pond" |
| Wordmark "SIRI AQUATIC" + "SOLUTIONS Pvt. Ltd." | Wide-tracked geometric sans | Display typography direction |
| Teal rules around "Quality Comes First" | Underline motif | Reusable section divider |

### 1.2 Color palette

| Token | Hex | Use | Contrast note |
|---|---|---|---|
| `--ink` | `#111111` | Logo line, headings, body text | 18.9:1 on white |
| `--teal` | `#01B8C8` | Brand teal: fills, icons, illustrations, button backgrounds with **dark** text | **2.4:1 on white — never small text on white** |
| `--orange` | `#E29136` | Brand orange: highlights, badges, illustrations | **2.5:1 on white — never text on white** |
| `--teal-ink` | `#006674` | Links, text buttons, focus rings on light backgrounds | 6.7:1 on white |
| `--teal-text` | `#007A87` | Secondary teal text (min 18px or bold) | 5.1:1 on white |
| `--orange-ink` | `#A85F12` | Orange text on light backgrounds (labels, eyebrows) | 4.9:1 on white |
| `--deep` | `#0B2E36` | Dark sections, footer, hero scrim, showcase background | White on it 14.4:1; teal 6.0:1; orange 5.7:1 |
| `--deep-2` | `#0F4A57` | Gradient partner for `--deep` | White on it ≥ 9:1 |
| `--abyss` | `#06191E` | Darkest tone: video scrim, mask backdrop, showcase vignette | White on it ≥ 16:1 |
| `--aqua-glow` | `#1FD1E0` | Bright teal for dark backgrounds, glows, showcase CTA | 7.7:1 on `--deep`; ink text on it ≥ 9:1 |
| `--aqua-soft` | `#8FF0F7` | Light aqua for waveform strokes and highlights on dark | Decorative or large only |
| `--glass` | `rgba(255,255,255,0.06)` | Glass card fill on dark | See 8.3 for text rules |
| `--glass-line` | `rgba(255,255,255,0.10)` | Glass card border | Decorative |
| `--cream` | `#EAE6E2` | Heading colour on dark and poster bands | 11.6:1 on `--deep` |
| `--mist` | `#F4FAFB` | Alternate light section background | Body `#4A5A5F` ≥ 7:1 |
| `--line` | `#D6E6E9` | Borders, dividers | Decorative |
| `--success` / `--warning` / `--danger` | `#1E8E5A` / `#B26A00` / `#C0362C` | States (always icon + text) | Check on background |

**Color rules**
- Light pages: ~70% white/mist, ~15% ink, ~10% teal, ~5% orange. **Dark showcase and hero bands** can be mostly `--deep`/`--abyss` with aqua accents, but orange stays a spice (≤ 5%).
- Text on a teal or aqua button is **ink `#111`**, never white.
- Brand gradients (sparingly): `--abyss → --deep → --deep-2` for hero and dark bands. No rainbow or purple gradients.

### 1.3 Typography

**Two voices, nothing else** (one extra Poppins weight allowed in the showcase, see 1.3.2):
| Role | Font | Used for |
|---|---|---|
| **Display (headings)** | Ultra-heavy, condensed, all-caps display face with softly rounded corners | H1, H2, H3, the hero mask word, big numbers, poster statements |
| **Matter (everything else)** | **Poppins** (300 showcase only, 400, 500, 600; 700 small emphasis only) | Paragraphs, UI, nav, buttons, forms, tables, captions, H4–H6, glass card titles |

#### 1.3.1 Display heading style
Target look: **very bold, tall, condensed capitals; tight word spacing; soft rounded corners; teardrop apostrophe; 2–3 short lines; set big.**

- **Font identification:** the exact typeface of the reference screenshot is unconfirmed. Confirm via browser Inspect → *Computed* → *Rendered Fonts*, or ask the designer. License commercial fonts for web before launch.
- **Closest available options (test with real Siri headings):** **Anton** (closest weight), **Barlow Condensed 800/900** (softer corners), **Big Shoulders Display 900** (industrial), **League Gothic** / **Sofia Sans Extra Condensed 900** (narrower).
- **Corner softening (if the font is sharp):** `-webkit-text-stroke: 0.02em currentColor; paint-order: stroke fill; stroke-linejoin: round;`. Remove under 28px.
- **Hero mask word:** use the **heaviest, widest-stroke weight available**. Thick letter strokes show more video through the mask (Section 7). Anton or Big Shoulders 900 are preferred for this job.
- **Rules:** `text-transform: uppercase` in CSS (type normal case in markup); line-height **0.9–0.95**; letter-spacing 0–0.01em; no faux bold; max **8 words / 3 lines**; left-aligned by default (centered only for poster statements and the hero mask); curly apostrophe (’); never for paragraphs, buttons, labels, table cells or anything under 20px.
- **Indian-language pages:** the display font is Latin-only. Use **Poppins 700** (Noto Sans Telugu/Tamil/Devanagari fallbacks) in sentence case.

#### 1.3.2 Poppins for the matter
- **Weights loaded:** 400 (body), 500 (UI, nav), 600 (buttons, H4–H6, labels). **300** is loaded **only if** the product showcase glass-card titles use the light style (Section 8); otherwise skip it.
- Rounded personality comes from rounded UI shapes (pill buttons, 12–24px cards, circular icon badges). For truly rounded terminals swap to **Nunito** or **Varela Round** (open question 9).
- Poppins runs wide: line-height **1.65**, line length **55–68 characters**, size **16px mobile / 17–18px desktop**.
- Tables: `font-variant-numeric: tabular-nums`; if uneven, Poppins 500 at 15px.
- **Eyebrows/labels:** Poppins 600, 12–13px, uppercase, letter-spacing 0.08em, `--orange-ink` / `--teal-ink` on light; `--aqua-soft` / `--orange` on dark.

#### 1.3.3 Type scale (fluid)
| Style | Font | Mobile → Desktop | Line-height | Case |
|---|---|---|---|---|
| **Hero mask word** | Display | 30vw-wide fit → fills ~86% of viewport width | 0.86 | UPPER |
| Display XL (hero H1 after reveal) | Display | 56px → 140px | 0.90 | UPPER |
| H1 (page title) | Display | 48px → 96px | 0.92 | UPPER |
| H2 (section title) | Display | 36px → 72px | 0.95 | UPPER |
| H3 (card/feature title) | Display | 26px → 44px | 1.0 | UPPER |
| H4 / glass card title | Poppins 600 (or 300 in showcase) | 18px → 22px | 1.3 | Sentence |
| Lead paragraph | Poppins 400 | 18px → 21px | 1.6 | Sentence |
| Body | Poppins 400 | 16px → 18px | 1.65 | Sentence |
| UI / button | Poppins 600 | 15px → 16px | 1.2 | Sentence |
| Caption / meta | Poppins 400/500 | 12px → 14px | 1.4 | Sentence |

#### 1.3.4 Colour of headings (accessibility rule)
The cream-on-dusty-pink style in the first reference measured ≈ 1.7:1 and fails. Approved pairings:

| Background | Heading colour | Contrast | Large text OK? |
|---|---|---|---|
| White / `--mist` | `--ink` | 18.9:1 | Yes |
| `--deep` / `--abyss` | `--cream` or white | ≥ 11:1 | Yes |
| `--teal` | `--ink` | 7.8:1 | Yes |
| `--teal` | `--deep` | 6.0:1 | Yes |
| `--orange` | `--ink` | 7.5:1 | Yes |
| `--teal` or `--orange` | White or cream | below 3:1 | **No** |

### 1.4 Shape, spacing, elevation
- **Radius:** 12px cards (light pages), **24px glass cards** (dark showcase), 999px pills/buttons, 8px inputs. Echo the logo's circle with circular icon badges.
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Section padding 64px mobile, 112–128px desktop.
- **Grid:** 12 columns, 1200–1280px container (the showcase may go to 1440px), 16px gutters mobile / 24–32px desktop.
- **Elevation:** flat / raised card / floating overlay / **glass** (blur 20px, `--glass` fill, 1px `--glass-line`). Soft teal-tinted shadows `rgba(1,60,70,.10)` on light pages; none needed on glass.
- **Borders:** 1px `--line` on light, `--glass-line` on dark.

### 1.5 Iconography
- No emoji. **Inline SVG**, monoline, 1.75px stroke, rounded caps and joins, 24px grid, matching the logo.
- Icon set to draw: aerator, paddle wheel, spiral impeller, pump, motor, gearbox, control panel/timer, feeder, probiotic bottle, droplet/oxygen, shrimp, fish, pond, shield/quality, certificate, truck, document/PDF, play, WhatsApp, phone, mail, location, calculator, wrench/service, **weight, power (bolt), supply/plug, warranty/shield-check, coverage/area** (the last five are for the showcase tiles).
- Showcase tile icons are drawn **filled in `--aqua-glow` / `--orange`** duotone (as the screenshot uses solid cyan icons), still built on the same 24px monoline grid.
- Decorative icons `aria-hidden="true"`; informative icons have a text label.

### 1.6 Photography, video and illustration
- Real photos/video only: Siri equipment in real ponds, factory/workshop, installations, team, farmers (with consent). Alt text on every informative image.
- **Showcase product images are transparent-background cut-outs** (PNG/WebP/AVIF with alpha), shot or masked cleanly, front or 3/4 view, lit from one side with a soft shadow beneath. Provide 4 supporting thumbnails per product (context, detail, side, installed).
- **Hero video direction (see 7.2):** dusk or dawn pond, aerator throwing water, drone passes, macro droplets. Teal-graded, slow, no people's faces without consent, no audio.
- Illustration in the logo's monoline-with-two-colour-fill style. Consistent aspect ratios (16:9 hero video, 4:3 cards, 1:1 thumbs); nothing stretched, watermarked or generic stock.

---

## 2. Logo usage spec (use the logo perfectly)

The logo image will be supplied inside the project (see Section 22 for the exact drop path). This section is the rulebook for using it.

### 2.1 Asset set to produce from the supplied logo (one-time task)
| File | Description | Where used |
|---|---|---|
| `logo-original.png` | Untouched supplied file (archive only; never shipped) | Reference |
| `logo-full-color.svg` | Full-colour stacked lockup: mark + wordmark + "SOLUTIONS Pvt. Ltd." + tagline rules | Light backgrounds, About, print, PDFs |
| `logo-full-white.svg` | Single-colour white lockup (orange/teal blocks kept as brand colours only if contrast ≥ 3:1 on the dark background, otherwise white) | Dark sections, footer, video overlay |
| `logo-mark-color.svg` | Mark only (shrimp + wheel + fish), no wordmark | Header (compact), favicon source, loaders |
| `logo-mark-white.svg` | Mark only, white | Dark header over video |
| `logo-horizontal-color.svg` / `-white.svg` | **Horizontal lockup** (mark left, "SIRI AQUATIC" right) — needs the designer to compose it from the same paths | Header on desktop |
| `logo-mark-lines.svg` | Line-only layered version for draw animation (layer IDs in 10.1) | Hero arrival, wheel band |
| `logo-ink.svg` | Single-colour ink (#111) | Fax/print/stamps/one-colour use |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon-180.png`, `icon-192.png`, `icon-512.png` | Wheel-only mark on rounded-square background | Browser/PWA |
| `og-logo-1200x630.png` | Logo centered on `--deep` with tagline | Social sharing |

**Vector rule:** If only a raster logo is supplied, **trace it** to SVG (clean paths, merged shapes, no stray anchors, no embedded raster, ≤ 12 KB for the animated mark) and **compare it overlaid at 400%** against the original until it matches. **Do not recreate the logo by eye, change proportions, swap its fonts, add effects (outer glow, bevel, shadows) or recolour it.** Sample brand colours directly from the supplied file; the palette values above (`#01B8C8`, `#E29136`, `#111111`) are the starting reference and must match the sampled values.

### 2.2 Clear space and minimum size
- **Clear space:** keep an empty margin on all sides equal to **the height of the orange/teal eye block** (call it *x*) of the lockup in use. Nothing — text, image edges, buttons — enters it.
- **Minimum sizes:** full lockup **120px wide** on screen (the tagline rules are hidden below 160px and the tagline text is dropped); horizontal lockup **96px wide**; mark only **24px** tall; favicon **16px** (wheel only). Below these, use the next simpler variant, never a scaled-down one.
- **Never:** stretch, rotate (except the wheel's own animation), skew, outline, add drop shadows, place on busy imagery without a scrim, change the order of elements, or put teal/orange logo parts on a teal/orange background.

### 2.3 Variant by background
| Background | Variant |
|---|---|
| White / `--mist` | Full-colour |
| `--deep`, `--abyss`, video with scrim ≥ 45% | White variant |
| `--teal` band | Ink variant |
| `--orange` band | Ink variant |
| Photography without scrim | Not allowed — add a scrim or a solid chip behind the logo |

### 2.4 Placement map
| Place | Variant and size | Behaviour |
|---|---|---|
| **Header (desktop)** | Horizontal lockup, 160–200px wide, top-left; white over the video hero, full-colour once the header turns solid | Cross-fades between variants (200ms); wheel makes one 60° step on hover (10.4) |
| **Header (mobile)** | Mark + short wordmark or mark only, 40px tall, left; 48px tap target | No animation except tap feedback |
| **Arrival / preloader** | Line mark draws and spins (Section 9.2) | Plays only if load > 600ms or first visit per session; max 1.2s block |
| **Hero** | Appears after the text-mask reveal as a white lockup at 120–180px wide above the CTAs, plus the idle-loop mark if the intro variant is used (10.2) | Never competes with the mask word |
| **Wheel band / section breaks** | Wheel or full mark from `logo-mark-lines.svg` | Scroll-linked (10.3) |
| **Footer** | White lockup + tagline, with the wave-and-fish divider | Fish drifts slowly (pauses off-screen) |
| **Favicon / app icons** | Wheel-only mark | Test on light and dark tab bars |
| **Social/OG** | `og-logo-1200x630.png` | Safe area: logo inside the central 1000×500 |
| **PDF datasheets** | Full-colour horizontal lockup at the top-left, 38mm wide, plus a QR code at top-right | Clear space applies |
| **WhatsApp/Email signature** | Mark + wordmark, 120px wide | Plain image, `alt="Siri Aquatic Solutions"` |
| **404 / empty / success states** | Mark pieces animate (10.4) | Wheel, fish, check mark |

### 2.5 Logo over video and glass
- Over the hero video use the **white** variant only, with a gradient scrim behind the header (top 140px: `--abyss` at 70% → 0%).
- The logo never sits over the moving water highlights without the scrim. If a bright frame breaks contrast, increase the scrim, do not add a glow to the logo.
- On the glass showcase, the logo is not repeated inside the cards; the header carries it.

### 2.6 Accessibility and SEO of the logo
- Header logo is a link to `/` with accessible name "Siri Aquatic Solutions — home". Animated mark: `role="img"` with an accessible name; decorative copies `aria-hidden="true"`.
- Provide `Organization` structured data with the logo URL (square 512px PNG or SVG per search-engine guidance).
- Set `width`/`height` on the SVG so it never shifts layout.

---

## 3. Reference review

### 3.1 Suyog reference site audit (what to keep, fix, add)

| Reference section | Observation | Siri decision |
|---|---|---|
| Header + nav | Clear, short; anchors only | **Keep the idea**; real multi-page navigation with mega-menu and search |
| Hero (headline, trust ticks, 2 CTAs, product image, 3 stats) | Strong, benefit-led | **Replace** with the video text-mask hero (Section 7) |
| Scrolling marquee of product series | Good category teaser | **Keep** as a slow, pausable ticker (optional) |
| Aerators grid (6 products, 3 spec tags each) | Scannable cards | **Keep** on category pages; add CTAs and product pages |
| "Why Suyog" (4 emoji icons) | Emoji inconsistent | **Keep idea**, SVG icons, evidence for each claim |
| Reference model spec table | Excellent for B2B | **Keep** on every product page, approved fields + PDF datasheet |
| Equipment & spares (8 cards) | No pricing, no inquiry | **Keep**, add "Find spare by model" and quote CTA |
| Probiotics (14 image datasheets) | Heavy, not searchable/accessible | **Replace** with HTML product pages + downloadable PDF |
| Videos (YouTube links) | Links out | **Keep**, embed with click-to-load facades |
| About | Text only, unevidenced claims | **Expand** with story, quality, facility, team, certifications |
| Contact form | Minimal | **Expand** (Section 6.11) |
| Footer | Fine | **Expand** with legal, WhatsApp, newsletter (if managed) |
| Missing entirely | WhatsApp, social proof, case studies, FAQs, downloads, tools, certifications, search, languages | **Add** |

### 3.2 IGIN "Drops" page — style ideas kept
IGIN is a drinks brand; use the *ideas*, never its artwork, copy or colours.

| IGIN pattern | How Siri uses it |
|---|---|
| Announcement stack at top | One rotating, pausable announcement line (max 3 messages) |
| Floating doodle stickers | Aquatic stickers in the logo's monoline style (bubble, shrimp, fish, wheel, droplet, wave, star), `aria-hidden`, gentle float |
| Swipeable "clothesline" of products ("On the line") | **Secondary** browse rail on `/products` and category pages (6.3). The **home** product experience is the Product Showcase (Section 8) |
| Collections with status chips | "12 products · In stock / Made to order / Quote only" |
| Starburst badge | "New", "Best seller", "Quote only" — only when true |
| Mascot peeking in | Shrimp or fish peeks from section edges and rail ends |
| End marker "That is the whole line" | "That's the whole range · View all aerators" |
| Tilted sticker-like CTA | Tiny −1.5° tilt on hover + 3px hard-offset shadow on marketing CTAs (off for reduced motion; not in forms/checkout) |
| Newsletter "The list" | "The Pond List" — only if someone will send it |
| Big poster statements on colour blocks | Proof bands with approved pairings (1.3.4), max one per page |
| Playful microcopy | "Oxygen in. Stress out.", "Quality comes first." Technical sections stay serious |

**Balance rule:** playfulness lives in headings, stickers, rails and transitions. Specs, forms, tables, documents and checkout stay calm, plain and fast.

### 3.3 Air-purifier showcase screenshot — what to learn
I read this from the image only (no CSS access), so the notes are about layout and personality.

| Pattern in the screenshot | Why it works | Siri translation |
|---|---|---|
| **Three-column stage:** copy left, tall product centre, info cards right | Product is the hero; info orbits it | Same stage, Section 8 |
| **Product is large, vertical, cut out and overlaps both columns** | Gives depth and scale | Aerator cut-out ~85–95% of the section height, overlapping the cards by ~8% |
| **Dark teal-green backdrop with a blurred room photo** | Calm, premium | `--abyss → --deep` with a blurred pond/farm photo at 20–30% opacity |
| **Glass cards** (translucent fill, soft border, large radius) | Layers info without clutter | `--glass` cards, 24px radius, backdrop blur 20px |
| **Light, airy headline type on the left** | Contrast with the heavy product | Siri uses the display face for the section H2; card titles in light Poppins |
| **Left card: caption, 4 thumbnails, label/value spec pairs, "New Feature" + chip, big pill CTA** | Complete buy-decision mini-flow | Same structure with Siri fields |
| **Right top card: product title, subtitle, animated flowing wave, tagline** | Brand motion element | Aeration/oxygen wave line (8.5) |
| **"Main Info" 2×2 tile grid with icons, tiny label above a larger value** | Scannable key facts | Four verified spec tiles |
| **One giant stat** (large number, small caption) | Memorable proof point | One **verified** headline stat or omit |
| **Header: logo left, centred nav, white pill CTA right** | Clean, minimal | Header per 5.2, CTA "Request a Quote" |
| Cyan pill CTA with dark text | High contrast, friendly | `--aqua-glow` pill, ink text |

Do **not** copy the screenshot's copy, numbers, product or imagery.

---

## 4. Sitemap and page inventory

```
/                          Home
/products                  All products (filters, search, sort, "On the line" rail)
/aerators                  Category: Aeration systems
/aerators/[product]        Product detail
/equipment                 Category: Pumps, motors, gearboxes, feeders, panels
/equipment/[product]       Product detail
/spare-parts               Spare parts finder
/probiotics                Category: Pond-care and nutrition
/probiotics/[product]      HTML product page + PDF datasheet
/solutions                 By need: Aeration, Feeding, Water quality, Soil/bottom, Harvest
/tools/aerator-selector    Preliminary selector (Phase 3)
/tools/electricity-cost    Running-cost calculator (Phase 3)
/compare                   Compare up to 3 approved products (Phase 3)
/projects                  Case studies (with consent)
/knowledge                 Manuals, guides, articles, downloads
/videos                    Video library
/faq                       Searchable FAQs
/about                     Story, mission, team
/quality                   Quality & manufacturing, certifications
/support                   Service request, warranty, spare parts
/dealer-enquiry            Dealer/distributor application
/request-a-quote           Quote form
/contact                   Contact + map
/legal/privacy, /terms, /cookies, /shipping-returns, /refund-policy, /warranty
/404, /thank-you
/admin/*                   Protected (out of scope)
```

**Release phases:** Phase 1: Home (video hero, showcase, scroll system), products, probiotics, About, Quality, Contact, Quote, Videos, Knowledge (basic), Legal, WhatsApp. Phase 2: Cart/checkout. Phase 3: Support, Tools, Compare, Dealer, Projects, languages.

---

## 5. Global components (every page)

### 5.1 Announcement bar (optional)
Single line, 36–40px, dismissible, **verified** info only. No fake countdowns. Hidden while the hero mask is active (it returns after the reveal).

### 5.2 Header / navigation
- **Layout:** logo (left) → centred primary nav → search icon → phone → **"Request a Quote"** pill (right) → language switcher (when available) → cart (Phase 2). On the hero the pill may be the white variant (as in the screenshot); on light pages it is teal with ink text.
- **Primary nav:** Products (mega menu) · Solutions · Knowledge · Projects · About · Support · Contact.
- **Mega menu (Products):** 4 columns (Aeration, Equipment & Spares, Pond-Care, By Need) with icon, descriptor and "View all"; featured product on the right.
- **States over the hero:** transparent with a top gradient scrim; white logo and nav. After the hero mask completes (Section 7) the header becomes **glass-dark** (`--abyss` at 55%, blur 16px) over the video, then **solid white** on light sections. Cross-fade 200ms. Hides on scroll down, returns on scroll up (not while the mask is zooming).
- **Scroll progress:** a 3px `--aqua-glow` line at the very top shows page progress (hidden under reduced motion; replaced by nothing, not by a static bar).
- **Active page:** teal underline. The logo's wheel does one step on hover.
- **Mobile:** hamburger → full-screen sheet, ≥48px targets, accordion sub-menus, sticky bottom bar (Call · WhatsApp · Quote).
- **Accessibility:** skip-to-content link, keyboard menus (Esc closes), `aria-expanded`, visible focus rings.

### 5.3 Floating action cluster (WhatsApp first)
- Circular 56px WhatsApp button bottom-right (desktop); part of the bottom bar on mobile. WhatsApp green allowed here. Subtle pulse every 12s, stops after 2 pulses, respects reduced motion.
- Opens `wa.me/[number]` with a pre-filled message including page context ("Hello Siri Aquatic, I'm interested in [Product name] ([URL]). Please share details.").
- Desktop label: "Chat with our team" with hours and response time (from the client).
- Never covers the cookie banner or primary CTAs; hidden while typing in a form; "Call now" alternative offered.
- **Hidden during the hero mask zoom** and reappears after the reveal.
- WhatsApp also appears in header contact strip, product pages, quote success page, footer, 404.

### 5.4 Footer
`--deep` background, white logo + tagline. Columns: Products · Solutions · Knowledge · Company · Support · Contact (verified details). Social icons, newsletter (only if managed), legal links, copyright with legal company name, certifications row, **"Reduce animations" toggle**. A teal wave divider at the top with the fish-and-wheel mark.

### 5.5 Cookie/consent banner
Short, bottom-left, non-blocking: Accept · Reject non-essential · Manage. No pre-selected optional consent. Shown **after** the arrival sequence, not over it.

### 5.6 Search
Overlay (`/` shortcut) searching products, models, part numbers, articles, FAQs. Grouped results, recent searches, no-results fallback to WhatsApp/quote.

### 5.7 Breadcrumbs
On every inner page: Home › Category › Product, marked up for SEO.

---

## 6. Page-by-page specification

Format: **Purpose → Content → Layout → Motion → CTA.**

### 6.1 Home page (final order)

| # | Section | Background | Notes |
|---|---|---|---|
| H0 | **Arrival** (Section 9.2) | `--abyss` | Logo draw + curtain lift |
| H1 | **Hero: video + text mask zoom** (Section 7) | Video | Pinned 250vh desktop / 180vh mobile |
| H2 | Trust strip | `--abyss` → white | Count-up stats |
| H3 | Shop by category | White | 4 cards |
| H4 | **Product Showcase** (Section 8) | `--deep` glass stage | Pinned, one product per ~100vh |
| H5 | **Wheel turns, water wakes** (10.3 A) | `--deep` | Scroll-linked logo |
| H6 | Why Siri Aquatic (4 pillars) | `--mist` | Evidence-backed |
| H7 | Aerator selector teaser | White | Mini form |
| H8 | Pond-care & probiotics preview | `--mist` | 4 tiles |
| H9 | Social proof + poster band | White / colour band | Proof only if real |
| H10 | Knowledge & videos | White | Facade player |
| H11 | Final CTA band (10.3 E) | `--deep` | Completed logo |
| H12 | Footer | `--deep` | |

**H1 Hero** — full specification in Section 7. Eyebrow "AQUACULTURE EQUIPMENT & POND SOLUTIONS", H1 after reveal (draft): "Healthier ponds start with the right equipment.", sub-copy 25–35 words, CTAs "Explore Products" (primary), "Talk to Our Team" (secondary), "Chat on WhatsApp" (text link), 3 **verified** trust chips.

**H2 Trust strip** — 3–4 verified numbers ([years in business], [farms served], [states covered], [products supplied]) + certification logos. Hover reveals a source/footnote. Count-up 1.2s once; static under reduced motion.

**H3 Shop by category** — title "Find the equipment you need". 4 cards: Aeration Systems · Aquaculture Machinery · Spare Parts & Accessories · Pond-Care Products; icon, one line, product count, "Explore →". 4-up desktop, 2-up tablet, 1-up/swipe mobile. Hover: lift 4px, icon stroke redraws, teal underline grows.

**H4 Product Showcase** — Section 8.

**H5 Wheel turns, water wakes** — 10.3 A. Copy draft: "Oxygen in. Stress out. Quality first." (approve wording).

**H6 Why Siri** — 4 pillars (Build quality, Technical guidance, Spares availability, After-sales support) with SVG icons, evidence-backed statements, "Learn more" to the evidence page, and a small proof element (photo, certificate, number). 2×2 desktop.

**H7 Aerator selector teaser** — "Not sure which aerator fits your pond?" Mini-form (pond area, depth, power supply) → "Help me choose"; note "Final selection confirmed by a Siri Aquatic representative". Split card with a pond cross-section and animated bubbles.

**H8 Pond-care preview** — 4 tiles with category chips (Water · Soil · Gut · Minerals), "Download datasheet", compliance line, link to the full catalogue.

**H9 Social proof** — 3 case-study cards (farm/region, problem, equipment, verified result with date and consent), a video testimonial thumbnail, client/partner logos, Google review summary if real, farmer quotes. Poster band ("DON'T JUST TAKE OUR WORD FOR IT" style) with approved colour pairings. No fake or anonymous testimonials.

**H10 Knowledge & videos** — featured video (click-to-load), 3 article/manual cards, "Visit the Knowledge Centre".

**H11 Final CTA** — dark band, full logo completed, fish S-curve swim, copy "Need help selecting the right product?" with Quote, WhatsApp, Call.

### 6.2 Products listing (`/products`)
- Title "Aquaculture Products", intro, search field. Left filter sidebar (drawer on mobile), grid 3-up desktop / 2-up tablet / 1–2-up mobile, sticky sort + count.
- Filters (only when data validated): category, application, power supply/phase, availability, model family, price (priced items only). Active chips + "Clear all"; filters in the URL.
- Card: 4:3 image, name, model, 2–3 spec tags, availability chip, "View details", compare ⇄, WhatsApp.
- Optional top strip: the **"On the line" rail** of featured items (IGIN-inspired) with quick-view panel (photo, 3 key specs, availability, Request quote, WhatsApp, full page).
- Empty state with WhatsApp button; skeleton loading cards; "Load more" button (not infinite scroll).

### 6.3 Category pages
Category hero → quick-pick chips by use → product grid → "How to choose" mini-guide → comparison table (approved fields) → related guides → FAQs (3–5) → quote CTA band. Category hero may reuse the showcase layout at smaller scale (one featured product + 4 tiles).

### 6.4 Product detail page
1. Breadcrumb
2. Gallery (main image, 4–6 thumbs, zoom, optional 360°/video; keyboard accessible)
3. Summary (sticky on desktop): name, model/SKU, factual subtitle, availability chip, price or "Request a quote for pricing", quantity, primary CTA (**Add to cart** only if eligible, else **Request a Quote**), WhatsApp "Ask about this product", "Download datasheet (PDF)", share
4. Key specs strip: 3–4 icon chips — **same four tiles as the showcase "Main Info"** for consistency
5. Sticky sub-nav: Overview · Specifications · Documents · Installation & Maintenance · Compatible spares · FAQs
6. Spec table: Field | Value | Unit | Notes; zebra rows; "Not published" for unknowns; mobile stacked
7. Documents with revision date, language, size
8. Video facade
9. Related products and compatible spares (verified links)
10. Sticky bottom quote bar on mobile
11. Disclaimer: "Specifications and availability may vary by model and production revision. Confirm the current datasheet before purchase."

The wheel icon beside the sub-nav rotates with scroll progress (10.3 C).

### 6.5 Probiotics / pond-care pages
**Listing:** tiles with category tag (Water, Soil, Gut, Minerals, Oxygen, All-in-one), pack sizes, "View product", "Download PDF"; filter by purpose and pond stage if verified.
**Product page (HTML, text-first):** name, category, pack sizes; purpose (approved wording); composition (where legally appropriate); dosage exactly as on the label; warnings, storage, shelf life; registration info; approved claims with references; **Download PDF** (revision date + size); related products; "Talk to an expert"; footer line "Follow the product label and professional guidance."
**PDF rule:** one branded template per product (logo header per 2.4, title, tables, safety box, QR to the web page). File name `siri-[product-slug]-datasheet-v[rev].pdf`, under 1 MB. Image datasheets are not primary content.

### 6.6 Videos (`/videos`)
Featured video on top, grid below, filters (Product demo, Installation, Maintenance, Farmer story). Facade: poster + play icon, player loads on click, no autoplay with sound, captions/transcripts. Card: title, product tag, length, date.

### 6.7 About (`/about`)
Story (timeline) → Mission and values (Quality Comes First) → What we do → Facility gallery → Team → Certifications → Reach (verified map) → CTA. Timeline draws on scroll; the wheel rolls along it (10.3 D). The hero here is a **smaller text-mask** variant ("QUALITY COMES FIRST") if the same video is reused; otherwise a standard poster band.

### 6.8 Quality & Manufacturing (`/quality`)
Animated horizontal stepper (design → material → assembly → testing → dispatch → service), test-evidence photos, downloadable certificates, warranty summary, QC checklist excerpt. Nothing published without proof.

### 6.9 Knowledge centre (`/knowledge`, `/downloads`, `/faq`)
Filters: type, category, model, language, revision date. Resource card: title, type, model, language, revision date, file type/size, Download/Watch. Initial articles (expert-reviewed): choose an aeration system; questions before buying; installation checks before commissioning; routine maintenance checklist. FAQ: search + accordion, keyboard accessible, crawlable.

### 6.10 Projects / case studies (`/projects`)
Cards with hero photo, location (district/state), species, equipment, dated result, consent flag. Detail: challenge → solution → installation photos → outcome (evidence) → quote → related products.

### 6.11 Request a Quote (`/request-a-quote`)
- Two columns: form (stepped on mobile) and "What happens next" timeline (We review → We call/WhatsApp → You receive a quote) plus direct contacts.
- **Fields:** name, company (optional), email, phone with country code, country/state, product/model (pre-filled), quantity, pond area/depth, species, power supply (optional), preferred contact (Phone/WhatsApp/Email), message, upload (optional, limits stated), privacy acknowledgement (required), marketing consent (optional, unchecked).
- **UX:** inline validation, errors linked to fields, progress indicator, local draft autosave, double-submit prevention.
- **Success:** wheel completes a turn and draws a check mark; reference ID; "Chat on WhatsApp" and "Back to products"; do not share passwords or card details. Success shown only after server confirmation.

### 6.12 Contact (`/contact`)
Verified address, hours, phones, email, WhatsApp, static map that loads the interactive map on click. Form with topic selector (Product info / Quote / Service / Order / Dealer / Other). No fabricated branches.

### 6.13 Support (`/support`, `/spare-parts`, `/warranty`, `/dealer-enquiry`)
Hub with 4 tiles (Service request, Find a spare part, Manuals, Warranty). Spare-parts finder by model/part number ("Not sure? Send a photo on WhatsApp"). Service request form (model, serial/batch, issue type, description, photo, contact). Warranty: approved policy only. Dealer enquiry: business details, region, experience, capacity, documents.

### 6.14 Tools (Phase 3)
- **Aerator selector:** pond area → depth → species → stocking → power supply → number of ponds → goal; progress bar; output is a **preliminary shortlist** with a confirmation note and "Send to our team".
- **Electricity calculator:** kW (or HP), quantity, hours/day, days/month, tariff → cost per day/month/year; assumptions shown; animated bars.
- **Compare:** up to 3 approved products, units shown, differences highlighted.

### 6.15 Legal and utility pages
Privacy, Terms, Cookies, Shipping & Returns, Refund, Warranty, Accessibility statement. Reading layout max 75ch, sticky table of contents. Final copy reviewed by legal/tax adviser.

### 6.16 Cart, checkout, confirmation (Phase 2)
Cart rows (image, model, quantity, price, availability, remove); server recalculates prices. Checkout: guest, 3 steps (Details → Delivery → Payment), sticky summary, trust badges, unchecked marketing consent. Confirmation: "Payment processing" until verified, then "Thank you — we've received your order" with reference ID.

### 6.17 404 and error pages
404: the **fish out of water** moment — the fish drifts away from the wheel; "This page swam away." Buttons: Home, Products, WhatsApp, search. 500/offline: calm message, retry, contact options.

---

## 7. Signature hero — background video + text-mask zoom reveal

### 7.1 Concept
The first screen shows a dark `--abyss` field with a giant word — **"SIRI AQUATIC"** — in the display font. The **letters are windows**: the hero video plays *inside* the letterforms (knockout mask). As the visitor scrolls, the word **zooms toward the viewer**, its strokes grow until a single letter fills the screen, and the video is revealed full-bleed. The headline, logo and CTAs then rise in over the video.

### 7.2 Video specification
| Item | Rule |
|---|---|
| Content | Siri's own footage or properly licensed stock: pond at dusk/dawn, aerator throwing water, drone orbit, macro droplets. Teal/deep colour grade, slow motion, **no audio track** |
| Length / loop | 8–12 seconds, seamless loop (cross-dissolve the last 0.5s into the first) |
| Desktop file | 1920×1080, 24–30fps, H.264 MP4 **≤ 4 MB** (+ WebM/AV1 source if smaller) |
| Mobile file | 1280×720 (or 720×1280 crop), 24fps, **≤ 1.5 MB** |
| Poster | AVIF/WebP, **≤ 120 KB**, the same first frame; this is the **LCP element** and is preloaded |
| Attributes | `muted`, `loop`, `playsinline`, `autoplay`, `preload="metadata"` for desktop after LCP; no controls |
| Content safety | Keep bright specular highlights below ~85% luminance (grade down) so white UI stays legible; keep a calm darker band in the lower third for text |
| Fallbacks | `Save-Data`, slow connection, low-power mode, reduced motion, or autoplay blocked → **poster only** with the mask and text working on the still image |
| Pause | A visible pause/play control (bottom-left, 44px) after the reveal; keyboard-accessible (WCAG 2.2.2) |

### 7.3 Mask construction rules
- The mask word is **real text** (screen readers read it), set in the heaviest available weight, uppercase via CSS. A visually hidden `<h1>` contains the page's actual H1 text; the mask word itself is `aria-hidden` decoration if it duplicates it, or becomes the H1 if it is the brand name.
- Mask effect: the video sits behind a layer whose letters are knocked out (SVG `<mask>`/`clip-path` text, or `background-clip: text` over the video). The backdrop outside the letters is `--abyss` at 100% opacity at scroll 0.
- Two lines, centred: **SIRI** / **AQUATIC**, line-height ~0.86, the word block fills ~86% of the viewport width on desktop, ~92% on mobile (with `SIRI AQUATIC` on one line only if the font is condensed enough to stay legible ≥ 60px cap height on 360px phones).
- A thin 1px `--glass-line` outline around the letters at scroll 0 helps legibility when the video is dark.
- **Zoom anchor:** the transform origin is the centre of a **solid letter stem** (e.g. the stem of the **"I"** in SIRI, or the heavy stroke of the "A"), **never a counter (hole)**, otherwise zooming would end in the empty backdrop. The final scale is **computed at runtime**: `scale = max(viewportW / stemW, viewportH / stemH) × 1.06`, so it works at every screen size and after font load.

### 7.4 Scroll choreography (pinned 250vh desktop / 180vh mobile, progress 0 → 1)

| Progress | Event | Easing |
|---|---|---|
| **0.00** | Static: mask word centred, video playing inside letters, small "Scroll" cue with the wheel icon turning | — |
| 0.00–0.70 | Mask word scales 1 → computed final scale around the anchor; letters spread past the screen edges | `cubic-bezier(.65,0,.35,1)` mapped to progress (ease-in-out) |
| 0.05–0.45 | Backdrop around the letters fades `--abyss` 100% → 0% **only as strokes cover the viewport** (never earlier) | linear |
| 0.30–0.70 | Video scale 1.0 → 1.08 (subtle counter-motion), brightness 0.85 → 1.0 | linear |
| 0.55–0.80 | Dark scrim over the video settles at 40–55% for text contrast | ease-out |
| 0.65–0.85 | Header turns glass-dark; white logo fades in at its final place; scroll cue fades out | ease-out |
| 0.72–1.00 | Eyebrow, H1, sub-copy, CTAs rise (translateY 24px → 0, opacity), **line-masked stagger 80ms**, CTA last (≤ 800ms delay rule) | ease-out |
| 1.00 | Section unpins; the next section (trust strip) **slides over** the hero as a rounded-top sheet (Section 9.3) | — |

**Rules**
1. The text becomes readable and the CTAs usable **at progress ≤ 0.85**; nobody has to scroll to the end to act. The skip link and header Quote button are available from the first frame.
2. **Scroll direction reversible:** scrolling up un-zooms exactly (scrubbed, not time-based).
3. **No scroll hijacking:** native scroll speed; the effect is scroll-linked only. A visible "Skip intro" link jumps to the trust strip.
4. **Deep-links:** `/#products` and any anchor jump past the hero in its revealed state (set progress to 1 instantly).
5. **First visit vs repeat:** the arrival sequence (9.2) plays once per session; on repeat the mask is shown at once.
6. **Mobile:** same scrub with a shorter pin (180vh), `touch-action` untouched, no smoothing, no parallax. The mask word is set so the video is visible at 360px width; the zoom anchor is recomputed on resize/orientation change.
7. **Reduced motion:** no zoom. Show the **final state** (video full-bleed with scrim, text and CTAs visible) with the video paused on the poster unless the user presses play.
8. **No-JS:** show the final state with the poster image.
9. **Performance:** only `transform`, `opacity` and the mask's scale are animated (GPU layer); the video element is promoted once; stop updating when the hero is off-screen; the zoom must hold ≥ 50fps on a mid-range Android. If frames drop, remove the video scale and brightness effects first, then the mask outline.

> **Implementation note (non-binding):** an SVG `<text>` inside a `<mask>` applied to a wrapper holding the `<video>`, driven by a scroll-progress value (CSS scroll-driven animations where supported, otherwise a single `requestAnimationFrame` loop reading `scrollY`), meets this. GSAP ScrollTrigger-style pinning or CSS `position: sticky` both work; prefer `sticky`.

### 7.5 Content over the revealed video
- H1 (display font, `--cream`/white, max 3 lines, left-aligned at ≥ 1024px, centred on mobile), sub-copy (Poppins 400, white ≥ 90% opacity), 3 verified chips, CTAs: primary teal pill with ink text, secondary white-outline pill, tertiary WhatsApp link.
- A glass "Next" chip at the bottom centre: "Explore the range ↓" (links to H3).
- The logo appears as a **white lockup** in the header and optionally centred above the eyebrow for ≤ 1s on the first visit only (2.4).

---

## 8. Product Showcase (modelled on the screenshot)

### 8.1 Purpose
Present the flagship aerators one at a time in a cinematic, scan-friendly layout: what it is, the four key facts, one proof stat, and the next action.

### 8.2 Layout — desktop ≥ 1024px (3-column stage, max 1440px)

```
┌───────────────────────────────────────────────────────────────────────────┐
│ [header: logo | nav | Request a Quote]                                    │
│                                                                           │
│  H2 (display, 3 lines)          ┌──────────────┐   ┌────────────────────┐ │
│  PRODUCT TAGLINE                │              │   │ Product name card  │ │
│                                 │   PRODUCT    │   │ subtitle + WAVE    │ │
│  ┌──── LEFT GLASS CARD ───┐     │   CUT-OUT    │   │ tagline            │ │
│  │ Caption (1–2 lines)    │     │  (tall, 90%  │   └────────────────────┘ │
│  │ [t1][t2][t3][t4] thumbs│     │   of height, │   ┌── "Main Info" ─────┐ │
│  │ Label / value pairs    │     │  overlaps    │   │ [tile][tile]       │ │
│  │ New feature  [CHIP]    │     │  both sides) │   │ [tile][tile]       │ │
│  │ small description      │     │              │   │ BIG VERIFIED STAT  │ │
│  │ [  View Specifications ]     └──────────────┘   │ stat caption       │ │
│  └────────────────────────┘                        └────────────────────┘ │
│  ● ○ ○ ○  (product dots)                                                  │
└───────────────────────────────────────────────────────────────────────────┘
```
Columns: left **~30%**, centre **~38%**, right **~32%**. The product cut-out is centred, sized to ~85–95% of the section height and **overlaps** the left and right cards by ~6–8% (cards sit above it with the glass blur showing the product through the edge, as in the screenshot).

### 8.3 Left column
- **H2:** display font, uppercase, ≤ 3 lines, cream. Example: "AERATION THAT NEVER SLEEPS." (draft; approve wording). A short tagline in Poppins 400 beneath if needed.
- **Left glass card** (`--glass`, 24px radius, blur 20px, 1px `--glass-line`, 24–28px padding):
  1. **Caption** (Poppins 400, 18px): one factual sentence about the product. *No unverified claims.*
  2. **Thumbnails row:** four 64–76px rounded-12px images (context, detail, side, installed). Click swaps the centre image; the active thumbnail gets a 2px `--aqua-glow` ring. Keyboard accessible; `alt` text on each.
  3. **Spec pairs (2×2):** tiny label (12px, white 70%) above value (18px, white 100%). Fields (all `[ ]` until approved): **Type**, **Pond area / coverage**, **Power supply**, **Operating mode**.
  4. **"New Feature" row:** label left, **chip** right (teal-tinted glass, 12px uppercase, e.g. `[FEATURE NAME]`), one-line description under it (12–13px, white 70%). Show only if the feature is real; otherwise drop the row.
  5. **CTA:** full-width **aqua pill** (`--aqua-glow`, ink text, 56px high, label 17px/600): **"View Specifications"**. A secondary text link below: "Request a quote →". Hover: lift 2px, brightness +6%; −1.5° tilt allowed (not under reduced motion).
- **Text contrast on glass:** body white ≥ 90%, small labels **never below 70% white** (measured over the darkest and lightest part of the blurred backdrop). If a card sits over a light area, increase the card fill to 0.14 or add a `--abyss` 35% under-layer.

### 8.4 Centre column — the product
- Transparent cut-out, subtle `drop-shadow` of `rgba(0,0,0,.45)`, and a soft floor shadow ellipse underneath.
- Background behind: `--abyss → --deep` radial gradient (centre lighter) + a **blurred, darkened pond/farm photo at 20–30% opacity** (equivalent of the blurred room in the screenshot) + a faint vignette.
- Product idle: very slow float (±6px, 8s ease-in-out) and mouse parallax (≤ 10px, desktop only). Under reduced motion: static.
- A faint ring or wheel outline from the logo (`logo-mark-lines.svg`, 8% opacity) sits behind the product as a brand watermark, rotating 1 turn per 60s (paused off-screen).
- **Product swap:** crossfade 350ms + 24px slide + scale 0.98 → 1; the previous image blurs out. Preload the next image.

### 8.5 Right column
- **Top glass card — title + wave:**
  - Title (Poppins 300/400, 26–30px, 2 lines max): product name; subtitle (14px, white 80%): short descriptor; **flowing wave** (SVG, 3 overlapping sine strokes in `--aqua-soft` / `--aqua-glow` at 40–90% opacity, 1.5px, extends the full card width) with a gentle phase drift (16–24s loop, transform-only); tagline at the bottom (e.g. "Oxygen, delivered." — approve wording).
  - The wave is **decorative** (`aria-hidden`); it must not imply a measured value. Under reduced motion it is static.
- **"Main Info" glass card:**
  - Title "Main Info" (Poppins 300/400, 32px).
  - **2×2 tiles** (each a nested glass tile, 16px radius): icon (24px, filled `--aqua-glow` or `--orange`), tiny label (12px, 70% white), value (20–22px, white). Four **approved** facts, e.g.: **Power** `[kW / HP]`, **Weight** `[kg]`, **Supply** `[phase / voltage]`, **Warranty** `[period]`. Same fields as the product page key-spec strip (6.4).
  - **Big stat:** one verified number in the **display font** (56–72px, white) with a small caption under it (14px, white 80%) — for example `[X] kg O₂/hr` with the test standard cited in a footnote. **If no verified stat exists, omit it; never fill with a placeholder number on the live site.**
- Right card values count up/swap with the product (350ms, tabular numbers, no layout shift).

### 8.6 Scroll behaviour (desktop)
- The section is **sticky-pinned** with a scroll length of `100vh × N` (N = 3–4 products max; 2 minimum, otherwise unpinned).
- Progress selects the active product: each product owns an equal scroll range. A **dot indicator** (and arrow keys, thumbnails and dots) provides non-scroll navigation. Reaching the end unpins.
- On each product change: H2 words swap with a line-masked slide (60ms stagger), left card values crossfade, wave amplitude shifts slightly (decorative), tiles flip numbers, product crossfades with a 24px slide.
- **Never** trap the visitor: keyboard `Tab` moves through the real controls; "Skip showcase" link available; `Esc` has no effect.
- Scroll sensitivity is **native**; no wheel interception.

### 8.7 Responsive behaviour
| Width | Layout |
|---|---|
| ≥ 1280 | Full 3-column stage as above |
| 1024–1279 | Same stage; product 80% height; cards shrink padding to 20px |
| 640–1023 | Two rows: H2 + product (product left half, spec card right) → "Main Info" below as a 2×2 grid; no pinning |
| < 640 | Single column: H2 → product image (max 60vh, centred) → **title+wave card** → **Main Info 2×2 grid** → **left card content** → CTA; products switch via **swipeable tabs** (thumbnails/dots), no pinning, cards full width; the CTA is sticky at the bottom of the section |

### 8.8 Accessibility, performance and data rules
- Each product is a real region (`aria-label="Product 1 of 4: [name]"`) with real text. The cut-out has descriptive `alt`. Hidden products are `aria-hidden` and not focusable. Provide `aria-live="polite"` for product name changes only if navigation is by controls, not scroll.
- Images: AVIF/WebP with alpha, product ≤ 140 KB desktop / ≤ 70 KB mobile; thumbnails ≤ 12 KB each; first product preloaded, the rest lazy-loaded when the section is within 1 viewport.
- Data comes from the same product record as the product page (single source of truth); an empty field hides the row/tile, never shows "N/A".
- **Claims:** every number, feature chip and tagline has an entry in the claims register (Section 16).

---

## 9. Scroll & section-to-section motion system

### 9.1 Principles
1. **Purpose:** each animation explains, guides or delights. If it does none, remove it.
2. **Reading never waits.** Text is in the DOM and readable without JS; animation is enhancement.
3. **One scroll language** across the site: the same easing, durations, offsets and stagger tokens.
4. **Reversible** scroll-linked effects (scrub both directions); one-shot effects fire **once** and stay.
5. **No hijacking:** native scroll, `scroll-behavior` smooth only for in-page anchors.

### 9.2 Arrival (first load) — "The wheel wakes, the curtain lifts"
Plays once per session on the home page (and as a short variant on other pages).

| Time | Action |
|---|---|
| 0.00s | `--abyss` field; line-mark draws (antenna → shrimp → wheel rim → fish) — only if load > 600ms or first session visit |
| 0.60–1.00s | Spokes spin up (1 turn), orange then teal fills wipe in, eyes pop (10.2) |
| 1.00–1.30s | Mark scales to the header position and **becomes** the header logo (shared-element move, transform only) |
| 1.00–1.50s | The `--abyss` curtain lifts upward (clip-path inset from the bottom, 500ms ease-in-out) revealing the hero mask word at scale 1 |
| 1.30–1.80s | Mask word letters rise 40px with a 50ms stagger; video starts; scroll cue appears |
| ≤ 1.80s | Interactive. Maximum block time 1.2s; the skip link and header Quote are focusable from the first frame |
| Repeat visits | No preloader; the hero mask is shown at once with a 300ms fade |

Rules: never block more than 1.2s; **skippable** by any scroll, tap, or key press; disabled by reduced motion (instant states); hidden for returning visits and for deep links to inner pages (inner pages use a 250ms page fade).

### 9.3 Section-to-section transitions (home)

| From → To | Transition | Spec |
|---|---|---|
| **Hero → Trust strip** | **Sheet slide-over:** the trust strip rises over the pinned hero as a sheet with a 32px top radius; the hero scales 1 → 0.96 and dims to 70% as it is covered | Scrubbed over 80vh; shadow on the sheet's top edge |
| **Trust strip → Categories** | **Colour wash:** background shifts `--abyss` → white through a soft gradient while the top radius flattens | 60vh scrub; no hard line |
| **Categories → Showcase** | **Curtain close + glass fade-in:** a `--deep` sheet slides up over the categories; the showcase glass cards fade up with a 80ms stagger, the product rises 60px | Sheet and cards scrubbed; product entrance once |
| **Showcase → Wheel band** | **Shared element:** the wheel watermark behind the product grows and becomes the pinned logo in the wheel band | Transform scale 1 → 6 → morph; same `--deep` background so no seam |
| **Wheel band → Why Siri** | **Circular reveal:** a circle expands from the wheel centre (clip-path circle 0 → 150%) revealing the `--mist` section | 700ms scrubbed, ease-in-out |
| **Why Siri → Selector teaser** | **Soft slide:** the next section rises 40px with a fade, cards stagger | Standard reveal |
| **Selector → Pond-care** | **Line draw:** a teal section-break line draws from the centre outward with the mini wheel turning (10.3 B) | Once, 0.9s |
| **Pond-care → Social proof** | **Poster band wipe:** the colour block wipes in from the left (clip-path), the display statement reveals line by line | Once, 0.7s |
| **Social proof → Knowledge** | **Standard reveal** | — |
| **Knowledge → Final CTA** | **Dark sheet rise** with the fish silhouette crossing the seam | Scrubbed 60vh |
| **Final CTA → Footer** | **Wave divider** pushes the footer up; fish keeps swimming | Scrubbed |

Inner pages use the **standard reveal** only, plus section-break marks; hero treatments are reserved for Home and About.

### 9.4 Reveal and scroll-linked effects (utility library)
| Effect | Spec |
|---|---|
| **Text line reveal** | Headings split into lines; each line in an `overflow: hidden` mask; line translateY 105% → 0, 700ms, stagger 70ms; trigger at 20% visibility, once |
| **Paragraph/body** | Fade + translateY 16px, 500ms, once |
| **Image reveal** | `clip-path: inset(0 0 100% 0)` → `inset(0)` with image scale 1.12 → 1, 800ms, once |
| **Card group** | Stagger 60–80ms, max 6 items per group (the rest appear together) |
| **Counters** | Count-up 1.2s once; `tabular-nums`; final value in the DOM from the start |
| **Parallax** | Max ±40px, two layers per section, desktop only, `transform` only |
| **Horizontal rails** | Scroll-snap native; no wheel-to-horizontal conversion |
| **Scroll progress bar** | 3px `--aqua-glow` line at the top, scales X by page progress |
| **Section dots (home, desktop)** | Fixed right-side dots with tooltips (Hero, Range, Showcase, Why Siri, …); click scrolls smoothly; current dot grows |
| **Sticky headers inside sections** | Eyebrow stays while content passes (optional) |
| **Magnetic buttons** | Primary CTAs shift ≤ 6px toward the cursor on desktop; off for touch and reduced motion |

### 9.5 Smooth scroll (optional, desktop only)
- Inertia smoothing (lerp ≈ 0.1) allowed on **pointer + wheel devices only**, never on touch, never under reduced motion or `Save-Data`.
- Must preserve: native scrollbar, keyboard scrolling (Space, PgDn, arrows, Home/End), anchor links, browser find, text selection, `scroll-margin-top` for anchors, back/forward scroll restoration.
- Provide a footer setting "Reduce animations" that disables smoothing and all scrubbed effects at once.

### 9.6 Timing tokens
- **Durations:** micro 120–200ms; component 250–400ms; section reveal 500–800ms; transitions up to 900ms (scrubbed ones follow scroll); signature one-offs up to 2.6s (once).
- **Easing:** standard `cubic-bezier(.2,0,0,1)` (`--ease-out`); in-out `cubic-bezier(.65,0,.35,1)`; entrance ease-out, exit ease-in; spring `cubic-bezier(.34,1.56,.64,1)` only for playful moments.
- **Stagger:** 60–100ms; max 6 items.
- **Offsets:** reveal triggers at 15–20% visibility; translate distances 16–24px (cards/text), 40–60px (hero/product).

### 9.7 Hard rules
1. Never hide essential content behind an animation; never delay a CTA by more than 800ms; never autoplay audio; never hijack scroll.
2. **Reduced motion** (`prefers-reduced-motion: reduce` or the footer toggle): replace scrubbed effects with their **final states**, remove parallax, stop looping animation, stop video autoplay (poster + play control), keep simple 150ms fades.
3. Any looping animation longer than 5s has a pause control or stops after 3 loops (WCAG 2.2.2).
4. Animate **only** `transform`, `opacity`, `clip-path` and `stroke-dashoffset`. No layout properties. Use `will-change` only during an active animation.
5. Use **one scroll observer/controller** for the whole page (one rAF loop or native scroll timelines); destroy/pause per section when off-screen.
6. Animation causing layout shift or dropping below 50fps is a bug; degrade to the simplest effect.
7. Pinned sections: desktop only for the showcase and the wheel band; mobile uses unpinned equivalents. The hero uses a shorter pin on mobile (7.4) and is the only pinned element there.

---

## 10. Logo animation system

The logo is the site's mascot and navigation metaphor: **the aerator wheel turns, the shrimp and fish come alive, quality follows.** All animation comes from `logo-mark-lines.svg` and the approved colour files (Section 2).

### 10.1 Layers (named SVG groups)
| Layer ID | Contents |
|---|---|
| `antenna` | The curl at top-left |
| `shrimp-body` | Outline |
| `wheel-rim` | Outer circle |
| `wheel-spokes` | Six spokes (rotating group; pivot at wheel centre) |
| `fill-orange` / `eye-orange` | Orange segment + dot |
| `fill-teal` / `eye-teal` | Teal segment + dot |
| `fish-body` | Fish outline |
| `fish-tail` | Forked tail (pivot at tail joint) |
| `wordmark` | "SIRI AQUATIC / SOLUTIONS Pvt. Ltd." |
| `rule-left`, `rule-right`, `tagline` | Teal rules and "Quality Comes First" |

Optimise paths; animated mark **≤ 12 KB**. Pivot points are set once in the SVG (`transform-origin` via `transform-box: fill-box`).

### 10.2 Intro sequence (≈2.6s, once per session, used in the arrival and optional hero logo moment)
| Time | Action | Easing |
|---|---|---|
| 0.00–0.90s | Strokes draw: antenna → shrimp → wheel rim → fish → tail | `cubic-bezier(.65,0,.35,1)` |
| 0.70–1.20s | Spokes scale from centre, settle with a 20° rotation | spring |
| 1.10–1.60s | Orange and teal blocks wipe in (clip-path from the eye outward) | ease-out |
| 1.50–1.80s | Eye dots pop (0 → 1.15 → 1) | spring |
| 1.70–2.40s | Wordmark reveals letter by letter; teal rules extend | ease-out |
| 2.00–2.60s | Headline/CTAs fade up (stagger 80ms) | ease-out |

**Idle loop (subtle):** spokes 1 turn per 28s; tail ±4° wag 3.6s; antenna ±3° sway 5s; 6–10 teal bubbles (opacity ≤ 0.5, recycled, paused off-screen); desktop parallax ≤ 8px.

### 10.3 Mid-page scroll animations
**A. "Wheel turns, water wakes" band (Home, after the Showcase)**
- Pinned `--deep` section, 200–250vh, mark centred (~60vh tall). Progress drives: strokes draw (0–35%), spokes rotate one full turn (0–100%), orange fill (35–55%), teal fill (50–70%), eyes (70–75%), tail wag (75–100%), headline words reveal (60–100%). Bubbles rise faster as the wheel speeds up. Mobile: unpinned, animates once at 40% visibility in 1.8s.

**B. Section-break mini-marks** — 120–160px divider: teal line with the small wheel at the centre; on enter the wheel turns 360° and the line draws outward (0.9s, once).

**C. Product-detail reading-progress wheel** — wheel beside the sticky sub-nav rotates with page progress.

**D. About timeline** — the wheel rolls down the vertical line, "pinging" a ring at each milestone.

**E. Final CTA band** — full logo with all fills visible; the fish swims a gentle S-curve across and returns; CTA glow in teal; 3s, once.

### 10.4 Functional micro-animations
| Where | Animation |
|---|---|
| Preloader | Wheel draws and spins; 250ms cross-fade out; ≤ 1.2s |
| Page transitions (inner pages) | 250ms fade; optional teal wipe with the wheel (350ms), off for reduced motion |
| Button loading | 16px mini-wheel spinner (width unchanged) |
| Form success | Wheel completes a turn, morphs into a check mark |
| Footer wave | Fish moves slowly; pauses off-screen |
| Header logo hover | 60° wheel step + tail flick |
| 404 | Fish detaches and drifts off |
| Empty states | Wheel turns slowly, "Nothing here yet." |
| Scroll-to-top | Small wheel button with an arrow in the centre |

### 10.5 Implementation rules
- Inline SVG with CSS/Web Animations; scroll-linked via native scroll timelines where supported, otherwise one controller. No heavy video or large Lottie for the logo.
- **Budgets:** logo SVG ≤ 12 KB; **total animation + scroll JavaScript ≤ 70 KB gzipped** (raised from 40 KB in v1.1 to cover the hero scrub, showcase and transitions); 60fps on mid-range Android; if frame drops are detected, degrade to the static mark.
- **Static fallback** (full-colour SVG) for no-JS, reduced motion, low-power mode and slow connections.

---

## 11. Shared UI component rules

| Component | Rule |
|---|---|
| **Primary button (light pages)** | Teal `#01B8C8`, ink text, 48px high (44px min mobile), 999px radius, 16px/600. Hover: darken 6% + lift 2px. Focus: 3px `--teal-ink` ring, 2px offset. Loading: inline wheel spinner, same width |
| **Primary button (dark/glass)** | `--aqua-glow` fill, ink text, 56px high in the showcase; focus ring 3px white with 2px `--abyss` offset |
| **Secondary button** | White with 1.5px ink border; hover fills ink. On dark: transparent with 1.5px white border; hover fills white with ink text |
| **Header Quote pill** | White pill with ink text over the video hero; teal pill on light pages |
| **Tertiary/text link** | `--teal-ink` (`--aqua-soft` on dark); underline on hover; arrow nudges 4px |
| **Orange button** | Max once per page, ink text |
| **Chips/tags** | 28–32px, mist (light) or glass (dark), 12–13px text, 999px radius; availability chips icon + text |
| **Cards (light)** | 12px radius, 1px `--line`, hover lift 4px + shadow; whole card clickable but one primary link in the accessible name |
| **Glass cards (dark)** | 24px radius, `--glass`, blur 20px, 1px `--glass-line`, 24–28px padding; text ≥ 70% white; fallback solid `rgba(11,46,54,.85)` where `backdrop-filter` is unsupported |
| **Stat tile** | 16px radius nested glass tile; icon, tiny label, 20–22px value; tabular numbers |
| **Forms** | Visible labels above fields, 48px inputs, helper text, errors in `--danger` with icon and text and `aria-describedby`; never reset on error |
| **Tables** | Sticky header, zebra, tabular numbers, mobile stacked; inner scroll container if needed |
| **Accordion (FAQ)** | Button heading, `aria-expanded`, 200ms height animation |
| **Tabs** | Arrow-key navigation; sliding indicator |
| **Modals/drawers** | Focus trap, Esc closes, focus returns, scroll lock, backdrop blur ≤ 8px |
| **Toasts/banners** | Text + icon, `role="status"`/`alert`, auto-dismiss only for non-critical |
| **Skeletons** | Match the final layout; shimmer 1.4s linear, off under reduced motion |
| **Badges / starburst stickers** | "New", "Best seller", "Made to order" — only when true and current; max one per card |
| **Headings** | Display font, uppercase via CSS, line-height 0.9–0.95, max 8 words, approved colour pairings |
| **Body text** | Poppins 400, 16–18px, line-height 1.65, max 68ch |
| **Poster band** | Full-width colour block, one display statement (2–3 lines), one supporting sentence, one CTA; max one per page |
| **Hero mask** | Section 7 only; not reused as decoration elsewhere (About may use a shorter variant) |
| **Product showcase** | Section 8 only; same data as product pages |
| **Product rail ("On the line")** | `/products` and category pages only; scroll-snap list, quick view on tap, arrows + progress + keyboard |
| **Doodle stickers** | Decorative SVG, `aria-hidden`, ≤ 6 per screen, never over text or buttons, rotated ±12°, float ≤ 6px (off under reduced motion). **Not shown over the hero mask or the showcase glass cards** |
| **Breadcrumbs** | Chevron separators; last item not a link |

---

## 12. Social proof and trust system
1. **Home:** trust strip, case-study cards, testimonial carousel, partner logos.
2. **Product pages:** certifications, "Installed at [N] farms" (only if verifiable), test evidence, FAQs, genuine moderated reviews.
3. **Quote/contact:** response-time promise, team photo, direct phone/WhatsApp.
4. **About/Quality:** facility gallery, certificates, process stepper.
5. **Checkout (Phase 2):** secure payment note, returns/warranty links.

Rules: consented names and photos only; dated results; no stock "customers"; no fake counts; no copied Suyog claims; moderate reviews and never delete honest negatives without reason.

---

## 13. Responsive rules

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | 360–639px | Single column, sticky bottom bar (Call · WhatsApp · Quote), 16px padding, thumb-zone CTAs; hero zoom pin 180vh; showcase as swipeable tabs |
| Tablet | 640–1023px | 2-column grids, drawer filters; showcase two-row layout, unpinned |
| Laptop | 1024–1439px | Full nav, 3–4-column grids, showcase 3-column stage |
| Desktop | 1440px+ | Container 1280px (showcase up to 1440px), larger hero mask |

- **Mobile-first**; most farmers/dealers use phones on average networks.
- Tap targets ≥ 44×44px with ≥ 8px spacing; landscape phones and 200% zoom without horizontal scroll; `rem`-based type; no fixed-height text containers.
- Use `svh/dvh` units for pinned sections so mobile browser bars do not cause jumps.

---

## 14. Performance rules

- **Targets (4G mid-range phone):** LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1, **initial home page weight ≤ 1.5 MB excluding the streamed hero video**. The hero video loads after the poster (LCP) paints.
- **Hero video:** budgets in 7.2; preload the poster only; start the video after `load`/idle; mobile gets the 720p file; `Save-Data` or slow connection → poster only.
- **Images:** AVIF/WebP with fallback, responsive `srcset`, explicit width/height, hero poster ≤ 120 KB, showcase product ≤ 140 KB, cards ≤ 60 KB. Do **not** lazy-load the poster/LCP image.
- **Lazy loading:** everything below the fold (images, video facades, maps, rails); showcase assets load when within 1 viewport.
- **Video elsewhere:** facades (click-to-load); no autoplay with sound; compressed self-hosted video with captions.
- **Fonts:** display (one weight) + Poppins (400, 500, 600; 300 only for the showcase). Subset to Latin (+ Devanagari only if Hindi ships), self-host WOFF2, `font-display: swap`, preload the display font and Poppins 400, size-adjusted fallback. **Font budget ≤ 130 KB.** Wait for the display font before measuring the mask's zoom anchor.
- **Third-party:** maps, chat, analytics load only after consent/idle.
- **Caching/CDN:** long-cache static assets; CDN image resizing; video served with range requests.
- **Backdrop blur:** limit to 3 glass cards in view at once; disable blur on low-power devices and use the solid fallback.
- **Low-bandwidth mode:** `Save-Data` or slow connection → static logo, poster instead of video, no bubbles, parallax or smoothing.

---

## 15. Accessibility rules (WCAG 2.2 AA minimum)

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one H1 per page, logical heading order (the visually hidden H1 in the mask hero counts).
- All interactive elements are keyboard-operable with visible focus; pinned sections never trap keyboard focus; "Skip intro" and "Skip showcase" links exist.
- Heading colour pairs only from 1.3.4; text contrast ≥ 4.5:1 (3:1 large text/UI); small text on glass ≥ 70% white after verifying against the darkest and lightest backdrop; never raw `--teal`/`--orange` as small text on white.
- Don't rely on colour alone; forms with persistent labels, programmatic errors, `autocomplete`.
- Images: meaningful alt; decorative `alt=""`. The animated logo: `role="img"`, name "Siri Aquatic Solutions logo"; bubbles/stickers/wave `aria-hidden`.
- **Video:** background video has no audio, a pause/play control, and the same information is available as text; captions/transcripts for informational videos; no flashing > 3 times per second; **motion that can cause discomfort (large zooms) is disabled by reduced motion**.
- Provide an accessibility statement and a feedback contact.

---

## 16. SEO and content governance

- Unique title and meta description per page; clean URLs; breadcrumbs; canonical tags; XML sitemap; `robots.txt`; Open Graph/Twitter cards with the logo and product images.
- Structured data (Organization incl. logo, Product, BreadcrumbList, FAQPage, VideoObject) **only where accurate**.
- Text-first specs and pond-care details in HTML. The hero and showcase text exist in the DOM (not baked into video/images).
- Local SEO: Google Business profile consistent with the site name, address and phone.
- **Approval workflow:** Draft → Technical review → Sales/price review → Compliance review (pond-care claims) → Publish; revision history for specs, prices and documents.
- **Claims register:** a spreadsheet listing every claim (including showcase stats, feature chips and taglines), its evidence, owner and review date.

---

## 17. Forms and CRM-ready data

- Every form: clear purpose, minimal fields, privacy note, consent, invisible anti-spam, reference ID on success, auto-confirmation to the user.
- WhatsApp is an **alternate path**, never a replacement.
- Phone fields accept country codes with friendly validation. Uploads: JPG/PNG/PDF, max 5 MB, progress and remove option.
- Routing tags per form (Quote, Support, Dealer, General).

---

## 18. Content the Siri team must supply (checklist)

- [ ] Legal company name, CIN/GST details, registered and branch addresses, phones, emails, WhatsApp number, business hours
- [ ] **Logo image (PNG at least 2000px wide on transparent background; vector files if they exist)** and brand guidelines
- [ ] **Hero video footage (or approval of licensed stock)** and permission/consent for any people shown
- [ ] Product list with exact model names, SKUs and categories; **which 3–4 products appear in the showcase**
- [ ] **Transparent-background product cut-outs (+ 4 supporting photos each)**
- [ ] Approved specifications for the four tiles (power, weight, supply, warranty) and the spec pairs (type, coverage, supply, mode)
- [ ] One **verified headline stat** per showcase product with test method/standard (or confirm "none")
- [ ] Approved manuals, datasheets, warranties
- [ ] Probiotic/pond-care labels, composition, dosage, warnings, registrations
- [ ] Verified stats (years, farms, states) and certifications with proof
- [ ] Case studies and testimonials with written consent
- [ ] Team, facility and installation photos; videos
- [ ] Pricing policy; shipping zones, taxes, returns and warranty policies (Phase 2)
- [ ] Social links, Google Business profile, review links
- [ ] Languages at launch (English + [Hindi/Telugu/others])

---

## 19. UI rules at a glance (the one-page rulebook)

**Always**
1. Lead every page with a clear H1, one value line and one primary action.
2. Ink text on teal/orange/aqua fills; `--teal-ink`/`--orange-ink` for small coloured text on light; white ≥ 70% on glass.
3. Icons: monoline, rounded, SVG, matching the logo; showcase tile icons filled duotone.
4. Show model numbers, units and documents wherever specs appear.
5. Offer **Quote · WhatsApp · Call** at every decision point.
6. Lazy-load below-the-fold assets; preload the poster; stream the hero video after LCP.
7. Use the logo **only** from the approved asset set (Section 2); respect clear space, minimum size and background variants.
8. Hero = **video + text mask zoom**; its zoom anchor is a solid letter stem; final scale is computed at runtime.
9. Home product experience = **Product Showcase** (3-column glass stage); the rail is for listings only.
10. Set headings in the display font (uppercase, tight, ≤ 8 words) and everything else in Poppins.
11. Make every scroll effect reversible, scroll-linked and finishable; every pinned effect has a keyboard/skip alternative.
12. Keep playfulness in marketing sections; keep specs, forms and checkout plain.
13. Show honest availability; never fake urgency.
14. Visible focus, labels and error messages on every interactive element.
15. Test on a real mid-range Android phone on 4G.

**Never**
1. Emoji as icons.
2. Teal/orange text on white at small sizes; cream/white headings on teal or orange.
3. Unverified claims, copied Suyog/air-purifier claims or numbers, fake testimonials, or a placeholder stat on the live site.
4. Autoplay video with sound, or any scroll hijacking.
5. Specifications hidden in images.
6. Animation that delays content, CTAs or forms.
7. A zoom anchor inside a letter counter; a mask word the page cannot read as text.
8. Redrawn, recoloured, stretched, glowing or shadowed logos; the colour logo on dark video without a scrim.
9. More than two font families (display + Poppins), the display font for paragraphs, buttons, labels or text < 20px, or more than one orange button per screen.
10. A success state before the server confirms a payment or form.
11. More form fields than needed.
12. Shipping without reduced-motion, poster-only video and static-logo fallbacks.

---

## 20. Phased delivery and acceptance checklist

### Phase 0 — Foundations (1–2 weeks)
- [ ] Logo traced to layered SVG; full asset set (2.1) exported and verified at 400% overlay
- [ ] **Hero video shot/selected and encoded; poster approved**
- [ ] **Mask word, display font and zoom prototype approved on mobile and desktop**
- [ ] **Showcase layout prototype approved with real product cut-outs**
- [ ] Palette, type, glass and component library signed off
- [ ] Content checklist (Section 18) completed or scheduled
- [ ] Sitemap and wireframes approved

### Phase 1 — Core site (4–6 weeks)
- [ ] Home: arrival, hero mask zoom, showcase, wheel band, all section transitions (9.3)
- [ ] Products, categories, product details, probiotics HTML pages and PDFs
- [ ] About, Quality, Contact, Request a Quote, Videos, Knowledge (basic), Legal
- [ ] WhatsApp cluster, search, footer, cookie banner
- [ ] Lighthouse ≥ 90 Performance (mobile), ≥ 95 Accessibility, ≥ 95 SEO

### Phase 2 — Commerce (as approved)
- [ ] Cart, checkout, confirmation, policies live and reviewed; payment states verified server-side; test orders passed

### Phase 3 — Support and tools
- [ ] Service request, spare-parts finder, warranty, dealer enquiry
- [ ] Aerator selector, electricity calculator, compare
- [ ] Case studies, language options

### Final acceptance (before launch)
- [ ] Hero: mask zoom scrubs forward and back; deep links skip to the revealed state; poster-only, reduced-motion and no-JS fallbacks pass
- [ ] Hero zoom ≥ 50fps and no CLS on a mid-range Android; anchor correct after font load and on rotation/resize
- [ ] Showcase works with scroll, keyboard, dots, thumbnails and swipe; all values come from the product record; empty fields hide cleanly
- [ ] Every scroll transition (9.3) passes the reduced-motion check
- [ ] Logo audit: correct variant on every background, clear space and minimum sizes respected, no raster logo shipped, favicon/OG/PDF versions verified
- [ ] Keyboard-only run-through of all primary journeys; screen-reader spot check (home, product, quote form)
- [ ] Cross-browser: Chrome, Safari, Firefox, Android and iOS (check `backdrop-filter`, video autoplay, `dvh` units)
- [ ] Every claim in the claims register has evidence and an approver
- [ ] All placeholders `[ ]` removed; all contact details verified
- [ ] 404, error, empty and loading states designed and tested
- [ ] Analytics baseline: quote completion, WhatsApp clicks, product views, showcase interactions, search success

---

## 21. Open questions for the Siri team

1. Which products does Siri actually make, trade or distribute, and which are quote-only?
2. Which 3–4 products headline the showcase, and what verified stat (with test standard) can each show?
3. Online selling at launch (Phase 2) or catalogue + quote?
4. Do you have the original vector logo, or should we trace it from the supplied image? Who approves the traced result?
5. Hero video: own footage, or licensed stock? Any locations or people needing consent?
6. Mask word: "SIRI AQUATIC" (default) or "QUALITY COMES FIRST"? Which letter stem should anchor the zoom (default: the "I" in SIRI)?
7. Languages required at launch?
8. Who responds to WhatsApp and quote requests, and within what time?
9. Certifications, test reports and patents that can be shown publicly?
10. Is the probiotic range under Siri's own brand, and which registrations apply?
11. Which exact display font should be licensed? (Confirm or approve an option in 1.3.1.)
12. Is Poppins acceptable for body, or do you want a rounded-terminal face (Nunito / Varela Round)?
13. How playful overall: lightly (headings and stickers) or strongly (rails, tilted buttons, mascot everywhere)?
14. Should smooth (inertia) scrolling be enabled on desktop, or keep native scrolling only?

---

## 22. Asset hand-off and instructions for the coding assistant (IDE)

### 22.1 Where to put things
```
/public
  /brand
    logo-original.png            ← drop the supplied logo here (archive; not shipped)
    logo-full-color.svg          ← produced from the original (2.1)
    logo-full-white.svg
    logo-horizontal-color.svg
    logo-horizontal-white.svg
    logo-mark-color.svg
    logo-mark-white.svg
    logo-mark-lines.svg          ← layered line version for animation (10.1)
    logo-ink.svg
    favicon.svg  favicon-32.png  apple-touch-icon-180.png  icon-192.png  icon-512.png
    og-logo-1200x630.png
  /video
    hero-1080.mp4  hero-720.mp4  hero.webm  hero-poster.avif  hero-poster.webp
  /products
    [slug]/cutout.avif  cutout.webp  thumb-1..4.avif  datasheet.pdf
  /fonts
    [display-font].woff2  poppins-400/500/600.woff2  (poppins-300.woff2 if used)
```

### 22.2 Build order for the assistant
1. **Read this whole document first.** Treat Sections 0, 2, 7, 8, 9 and 19 as binding.
2. **Logo:** look in `/public/brand/` for the supplied image. Produce the asset set in 2.1 (trace to SVG, sample the brand colours, verify against the original). Wire the header, footer, favicon and OG image from those files only.
3. **Design tokens:** add the colour, type, radius, glass, easing and duration tokens from Sections 1 and 9.6.
4. **Hero (Section 7):** poster first (LCP), then the video, the SVG text mask, the runtime-computed zoom, the scroll choreography and all fallbacks.
5. **Product Showcase (Section 8):** data-driven from the product records; desktop pinned, mobile tabs.
6. **Scroll system (Section 9):** one controller, arrival sequence, the transitions table, the reveal library, the progress bar, section dots, reduced-motion toggle.
7. **Remaining pages** per Section 6, then the logo band animations (Section 10).
8. **Verify** against Section 20 (acceptance) before calling anything done.

### 22.3 Do not
- Do not invent product data, stats or claims; use `[ ]` placeholders flagged in the UI during development and block publishing while any remain.
- Do not recreate the logo by hand; do not use a raster logo in the live site.
- Do not add libraries beyond what the budgets in 10.5 and Section 14 allow; if a library is used for scrolling or pinning, it must still satisfy Section 9.7.

---

## 23. Changelog

| Version | Change |
|---|---|
| 1.0 | First full plan and UI rules from the Suyog guide, the reference site and the logo |
| 1.1 | Display + Poppins typography; heading colour contrast table; IGIN "Drops" review; "On the line" rail, stickers and poster-band components; font budget; open questions 8–10 |
| 1.2 | **Hero rebuilt as background video + text-mask zoom reveal (Section 7)**; **Product Showcase modelled on the air-purifier screenshot (Section 8)**; new tokens (`--abyss`, `--deep-2`, `--aqua-soft`, glass tokens) and glass component rules; **scroll system rewritten with arrival sequence, section-to-section transition table, reveal library, optional smooth scroll (Section 9)**; **logo usage spec (Section 2)** with asset set, clear space, variants, placement map and video-overlay rules; header states over video; "On the line" rail moved to listings only; animation JS budget raised 40 → 70 KB; font budget 120 → 130 KB (+ optional Poppins 300); performance rules for video; acceptance checklist and open questions extended; asset hand-off and assistant build order (Section 22) |

---

*End of document.*
