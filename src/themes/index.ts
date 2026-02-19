/**
 * Themes Index
 *
 * Central export for all theme presets.
 */

export { createTheme, themeToCSS, type Theme, type ThemeConfig } from './createTheme'
export { minimalWhite, minimalWhiteCard, minimalWhiteGuide } from './minimal-white'
export { darkTech, darkTechCard, neonText, neonPurpleText, darkGradients, darkTechGuide } from './dark-tech'
export { gradientVibrant, gradientBackgrounds, gradientCard, floatingCard, gradientText, gradientVibrantGuide } from './gradient-vibrant'
export { corporateBlue, corporateHeader, corporateCard, accentCard, subtleAccentCard, corporateDataColors, corporateChartColors, corporateBlueGuide } from './corporate-blue'

import { minimalWhite } from './minimal-white'
import { darkTech } from './dark-tech'
import { gradientVibrant } from './gradient-vibrant'
import { corporateBlue } from './corporate-blue'

// All available themes
export const themes = {
  minimalWhite,
  darkTech,
  gradientVibrant,
  corporateBlue,
} as const

// Default theme
export const defaultTheme = minimalWhite

// Theme selection helper
export function getTheme(name: keyof typeof themes) {
  return themes[name]
}

// Theme type
export type ThemeName = keyof typeof themes
