/**
 * AnimatedCounter - Number counting animation
 *
 * Animates from 0 to target value with easing.
 * Use for statistics, metrics, impactful numbers.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate, Easing } from 'remotion'
import React from 'react'

interface AnimatedCounterProps {
  /** Target number value */
  value: number
  /** Delay before animation starts (frames) */
  delay?: number
  /** Animation duration (frames) */
  duration?: number
  /** Text prefix (e.g., "$") */
  prefix?: string
  /** Text suffix (e.g., "%", "M") */
  suffix?: string
  /** Number of decimal places */
  decimals?: number
  /** Use locale number formatting (commas) */
  formatNumber?: boolean
  /** Easing function */
  easing?: (t: number) => number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  delay = 0,
  duration = 30,
  prefix = '',
  suffix = '',
  decimals = 0,
  formatNumber = true,
  easing = Easing.out(Easing.cubic),
  style,
}) => {
  const frame = useCurrentFrame()

  const progress = interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  })

  const currentValue = value * progress

  const formattedValue = decimals > 0
    ? currentValue.toFixed(decimals)
    : Math.round(currentValue).toString()

  const displayValue = formatNumber
    ? Number(formattedValue).toLocaleString()
    : formattedValue

  return (
    <span style={style}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}

// Percentage counter
export const PercentageCounter: React.FC<Omit<AnimatedCounterProps, 'suffix'>> = (props) => (
  <AnimatedCounter {...props} suffix="%" />
)

// Currency counter
export const CurrencyCounter: React.FC<Omit<AnimatedCounterProps, 'prefix'> & { currency?: string }> = ({ currency = '$', ...props }) => (
  <AnimatedCounter {...props} prefix={currency} />
)

// Compact number counter (K, M, B)
export const CompactCounter: React.FC<Omit<AnimatedCounterProps, 'formatNumber'>> = ({ value, ...props }) => {
  const { frame } = { frame: useCurrentFrame() }
  const progress = interpolate(
    frame - (props.delay ?? 0),
    [0, props.duration ?? 30],
    [0, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )

  const currentValue = value * progress

  let displayValue: string
  let suffix: string

  if (currentValue >= 1_000_000_000) {
    displayValue = (currentValue / 1_000_000_000).toFixed(1)
    suffix = 'B'
  } else if (currentValue >= 1_000_000) {
    displayValue = (currentValue / 1_000_000).toFixed(1)
    suffix = 'M'
  } else if (currentValue >= 1_000) {
    displayValue = (currentValue / 1_000).toFixed(1)
    suffix = 'K'
  } else {
    displayValue = Math.round(currentValue).toString()
    suffix = ''
  }

  return (
    <span style={props.style}>
      {props.prefix ?? ''}
      {displayValue}
      {suffix}
      {props.suffix ?? ''}
    </span>
  )
}

export default AnimatedCounter
