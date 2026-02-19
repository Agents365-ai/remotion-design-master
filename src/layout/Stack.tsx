/**
 * Stack - Flex stack layout (horizontal or vertical)
 *
 * Simplifies creating flex layouts with consistent spacing.
 */
// @ts-nocheck
import React from 'react'
import { tokens } from '../tokens'

interface StackProps {
  children: React.ReactNode
  /** Stack direction */
  direction?: 'horizontal' | 'vertical'
  /** Gap between items */
  gap?: number
  /** Align items perpendicular to stack direction */
  align?: 'start' | 'center' | 'end' | 'stretch'
  /** Justify items along stack direction */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  /** Whether items should wrap */
  wrap?: boolean
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const justifyMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
}

const alignMap = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  stretch: 'stretch',
}

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'vertical',
  gap = tokens.spacing.element,
  align = 'center',
  justify = 'start',
  wrap = false,
  style,
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      gap,
      alignItems: alignMap[align],
      justifyContent: justifyMap[justify],
      flexWrap: wrap ? 'wrap' : 'nowrap',
      ...style,
    }}
  >
    {children}
  </div>
)

// Horizontal stack shorthand
export const HStack: React.FC<Omit<StackProps, 'direction'>> = (props) => (
  <Stack {...props} direction="horizontal" />
)

// Vertical stack shorthand
export const VStack: React.FC<Omit<StackProps, 'direction'>> = (props) => (
  <Stack {...props} direction="vertical" />
)

export default Stack
