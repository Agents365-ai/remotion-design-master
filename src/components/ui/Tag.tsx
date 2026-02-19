/**
 * Tag - Compact label component
 *
 * For categories, keywords, labels.
 */
// @ts-nocheck
import React from 'react'
import { tokens, fontSize, fontWeight, radii } from '../../tokens'
import type { Theme } from '../../themes'

interface TagProps {
  children: React.ReactNode
  /** Background color */
  background?: string
  /** Text color */
  color?: string
  /** Tag size */
  size?: 'small' | 'medium' | 'large'
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const sizeStyles = {
  small: {
    fontSize: fontSize.small,
    padding: '4px 10px',
  },
  medium: {
    fontSize: fontSize.caption,
    padding: '6px 14px',
  },
  large: {
    fontSize: fontSize.body,
    padding: '8px 18px',
  },
}

export const Tag: React.FC<TagProps> = ({
  children,
  background,
  color,
  size = 'medium',
  theme,
  style,
}) => {
  const bgColor = background ?? (theme?.colors.accent ?? tokens.colors.accent) + '20' // 20% opacity
  const textColor = color ?? theme?.colors.accent ?? tokens.colors.accent
  const sizeStyle = sizeStyles[size]

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        ...sizeStyle,
        background: bgColor,
        color: textColor,
        borderRadius: radii.md,
        fontWeight: fontWeight.medium,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </span>
  )
}

// Tag group for multiple tags
export const TagGroup: React.FC<{ tags: string[]; gap?: number } & Omit<TagProps, 'children'>> = ({
  tags,
  gap = 12,
  ...props
}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap }}>
    {tags.map((tag, i) => (
      <Tag key={i} {...props}>{tag}</Tag>
    ))}
  </div>
)

export default Tag
