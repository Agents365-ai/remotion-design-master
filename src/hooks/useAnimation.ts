/**
 * useAnimation - Animation utility hooks
 *
 * Common animation patterns for Remotion.
 */
// @ts-nocheck
import { useCurrentFrame, useVideoConfig, interpolate, Easing } from 'remotion'

interface UseAnimationOptions {
  /** Delay before animation starts (frames) */
  delay?: number
  /** Animation duration (frames) */
  duration?: number
  /** Easing function */
  easing?: (t: number) => number
}

/**
 * Basic progress animation (0 to 1)
 */
export function useProgress(options: UseAnimationOptions = {}) {
  const frame = useCurrentFrame()
  const { delay = 0, duration = 30, easing = Easing.out(Easing.cubic) } = options

  return interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing,
  })
}

/**
 * Fade animation (opacity)
 */
export function useFade(options: UseAnimationOptions = {}) {
  return useProgress(options)
}

/**
 * Slide animation with configurable direction
 */
export function useSlide(
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 30,
  options: UseAnimationOptions = {}
) {
  const progress = useProgress(options)

  const offset = interpolate(progress, [0, 1], [distance, 0])

  switch (direction) {
    case 'up':
      return { x: 0, y: offset }
    case 'down':
      return { x: 0, y: -offset }
    case 'left':
      return { x: offset, y: 0 }
    case 'right':
      return { x: -offset, y: 0 }
  }
}

/**
 * Scale animation with optional overshoot
 */
export function useScale(
  options: UseAnimationOptions & { overshoot?: number } = {}
) {
  const frame = useCurrentFrame()
  const { delay = 0, duration = 20, overshoot = 1.5 } = options

  return interpolate(frame - delay, [0, duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: Easing.out(Easing.back(overshoot)),
  })
}

/**
 * Loop animation (0 to 1 to 0, repeating)
 */
export function useLoop(cycleDuration: number = 60) {
  const frame = useCurrentFrame()
  return (Math.sin((frame / cycleDuration) * Math.PI * 2) + 1) / 2
}

/**
 * Pulse animation (scale oscillation)
 */
export function usePulse(
  minScale: number = 1,
  maxScale: number = 1.05,
  cycleDuration: number = 30
) {
  const frame = useCurrentFrame()
  return interpolate(
    Math.sin((frame / cycleDuration) * Math.PI * 2),
    [-1, 1],
    [minScale, maxScale]
  )
}

/**
 * Stagger delay calculator
 */
export function useStaggerDelay(index: number, delayPerItem: number = 10, initialDelay: number = 0) {
  return initialDelay + index * delayPerItem
}

/**
 * Section progress (0 to 1 over entire section)
 */
export function useSectionProgress() {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()
  return frame / durationInFrames
}

export default useProgress
