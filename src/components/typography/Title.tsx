/**
 * Title - Pre-styled title component
 *
 * Hero/large/medium title variants with consistent styling.
 */
// @ts-nocheck
import React from 'react'
import { tokens, textStyles, fontFamily } from '../../tokens'
import type { Theme } from '../../themes'

type TitleSize = 'hero' | 'display' | 'large' | 'medium'

interface TitleProps {
  children: React.ReactNode
  /** Title size variant */
  size?: TitleSize
  /** Text color */
  color?: string
  /** Text alignment */
  align?: 'left' | 'center' | 'right'
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const sizeMap: Record<TitleSize, typeof textStyles.hero> = {
  hero: textStyles.hero,
  display: textStyles.display,
  large: textStyles.title,
  medium: textStyles.subtitle,
}

export const Title: React.FC<TitleProps> = ({
  children,
  size = 'large',
  color,
  align = 'center',
  theme,
  style,
}) => {
  const textStyle = sizeMap[size]
  const textColor = color ?? theme?.colors.text ?? tokens.colors.text

  return (
    <div
      style={{
        ...textStyle,
        fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
        color: textColor,
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Convenience variants
export const HeroTitle: React.FC<Omit<TitleProps, 'size'>> = (props) => (
  <Title {...props} size="hero" />
)

export const SectionTitle: React.FC<Omit<TitleProps, 'size'>> = (props) => (
  <Title {...props} size="large" />
)

export const Subtitle: React.FC<Omit<TitleProps, 'size'>> = (props) => (
  <Title {...props} size="medium" />
)

export default Title
