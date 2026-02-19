/**
 * Stat - Metric with trend indicator
 *
 * For KPIs with change indicators (up/down arrows).
 */
// @ts-nocheck
import React from 'react'
import { tokens, fontSize, fontWeight, fontFamily } from '../../tokens'
import type { Theme } from '../../themes'

interface StatProps {
  /** Main value */
  value: string | number
  /** Description label */
  label: string
  /** Change value (e.g., "+12%") */
  change?: string
  /** Change direction */
  trend?: 'up' | 'down' | 'neutral'
  /** Size variant */
  size?: 'small' | 'medium' | 'large'
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const sizeMap = {
  small: {
    value: fontSize.dataSmall,
    label: fontSize.small,
    change: fontSize.small,
  },
  medium: {
    value: fontSize.data,
    label: fontSize.caption,
    change: fontSize.caption,
  },
  large: {
    value: fontSize.dataLarge,
    label: fontSize.body,
    change: fontSize.body,
  },
}

const TrendArrow: React.FC<{ trend: 'up' | 'down' | 'neutral'; size: number }> = ({ trend, size }) => {
  if (trend === 'neutral') return null

  const arrow = trend === 'up' ? '↑' : '↓'
  return <span style={{ marginRight: 4, fontSize: size * 0.8 }}>{arrow}</span>
}

export const Stat: React.FC<StatProps> = ({
  value,
  label,
  change,
  trend = 'neutral',
  size = 'medium',
  theme,
  style,
}) => {
  const sizes = sizeMap[size]
  const valueColor = theme?.colors.text ?? tokens.colors.text
  const labelColor = theme?.colors.textMuted ?? tokens.colors.textMuted

  const getTrendColor = () => {
    if (trend === 'up') return theme?.colors.positive ?? tokens.colors.positive
    if (trend === 'down') return theme?.colors.negative ?? tokens.colors.negative
    return labelColor
  }

  return (
    <div style={{ textAlign: 'center', ...style }}>
      <div
        style={{
          fontSize: sizes.value,
          fontWeight: fontWeight.extrabold,
          color: valueColor,
          lineHeight: 1,
          fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: sizes.label,
          color: labelColor,
          marginTop: 8,
          fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
        }}
      >
        {label}
      </div>
      {change && (
        <div
          style={{
            fontSize: sizes.change,
            fontWeight: fontWeight.semibold,
            color: getTrendColor(),
            marginTop: 8,
            fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
          }}
        >
          <TrendArrow trend={trend} size={sizes.change} />
          {change}
        </div>
      )}
    </div>
  )
}

// Positive stat shorthand
export const PositiveStat: React.FC<Omit<StatProps, 'trend'>> = (props) => (
  <Stat {...props} trend="up" />
)

// Negative stat shorthand
export const NegativeStat: React.FC<Omit<StatProps, 'trend'>> = (props) => (
  <Stat {...props} trend="down" />
)

export default Stat
