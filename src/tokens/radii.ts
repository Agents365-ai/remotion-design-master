/**
 * Border Radius Design Tokens
 *
 * Consistent corner rounding for UI elements.
 */

export const radii = {
  none: 0,
  sm: 4,
  base: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  full: 9999, // Fully rounded (pills, circles)
} as const

// Semantic radii
export const semanticRadii = {
  button: radii.lg,
  card: radii['2xl'],
  badge: radii.full,
  input: radii.md,
  modal: radii['2xl'],
  tooltip: radii.md,
  chip: radii.full,
  progressBar: radii.full,
  avatar: radii.full,
} as const

export type Radii = typeof radii
export type SemanticRadii = typeof semanticRadii
