/**
 * Reveal - Clip-path reveal animation
 *
 * Content is revealed using an animated clip-path.
 * Use for dramatic reveals, image unveiling, text emphasis.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate, Easing } from 'remotion'
import React from 'react'

type RevealDirection = 'left' | 'right' | 'up' | 'down' | 'center'

interface RevealProps {
  children: React.ReactNode
  /** Direction of reveal */
  direction?: RevealDirection
  /** Delay before animation starts (frames) */
  delay?: number
  /** Animation duration (frames) */
  duration?: number
  /** Easing function */
  easing?: (t: number) => number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const getClipPath = (direction: RevealDirection, progress: number): string => {
  const p = Math.min(1, Math.max(0, progress)) * 100

  switch (direction) {
    case 'left':
      return `inset(0 ${100 - p}% 0 0)`
    case 'right':
      return `inset(0 0 0 ${100 - p}%)`
    case 'up':
      return `inset(${100 - p}% 0 0 0)`
    case 'down':
      return `inset(0 0 ${100 - p}% 0)`
    case 'center':
      const half = (100 - p) / 2
      return `inset(${half}% ${half}% ${half}% ${half}%)`
  }
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 30,
  easing = Easing.out(Easing.cubic),
  style,
}) => {
  const frame = useCurrentFrame()

  const progress = interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  })

  return (
    <div
      style={{
        clipPath: getClipPath(direction, progress),
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Convenience variants
export const RevealLeft: React.FC<Omit<RevealProps, 'direction'>> = (props) => (
  <Reveal {...props} direction="left" />
)

export const RevealRight: React.FC<Omit<RevealProps, 'direction'>> = (props) => (
  <Reveal {...props} direction="right" />
)

export const RevealUp: React.FC<Omit<RevealProps, 'direction'>> = (props) => (
  <Reveal {...props} direction="up" />
)

export const RevealDown: React.FC<Omit<RevealProps, 'direction'>> = (props) => (
  <Reveal {...props} direction="down" />
)

export const RevealCenter: React.FC<Omit<RevealProps, 'direction'>> = (props) => (
  <Reveal {...props} direction="center" />
)

export default Reveal
