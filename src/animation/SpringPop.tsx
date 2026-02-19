/**
 * SpringPop - Elastic scale entrance animation
 *
 * Bouncy scale-up animation with overshoot.
 * Use for icons, badges, data points, emphasis elements.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate, Easing } from 'remotion'
import React from 'react'

interface SpringPopProps {
  children: React.ReactNode
  /** Delay before animation starts (frames) */
  delay?: number
  /** Animation duration (frames) */
  duration?: number
  /** Starting scale (0 = invisible) */
  fromScale?: number
  /** Ending scale (1 = normal) */
  toScale?: number
  /** Overshoot amount (higher = bouncier) */
  overshoot?: number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const SpringPop: React.FC<SpringPopProps> = ({
  children,
  delay = 0,
  duration = 20,
  fromScale = 0,
  toScale = 1,
  overshoot = 1.5,
  style,
}) => {
  const frame = useCurrentFrame()

  const progress = interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(overshoot)),
  })

  const scale = interpolate(progress, [0, 1], [fromScale, toScale])

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Variant: Subtle pop (less overshoot)
export const SubtlePop: React.FC<SpringPopProps> = (props) => (
  <SpringPop {...props} overshoot={1.2} />
)

// Variant: Dramatic pop (more overshoot)
export const DramaticPop: React.FC<SpringPopProps> = (props) => (
  <SpringPop {...props} overshoot={2.0} duration={25} />
)

export default SpringPop
