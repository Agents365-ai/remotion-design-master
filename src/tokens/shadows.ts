/**
 * Shadow Design Tokens
 *
 * Box shadows and drop shadows for depth and elevation.
 */

// Standard shadows (for light backgrounds)
export const shadows = {
  none: 'none',

  // Subtle shadows
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  base: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)',
  md: '0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)',

  // Elevated shadows
  lg: '0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)',
  xl: '0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)',
  '2xl': '0 25px 50px rgba(0,0,0,0.25)',

  // Card shadows
  card: '0 4px 12px rgba(0,0,0,0.08)',
  cardHover: '0 8px 24px rgba(0,0,0,0.12)',
  cardElevated: '0 12px 32px rgba(0,0,0,0.15)',

  // Inner shadows
  inner: 'inset 0 2px 4px rgba(0,0,0,0.06)',
  innerDark: 'inset 0 2px 4px rgba(0,0,0,0.15)',
} as const

// Glow effects (for dark backgrounds)
export const glows = {
  none: 'none',

  // Soft glows
  soft: '0 0 20px rgba(255,255,255,0.1)',
  softBlue: '0 0 20px rgba(59,130,246,0.3)',
  softCyan: '0 0 20px rgba(0,212,255,0.3)',
  softPurple: '0 0 20px rgba(168,85,247,0.3)',
  softGreen: '0 0 20px rgba(16,185,129,0.3)',

  // Intense glows
  neonBlue: '0 0 30px rgba(0,212,255,0.5), 0 0 60px rgba(0,212,255,0.2)',
  neonPurple: '0 0 30px rgba(168,85,247,0.5), 0 0 60px rgba(168,85,247,0.2)',
  neonCyan: '0 0 30px rgba(0,255,255,0.5), 0 0 60px rgba(0,255,255,0.2)',
  neonPink: '0 0 30px rgba(255,0,128,0.5), 0 0 60px rgba(255,0,128,0.2)',

  // Accent glows
  accent: '0 0 20px rgba(37,99,235,0.4)',
  positive: '0 0 20px rgba(5,150,105,0.4)',
  negative: '0 0 20px rgba(220,38,38,0.4)',

  // Pulsing glow base (combine with animation)
  pulse: '0 0 0 0 rgba(0,212,255,0.4)',
} as const

// Text shadows
export const textShadows = {
  none: 'none',
  sm: '0 1px 2px rgba(0,0,0,0.3)',
  base: '0 2px 4px rgba(0,0,0,0.4)',
  lg: '0 4px 8px rgba(0,0,0,0.5)',
  outline: '0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)',
  glow: '0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)',
  neonBlue: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff',
  neonPurple: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 40px #a855f7',
} as const

export type Shadows = typeof shadows
export type Glows = typeof glows
export type TextShadows = typeof textShadows
