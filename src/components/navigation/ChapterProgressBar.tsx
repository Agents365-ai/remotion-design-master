/**
 * ChapterProgressBar - Video chapter indicator
 *
 * Shows current chapter and overall video progress.
 * Typically placed at bottom of video.
 */
// @ts-nocheck
import { useCurrentFrame } from 'remotion'
import React from 'react'
import { tokens, fontSize, fontWeight, fontFamily } from '../../tokens'
import type { Theme } from '../../themes'

interface Chapter {
  name: string
  label: string
  start_frame: number
  duration_frames: number
}

interface ChapterProgressBarProps {
  /** Chapter definitions */
  chapters: Chapter[]
  /** Total video frames */
  totalFrames: number
  /** Bar height */
  height?: number
  /** Active chapter color */
  activeColor?: string
  /** Completed chapter color */
  completedColor?: string
  /** Upcoming chapter color */
  upcomingColor?: string
  /** Theme for styling */
  theme?: Theme
  /** Additional CSS styles */
  style?: React.CSSProperties
}

export const ChapterProgressBar: React.FC<ChapterProgressBarProps> = ({
  chapters,
  totalFrames,
  height = 130,
  activeColor,
  completedColor,
  upcomingColor,
  theme,
  style,
}) => {
  const frame = useCurrentFrame()
  const progress = frame / totalFrames

  const colors = {
    active: activeColor ?? '#4f6ef7',
    completed: completedColor ?? '#f3f4f6',
    upcoming: upcomingColor ?? '#f9fafb',
    text: theme?.colors.text ?? tokens.colors.text,
    textMuted: theme?.colors.textMuted ?? tokens.colors.textMuted,
    border: theme?.colors.border ?? '#e5e7eb',
    bg: theme?.colors.bg ?? '#fff',
  }

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height,
        background: colors.bg,
        borderTop: `1px solid ${colors.border}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 50px',
        gap: 16,
        fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
        ...style,
      }}
    >
      {chapters.map((ch) => {
        const chStart = ch.start_frame / totalFrames
        const chEnd = (ch.start_frame + ch.duration_frames) / totalFrames
        const isActive = progress >= chStart && progress < chEnd
        const isPast = progress >= chEnd
        const chProgress = isActive
          ? (progress - chStart) / (chEnd - chStart)
          : isPast ? 1 : 0

        return (
          <div
            key={ch.name}
            style={{
              flex: ch.duration_frames,
              height: 80,
              borderRadius: 40,
              position: 'relative',
              overflow: 'hidden',
              background: isActive ? colors.active : isPast ? colors.completed : colors.upcoming,
              border: isActive ? 'none' : `1px solid ${colors.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Progress fill for active chapter */}
            {isActive && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${chProgress * 100}%`,
                  background: 'rgba(255,255,255,0.25)',
                  borderRadius: 40,
                }}
              />
            )}
            {/* Chapter label */}
            <span
              style={{
                position: 'relative',
                zIndex: 1,
                color: isActive ? '#fff' : isPast ? colors.text : colors.textMuted,
                fontSize: fontSize.subtitle,
                fontWeight: isActive ? fontWeight.bold : fontWeight.medium,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                padding: '0 20px',
              }}
            >
              {ch.label}
            </span>
          </div>
        )
      })}

      {/* Bottom progress line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: colors.border,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: colors.active,
          }}
        />
      </div>
    </div>
  )
}

export default ChapterProgressBar
