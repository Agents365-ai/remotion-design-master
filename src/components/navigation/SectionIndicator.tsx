/**
 * SectionIndicator - Current section marker
 *
 * Simple dot or number indicator showing current section.
 */
// @ts-nocheck
import React from 'react'
import { tokens, radii } from '../../tokens'
import type { Theme } from '../../themes'

interface SectionIndicatorProps {
  /** Total number of sections */
  total: number
  /** Current section (0-indexed) */
  current: number
  /** Indicator style */
  variant?: 'dots' | 'numbers' | 'progress'
  /** Indicator size */
  size?: number
  /** Gap between indicators */
  gap?: number
  /** Active color */
  activeColor?: string
  /** Inactive color */
  inactiveColor?: string
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  total,
  current,
  variant = 'dots',
  size = 12,
  gap = 12,
  activeColor,
  inactiveColor,
  theme,
  style,
}) => {
  const colors = {
    active: activeColor ?? theme?.colors.accent ?? tokens.colors.accent,
    inactive: inactiveColor ?? 'rgba(0,0,0,0.2)',
  }

  const renderDots = () => (
    <div style={{ display: 'flex', gap }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === current ? size * 2.5 : size,
            height: size,
            borderRadius: radii.full,
            background: i === current ? colors.active : colors.inactive,
            transition: 'all 0.3s ease',
          }}
        />
      ))}
    </div>
  )

  const renderNumbers = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap }}>
      <span style={{ fontSize: size * 2, fontWeight: 700, color: colors.active }}>
        {String(current + 1).padStart(2, '0')}
      </span>
      <span style={{ fontSize: size * 1.5, color: colors.inactive }}>
        / {String(total).padStart(2, '0')}
      </span>
    </div>
  )

  const renderProgress = () => {
    const progress = ((current + 1) / total) * 100
    return (
      <div
        style={{
          width: 200,
          height: size,
          background: colors.inactive,
          borderRadius: radii.full,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: colors.active,
            borderRadius: radii.full,
          }}
        />
      </div>
    )
  }

  return (
    <div style={style}>
      {variant === 'dots' && renderDots()}
      {variant === 'numbers' && renderNumbers()}
      {variant === 'progress' && renderProgress()}
    </div>
  )
}

// Dots indicator shorthand
export const DotsIndicator: React.FC<Omit<SectionIndicatorProps, 'variant'>> = (props) => (
  <SectionIndicator {...props} variant="dots" />
)

// Number indicator shorthand
export const NumberIndicator: React.FC<Omit<SectionIndicatorProps, 'variant'>> = (props) => (
  <SectionIndicator {...props} variant="numbers" />
)

export default SectionIndicator
