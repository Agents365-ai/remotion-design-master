/**
 * Icon - Emoji/icon wrapper with consistent sizing
 *
 * For emoji icons, SVG icons, icon containers.
 */
// @ts-nocheck
import React from 'react'
import { tokens, radii } from '../../tokens'
import type { Theme } from '../../themes'

type IconSize = 'small' | 'medium' | 'large' | 'xlarge'

interface IconProps {
  children: React.ReactNode
  /** Icon size */
  size?: IconSize
  /** Custom size in pixels */
  customSize?: number
  /** Background color */
  background?: string
  /** Border radius */
  rounded?: boolean
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const sizeMap: Record<IconSize, number> = {
  small: 40,
  medium: 60,
  large: 80,
  xlarge: 120,
}

export const Icon: React.FC<IconProps> = ({
  children,
  size = 'medium',
  customSize,
  background,
  rounded = false,
  theme,
  style,
}) => {
  const iconSize = customSize ?? sizeMap[size]

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: iconSize,
        width: background ? iconSize * 1.5 : 'auto',
        height: background ? iconSize * 1.5 : 'auto',
        background: background ?? 'transparent',
        borderRadius: rounded ? radii.full : radii.lg,
        lineHeight: 1,
        ...style,
      }}
    >
      {children}
    </span>
  )
}

// Icon with colored circle background
export const CircleIcon: React.FC<IconProps & { bgColor?: string }> = ({
  bgColor,
  theme,
  ...props
}) => (
  <Icon
    {...props}
    background={bgColor ?? (theme?.colors.accent ?? tokens.colors.accent) + '15'}
    rounded
  />
)

export default Icon
