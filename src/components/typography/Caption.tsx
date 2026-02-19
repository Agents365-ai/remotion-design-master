/**
 * Caption - Small descriptive text
 *
 * For labels, metadata, fine print.
 */
// @ts-nocheck
import React from 'react'
import { tokens, textStyles, fontFamily } from '../../tokens'
import type { Theme } from '../../themes'

interface CaptionProps {
  children: React.ReactNode
  /** Text color */
  color?: string
  /** Uppercase style */
  uppercase?: boolean
  /** Text alignment */
  align?: 'left' | 'center' | 'right'
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const Caption: React.FC<CaptionProps> = ({
  children,
  color,
  uppercase = false,
  align = 'center',
  theme,
  style,
}) => {
  const textColor = color ?? theme?.colors.textMuted ?? tokens.colors.textMuted

  return (
    <div
      style={{
        ...textStyles.caption,
        fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
        color: textColor,
        textAlign: align,
        textTransform: uppercase ? 'uppercase' : 'none',
        letterSpacing: uppercase ? 2 : 0,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Label variant (uppercase, bold)
export const Label: React.FC<CaptionProps> = (props) => (
  <Caption
    {...props}
    uppercase
    style={{ fontWeight: 600, ...props.style }}
  />
)

export default Caption
