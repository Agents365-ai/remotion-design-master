/**
 * Dark Tech Theme
 *
 * Cyberpunk-inspired dark theme with neon accents and glow effects.
 * Best for AI/tech topics, night viewing, futuristic content.
 */

import { createTheme } from './createTheme'

export const darkTech = createTheme({
  name: 'dark-tech',
  colors: {
    bg: '#0a0a0f',
    bgCard: 'rgba(255,255,255,0.05)',
    text: '#ffffff',
    textMuted: 'rgba(255,255,255,0.6)',
    accent: '#00d4ff',
    accentSecondary: '#a855f7',
    positive: '#22c55e',
    negative: '#ef4444',
    warning: '#fbbf24',
    border: 'rgba(255,255,255,0.1)',
  },
  shadows: {
    card: '0 4px 20px rgba(0,0,0,0.3)',
    cardHover: '0 0 30px rgba(0,212,255,0.2)',
    glow: '0 0 30px rgba(0,212,255,0.3)',
    text: '0 0 10px rgba(0,212,255,0.5)',
  },
})

// Card component style preset with glassmorphism
export const darkTechCard = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 20,
  padding: '32px 48px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 0 30px rgba(0,212,255,0.1)',
} as const

// Neon text style
export const neonText = {
  color: '#00d4ff',
  textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff',
} as const

// Purple neon variant
export const neonPurpleText = {
  color: '#a855f7',
  textShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 40px #a855f7',
} as const

// Gradient backgrounds for dark theme
export const darkGradients = {
  // Subtle radial glow
  centerGlow: `radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.15) 0%, transparent 60%)`,
  // Dual color glow
  dualGlow: `radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.1) 0%, transparent 50%),
             radial-gradient(ellipse at 70% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)`,
  // Top gradient
  topFade: `linear-gradient(to bottom, rgba(0,212,255,0.1) 0%, transparent 30%)`,
} as const

// Design guidelines
export const darkTechGuide = {
  // Accent colors
  primaryNeon: '#00d4ff',
  secondaryNeon: '#a855f7',

  // Effects
  glowIntensity: '0.3-0.5 opacity',
  blurAmount: '10-15px',

  // Animation
  animationType: 'FadeIn with glow pulse',
  pulseFrequency: '30-40 frames per cycle',

  // Typography
  titleWeight: 700,
  useTextShadow: true,

  // Cards
  useGlassmorphism: true,
  borderOpacity: '0.1-0.15',
}
