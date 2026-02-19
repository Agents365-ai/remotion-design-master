/**
 * SafeArea - Respects subtitle margin at bottom
 *
 * Use when you need content to avoid the bottom 100px subtitle zone.
 */
// @ts-nocheck
import React from 'react'
import { tokens } from '../tokens'

interface SafeAreaProps {
  children: React.ReactNode
  /** Top padding */
  paddingTop?: number
  /** Left/right padding */
  paddingHorizontal?: number
  /** Extra bottom padding (added to subtitle margin) */
  paddingBottom?: number
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const SafeArea: React.FC<SafeAreaProps> = ({
  children,
  paddingTop = tokens.spacing.page,
  paddingHorizontal = tokens.spacing.page,
  paddingBottom = 0,
  style,
}) => (
  <div
    style={{
      position: 'absolute',
      inset: 0,
      paddingTop,
      paddingLeft: paddingHorizontal,
      paddingRight: paddingHorizontal,
      paddingBottom: tokens.layout.subtitleMargin + paddingBottom,
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}
  >
    {children}
  </div>
)

export default SafeArea
