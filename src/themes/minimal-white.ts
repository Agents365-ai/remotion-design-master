/**
 * Minimal White Theme
 *
 * "Less is more" - Pure white background, large titles, minimal layout.
 * Content is the design. Best for product intros, tutorials, comparisons.
 */

import { createTheme } from './createTheme'

export const minimalWhite = createTheme({
  name: 'minimal-white',
  colors: {
    bg: '#ffffff',
    bgCard: 'rgba(0,0,0,0.03)',
    text: '#1a1a1a',
    textMuted: 'rgba(0,0,0,0.5)',
    accent: '#2563eb',
    accentSecondary: '#ea580c',
    positive: '#059669',
    negative: '#dc2626',
    warning: '#ea580c',
    border: 'rgba(0,0,0,0.06)',
  },
  shadows: {
    card: '0 4px 12px rgba(0,0,0,0.08)',
    cardHover: '0 8px 24px rgba(0,0,0,0.12)',
    glow: 'none',
    text: 'none',
  },
})

// Card component style preset
export const minimalWhiteCard = {
  background: minimalWhite.colors.bgCard,
  border: `1px solid ${minimalWhite.colors.border}`,
  borderRadius: minimalWhite.radii.card,
  padding: '36px 56px',
} as const

// Design guidelines
export const minimalWhiteGuide = {
  // Use these font sizes for visual impact
  titleSize: '80-100px',
  subtitleSize: '48-64px',
  bodySize: '32-44px',
  dataSize: '64-80px',
  largeDataSize: '96-140px',

  // Spacing guidelines
  pageMargin: '30-50px',
  elementGap: '24-40px',

  // Animation recommendations
  animationType: 'FadeIn + translateY',
  animationDuration: '25 frames',

  // Typography
  titleWeight: 800,
  bodyWeight: '500-600',
}
