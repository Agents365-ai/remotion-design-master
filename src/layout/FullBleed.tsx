/**
 * FullBleed - Root container enforcing full-screen coverage
 *
 * Hard constraints enforced:
 * - position: absolute; inset: 0
 * - overflow: hidden
 * - padding: 0; margin: 0
 *
 * Every Section MUST use this component.
 */
// @ts-nocheck
import { AbsoluteFill } from 'remotion'
import React from 'react'
import { tokens } from '../tokens'
import type { Theme } from '../themes'

interface FullBleedProps {
  children: React.ReactNode
  /** Background color or gradient */
  background?: string
  /** Theme object for consistent styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const FullBleed: React.FC<FullBleedProps> = ({
  children,
  background,
  theme,
  style,
}) => {
  const bg = background ?? theme?.colors.bg ?? tokens.colors.bg

  return (
    <AbsoluteFill
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        padding: 0,
        margin: 0,
        background: bg,
        ...style,
      }}
    >
      {children}
    </AbsoluteFill>
  )
}

export default FullBleed
