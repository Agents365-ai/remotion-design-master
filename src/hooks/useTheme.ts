/**
 * useTheme - Theme context hook
 *
 * Access theme values in components.
 */
// @ts-nocheck
import React, { createContext, useContext } from 'react'
import type { Theme } from '../themes'
import { minimalWhite } from '../themes/minimal-white'

// Theme context
const ThemeContext = createContext<Theme>(minimalWhite)

// Provider component
export const ThemeProvider: React.FC<{ theme: Theme; children: React.ReactNode }> = ({
  theme,
  children,
}) => (
  <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>
)

// Hook to access theme
export function useTheme(): Theme {
  return useContext(ThemeContext)
}

// Hook to get specific theme values
export function useThemeColors() {
  const theme = useTheme()
  return theme.colors
}

export function useThemeTypography() {
  const theme = useTheme()
  return theme.typography
}

export function useThemeSpacing() {
  const theme = useTheme()
  return theme.spacing
}

export default useTheme
