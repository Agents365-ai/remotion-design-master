/**
 * List - Styled list component
 *
 * For feature lists, bullet points, numbered items.
 */
// @ts-nocheck
import React from 'react'
import { tokens, fontSize, fontWeight, fontFamily, spacing } from '../../tokens'
import type { Theme } from '../../themes'

type ListStyle = 'bullet' | 'number' | 'check' | 'none' | 'emoji'

interface ListItemProps {
  children: React.ReactNode
  /** Custom icon/emoji */
  icon?: string | React.ReactNode
}

interface ListProps {
  items: (string | ListItemProps)[]
  /** List style type */
  listStyle?: ListStyle
  /** Custom icon for all items (overridden by item.icon) */
  icon?: string | React.ReactNode
  /** Gap between items */
  gap?: number
  /** Icon size */
  iconSize?: number
  /** Text size */
  textSize?: number
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

const defaultIcons: Record<ListStyle, string> = {
  bullet: '•',
  number: '', // Handled separately
  check: '✓',
  none: '',
  emoji: '→',
}

export const List: React.FC<ListProps> = ({
  items,
  listStyle = 'bullet',
  icon,
  gap = 24,
  iconSize = 40,
  textSize,
  theme,
  style,
}) => {
  const textColor = theme?.colors.text ?? tokens.colors.text
  const accentColor = theme?.colors.accent ?? tokens.colors.accent
  const resolvedTextSize = textSize ?? theme?.typography.fontSize.body ?? fontSize.body

  const getIcon = (item: string | ListItemProps, index: number): React.ReactNode => {
    // Check for item-specific icon
    if (typeof item !== 'string' && item.icon) {
      return item.icon
    }

    // Use custom icon if provided
    if (icon) {
      return icon
    }

    // Use list style default
    if (listStyle === 'number') {
      return `${index + 1}.`
    }

    return defaultIcons[listStyle]
  }

  const getContent = (item: string | ListItemProps): React.ReactNode => {
    if (typeof item === 'string') return item
    return item.children
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, ...style }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 16,
          }}
        >
          {listStyle !== 'none' && (
            <span
              style={{
                fontSize: iconSize,
                fontWeight: fontWeight.bold,
                color: accentColor,
                lineHeight: 1,
                minWidth: listStyle === 'number' ? 60 : 40,
                textAlign: 'center',
              }}
            >
              {getIcon(item, index)}
            </span>
          )}
          <span
            style={{
              fontSize: resolvedTextSize,
              fontWeight: fontWeight.medium,
              color: textColor,
              lineHeight: 1.4,
              fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
            }}
          >
            {getContent(item)}
          </span>
        </div>
      ))}
    </div>
  )
}

// Numbered list
export const NumberedList: React.FC<Omit<ListProps, 'listStyle'>> = (props) => (
  <List {...props} listStyle="number" />
)

// Check list
export const CheckList: React.FC<Omit<ListProps, 'listStyle'>> = (props) => (
  <List {...props} listStyle="check" />
)

// Emoji list
export const EmojiList: React.FC<Omit<ListProps, 'listStyle'>> = (props) => (
  <List {...props} listStyle="emoji" />
)

export default List
