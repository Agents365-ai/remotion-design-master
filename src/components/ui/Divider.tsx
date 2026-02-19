/**
 * Divider - Visual separator
 *
 * For separating content sections.
 */
// @ts-nocheck
import React from 'react'
import { tokens } from '../../tokens'
import type { Theme } from '../../themes'

interface DividerProps {
  /** Divider direction */
  direction?: 'horizontal' | 'vertical'
  /** Divider thickness */
  thickness?: number
  /** Divider color */
  color?: string
  /** Margin around divider */
  margin?: number
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const Divider: React.FC<DividerProps> = ({
  direction = 'horizontal',
  thickness = 1,
  color,
  margin = 24,
  theme,
  style,
}) => {
  const dividerColor = color ?? theme?.colors.border ?? 'rgba(0,0,0,0.1)'

  if (direction === 'vertical') {
    return (
      <div
        style={{
          width: thickness,
          height: '100%',
          background: dividerColor,
          marginLeft: margin,
          marginRight: margin,
          ...style,
        }}
      />
    )
  }

  return (
    <div
      style={{
        width: '100%',
        height: thickness,
        background: dividerColor,
        marginTop: margin,
        marginBottom: margin,
        ...style,
      }}
    />
  )
}

// Gradient divider
export const GradientDivider: React.FC<Omit<DividerProps, 'color'> & { gradientColors?: string[] }> = ({
  gradientColors = ['transparent', 'rgba(0,0,0,0.1)', 'transparent'],
  ...props
}) => (
  <Divider
    {...props}
    color={`linear-gradient(90deg, ${gradientColors.join(', ')})`}
    style={{ background: `linear-gradient(90deg, ${gradientColors.join(', ')})`, ...props.style }}
  />
)

export default Divider
