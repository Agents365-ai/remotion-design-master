/**
 * Button - Styled button component
 *
 * For CTAs, actions, interactive elements.
 * Note: Buttons in video are visual only (non-interactive).
 */
// @ts-nocheck
import React from 'react'
import { tokens, fontSize, fontWeight, radii, shadows } from '../../tokens'
import type { Theme } from '../../themes'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'small' | 'medium' | 'large'

interface ButtonProps {
  children: React.ReactNode
  /** Button style variant */
  variant?: ButtonVariant
  /** Button size */
  size?: ButtonSize
  /** Full width button */
  fullWidth?: boolean
  /** Icon before text */
  icon?: React.ReactNode
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const sizeStyles = {
  small: {
    fontSize: fontSize.caption,
    padding: '12px 24px',
    borderRadius: radii.md,
  },
  medium: {
    fontSize: fontSize.body,
    padding: '16px 32px',
    borderRadius: radii.lg,
  },
  large: {
    fontSize: fontSize.subtitle,
    padding: '20px 48px',
    borderRadius: radii.xl,
  },
}

const getVariantStyles = (variant: ButtonVariant, theme?: Theme): React.CSSProperties => {
  const accent = theme?.colors.accent ?? tokens.colors.accent

  switch (variant) {
    case 'primary':
      return {
        background: accent,
        color: '#fff',
        border: 'none',
        boxShadow: shadows.md,
      }
    case 'secondary':
      return {
        background: 'rgba(0,0,0,0.08)',
        color: theme?.colors.text ?? tokens.colors.text,
        border: 'none',
      }
    case 'outline':
      return {
        background: 'transparent',
        color: accent,
        border: `2px solid ${accent}`,
      }
    case 'ghost':
      return {
        background: 'transparent',
        color: theme?.colors.text ?? tokens.colors.text,
        border: 'none',
      }
  }
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  theme,
  style,
}) => {
  const sizeStyle = sizeStyles[size]
  const variantStyle = getVariantStyles(variant, theme)

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        fontWeight: fontWeight.semibold,
        cursor: 'default',
        width: fullWidth ? '100%' : 'auto',
        ...sizeStyle,
        ...variantStyle,
        ...style,
      }}
    >
      {icon}
      {children}
    </div>
  )
}

// Primary button shorthand
export const PrimaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button {...props} variant="primary" />
)

// Secondary button shorthand
export const SecondaryButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button {...props} variant="secondary" />
)

// Outline button shorthand
export const OutlineButton: React.FC<Omit<ButtonProps, 'variant'>> = (props) => (
  <Button {...props} variant="outline" />
)

export default Button
