/**
 * Typography Design Tokens
 *
 * Font sizes calibrated for 1080p design → 4K render (scale(2) wrapper).
 * All sizes are in pixels for predictable rendering.
 */

// Font family stack
export const fontFamily = {
  sans: '-apple-system, "SF Pro Display", "Noto Sans SC", "Helvetica Neue", sans-serif',
  mono: '"SF Mono", "Fira Code", "JetBrains Mono", Consolas, monospace',
  serif: 'Georgia, "Times New Roman", serif',
} as const

// Font sizes (1080p base)
// NOTE: Video requires 2-4x larger text than web due to:
// 1. Distance viewing (TV at 3m, phone at arm's length)
// 2. Quick comprehension (3-5 seconds per scene)
// 3. Compression artifacts degrade small text
export const fontSize = {
  // Display - for hero sections (INCREASED based on ScraplingVideo analysis)
  heroMax: 400,    // Brand names, single-word maximum impact
  hero: 220,       // Section titles (was 100)
  display: 180,    // Large display text (was 88)

  // Headings (INCREASED)
  title: 140,      // Content titles (was 80)
  subtitle: 100,   // Subtitles, secondary headings (was 56)
  heading: 80,     // Content headings (was 48)

  // Body (INCREASED)
  body: 64,        // Main body text (was 40)
  bodySmall: 56,   // Secondary body text (was 36)

  // Caption (INCREASED)
  caption: 48,     // Captions, labels (was 32)
  small: 40,       // Small text (was 28)
  micro: 32,       // Minimum readable (was 24)

  // Data display (SLIGHT INCREASE)
  dataHero: 180,   // Single huge metric (was 140)
  dataLarge: 140,  // Large data numbers (was 120)
  data: 100,       // Standard data numbers (was 72)
  dataSmall: 72,   // Smaller data numbers (was 56)

  // Icons - NEW (for emoji and icon sizing)
  iconHero: 200,   // Hero emoji (hook, brand moments)
  iconLarge: 160,  // Feature icons
  icon: 120,       // Standard icons
  iconSmall: 80,   // Compact icons
} as const

// Font weights
export const fontWeight = {
  thin: 100,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
} as const

// Line heights
export const lineHeight = {
  none: 1,
  tight: 1.1,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const

// Letter spacing
export const letterSpacing = {
  tighter: -3,
  tight: -2,
  normal: 0,
  wide: 1,
  wider: 2,
  widest: 4,
} as const

// Typography presets - combine size, weight, line-height
export const textStyles = {
  heroMax: {
    fontSize: fontSize.heroMax,
    fontWeight: fontWeight.black,
    lineHeight: lineHeight.none,
    letterSpacing: -6,
  },
  hero: {
    fontSize: fontSize.hero,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: -6,
  },
  display: {
    fontSize: fontSize.display,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: fontWeight.extrabold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  subtitle: {
    fontSize: fontSize.subtitle,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  heading: {
    fontSize: fontSize.heading,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.snug,
    letterSpacing: letterSpacing.normal,
  },
  body: {
    fontSize: fontSize.body,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  bodySmall: {
    fontSize: fontSize.bodySmall,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  caption: {
    fontSize: fontSize.caption,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.normal,
  },
  dataHero: {
    fontSize: fontSize.dataHero,
    fontWeight: fontWeight.extrabold,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.tight,
  },
  dataLarge: {
    fontSize: fontSize.dataLarge,
    fontWeight: fontWeight.extrabold,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.tight,
  },
  data: {
    fontSize: fontSize.data,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.none,
    letterSpacing: letterSpacing.normal,
  },
  code: {
    fontSize: fontSize.body,
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
    fontFamily: fontFamily.mono,
  },
} as const

export type FontFamily = typeof fontFamily
export type FontSize = typeof fontSize
export type FontWeight = typeof fontWeight
export type LineHeight = typeof lineHeight
export type LetterSpacing = typeof letterSpacing
export type TextStyles = typeof textStyles
