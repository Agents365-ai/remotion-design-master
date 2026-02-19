/**
 * Badge - Status indicator component
 *
 * For labels, tags, status indicators.
 */
// @ts-nocheck
import React from 'react'
import { tokens, fontSize, fontWeight, radii } from '../../tokens'
import type { Theme } from '../../themes'

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline'

interface BadgeProps {
  children: React.ReactNode
  /** Badge style variant */
  variant?: BadgeVariant
  /** Badge size */
  size?: 'small' | 'medium' | 'large'
  /** Custom background color */
  background?: string
  /** Custom text color */
  color?: string
  /** Pill shape (fully rounded) */
  pill?: boolean
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const sizeStyles = {
  small: {
    fontSize: fontSize.small,
    padding: '4px 12px',
  },
  medium: {
    fontSize: fontSize.caption,
    padding: '8px 16px',
  },
  large: {
    fontSize: fontSize.body,
    padding: '12px 24px',
  },
}

const getVariantStyles = (variant: BadgeVariant, theme?: Theme) => {
  const colors = {
    default: {
      bg: 'rgba(0,0,0,0.08)',
      text: theme?.colors.text ?? tokens.colors.text,
    },
    success: {
      bg: theme?.colors.positive ?? tokens.colors.positive,
      text: '#fff',
    },
    warning: {
      bg: tokens.colors.warning ?? '#f59e0b',
      text: '#fff',
    },
    error: {
      bg: theme?.colors.negative ?? tokens.colors.negative,
      text: '#fff',
    },
    info: {
      bg: theme?.colors.accent ?? tokens.colors.accent,
      text: '#fff',
    },
    outline: {
      bg: 'transparent',
      text: theme?.colors.accent ?? tokens.colors.accent,
      border: `2px solid ${theme?.colors.accent ?? tokens.colors.accent}`,
    },
  }
  return colors[variant]
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  background,
  color,
  pill = true,
  theme,
  style,
}) => {
  const variantStyles = getVariantStyles(variant, theme)
  const sizeStyle = sizeStyles[size]

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sizeStyle,
        background: background ?? variantStyles.bg,
        color: color ?? variantStyles.text,
        border: variantStyles.border ?? 'none',
        borderRadius: pill ? radii.full : radii.md,
        fontWeight: fontWeight.semibold,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </span>
  )
}

// Semantic variants
export const SuccessBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <Badge {...props} variant="success" />
)

export const WarningBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <Badge {...props} variant="warning" />
)

export const ErrorBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <Badge {...props} variant="error" />
)

export const InfoBadge: React.FC<Omit<BadgeProps, 'variant'>> = (props) => (
  <Badge {...props} variant="info" />
)

export default Badge
