/**
 * Gradient - Animated gradient backgrounds
 *
 * Various gradient effects for dynamic backgrounds.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate } from 'remotion'
import React from 'react'
import { gradients } from '../tokens'

interface GradientBackgroundProps {
  /** Gradient CSS value or preset name */
  gradient?: string | keyof typeof gradients
  /** Animation speed (0 = static) */
  animationSpeed?: number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  gradient = 'purpleBlue',
  animationSpeed = 0,
  style,
}) => {
  const frame = useCurrentFrame()

  // Resolve gradient preset or use custom
  const gradientValue = gradient in gradients
    ? gradients[gradient as keyof typeof gradients]
    : gradient

  // Calculate hue shift for animation
  const hueShift = animationSpeed > 0
    ? interpolate(frame, [0, 300], [0, 360], { extrapolateRight: 'wrap' }) * animationSpeed
    : 0

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: gradientValue,
        filter: hueShift > 0 ? `hue-rotate(${hueShift}deg)` : undefined,
        ...style,
      }}
    />
  )
}

// Animated color shift
interface GradientShiftProps {
  /** Starting hue (0-360) */
  startHue?: number
  /** Hue range to cycle through */
  hueRange?: number
  /** Saturation percentage */
  saturation?: number
  /** Lightness percentage */
  lightness?: number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const GradientShift: React.FC<GradientShiftProps> = ({
  startHue = 220,
  hueRange = 60,
  saturation = 70,
  lightness = 60,
  style,
}) => {
  const frame = useCurrentFrame()

  const hue = startHue + interpolate(frame, [0, 150], [0, hueRange], {
    extrapolateRight: 'wrap',
  })

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: `linear-gradient(
          135deg,
          hsl(${hue}, ${saturation}%, ${lightness}%) 0%,
          hsl(${hue + 60}, ${saturation}%, ${lightness - 10}%) 100%
        )`,
        ...style,
      }}
    />
  )
}

// Radial glow gradient
interface RadialGlowProps {
  /** Center color (CSS color) */
  color?: string
  /** Center X position (%) */
  cx?: number
  /** Center Y position (%) */
  cy?: number
  /** Glow size (%) */
  size?: number
  /** Opacity */
  opacity?: number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const RadialGlow: React.FC<RadialGlowProps> = ({
  color = '0,212,255',
  cx = 50,
  cy = 50,
  size = 60,
  opacity = 0.3,
  style,
}) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(
        circle at ${cx}% ${cy}%,
        rgba(${color},${opacity}) 0%,
        transparent ${size}%
      )`,
      ...style,
    }}
  />
)

export default GradientBackground
