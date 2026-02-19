/**
 * Design Tokens Index
 *
 * Central export for all design tokens.
 */

export * from './colors'
export * from './typography'
export * from './spacing'
export * from './shadows'
export * from './radii'

// Re-export commonly used tokens as a combined object
import { palette, semanticColors, gradients } from './colors'
import { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textStyles } from './typography'
import { spacing, semanticSpacing, contentWidth, fixedWidth } from './spacing'
import { shadows, glows, textShadows } from './shadows'
import { radii, semanticRadii } from './radii'

// Default tokens (minimal white theme)
export const tokens = {
  colors: {
    bg: semanticColors.bgLight,
    text: semanticColors.textPrimary,
    textMuted: semanticColors.textSecondary,
    accent: semanticColors.accent,
    positive: semanticColors.positive,
    negative: semanticColors.negative,
    warning: semanticColors.warning,
    orange: palette.orange600,
  },
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  letterSpacing,
  spacing: semanticSpacing,
  layout: {
    minContentWidth: contentWidth.min,
    maxContentWidth: contentWidth.max,
    cardWidth: fixedWidth.card,
    subtitleMargin: semanticSpacing.subtitleMargin,
  },
  shadows,
  radii,
} as const

// Dark theme tokens
export const darkTokens = {
  colors: {
    bg: semanticColors.bgDark,
    bgCard: semanticColors.bgCardDark,
    text: semanticColors.textPrimaryDark,
    textMuted: semanticColors.textSecondaryDark,
    accent: semanticColors.neonBlue,
    accentPurple: semanticColors.neonPurple,
    positive: palette.green500,
    negative: palette.red500,
  },
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  letterSpacing,
  spacing: semanticSpacing,
  layout: {
    minContentWidth: contentWidth.min,
    maxContentWidth: contentWidth.max,
    cardWidth: fixedWidth.card,
    subtitleMargin: semanticSpacing.subtitleMargin,
  },
  shadows: glows,
  radii,
} as const

// Gradient theme tokens
export const gradientTokens = {
  colors: {
    bg: gradients.purpleBlue,
    bgWarm: gradients.pinkRed,
    bgCool: gradients.blueCyan,
    text: palette.white,
    textMuted: 'rgba(255,255,255,0.8)',
    accent: palette.gold,
    positive: palette.green500,
    negative: palette.red500,
  },
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  letterSpacing,
  spacing: semanticSpacing,
  layout: {
    minContentWidth: contentWidth.min,
    maxContentWidth: contentWidth.max,
    cardWidth: fixedWidth.card,
    subtitleMargin: semanticSpacing.subtitleMargin,
  },
  shadows,
  radii,
} as const

// Standard font stack export
export const font = fontFamily.sans

export type Tokens = typeof tokens
export type DarkTokens = typeof darkTokens
export type GradientTokens = typeof gradientTokens
