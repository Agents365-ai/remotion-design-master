/**
 * FadeIn - Fade + slide up animation
 *
 * Classic entrance animation combining opacity fade with translateY.
 * Use for titles, text blocks, and general content.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate, Easing } from 'remotion'
import React from 'react'

interface FadeInProps {
  children: React.ReactNode
  /** Delay before animation starts (frames) */
  delay?: number
  /** Animation duration (frames) */
  duration?: number
  /** Initial Y offset in pixels */
  y?: number
  /** Easing function */
  easing?: (t: number) => number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 25,
  y = 30,
  easing = Easing.out(Easing.cubic),
  style,
}) => {
  const frame = useCurrentFrame()

  const progress = interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  })

  const translateY = interpolate(progress, [0, 1], [y, 0])

  return (
    <div
      style={{
        opacity: progress,
        transform: `translateY(${translateY}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Variant: Fade in from bottom (more dramatic)
export const FadeInUp: React.FC<FadeInProps> = (props) => (
  <FadeIn {...props} y={props.y ?? 50} />
)

// Variant: Fade in place (no movement)
export const FadeInPlace: React.FC<Omit<FadeInProps, 'y'>> = (props) => (
  <FadeIn {...props} y={0} />
)

export default FadeIn
