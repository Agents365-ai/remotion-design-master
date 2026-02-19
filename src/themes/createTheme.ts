/**
 * Theme Factory
 *
 * Creates theme objects from partial configurations.
 * Merges with default tokens for complete themes.
 */

import { tokens as defaultTokens, font } from '../tokens'
import type React from 'react'

export interface ThemeColors {
  bg: string
  bgCard?: string
  text: string
  textMuted: string
  accent: string
  accentSecondary?: string
  positive: string
  negative: string
  warning?: string
  border?: string
}

export interface ThemeTypography {
  fontFamily: string
  fontSize: {
    hero: number
    title: number
    subtitle: number
    body: number
    caption: number
    dataLarge: number
    data: number
  }
}

export interface ThemeSpacing {
  page: number
  section: number
  element: number
  tight: number
  subtitleMargin: number
}

export interface ThemeLayout {
  minContentWidth: number
  maxContentWidth: number
  cardWidth: number
  subtitleMargin: number
}

export interface ThemeShadows {
  card: string
  cardHover: string
  glow?: string
  text?: string
}

export interface Theme {
  name: string
  colors: ThemeColors
  typography: ThemeTypography
  spacing: ThemeSpacing
  layout: ThemeLayout
  shadows: ThemeShadows
  radii: {
    card: number
    button: number
    badge: number
  }
}

// Default theme values
const defaultTheme: Theme = {
  name: 'default',
  colors: {
    bg: defaultTokens.colors.bg,
    bgCard: 'rgba(0,0,0,0.03)',
    text: defaultTokens.colors.text,
    textMuted: defaultTokens.colors.textMuted,
    accent: defaultTokens.colors.accent,
    positive: defaultTokens.colors.positive,
    negative: defaultTokens.colors.negative,
    warning: defaultTokens.colors.warning,
    border: 'rgba(0,0,0,0.06)',
  },
  typography: {
    fontFamily: font,
    fontSize: defaultTokens.fontSize,
  },
  spacing: {
    page: defaultTokens.spacing.page,
    section: defaultTokens.spacing.section,
    element: defaultTokens.spacing.element,
    tight: defaultTokens.spacing.tight,
    subtitleMargin: defaultTokens.spacing.subtitleMargin,
  },
  layout: defaultTokens.layout,
  shadows: {
    card: '0 4px 12px rgba(0,0,0,0.08)',
    cardHover: '0 8px 24px rgba(0,0,0,0.12)',
    glow: 'none',
    text: 'none',
  },
  radii: {
    card: 24,
    button: 16,
    badge: 9999,
  },
}

/**
 * Create a theme by merging partial config with defaults
 */
export function createTheme(config: Partial<Theme> & { name: string }): Theme {
  return {
    ...defaultTheme,
    ...config,
    colors: { ...defaultTheme.colors, ...config.colors },
    typography: { ...defaultTheme.typography, ...config.typography },
    spacing: { ...defaultTheme.spacing, ...config.spacing },
    layout: { ...defaultTheme.layout, ...config.layout },
    shadows: { ...defaultTheme.shadows, ...config.shadows },
    radii: { ...defaultTheme.radii, ...config.radii },
  }
}

/**
 * Get CSS custom properties from theme
 */
export function themeToCSS(theme: Theme): React.CSSProperties {
  return {
    '--color-bg': theme.colors.bg,
    '--color-text': theme.colors.text,
    '--color-text-muted': theme.colors.textMuted,
    '--color-accent': theme.colors.accent,
    '--color-positive': theme.colors.positive,
    '--color-negative': theme.colors.negative,
    '--font-family': theme.typography.fontFamily,
    '--spacing-page': `${theme.spacing.page}px`,
    '--spacing-section': `${theme.spacing.section}px`,
    '--spacing-element': `${theme.spacing.element}px`,
    '--radius-card': `${theme.radii.card}px`,
    '--radius-button': `${theme.radii.button}px`,
    '--shadow-card': theme.shadows.card,
  } as React.CSSProperties
}

export type { Theme as ThemeConfig }
