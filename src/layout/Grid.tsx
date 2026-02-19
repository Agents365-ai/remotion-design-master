/**
 * Grid - CSS Grid layout helper
 *
 * Simplifies creating grid layouts with consistent spacing.
 */
// @ts-nocheck
import React from 'react'
import { tokens } from '../tokens'

interface GridProps {
  children: React.ReactNode
  /** Number of columns */
  columns?: number | string
  /** Number of rows */
  rows?: number | string
  /** Gap between grid items */
  gap?: number
  /** Row gap (overrides gap) */
  rowGap?: number
  /** Column gap (overrides gap) */
  columnGap?: number
  /** Align items within cells */
  alignItems?: 'start' | 'center' | 'end' | 'stretch'
  /** Justify items within cells */
  justifyItems?: 'start' | 'center' | 'end' | 'stretch'
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const Grid: React.FC<GridProps> = ({
  children,
  columns = 2,
  rows,
  gap = tokens.spacing.element,
  rowGap,
  columnGap,
  alignItems = 'center',
  justifyItems = 'center',
  style,
}) => {
  const gridTemplateColumns = typeof columns === 'number'
    ? `repeat(${columns}, 1fr)`
    : columns

  const gridTemplateRows = rows
    ? (typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows)
    : undefined

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns,
        gridTemplateRows,
        gap,
        rowGap: rowGap ?? gap,
        columnGap: columnGap ?? gap,
        alignItems,
        justifyItems,
        width: '100%',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export default Grid
