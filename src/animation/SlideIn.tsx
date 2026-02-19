/**
 * SlideIn - Directional slide entrance animation
 *
 * Element slides in from a direction with optional fade.
 * Use for side panels, lists, horizontal content.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate, Easing } from 'remotion'
import React from 'react'

type Direction = 'left' | 'right' | 'up' | 'down'

interface SlideInProps {
  children: React.ReactNode
  /** Direction to slide from */
  direction?: Direction
  /** Delay before animation starts (frames) */
  delay?: number
  /** Animation duration (frames) */
  duration?: number
  /** Distance to slide (pixels) */
  distance?: number
  /** Include fade effect */
  fade?: boolean
  /** Easing function */
  easing?: (t: number) => number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const getTransform = (direction: Direction, distance: number): { x: number; y: number } => {
  switch (direction) {
    case 'left': return { x: -distance, y: 0 }
    case 'right': return { x: distance, y: 0 }
    case 'up': return { x: 0, y: -distance }
    case 'down': return { x: 0, y: distance }
  }
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 25,
  distance = 100,
  fade = true,
  easing = Easing.out(Easing.cubic),
  style,
}) => {
  const frame = useCurrentFrame()

  const progress = interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  })

  const offset = getTransform(direction, distance)
  const x = interpolate(progress, [0, 1], [offset.x, 0])
  const y = interpolate(progress, [0, 1], [offset.y, 0])

  return (
    <div
      style={{
        opacity: fade ? progress : 1,
        transform: `translate(${x}px, ${y}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Convenience variants
export const SlideInLeft: React.FC<Omit<SlideInProps, 'direction'>> = (props) => (
  <SlideIn {...props} direction="left" />
)

export const SlideInRight: React.FC<Omit<SlideInProps, 'direction'>> = (props) => (
  <SlideIn {...props} direction="right" />
)

export const SlideInUp: React.FC<Omit<SlideInProps, 'direction'>> = (props) => (
  <SlideIn {...props} direction="up" />
)

export const SlideInDown: React.FC<Omit<SlideInProps, 'direction'>> = (props) => (
  <SlideIn {...props} direction="down" />
)

export default SlideIn
