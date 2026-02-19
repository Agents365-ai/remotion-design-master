/**
 * Quote - Styled quotation component
 *
 * For testimonials, pull quotes, cited text.
 */
// @ts-nocheck
import React from 'react'
import { tokens, fontSize, fontWeight, fontFamily } from '../../tokens'
import type { Theme } from '../../themes'

interface QuoteProps {
  children: React.ReactNode
  /** Attribution/source */
  attribution?: string
  /** Show quotation marks */
  showQuotes?: boolean
  /** Quote style */
  variant?: 'default' | 'large' | 'minimal'
  /** Text color */
  color?: string
  /** Accent color for quote marks */
  accentColor?: string
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const Quote: React.FC<QuoteProps> = ({
  children,
  attribution,
  showQuotes = true,
  variant = 'default',
  color,
  accentColor,
  theme,
  style,
}) => {
  const textColor = color ?? theme?.colors.text ?? tokens.colors.text
  const accent = accentColor ?? theme?.colors.accent ?? tokens.colors.accent

  const variantStyles = {
    default: {
      fontSize: fontSize.subtitle,
      fontWeight: fontWeight.medium,
      fontStyle: 'italic' as const,
    },
    large: {
      fontSize: fontSize.title,
      fontWeight: fontWeight.semibold,
      fontStyle: 'normal' as const,
    },
    minimal: {
      fontSize: fontSize.body,
      fontWeight: fontWeight.normal,
      fontStyle: 'italic' as const,
    },
  }

  const quoteStyle = variantStyles[variant]

  return (
    <div
      style={{
        textAlign: 'center',
        ...style,
      }}
    >
      <blockquote
        style={{
          fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
          ...quoteStyle,
          color: textColor,
          lineHeight: 1.4,
          margin: 0,
          position: 'relative',
        }}
      >
        {showQuotes && (
          <span
            style={{
              color: accent,
              fontSize: quoteStyle.fontSize * 1.5,
              opacity: 0.3,
              position: 'absolute',
              left: -40,
              top: -20,
              fontStyle: 'normal',
            }}
          >
            "
          </span>
        )}
        {children}
        {showQuotes && (
          <span
            style={{
              color: accent,
              fontSize: quoteStyle.fontSize * 1.5,
              opacity: 0.3,
              fontStyle: 'normal',
            }}
          >
            "
          </span>
        )}
      </blockquote>
      {attribution && (
        <div
          style={{
            marginTop: 16,
            fontSize: fontSize.caption,
            color: theme?.colors.textMuted ?? tokens.colors.textMuted,
          }}
        >
          — {attribution}
        </div>
      )}
    </div>
  )
}

// Large quote variant
export const PullQuote: React.FC<Omit<QuoteProps, 'variant'>> = (props) => (
  <Quote {...props} variant="large" />
)

export default Quote
