/**
 * Typewriter - Character-by-character text animation
 *
 * Text appears one character at a time.
 * Use for code, terminal output, dramatic reveals.
 */
// @ts-nocheck
import { useCurrentFrame, interpolate } from 'remotion'
import React from 'react'

interface TypewriterProps {
  /** Text to animate */
  text: string
  /** Delay before animation starts (frames) */
  delay?: number
  /** Frames per character */
  speed?: number
  /** Show blinking cursor */
  cursor?: boolean
  /** Cursor character */
  cursorChar?: string
  /** Text styles */
  style?: React.CSSProperties
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 0,
  speed = 2,
  cursor = true,
  cursorChar = '|',
  style,
}) => {
  const frame = useCurrentFrame()

  const totalDuration = text.length * speed
  const progress = interpolate(
    frame - delay,
    [0, totalDuration],
    [0, text.length],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  )

  const visibleChars = Math.floor(progress)
  const displayText = text.slice(0, visibleChars)

  // Cursor blink (every 15 frames)
  const showCursor = cursor && Math.floor(frame / 15) % 2 === 0

  return (
    <span style={style}>
      {displayText}
      {cursor && visibleChars < text.length && (
        <span style={{ opacity: showCursor ? 1 : 0 }}>{cursorChar}</span>
      )}
    </span>
  )
}

// Variant: Code typewriter with monospace
export const CodeTypewriter: React.FC<TypewriterProps> = (props) => (
  <Typewriter
    {...props}
    cursorChar="_"
    style={{
      fontFamily: '"SF Mono", "Fira Code", monospace',
      ...props.style,
    }}
  />
)

export default Typewriter
