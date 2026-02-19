/**
 * Card - Container with consistent styling
 *
 * For grouping related content with visual separation.
 */
// @ts-nocheck
import React from 'react'
import { tokens, radii, shadows } from '../../tokens'
import type { Theme } from '../../themes'

type CardVariant = 'default' | 'elevated' | 'outlined' | 'glass'

interface CardProps {
  children: React.ReactNode
  /** Card style variant */
  variant?: CardVariant
  /** Card padding */
  padding?: number | string
  /** Background color */
  background?: string
  /** Border radius */
  radius?: number
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = '36px 56px',
  background,
  radius,
  theme,
  style,
}) => {
  const getVariantStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'default':
        return {
          background: background ?? theme?.colors.bgCard ?? 'rgba(0,0,0,0.03)',
          border: `1px solid ${theme?.colors.border ?? 'rgba(0,0,0,0.06)'}`,
          boxShadow: 'none',
        }
      case 'elevated':
        return {
          background: background ?? theme?.colors.bgCard ?? '#fff',
          border: 'none',
          boxShadow: theme?.shadows.card ?? shadows.card,
        }
      case 'outlined':
        return {
          background: background ?? 'transparent',
          border: `2px solid ${theme?.colors.accent ?? tokens.colors.accent}`,
          boxShadow: 'none',
        }
      case 'glass':
        return {
          background: background ?? 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }
    }
  }

  return (
    <div
      style={{
        padding,
        borderRadius: radius ?? theme?.radii.card ?? radii['2xl'],
        ...getVariantStyles(),
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Elevated card shorthand
export const ElevatedCard: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="elevated" />
)

// Glass card shorthand
export const GlassCard: React.FC<Omit<CardProps, 'variant'>> = (props) => (
  <Card {...props} variant="glass" />
)

export default Card
