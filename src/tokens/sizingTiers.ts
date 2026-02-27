/**
 * Content-Adaptive Sizing Tiers
 *
 * Multipliers for automatic content density adaptation.
 * Apply these to base fontSize values based on section content volume.
 *
 * Usage:
 *   const adjustedSize = fontSize.title * sizingTiers.compact.title
 */

export const sizingTiers = {
  // Impact: 1 focal point (hook, hero, CTA, brand moment)
  // Maximum visual impact, minimal text
  impact: {
    title: 1.5,
    subtitle: 1.4,
    body: 1.2,
    icon: 1.5,
    padding: 1.3,
    gap: 1.4,
  },

  // Standard: 2-3 items (features, comparison, demo)
  // Balanced layout, clear grouping
  standard: {
    title: 1.0,
    subtitle: 1.0,
    body: 1.0,
    icon: 1.0,
    padding: 1.0,
    gap: 1.0,
  },

  // Compact: 4-6 items (feature grid, ecosystem)
  // Reduced sizes to fit more content
  compact: {
    title: 0.8,
    subtitle: 0.85,
    body: 0.9,
    icon: 0.75,
    padding: 0.8,
    gap: 0.7,
  },

  // Dense: 6+ items (data tables, detailed comparisons)
  // Minimum sizes while maintaining readability
  dense: {
    title: 0.65,
    subtitle: 0.7,
    body: 0.8,
    icon: 0.6,
    padding: 0.6,
    gap: 0.5,
  },
} as const

// Helper to select tier based on item count
export const selectTier = (itemCount: number): keyof typeof sizingTiers => {
  if (itemCount <= 1) return 'impact'
  if (itemCount <= 3) return 'standard'
  if (itemCount <= 6) return 'compact'
  return 'dense'
}

// Pre-calculated common sizes for quick reference
// Based on fontSize.hero (220) and fontSize.title (140)
export const tierSizes = {
  impact: {
    sectionTitle: 330,  // 220 * 1.5
    contentTitle: 210,  // 140 * 1.5
    subtitle: 140,      // 100 * 1.4
    body: 77,           // 64 * 1.2
    icon: 300,          // 200 * 1.5
  },
  standard: {
    sectionTitle: 220,
    contentTitle: 140,
    subtitle: 100,
    body: 64,
    icon: 200,
  },
  compact: {
    sectionTitle: 176,  // 220 * 0.8
    contentTitle: 112,  // 140 * 0.8
    subtitle: 85,       // 100 * 0.85
    body: 58,           // 64 * 0.9
    icon: 150,          // 200 * 0.75
  },
  dense: {
    sectionTitle: 143,  // 220 * 0.65
    contentTitle: 91,   // 140 * 0.65
    subtitle: 70,       // 100 * 0.7
    body: 51,           // 64 * 0.8
    icon: 120,          // 200 * 0.6
  },
} as const

export type SizingTier = keyof typeof sizingTiers
export type TierMultipliers = typeof sizingTiers[SizingTier]
