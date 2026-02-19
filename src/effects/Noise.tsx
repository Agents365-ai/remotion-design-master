/**
 * Noise - Subtle texture overlay
 *
 * Adds film grain or noise texture for visual depth.
 */
// @ts-nocheck
import { useCurrentFrame } from 'remotion'
import React from 'react'

interface NoiseOverlayProps {
  /** Noise opacity (0-1) */
  opacity?: number
  /** Animate noise (creates grain effect) */
  animate?: boolean
  /** Blend mode */
  blendMode?: string
  /** Noise density/scale */
  density?: number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

// Generate a simple SVG noise pattern
const generateNoiseSVG = (seed: number = 0): string => {
  // Using SVG filter for noise generation
  return `data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' seed='${seed}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E`
}

export const NoiseOverlay: React.FC<NoiseOverlayProps> = ({
  opacity = 0.05,
  animate = false,
  blendMode = 'overlay',
  density = 0.65,
  style,
}) => {
  const frame = useCurrentFrame()

  // Change noise pattern every few frames for animation effect
  const seed = animate ? Math.floor(frame / 3) % 10 : 0

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("${generateNoiseSVG(seed)}")`,
        backgroundSize: '200px 200px',
        opacity,
        mixBlendMode: blendMode as any,
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

// Film grain effect (more prominent)
export const FilmGrain: React.FC<Omit<NoiseOverlayProps, 'animate' | 'opacity'>> = (props) => (
  <NoiseOverlay {...props} opacity={0.08} animate />
)

// Subtle texture (static)
export const SubtleTexture: React.FC<Omit<NoiseOverlayProps, 'animate' | 'opacity'>> = (props) => (
  <NoiseOverlay {...props} opacity={0.03} animate={false} />
)

// Vignette effect
interface VignetteProps {
  /** Vignette intensity (0-1) */
  intensity?: number
  /** Vignette size (% from center) */
  size?: number
  /** Vignette color */
  color?: string
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const Vignette: React.FC<VignetteProps> = ({
  intensity = 0.3,
  size = 70,
  color = '0,0,0',
  style,
}) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: `radial-gradient(
        ellipse at center,
        transparent ${size}%,
        rgba(${color},${intensity}) 100%
      )`,
      pointerEvents: 'none',
      ...style,
    }}
  />
)

export default NoiseOverlay
