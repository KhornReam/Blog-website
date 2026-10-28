/**
 * Generates every illustration used by the site into public/images/.
 *
 * Run it any time with:  node scripts/generate-images.mjs
 * Each image is a self-contained SVG (no external requests), built from a
 * small set of layered landscape and food scene renderers sharing the brand
 * palette defined in app/assets/css/main.css.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const WIDTH = 1600
const HEIGHT = 1000

// Brand palette -------------------------------------------------------------
const C = {
  forest: '#234D3C',
  forestDeep: '#17382C',
  cream: '#F8F6F0',
  beige: '#EAE5D9',
  charcoal: '#252923',
  sage: '#82947C',
}

// Small deterministic RNG so images are stable between runs.
function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

function svg(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" width="${WIDTH}" height="${HEIGHT}" role="img">\n${body}\n</svg>\n`
}

function skyGradient(id, top, bottom) {
  return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/>
  </linearGradient></defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#${id})"/>`
}

/** Layered silhouette across the horizon; lower index = further away. */
function ridge(baseY, amp, color, seed, steps = 16) {
  const rand = rng(seed)
  const points = []
  for (let i = 0; i <= steps; i += 1) {
    const x = (WIDTH / steps) * i
    const y = baseY + (rand() - 0.5) * amp * 2
    points.push(`${Math.round(x)},${Math.round(y)}`)
  }
  return `<path d="M0,${HEIGHT} L${points.join(' L')} L${WIDTH},${HEIGHT} Z" fill="${color}"/>`
}

function sun(cx, cy, r, color, opacity = 1) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" opacity="${opacity}"/>`
}

function mist(lines, color = '#FFFFFF') {
  return lines
    .map(
      ([cy, rx, ry, opacity]) =>
        `<ellipse cx="${WIDTH / 2}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${color}" opacity="${opacity}"/>`,
    )
    .join('\n')
}

/** Small conifer shapes scattered over the nearest ridge. */
function treeline(y, color, seed, count = 26) {
  const rand = rng(seed)
  let out = ''
  for (let i = 0; i < count; i += 1) {
    const x = rand() * WIDTH
    const h = 40 + rand() * 70
    const w = h * 0.45
    const base = y + 24 + rand() * 30
    out += `<path d="M${x.toFixed(0)},${(base - h).toFixed(0)} L${(x + w / 2).toFixed(0)},${base.toFixed(0)} L${(x - w / 2).toFixed(0)},${base.toFixed(0)} Z" fill="${color}"/>`
    out += `<rect x="${(x - 3).toFixed(0)}" y="${base.toFixed(0)}" width="6" height="14" fill="${color}"/>`
  }
  return out
}

// ---------------------------------------------------------------------------
// Scene renderers
// ---------------------------------------------------------------------------

/** Layered mountains with a low sun and drifting mist bands. */
function mountainScene({ sky, sunPos, ridges, mistLines, seed, stars = false }) {
  let body = skyGradient('sky', sky[0], sky[1])
  if (stars) {
    const rand = rng(seed + 7)
    for (let i = 0; i < 40; i += 1) {
      body += `<circle cx="${Math.round(rand() * WIDTH)}" cy="${Math.round(rand() * 420)}" r="${(1 + rand() * 2).toFixed(1)}" fill="#FFFFFF" opacity="0.7"/>`
    }
  }
  if (sunPos) body += sun(sunPos[0], sunPos[1], sunPos[2], sunPos[3], sunPos[4] ?? 0.9)
  ridges.forEach((r, index) => {
    body += ridge(r.y, r.amp, r.color, seed + index * 13, r.steps ?? 16)
  })
  if (mistLines) body += mist(mistLines)
  return svg(body)
}

/** Valley with a winding river ribbon. */
function riverScene({ sky, seed, palette, river }) {
  let body = skyGradient('sky', sky[0], sky[1])
  body += sun(1260, 210, 90, '#F5E7CF', 0.85)
  body += ridge(430, 60, palette[0], seed, 12)
  body += ridge(540, 55, palette[1], seed + 31, 14)
  body += mist([[520, 760, 46, 0.35]])
  body += ridge(660, 45, palette[2], seed + 61, 16)
  // River: a tapering ribbon from the horizon to the foreground.
  body += `<path d="M760,640 C820,720 640,780 700,860 C740,920 980,940 1180,1000 L360,1000 C470,930 640,900 660,840 C680,780 720,720 760,640 Z" fill="${river}" opacity="0.95"/>`
  body += `<path d="M770,650 C820,730 660,790 720,860" stroke="#FFFFFF" stroke-width="6" fill="none" opacity="0.35"/>`
  body += ridge(800, 40, palette[3], seed + 97, 16)
  body += treeline(830, C.forestDeep, seed + 131, 20)
  return svg(body)
}

/** Dense triangular forest with a light shaft through the canopy. */
function forestScene({ sky, seed, palette }) {
  let body = skyGradient('sky', sky[0], sky[1])
  body += `<path d="M520,0 L980,0 L1280,1000 L240,1000 Z" fill="#FFFFFF" opacity="0.14"/>`
  body += ridge(470, 55, palette[0], seed, 12)
  body += ridge(600, 50, palette[1], seed + 17, 14)
  body += ridge(740, 45, palette[2], seed + 29, 16)
  body += treeline(740, palette[3], seed + 43, 34)
  body += ridge(880, 35, palette[3], seed + 59, 18)
  body += treeline(900, C.forestDeep, seed + 71, 16)
  return svg(body)
}

/** Rolling fields with a road curving to the horizon. */
function countrysideScene({ sky, seed, palette, road = true }) {
  let body = skyGradient('sky', sky[0], sky[1])
  body += sun(320, 230, 95, '#F6EBD7', 0.9)
  body += ridge(440, 45, palette[0], seed, 10)
  body += ridge(560, 40, palette[1], seed + 23, 12)
  body += ridge(700, 35, palette[2], seed + 37, 12)
  // Field bands.
  body += `<path d="M0,760 C400,730 1200,790 1600,750 L1600,1000 L0,1000 Z" fill="${palette[3]}"/>`
  body += `<path d="M0,850 C500,820 1100,880 1600,840 L1600,1000 L0,1000 Z" fill="${palette[4]}"/>`
  if (road) {
    body += `<path d="M740,720 C700,800 560,860 420,1000 L840,1000 C820,880 800,800 790,720 Z" fill="${C.beige}" opacity="0.95"/>`
    body += `<path d="M770,730 C750,810 660,880 630,1000" stroke="${C.cream}" stroke-width="8" stroke-dasharray="34 30" fill="none"/>`
  }
  return svg(body)
}

/** Sea, headland and a low sun over the Gulf. */
function coastScene({ sky, seed, palette }) {
  let body = skyGradient('sky', sky[0], sky[1])
  body += sun(1180, 260, 105, '#F5E3C6', 0.95)
  body += ridge(470, 50, palette[0], seed, 10)
  body += `<rect y="540" width="${WIDTH}" height="${HEIGHT - 540}" fill="${palette[1]}"/>`
  body += `<path d="M0,540 C260,470 520,500 700,560 L640,640 L0,640 Z" fill="${palette[2]}"/>`
  body += `<rect y="640" width="${WIDTH}" height="${HEIGHT - 640}" fill="${palette[3]}"/>`
  for (let i = 0; i < 7; i += 1) {
    const y = 690 + i * 42
    body += `<path d="M${120 + i * 40},${y} q 160,-18 320,0" stroke="#FFFFFF" stroke-width="5" fill="none" opacity="${0.5 - i * 0.05}"/>`
    body += `<path d="M${900 + i * 30},${y + 20} q 160,-18 320,0" stroke="#FFFFFF" stroke-width="5" fill="none" opacity="${0.4 - i * 0.04}"/>`
  }
  body += `<path d="M0,960 C400,930 1200,990 1600,950 L1600,1000 L0,1000 Z" fill="${palette[4]}"/>`
  return svg(body)
}

/** Cliff walls with a waterfall dropping into a pool. */
function waterfallScene({ sky, seed }) {
  let body = skyGradient('sky', sky[0], sky[1])
  body += ridge(360, 45, C.sage, seed, 12)
  body += `<path d="M0,240 L470,240 L560,1000 L0,1000 Z" fill="${C.forest}"/>`
  body += `<path d="M1600,200 L1140,200 L1050,1000 L1600,1000 Z" fill="${C.forestDeep}"/>`
  body += `<path d="M600,300 L1000,300 L1060,1000 L540,1000 Z" fill="${C.forest}"/>`
  // Water column.
  body += `<path d="M700,300 L900,300 L960,820 L640,820 Z" fill="#E9F1EE"/>`
  body += `<path d="M740,320 L770,800 M820,320 L840,810 M870,330 L900,800" stroke="#FFFFFF" stroke-width="14" opacity="0.8" fill="none"/>`
  body += `<ellipse cx="800" cy="850" rx="470" ry="120" fill="#BFD6CE"/>`
  body += `<ellipse cx="800" cy="840" rx="300" ry="70" fill="#D9E7E1"/>`
  body += mist([[830, 380, 60, 0.75], [770, 240, 40, 0.55]])
  body += treeline(770, C.forestDeep, seed + 5, 14)
  return svg(body)
}

/** Riverbank camp: mountains, tent, fire, dusk sky. */
function campScene({ sky, seed }) {
  let body = mountainScene({
    sky,
    sunPos: null,
    ridges: [
      { y: 470, amp: 70, color: '#3E5B4C', seed },
      { y: 620, amp: 55, color: C.forest, steps: 14 },
      { y: 760, amp: 40, color: C.forestDeep, steps: 16 },
    ],
    mistLines: [[600, 700, 40, 0.28]],
    seed,
    stars: true,
  }).replace(/^<svg[^>]*>|<\/svg>$/g, '')
  let extra = `<rect y="860" width="${WIDTH}" height="140" fill="${C.charcoal}"/>`
  // Tent.
  extra += `<path d="M560,880 L700,650 L840,880 Z" fill="${C.beige}"/>`
  extra += `<path d="M700,650 L700,880" stroke="${C.charcoal}" stroke-width="6" opacity="0.35"/>`
  extra += `<path d="M660,880 L700,760 L740,880 Z" fill="${C.charcoal}" opacity="0.75"/>`
  // Campfire.
  extra += `<path d="M1120,880 q40,-90 80,0 Z" fill="#E9A24B"/>`
  extra += `<path d="M1140,880 q22,-52 42,0 Z" fill="#F2D08A"/>`
  extra += `<path d="M1080,890 L1240,870 M1090,868 L1230,896" stroke="${C.charcoal}" stroke-width="12" stroke-linecap="round"/>`
  return svg(body + extra)
}

/** Path between tall trees (forest trail). */
function trailScene({ sky, seed }) {
  let body = skyGradient('sky', sky[0], sky[1])
  body += `<path d="M640,0 L960,0 L1240,1000 L360,1000 Z" fill="#F6F3E6" opacity="0.35"/>`
  body += ridge(520, 45, paletteFor(seed)[0], seed, 12)
  // Trunks.
  const rand = rng(seed + 3)
  for (let i = 0; i < 16; i += 1) {
    const x = rand() * WIDTH
    const w = 26 + rand() * 44
    const y = 180 + rand() * 260
    body += `<rect x="${x.toFixed(0)}" y="${y.toFixed(0)}" width="${w.toFixed(0)}" height="${(HEIGHT - y).toFixed(0)}" fill="${i % 2 ? C.forest : C.forestDeep}" opacity="0.9"/>`
  }
  body += `<path d="M700,540 C660,700 540,820 430,1000 L1180,1000 C1040,830 880,700 840,540 Z" fill="${C.beige}"/>`
  body += ridge(920, 30, '#5E7C69', seed + 8, 16)
  return svg(body)
}

/** Generic hill palette used by trail scenes. */
function paletteFor(seed) {
  return seed % 2 ? ['#9DB3A4', '#6E8A78'] : ['#AFC3B4', '#7E9A87']
}

/** Back pack on a rock with hills behind. */
function packScene({ sky, seed }) {
  let body = mountainScene({
    sky,
    sunPos: [400, 240, 90, '#F5E7CF', 0.85],
    ridges: [
      { y: 460, amp: 70, color: '#8FA79A', seed },
      { y: 590, amp: 55, color: '#587566', steps: 14 },
      { y: 720, amp: 40, color: C.forest, steps: 16 },
    ],
    mistLines: [[580, 720, 44, 0.3]],
    seed,
  }).replace(/^<svg[^>]*>|<\/svg>$/g, '')
  let extra = `<path d="M0,840 C400,800 1200,880 1600,830 L1600,1000 L0,1000 Z" fill="${C.forestDeep}"/>`
  extra += `<ellipse cx="800" cy="930" rx="330" ry="60" fill="${C.charcoal}" opacity="0.45"/>`
  // Backpack.
  extra += `<rect x="660" y="640" width="280" height="260" rx="70" fill="${C.beige}"/>`
  extra += `<rect x="700" y="780" width="200" height="110" rx="34" fill="${C.sage}"/>`
  extra += `<path d="M700,700 h200" stroke="${C.charcoal}" stroke-width="10" opacity="0.35"/>`
  extra += `<path d="M700,650 q-90,140 -20,240 M900,650 q90,140 20,240" stroke="${C.charcoal}" stroke-width="16" fill="none" stroke-linecap="round" opacity="0.55"/>`
  extra += `<rect x="740" y="600" width="120" height="60" rx="24" fill="${C.forest}"/>`
  return svg(body + extra)
}

// --- Food scenes -----------------------------------------------------------

function foodBase() {
  return `${skyGradient('bg', C.cream, C.beige)}
  <rect y="620" width="${WIDTH}" height="380" fill="${C.beige}"/>
  <rect y="620" width="${WIDTH}" height="14" fill="${C.sage}" opacity="0.35"/>`
}

function bowl(x, y, scale, fill, contents) {
  return `<g transform="translate(${x},${y}) scale(${scale})">
    <path d="M-260,0 a260,150 0 0 0 520,0 Z" fill="${C.charcoal}"/>
    <path d="M-260,0 a260,150 0 0 0 520,0 Z" fill="${fill}" opacity="0.25"/>
    <ellipse cx="0" cy="0" rx="260" ry="70" fill="${fill}"/>
    ${contents}
    <ellipse cx="0" cy="0" rx="260" ry="70" fill="none" stroke="${C.charcoal}" stroke-width="10"/>
  </g>`
}

function steam(x, y) {
  return `<path d="M${x},${y} q-40,-60 0,-110 q40,-50 0,-100" stroke="#FFFFFF" stroke-width="14" fill="none" opacity="0.8" stroke-linecap="round"/>
  <path d="M${x + 70},${y + 20} q-40,-60 0,-110 q40,-50 0,-100" stroke="#FFFFFF" stroke-width="12" fill="none" opacity="0.6" stroke-linecap="round"/>`
}

function leafParcel(x, y, scale, color) {
  return `<g transform="translate(${x},${y}) scale(${scale}) rotate(-8)">
    <path d="M-160,-90 h320 v180 h-320 Z" rx="20" fill="${color}"/>
    <path d="M-160,-90 q160,-70 320,0" fill="${color}"/>
    <path d="M-160,90 q160,70 320,0" fill="${color}"/>
    <path d="M-160,0 h320" stroke="${C.forestDeep}" stroke-width="8" opacity="0.6"/>
    <path d="M0,-90 v180" stroke="${C.forestDeep}" stroke-width="8" opacity="0.5"/>
  </g>`
}

function garnish(x, y, color, r = 16) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`
}

const foodScenes = {
  amok: () =>
    svg(
      foodBase() +
        `<path d="M420,340 h760 v420 h-760 Z" fill="${C.forest}" opacity="0.12"/>` +
        bowl(800, 620, 1.25, '#E6B45A', `
          <ellipse cx="0" cy="-10" rx="215" ry="52" fill="#EFCE8C"/>
          <path d="M-150,-30 q70,-70 150,-10 q60,40 130,-20" stroke="${C.forest}" stroke-width="16" fill="none" opacity="0.8"/>
          ${garnish(-70, -34, '#2E6B4F', 18)}${garnish(40, -20, '#2E6B4F', 14)}${garnish(110, -44, '#D96C3F', 12)}
        `) +
        leafParcel(320, 380, 0.7, '#3E7A5B') +
        steam(760, 340),
    ),
  noodles: () =>
    svg(
      foodBase() +
        bowl(800, 610, 1.3, '#7FA24B', `
          <ellipse cx="0" cy="-6" rx="220" ry="54" fill="#DCE7BE"/>
          <path d="M-190,-14 q60,-40 120,0 q60,40 120,-10 q60,-40 130,4" stroke="#F3EED6" stroke-width="18" fill="none"/>
          <path d="M-170,-30 q70,-30 140,0" stroke="#A8C46B" stroke-width="14" fill="none"/>
          ${garnish(-90, -40, '#2E6B4F', 16)}${garnish(30, -44, '#2E6B4F', 14)}${garnish(120, -30, '#C64B3C', 12)}
          ${garnish(-30, -16, '#E9E3C7', 14)}
        `) +
        `<path d="M1120,300 l240,-90 M1160,330 l240,-70" stroke="${C.charcoal}" stroke-width="16" stroke-linecap="round" opacity="0.75"/>` +
        steam(750, 330),
    ),
  grill: () =>
    svg(
      foodBase() +
        `<ellipse cx="800" cy="820" rx="430" ry="90" fill="${C.charcoal}" opacity="0.25"/>` +
        `<rect x="440" y="560" width="720" height="220" rx="30" fill="${C.charcoal}"/>` +
        `<ellipse cx="800" cy="560" rx="360" ry="70" fill="#4A4E46"/>` +
        [640, 730, 820, 910, 1000]
          .map((x, i) => `<circle cx="${x}" cy="${575 + (i % 2) * 10}" r="26" fill="#E9A24B"/>`)
          .join('') +
        `<path d="M470,540 h660" stroke="${C.charcoal}" stroke-width="16" stroke-linecap="round"/>` +
        `<path d="M520,505 h560" stroke="${C.charcoal}" stroke-width="14" stroke-linecap="round"/>` +
        // Fish on the grill.
        `<ellipse cx="800" cy="470" rx="230" ry="66" fill="#C88B5A"/>` +
        `<path d="M1030,470 l120,-56 v112 Z" fill="#C88B5A"/>` +
        `<path d="M620,450 q60,-34 130,0 M700,500 q60,-30 130,0" stroke="${C.charcoal}" stroke-width="10" fill="none" opacity="0.5"/>` +
        `<circle cx="620" cy="452" r="12" fill="${C.charcoal}"/>` +
        steam(790, 330),
    ),
  market: () =>
    svg(
      skyGradient('bg', C.cream, '#F1ECDF') +
        `<rect y="700" width="${WIDTH}" height="300" fill="${C.beige}"/>` +
        // Striped awning.
        Array.from({ length: 10 }, (_, i) => `<rect x="${i * 160}" y="0" width="160" height="180" fill="${i % 2 ? C.forest : C.cream}"/>`).join('') +
        `<path d="M0,180 h1600 v40 q-80,60 -160,0 q-80,60 -160,0 q-80,60 -160,0 q-80,60 -160,0 q-80,60 -160,0 q-80,60 -160,0 q-80,60 -160,0 q-80,60 -160,0 q-80,60 -160,0 q-80,60 -160,0 Z" fill="${C.cream}"/>` +
        // Counter and produce baskets.
        `<rect x="180" y="560" width="1240" height="220" rx="16" fill="${C.forest}"/>` +
        `<rect x="180" y="540" width="1240" height="40" rx="12" fill="${C.forestDeep}"/>` +
        [340, 640, 940, 1240]
          .map(
            (x, i) => `<g>
              <ellipse cx="${x}" cy="540" rx="130" ry="46" fill="${C.beige}"/>
              ${[0, 1, 2, 3, 4].map((k) => `<circle cx="${x - 80 + k * 40}" cy="${520 - (k % 2) * 18}" r="26" fill="${['#D96C3F', '#E9C46A', '#7FA24B', '#C64B3C', '#8B6F47'][i]}"/>`).join('')}
            </g>`,
          )
          .join('') +
        // Hanging bulbs.
        Array.from({ length: 5 }, (_, i) => `<path d="M${240 + i * 300},240 v90" stroke="${C.charcoal}" stroke-width="6"/><circle cx="${240 + i * 300}" cy="350" r="22" fill="#F5E3C6"/>`).join(''),
    ),
  snacks: () =>
    svg(
      foodBase() +
        `<rect x="240" y="640" width="1120" height="240" rx="20" fill="${C.forest}" opacity="0.9"/>` +
        `<rect x="240" y="620" width="1120" height="40" rx="14" fill="${C.forestDeep}"/>` +
        leafParcel(500, 470, 0.9, '#3E7A5B') +
        leafParcel(900, 470, 0.75, '#4F8C68') +
        `<path d="M1150,560 q120,-40 160,60" stroke="#E9C46A" stroke-width="40" fill="none" stroke-linecap="round"/>` +
        [0, 1, 2, 3].map((i) => `<circle cx="${300 + i * 70}" cy="${600 + (i % 2) * 24}" r="34" fill="${i % 2 ? '#D96C3F' : '#E9C46A'}"/>`).join('') +
        `<path d="M640,600 q60,-90 130,-10 q50,60 -20,90 q-90,30 -110,-80 Z" fill="#E9C46A"/>` +
        `<rect x="1240" y="470" width="60" height="150" rx="24" fill="${C.sage}"/>`,
    ),
  coffee: () =>
    svg(
      skyGradient('bg', C.cream, C.beige) +
        `<rect y="700" width="${WIDTH}" height="300" fill="#E3DDCC"/>` +
        `<rect x="980" y="90" width="520" height="560" rx="20" fill="#EAF0E8" stroke="${C.sage}" stroke-width="10"/>` +
        `<path d="M1240,90 v560 M980,370 h520" stroke="${C.sage}" stroke-width="8"/>` +
        // Glass.
        `<path d="M560,340 h300 l-40,420 h-220 Z" fill="#FFFFFF" opacity="0.55"/>` +
        `<path d="M574,470 h272 l-32,290 h-208 Z" fill="#6B4A2F"/>` +
        `<path d="M584,470 h252 l-8,90 h-236 Z" fill="#EFE3CD" opacity="0.9"/>` +
        `<rect x="600" y="520" width="70" height="60" rx="12" fill="#FFFFFF" opacity="0.75"/>` +
        `<rect x="700" y="560" width="70" height="60" rx="12" fill="#FFFFFF" opacity="0.65"/>` +
        `<path d="M760,300 l60,-160" stroke="${C.forest}" stroke-width="20" stroke-linecap="round"/>` +
        `<ellipse cx="710" cy="770" rx="200" ry="34" fill="${C.charcoal}" opacity="0.18"/>` +
        `<ellipse cx="430" cy="790" rx="120" ry="30" fill="${C.charcoal}" opacity="0.14"/>`,
    ),
}

// --- Portrait --------------------------------------------------------------

function portraitScene() {
  let body = skyGradient('bg', '#DCE7DE', '#F0EEE3')
  body += sun(1180, 250, 110, '#F5E7CF', 0.9)
  body += ridge(520, 70, '#9DB3A4', 12, 12)
  body += ridge(660, 55, '#587566', 27, 14)
  body += ridge(820, 40, C.forest, 39, 16)
  // Portrait disc.
  body += `<circle cx="800" cy="560" r="270" fill="${C.cream}"/>`
  body += `<path d="M530,760 a270,270 0 0 1 540,0 Z" fill="${C.sage}"/>`
  body += `<circle cx="800" cy="470" r="130" fill="${C.forestDeep}"/>`
  body += `<path d="M650,430 a150,150 0 0 1 300,0 Z" fill="${C.charcoal}"/>`
  body += `<circle cx="800" cy="470" r="130" fill="#C9A57C"/>`
  body += `<path d="M660,430 a140,140 0 0 1 280,-20 q-70,-60 -280,20 Z" fill="${C.charcoal}"/>`
  body += `<path d="M540,790 q260,-120 520,0 Z" fill="${C.sage}"/>`
  return svg(body)
}

/** Hero: wide mountain-and-river landscape, kept calm behind overlay text. */
function heroScene() {
  let body = skyGradient('hero', '#CFDDD6', '#F2EDE1')
  body += sun(1210, 250, 120, '#F7EBD6', 0.95)
  body += ridge(360, 90, '#A9BEB1', 5, 14)
  body += ridge(470, 75, '#7B9686', 21, 16)
  body += mist([[470, 820, 52, 0.4], [560, 640, 40, 0.3]])
  body += ridge(600, 60, '#4C6B58', 35, 16)
  body += ridge(730, 45, C.forest, 47, 18)
  body += `<path d="M780,730 C830,800 700,850 760,930 C800,980 1040,990 1240,1000 L340,1000 C450,940 660,900 680,850 C700,800 740,770 780,730 Z" fill="#9BBDB4"/>`
  body += `<path d="M790,740 C830,810 720,850 780,930" stroke="#FFFFFF" stroke-width="8" fill="none" opacity="0.5"/>`
  body += ridge(860, 35, C.forestDeep, 63, 18)
  body += treeline(880, '#0F2A20', 71, 18)
  return svg(body)
}

// ---------------------------------------------------------------------------
// Image manifest
// ---------------------------------------------------------------------------

const images = {
  'hero.svg': heroScene(),
  'profile.svg': portraitScene(),
  'favicon.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${C.cream}"/><path d="M6,50 L24,20 L36,38 L44,26 L58,50 Z" fill="${C.forest}"/><circle cx="46" cy="16" r="6" fill="#E9A24B"/></svg>`,

  // Destinations use the real photographs in public/images/destinations/*.png,
  // so there are no generated destination images in this manifest.

  'posts/quiet-morning-mountains.svg': mountainScene({
    sky: ['#E7DED0', '#F6EEE2'],
    sunPos: [1140, 300, 105, '#F3D9B4', 0.95],
    ridges: [
      { y: 420, amp: 80, color: '#B4C3B6' },
      { y: 550, amp: 70, color: '#7E9A87', steps: 14 },
      { y: 700, amp: 55, color: '#44614F', steps: 16 },
      { y: 860, amp: 35, color: C.forestDeep, steps: 18 },
    ],
    mistLines: [[560, 820, 50, 0.5], [700, 640, 38, 0.4]],
    seed: 41,
  }),
  'posts/following-flowing-water.svg': riverScene({
    sky: ['#D4E4DE', '#F1EFE4'],
    seed: 43,
    palette: ['#9DB3A4', '#6E8A78', '#3E5B4C', C.forestDeep],
    river: '#B2CFC6',
  }),
  'posts/beyond-the-city.svg': countrysideScene({
    sky: ['#DEE9E1', '#F6F1E5'],
    seed: 47,
    palette: ['#B4C3B6', '#7E9A87', '#587566', '#74907E', '#93AA98'],
  }),
  'posts/weekend-road-trip.svg': countrysideScene({
    sky: ['#DCE9E4', '#F4F0E3'],
    seed: 53,
    palette: ['#A9BEB1', '#6E8A78', '#4C6B58', '#5E7C69', '#87A08E'],
  }),
  'posts/ratanakiri-waterfalls.svg': waterfallScene({ sky: ['#DDE9E2', '#EFF1E6'], seed: 59 }),
  'posts/cardamom-camping.svg': campScene({ sky: ['#1F3A46', '#3E5B5A'] }),
  'posts/forest-canopy-trails.svg': trailScene({ sky: ['#E4EDE4', '#F4F1E5'], seed: 61 }),
  'posts/packing-light.svg': packScene({ sky: ['#D7E5E0', '#F2EEE3'] }),

  'posts/fish-amok.svg': foodScenes.amok(),
  'posts/nom-banh-chok.svg': foodScenes.noodles(),
  'posts/grilled-fish-river.svg': foodScenes.grill(),
  'posts/market-breakfast.svg': foodScenes.market(),
  'posts/highland-snacks.svg': foodScenes.snacks(),
  'posts/iced-coffee.svg': foodScenes.coffee(),

  'details/mist-valley.svg': mountainScene({
    sky: ['#E9E4D7', '#F6F2E7'],
    sunPos: [820, 260, 90, '#F5E1C2', 0.9],
    ridges: [
      { y: 470, amp: 65, color: '#B9C7BA' },
      { y: 610, amp: 55, color: '#7E9A87', steps: 14 },
      { y: 780, amp: 45, color: C.forest, steps: 16 },
    ],
    mistLines: [[600, 850, 60, 0.55], [740, 660, 44, 0.45]],
    seed: 67,
  }),
  'details/waterfall.svg': waterfallScene({ sky: ['#E1EBE4', '#F3F1E7'], seed: 71 }),
  'details/country-road.svg': countrysideScene({
    sky: ['#DFEAE2', '#F6F1E5'],
    seed: 73,
    palette: ['#B4C3B6', '#7E9A87', '#587566', '#6E8A78', '#93AA98'],
    road: true,
  }),
  'details/rice-fields.svg': countrysideScene({
    sky: ['#E2ECE3', '#F5F2E6'],
    seed: 79,
    palette: ['#AFC3B4', '#7FA24B', '#5E7C69', '#8FB45E', '#A8C46B'],
    road: false,
  }),
  'details/forest-camp.svg': campScene({ sky: ['#24404A', '#47655A'] }),
  'details/market-stall.svg': foodScenes.market(),
}

const outRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images')

let count = 0
for (const [file, content] of Object.entries(images)) {
  if (file === 'favicon.svg') continue // written to public/ below
  const target = resolve(outRoot, file)
  mkdirSync(dirname(target), { recursive: true })
  writeFileSync(target, content, 'utf8')
  count += 1
}
// The favicon lives directly in public/.
writeFileSync(
  resolve(outRoot, '..', 'favicon.svg'),
  images['favicon.svg'],
  'utf8',
)

console.log(`Generated ${count} illustrations in public/images (plus public/favicon.svg).`)
