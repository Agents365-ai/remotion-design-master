/**
 * Color Design Tokens
 *
 * Centralized color definitions for consistent theming.
 * Use semantic names for flexibility in theme switching.
 */

// Base palette colors
export const palette = {
  // Neutrals
  white: '#ffffff',
  black: '#000000',
  gray50: '#f9fafb',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray400: '#9ca3af',
  gray500: '#6b7280',
  gray600: '#4b5563',
  gray700: '#374151',
  gray800: '#1f2937',
  gray900: '#111827',

  // Primary blue
  blue50: '#eff6ff',
  blue100: '#dbeafe',
  blue200: '#bfdbfe',
  blue300: '#93c5fd',
  blue400: '#60a5fa',
  blue500: '#3b82f6',
  blue600: '#2563eb',
  blue700: '#1d4ed8',
  blue800: '#1e40af',
  blue900: '#1e3a8a',

  // Success green
  green50: '#ecfdf5',
  green100: '#d1fae5',
  green200: '#a7f3d0',
  green300: '#6ee7b7',
  green400: '#34d399',
  green500: '#10b981',
  green600: '#059669',
  green700: '#047857',
  green800: '#065f46',
  green900: '#064e3b',

  // Warning orange
  orange50: '#fff7ed',
  orange100: '#ffedd5',
  orange200: '#fed7aa',
  orange300: '#fdba74',
  orange400: '#fb923c',
  orange500: '#f97316',
  orange600: '#ea580c',
  orange700: '#c2410c',
  orange800: '#9a3412',
  orange900: '#7c2d12',

  // Error red
  red50: '#fef2f2',
  red100: '#fee2e2',
  red200: '#fecaca',
  red300: '#fca5a5',
  red400: '#f87171',
  red500: '#ef4444',
  red600: '#dc2626',
  red700: '#b91c1c',
  red800: '#991b1b',
  red900: '#7f1d1d',

  // Accent purple
  purple50: '#faf5ff',
  purple100: '#f3e8ff',
  purple200: '#e9d5ff',
  purple300: '#d8b4fe',
  purple400: '#c084fc',
  purple500: '#a855f7',
  purple600: '#9333ea',
  purple700: '#7c3aed',
  purple800: '#6b21a8',
  purple900: '#581c87',

  // Accent cyan (neon)
  cyan50: '#ecfeff',
  cyan100: '#cffafe',
  cyan200: '#a5f3fc',
  cyan300: '#67e8f9',
  cyan400: '#22d3ee',
  cyan500: '#06b6d4',
  cyan600: '#0891b2',
  neonCyan: '#00d4ff',

  // Gold accent
  gold: '#ffd700',
  amber400: '#fbbf24',
  amber500: '#f59e0b',
} as const

// Semantic colors - use these in components
export const semanticColors = {
  // Backgrounds
  bgLight: palette.white,
  bgDark: '#0a0a0f',
  bgMuted: palette.gray50,
  bgCard: 'rgba(0,0,0,0.03)',
  bgCardDark: 'rgba(255,255,255,0.05)',

  // Text
  textPrimary: '#1a1a1a',
  textSecondary: 'rgba(0,0,0,0.5)',
  textPrimaryDark: palette.white,
  textSecondaryDark: 'rgba(255,255,255,0.6)',

  // Accent
  accent: palette.blue600,
  accentHover: palette.blue700,
  accentLight: palette.blue100,

  // Semantic states
  positive: palette.green600,
  negative: palette.red600,
  warning: palette.orange600,
  info: palette.blue600,

  // Special accents
  neonBlue: palette.neonCyan,
  neonPurple: palette.purple500,
  gold: palette.gold,
} as const

// Gradient presets
export const gradients = {
  purpleBlue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  pinkRed: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  blueCyan: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  orangeYellow: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
  greenTeal: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
  darkPurple: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
  midnight: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
} as const

export type Palette = typeof palette
export type SemanticColors = typeof semanticColors
export type Gradients = typeof gradients
