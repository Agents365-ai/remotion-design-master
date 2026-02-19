/**
 * Glow - Pulsing glow effects
 *
 * Animated glow for emphasis and visual interest.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate } from 'remotion'
import React from 'react'

interface PulsingGlowProps {
  /** Glow color (RGB, no alpha) */
  color?: string
  /** Minimum opacity */
  minOpacity?: number
  /** Maximum opacity */
  maxOpacity?: number
  /** Pulse cycle duration (frames) */
  cycleDuration?: number
  /** Glow size (% of container) */
  size?: number
  /** Position X (%) */
  x?: number
  /** Position Y (%) */
  y?: number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const PulsingGlow: React.FC<PulsingGlowProps> = ({
  color = '0,212,255',
  minOpacity = 0.2,
  maxOpacity = 0.5,
  cycleDuration = 60,
  size = 60,
  x = 50,
  y = 50,
  style,
}) => {
  const frame = useCurrentFrame()

  const pulse = interpolate(
    Math.sin((frame / cycleDuration) * Math.PI * 2),
    [-1, 1],
    [minOpacity, maxOpacity]
  )

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(
          circle at ${x}% ${y}%,
          rgba(${color},${pulse}) 0%,
          transparent ${size}%
        )`,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

// Element glow wrapper
interface GlowWrapperProps {
  children: React.ReactNode
  /** Glow color */
  color?: string
  /** Glow blur amount (pixels) */
  blur?: number
  /** Glow spread (pixels) */
  spread?: number
  /** Animate glow */
  animate?: boolean
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const GlowWrapper: React.FC<GlowWrapperProps> = ({
  children,
  color = 'rgba(0,212,255,0.5)',
  blur = 20,
  spread = 0,
  animate = false,
  style,
}) => {
  const frame = useCurrentFrame()

  const animatedBlur = animate
    ? blur + interpolate(Math.sin(frame * 0.1), [-1, 1], [-5, 5])
    : blur

  return (
    <div
      style={{
        boxShadow: `0 0 ${animatedBlur}px ${spread}px ${color}`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

// Text glow effect
interface TextGlowProps {
  children: React.ReactNode
  /** Glow color */
  color?: string
  /** Glow intensity (blur amount) */
  intensity?: number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const TextGlow: React.FC<TextGlowProps> = ({
  children,
  color = '#00d4ff',
  intensity = 20,
  style,
}) => (
  <span
    style={{
      textShadow: `0 0 ${intensity}px ${color}, 0 0 ${intensity * 2}px ${color}`,
      ...style,
    }}
  >
    {children}
  </span>
)

export default PulsingGlow
