/**
 * Stagger - Sequential child animations
 *
 * Automatically staggers animation timing for child elements.
 * Use for lists, grids, multiple items appearing in sequence.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate, Easing } from 'remotion'
import React from 'react'

interface StaggerProps {
  children: React.ReactNode
  /** Delay between each child (frames) */
  staggerDelay?: number
  /** Initial delay before first child (frames) */
  initialDelay?: number
  /** Animation duration for each child (frames) */
  duration?: number
  /** Animation type */
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'pop' | 'none'
  /** Container styles */
  style?: React.CSSProperties
}

interface StaggerItemProps {
  children: React.ReactNode
  index: number
  staggerDelay: number
  initialDelay: number
  duration: number
  animation: StaggerProps['animation']
}

const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  index,
  staggerDelay,
  initialDelay,
  duration,
  animation,
}) => {
  const frame = useCurrentFrame()
  const delay = initialDelay + index * staggerDelay

  const progress = interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.cubic),
  })

  const getAnimationStyle = (): React.CSSProperties => {
    switch (animation) {
      case 'fadeIn':
        return {
          opacity: progress,
          transform: `translateY(${interpolate(progress, [0, 1], [30, 0])}px)`,
        }
      case 'slideUp':
        return {
          opacity: progress,
          transform: `translateY(${interpolate(progress, [0, 1], [50, 0])}px)`,
        }
      case 'slideLeft':
        return {
          opacity: progress,
          transform: `translateX(${interpolate(progress, [0, 1], [50, 0])}px)`,
        }
      case 'pop':
        const popProgress = interpolate(frame - delay, [0, duration], [0, 1], {
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
          easing: Easing.out(Easing.back(1.5)),
        })
        return {
          transform: `scale(${popProgress})`,
        }
      case 'none':
      default:
        return {}
    }
  }

  return <div style={getAnimationStyle()}>{children}</div>
}

export const Stagger: React.FC<StaggerProps> = ({
  children,
  staggerDelay = 10,
  initialDelay = 0,
  duration = 20,
  animation = 'fadeIn',
  style,
}) => {
  const childArray = React.Children.toArray(children)

  return (
    <div style={style}>
      {childArray.map((child, index) => (
        <StaggerItem
          key={index}
          index={index}
          staggerDelay={staggerDelay}
          initialDelay={initialDelay}
          duration={duration}
          animation={animation}
        >
          {child}
        </StaggerItem>
      ))}
    </div>
  )
}

export default Stagger
