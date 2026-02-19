/**
 * Text - Body text component with variants
 *
 * For paragraphs, descriptions, and general content.
 */
// @ts-nocheck
import React from 'react'
import { tokens, textStyles, fontFamily } from '../../tokens'
import type { Theme } from '../../themes'

type TextSize = 'body' | 'small' | 'large'

interface TextProps {
  children: React.ReactNode
  /** Text size variant */
  size?: TextSize
  /** Text color */
  color?: string
  /** Muted style (reduced opacity) */
  muted?: boolean
  /** Text alignment */
  align?: 'left' | 'center' | 'right'
  /** Bold weight */
  bold?: boolean
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const sizeMap = {
  large: textStyles.body,
  body: textStyles.body,
  small: textStyles.bodySmall,
}

export const Text: React.FC<TextProps> = ({
  children,
  size = 'body',
  color,
  muted = false,
  align = 'left',
  bold = false,
  theme,
  style,
}) => {
  const textStyle = sizeMap[size]
  const baseColor = theme?.colors.text ?? tokens.colors.text
  const mutedColor = theme?.colors.textMuted ?? tokens.colors.textMuted
  const textColor = color ?? (muted ? mutedColor : baseColor)

  return (
    <div
      style={{
        ...textStyle,
        fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
        fontWeight: bold ? 700 : textStyle.fontWeight,
        color: textColor,
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Muted text shorthand
export const MutedText: React.FC<Omit<TextProps, 'muted'>> = (props) => (
  <Text {...props} muted />
)

// Bold text shorthand
export const BoldText: React.FC<Omit<TextProps, 'bold'>> = (props) => (
  <Text {...props} bold />
)

export default Text
