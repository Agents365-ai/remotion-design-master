/**
 * Thumbnail Design Tokens
 *
 * Scaled-up sizes for thumbnail readability.
 * Thumbnails need 2x larger elements to be readable at small display sizes.
 */

export const thumbnailFontSize = {
  title: 144,
  titleLarge: 200,
  subtitle: 56,
  tag: 40,
  cardTitle: 28,
  cardIcon: 56,
  body: 32,
} as const

export const thumbnailSpacing = {
  tagGap: 24,
  sectionGap: 32,
  cardGap: 40,
  cardPadding: '32px 48px',
  tagPadding: '16px 32px',
  containerPadding: 60,
} as const

export const thumbnailBorders = {
  tagWidth: 2,
  cardWidth: 2,
  radiusSmall: 16,
  radiusMedium: 20,
  radiusLarge: 24,
} as const

export const thumbnailTokens = {
  fontSize: thumbnailFontSize,
  spacing: thumbnailSpacing,
  borders: thumbnailBorders,
} as const

export type ThumbnailTokens = typeof thumbnailTokens
