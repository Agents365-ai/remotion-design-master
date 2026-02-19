/**
 * ProgressBar - Visual progress indicator
 *
 * Animated progress bar with customizable styling.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate, Easing } from 'remotion'
import React from 'react'
import { tokens, radii } from '../../tokens'
import type { Theme } from '../../themes'

interface ProgressBarProps {
  /** Progress value (0-100) */
  value: number
  /** Bar height in pixels */
  height?: number
  /** Bar width (number = pixels, string = CSS value) */
  width?: number | string
  /** Background (track) color */
  trackColor?: string
  /** Fill (progress) color */
  fillColor?: string
  /** Show percentage label */
  showLabel?: boolean
  /** Label position */
  labelPosition?: 'inside' | 'outside' | 'above'
  /** Animation delay (frames) */
  delay?: number
  /** Animation duration (frames) */
  duration?: number
  /** Corner radius */
  radius?: number
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  height = 40,
  width = '100%',
  trackColor,
  fillColor,
  showLabel = false,
  labelPosition = 'inside',
  delay = 0,
  duration = 30,
  radius,
  theme,
  style,
}) => {
  const frame = useCurrentFrame()

  const progress = interpolate(frame - delay, [0, duration], [0, value], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  })

  const track = trackColor ?? theme?.colors.border ?? 'rgba(0,0,0,0.1)'
  const fill = fillColor ?? theme?.colors.accent ?? tokens.colors.accent
  const borderRadius = radius ?? radii.full

  const Label = showLabel && (
    <span
      style={{
        fontSize: height * 0.5,
        fontWeight: 600,
        color: labelPosition === 'inside' ? '#fff' : (theme?.colors.text ?? tokens.colors.text),
      }}
    >
      {Math.round(progress)}%
    </span>
  )

  return (
    <div style={style}>
      {showLabel && labelPosition === 'above' && (
        <div style={{ marginBottom: 8, textAlign: 'right' }}>{Label}</div>
      )}
      <div
        style={{
          width,
          height,
          background: track,
          borderRadius,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: fill,
            borderRadius,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: labelPosition === 'inside' ? 16 : 0,
          }}
        >
          {showLabel && labelPosition === 'inside' && progress > 10 && Label}
        </div>
      </div>
      {showLabel && labelPosition === 'outside' && (
        <div style={{ marginTop: 8 }}>{Label}</div>
      )}
    </div>
  )
}

// Vertical progress bar
export const VerticalProgressBar: React.FC<ProgressBarProps & { barWidth?: number }> = ({
  value,
  height = 200,
  barWidth = 40,
  delay = 0,
  duration = 30,
  trackColor,
  fillColor,
  radius,
  theme,
  style,
}) => {
  const frame = useCurrentFrame()

  const progress = interpolate(frame - delay, [0, duration], [0, value], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  })

  const track = trackColor ?? 'rgba(0,0,0,0.1)'
  const fill = fillColor ?? theme?.colors.accent ?? tokens.colors.accent
  const borderRadius = radius ?? radii.full

  return (
    <div
      style={{
        width: barWidth,
        height,
        background: track,
        borderRadius,
        overflow: 'hidden',
        position: 'relative',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: `${progress}%`,
          background: fill,
          borderRadius,
        }}
      />
    </div>
  )
}

export default ProgressBar
