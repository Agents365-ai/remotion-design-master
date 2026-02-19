/**
 * Corporate Blue Theme
 *
 * Professional, trustworthy appearance with blue accents.
 * Best for business presentations, reports, professional content.
 */

import { createTheme } from './createTheme'

export const corporateBlue = createTheme({
  name: 'corporate-blue',
  colors: {
    bg: '#f8fafc',
    bgCard: '#ffffff',
    text: '#0f172a',
    textMuted: '#64748b',
    accent: '#1e40af',
    accentSecondary: '#0ea5e9',
    positive: '#059669',
    negative: '#dc2626',
    warning: '#d97706',
    border: '#e2e8f0',
  },
  shadows: {
    card: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
    cardHover: '0 4px 12px rgba(0,0,0,0.1)',
    glow: 'none',
    text: 'none',
  },
  radii: {
    card: 16,
    button: 12,
    badge: 9999,
  },
})

// Header bar style
export const corporateHeader = {
  background: '#1e40af',
  color: '#ffffff',
  padding: '24px 40px',
  borderRadius: 0,
} as const

// Clean card style
export const corporateCard = {
  background: '#ffffff',
  border: '1px solid #e2e8f0',
  borderRadius: 16,
  padding: '32px 40px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
} as const

// Accent card (highlighted info)
export const accentCard = {
  background: '#1e40af',
  color: '#ffffff',
  borderRadius: 16,
  padding: '32px 40px',
} as const

// Subtle accent card
export const subtleAccentCard = {
  background: '#eff6ff',
  border: '1px solid #bfdbfe',
  borderRadius: 16,
  padding: '32px 40px',
  color: '#1e40af',
} as const

// Data display colors
export const corporateDataColors = {
  primary: '#1e40af',
  secondary: '#0ea5e9',
  tertiary: '#6366f1',
  quaternary: '#8b5cf6',
  positive: '#059669',
  negative: '#dc2626',
  neutral: '#64748b',
} as const

// Chart colors
export const corporateChartColors = [
  '#1e40af', // Primary blue
  '#0ea5e9', // Sky blue
  '#6366f1', // Indigo
  '#8b5cf6', // Purple
  '#059669', // Emerald
  '#d97706', // Amber
  '#dc2626', // Red
  '#64748b', // Slate
] as const

// Design guidelines
export const corporateBlueGuide = {
  // Color usage
  primaryAction: '#1e40af',
  secondaryAction: '#0ea5e9',

  // Typography
  headingWeight: 700,
  bodyWeight: 400,

  // Spacing
  useConsistentPadding: true,
  cardPadding: '32-40px',

  // Visual style
  useSubtleShadows: true,
  preferCleanLines: true,
  avoidGradients: true,

  // Data visualization
  chartColorSequence: 'Use corporateChartColors array',
}
