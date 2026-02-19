/**
 * Gradient Vibrant Theme
 *
 * Colorful gradient backgrounds with white text overlays.
 * Best for creative content, entertainment, brand promotion.
 */

import { createTheme } from './createTheme'

export const gradientVibrant = createTheme({
  name: 'gradient-vibrant',
  colors: {
    bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    bgCard: 'rgba(255,255,255,0.9)',
    text: '#ffffff',
    textMuted: 'rgba(255,255,255,0.8)',
    accent: '#ffd700',
    accentSecondary: '#ffffff',
    positive: '#22c55e',
    negative: '#ef4444',
    warning: '#fbbf24',
    border: 'rgba(255,255,255,0.3)',
  },
  shadows: {
    card: '0 8px 32px rgba(0,0,0,0.2)',
    cardHover: '0 12px 48px rgba(0,0,0,0.25)',
    glow: '0 0 40px rgba(255,255,255,0.2)',
    text: '0 2px 10px rgba(0,0,0,0.3)',
  },
})

// Pre-defined gradient backgrounds
export const gradientBackgrounds = {
  // Cool gradients
  purpleBlue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  blueCyan: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  purplePink: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
  tealGreen: 'linear-gradient(135deg, #06b6d4 0%, #10b981 100%)',

  // Warm gradients
  pinkRed: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  orangeYellow: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
  redPink: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
  orangeRed: 'linear-gradient(135deg, #fb923c 0%, #dc2626 100%)',

  // Neutral gradients
  grayBlue: 'linear-gradient(135deg, #475569 0%, #3b82f6 100%)',
  darkPurple: 'linear-gradient(135deg, #1e1b4b 0%, #7c3aed 100%)',

  // Special
  rainbow: 'linear-gradient(135deg, #f97316 0%, #fbbf24 20%, #22c55e 40%, #06b6d4 60%, #6366f1 80%, #ec4899 100%)',
  sunset: 'linear-gradient(135deg, #f97316 0%, #f43f5e 50%, #7c3aed 100%)',
} as const

// Card style for gradient backgrounds (white card on gradient)
export const gradientCard = {
  background: 'rgba(255,255,255,0.95)',
  borderRadius: 24,
  padding: '40px 60px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
  color: '#1a1a1a',
} as const

// Floating card style
export const floatingCard = {
  background: 'rgba(255,255,255,0.2)',
  borderRadius: 20,
  padding: '32px 48px',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.3)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
} as const

// Text styles for gradient backgrounds
export const gradientText = {
  white: {
    color: '#ffffff',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  gold: {
    color: '#ffd700',
    textShadow: '0 2px 10px rgba(0,0,0,0.4)',
  },
  outlined: {
    color: '#ffffff',
    textShadow: '0 0 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)',
  },
} as const

// Design guidelines
export const gradientVibrantGuide = {
  // Gradient angle
  gradientAngle: '135 degrees',

  // Text requirements
  useTextShadow: true,
  textColor: 'white or gold',

  // Card styles
  cardBackground: 'white 90-95% opacity or glassmorphism',

  // Animation
  gradientShift: 'Subtle hue rotation over time',

  // Contrast
  ensureReadability: 'Text shadow required for all text on gradients',
}
