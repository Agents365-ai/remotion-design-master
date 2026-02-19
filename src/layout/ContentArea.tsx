/**
 * ContentArea - Content wrapper with controlled width
 *
 * Hard constraints enforced:
 * - Width: 85%-95% of screen
 * - Horizontally centered
 * - Bottom padding auto-adds 100px for subtitle safe zone
 */
// @ts-nocheck
import React from 'react'
import { tokens } from '../tokens'
import type { Theme } from '../themes'

interface ContentAreaProps {
  children: React.ReactNode
  /** Min width as percentage (0-1), default 0.85 */
  minWidth?: number
  /** Max width as percentage (0-1), default 0.95 */
  maxWidth?: number
  /** Inner padding in pixels */
  padding?: number
  /** Vertical alignment */
  verticalAlign?: 'top' | 'center' | 'bottom'
  /** Theme object for spacing */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const ContentArea: React.FC<ContentAreaProps> = ({
  children,
  minWidth,
  maxWidth,
  padding,
  verticalAlign = 'center',
  theme,
  style,
}) => {
  const resolvedMinWidth = minWidth ?? theme?.layout.minContentWidth ?? tokens.layout.minContentWidth
  const resolvedMaxWidth = maxWidth ?? theme?.layout.maxContentWidth ?? tokens.layout.maxContentWidth
  const resolvedPadding = padding ?? theme?.spacing.page ?? tokens.spacing.page
  const subtitleMargin = theme?.spacing.subtitleMargin ?? tokens.layout.subtitleMargin

  const alignMap = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
  }

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: alignMap[verticalAlign],
        padding: resolvedPadding,
        paddingBottom: resolvedPadding + subtitleMargin,
        ...style,
      }}
    >
      <div
        style={{
          width: '100%',
          minWidth: `${resolvedMinWidth * 100}%`,
          maxWidth: `${resolvedMaxWidth * 100}%`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default ContentArea
