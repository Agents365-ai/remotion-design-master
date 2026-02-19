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
export const fontSize = {
  // Display - for hero sections
  hero: 100,       // Main hero title
  display: 88,     // Large display text

  // Headings
  title: 80,       // Section titles
  subtitle: 56,    // Subtitles, secondary headings
  heading: 48,     // Content headings

  // Body
  body: 40,        // Main body text
  bodySmall: 36,   // Secondary body text

  // Caption
  caption: 32,     // Captions, labels
  small: 28,       // Small text
  micro: 24,       // Very small (use sparingly)

  // Data display
  dataHero: 140,   // Single huge metric
  dataLarge: 120,  // Large data numbers
  data: 72,        // Standard data numbers
  dataSmall: 56,   // Smaller data numbers
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
  hero: {
    fontSize: fontSize.hero,
    fontWeight: fontWeight.extrabold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
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
