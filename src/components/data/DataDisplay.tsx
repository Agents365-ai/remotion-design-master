/**
 * DataDisplay - Large number with label
 *
 * For showcasing key metrics, statistics, KPIs.
 * "Data as Hero" - numbers are the visual focus.
 */
// @ts-nocheck
import React from 'react'
import { tokens, fontSize, fontWeight, fontFamily } from '../../tokens'
import type { Theme } from '../../themes'

type DataSize = 'hero' | 'large' | 'medium' | 'small'

interface DataDisplayProps {
  /** The value to display (number, percentage, text) */
  value: string | number | React.ReactNode
  /** Label describing the data */
  label?: string
  /** Color for the value */
  color?: string
  /** Size variant */
  size?: DataSize
  /** Label position */
  labelPosition?: 'top' | 'bottom'
  /** Text alignment */
  align?: 'left' | 'center' | 'right'
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const sizeMap: Record<DataSize, { value: number; label: number }> = {
  hero: { value: fontSize.dataHero, label: fontSize.body },
  large: { value: fontSize.dataLarge, label: fontSize.caption },
  medium: { value: fontSize.data, label: fontSize.caption },
  small: { value: fontSize.dataSmall, label: fontSize.small },
}

export const DataDisplay: React.FC<DataDisplayProps> = ({
  value,
  label,
  color,
  size = 'large',
  labelPosition = 'bottom',
  align = 'center',
  theme,
  style,
}) => {
  const sizes = sizeMap[size]
  const valueColor = color ?? theme?.colors.accent ?? tokens.colors.accent
  const labelColor = theme?.colors.textMuted ?? tokens.colors.textMuted

  const ValueComponent = (
    <div
      style={{
        fontSize: sizes.value,
        fontWeight: fontWeight.extrabold,
        color: valueColor,
        lineHeight: 1,
        fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
      }}
    >
      {value}
    </div>
  )

  const LabelComponent = label && (
    <div
      style={{
        fontSize: sizes.label,
        fontWeight: fontWeight.medium,
        color: labelColor,
        marginTop: labelPosition === 'bottom' ? 12 : 0,
        marginBottom: labelPosition === 'top' ? 8 : 0,
        fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
      }}
    >
      {label}
    </div>
  )

  return (
    <div style={{ textAlign: align, ...style }}>
      {labelPosition === 'top' && LabelComponent}
      {ValueComponent}
      {labelPosition === 'bottom' && LabelComponent}
    </div>
  )
}

// Convenience variants with semantic colors
export const PositiveData: React.FC<Omit<DataDisplayProps, 'color'> & { theme?: Theme }> = (props) => (
  <DataDisplay {...props} color={props.theme?.colors.positive ?? tokens.colors.positive} />
)

export const NegativeData: React.FC<Omit<DataDisplayProps, 'color'> & { theme?: Theme }> = (props) => (
  <DataDisplay {...props} color={props.theme?.colors.negative ?? tokens.colors.negative} />
)

export default DataDisplay
