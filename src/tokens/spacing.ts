/**
 * Spacing Design Tokens
 *
 * Consistent spacing scale for margins, padding, and gaps.
 * Uses 8px base unit for harmony.
 */

// Base spacing scale (8px unit)
export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
} as const

// Semantic spacing (for common use cases)
export const semanticSpacing = {
  // Page-level
  page: 40,           // Page edge padding (keep minimal for full-bleed)
  pageCompact: 30,    // Tighter page padding
  pageWide: 50,       // Wider page padding

  // Section-level
  section: 50,        // Between major sections
  sectionCompact: 30, // Tighter section spacing

  // Element-level
  element: 30,        // Between elements in a group
  elementCompact: 20, // Tighter element spacing
  elementWide: 40,    // Wider element spacing

  // Tight spacing
  tight: 16,          // Minimal spacing
  tighter: 12,        // Very minimal
  tightest: 8,        // Barely there

  // Content gaps
  listGap: 24,        // Between list items
  cardGap: 32,        // Between cards
  gridGap: 40,        // Grid gutters

  // Special
  subtitleMargin: 100, // Bottom margin for subtitle safe zone
  iconGap: 12,         // Between icon and text
} as const

// Layout widths (as percentages)
export const contentWidth = {
  min: 0.85,   // 85% minimum content width
  max: 0.95,   // 95% maximum content width
  narrow: 0.7, // 70% for focused content
  full: 1.0,   // 100% full width
} as const

// Fixed widths (in pixels, 1080p base)
export const fixedWidth = {
  card: 1000,       // Standard card width
  cardWide: 1400,   // Wide card
  cardNarrow: 600,  // Narrow card
  modal: 800,       // Modal dialogs
} as const

export type Spacing = typeof spacing
export type SemanticSpacing = typeof semanticSpacing
export type ContentWidth = typeof contentWidth
export type FixedWidth = typeof fixedWidth
