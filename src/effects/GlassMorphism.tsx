/**
 * GlassMorphism - Frosted glass effect container
 *
 * Creates a translucent, blurred background effect.
 * Best used on dark backgrounds or over images.
 */
// @ts-nocheck
import React from 'react'
import { radii } from '../tokens'

interface GlassMorphismProps {
  children: React.ReactNode
  /** Background blur intensity (pixels) */
  blur?: number
  /** Background opacity (0-1) */
  opacity?: number
  /** Background tint color (RGB, no alpha) */
  tint?: string
  /** Border opacity (0-1) */
  borderOpacity?: number
  /** Border radius */
  radius?: number
  /** Padding */
  padding?: number | string
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const GlassMorphism: React.FC<GlassMorphismProps> = ({
  children,
  blur = 10,
  opacity = 0.1,
  tint = '255,255,255',
  borderOpacity = 0.2,
  radius,
  padding = 32,
  style,
}) => (
  <div
    style={{
      background: `rgba(${tint},${opacity})`,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      border: `1px solid rgba(${tint},${borderOpacity})`,
      borderRadius: radius ?? radii['2xl'],
      padding,
      ...style,
    }}
  >
    {children}
  </div>
)

// Dark glass variant
export const DarkGlass: React.FC<Omit<GlassMorphismProps, 'tint'>> = (props) => (
  <GlassMorphism {...props} tint="0,0,0" />
)

// Light glass variant
export const LightGlass: React.FC<Omit<GlassMorphismProps, 'tint'>> = (props) => (
  <GlassMorphism {...props} tint="255,255,255" />
)

export default GlassMorphism
