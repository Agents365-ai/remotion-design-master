/**
 * Code - Monospace code display
 *
 * For code snippets, terminal output, technical text.
 */
// @ts-nocheck
import React from 'react'
import { tokens, textStyles, fontFamily, fontSize, radii } from '../../tokens'
import type { Theme } from '../../themes'

interface CodeProps {
  children: React.ReactNode
  /** Display as block or inline */
  block?: boolean
  /** Background color */
  background?: string
  /** Text color */
  color?: string
  /** Font size */
  size?: 'small' | 'medium' | 'large'
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const sizeMap = {
  small: fontSize.caption,
  medium: fontSize.body,
  large: fontSize.subtitle,
}

export const Code: React.FC<CodeProps> = ({
  children,
  block = false,
  background,
  color,
  size = 'medium',
  theme,
  style,
}) => {
  const bgColor = background ?? (theme?.colors.bgCard ?? 'rgba(0,0,0,0.05)')
  const textColor = color ?? theme?.colors.text ?? tokens.colors.text

  if (block) {
    return (
      <pre
        style={{
          fontFamily: fontFamily.mono,
          fontSize: sizeMap[size],
          lineHeight: 1.6,
          color: textColor,
          background: bgColor,
          padding: '24px 32px',
          borderRadius: radii.lg,
          overflow: 'auto',
          margin: 0,
          ...style,
        }}
      >
        <code>{children}</code>
      </pre>
    )
  }

  return (
    <code
      style={{
        fontFamily: fontFamily.mono,
        fontSize: sizeMap[size] * 0.9,
        color: textColor,
        background: bgColor,
        padding: '4px 8px',
        borderRadius: radii.sm,
        ...style,
      }}
    >
      {children}
    </code>
  )
}

// Block code shorthand
export const CodeBlock: React.FC<Omit<CodeProps, 'block'>> = (props) => (
  <Code {...props} block />
)

// Inline code shorthand
export const InlineCode: React.FC<Omit<CodeProps, 'block'>> = (props) => (
  <Code {...props} block={false} />
)

export default Code
