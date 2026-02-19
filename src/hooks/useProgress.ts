/**
 * useProgress - Video progress utilities
 *
 * Track video/section progress for animations.
 */
// @ts-nocheck
import { useCurrentFrame, useVideoConfig } from 'remotion'

/**
 * Get current progress through the video (0-1)
 */
export function useVideoProgress() {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()
  return frame / durationInFrames
}

/**
 * Get current time in seconds
 */
export function useCurrentTime() {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  return frame / fps
}

/**
 * Get formatted time string (MM:SS)
 */
export function useFormattedTime() {
  const time = useCurrentTime()
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

/**
 * Check if we're within a specific frame range
 */
export function useInRange(startFrame: number, endFrame: number) {
  const frame = useCurrentFrame()
  return frame >= startFrame && frame < endFrame
}

/**
 * Get progress within a specific range (0-1)
 */
export function useRangeProgress(startFrame: number, endFrame: number) {
  const frame = useCurrentFrame()
  if (frame < startFrame) return 0
  if (frame >= endFrame) return 1
  return (frame - startFrame) / (endFrame - startFrame)
}

/**
 * Calculate timing for chapters/sections
 */
export function useChapterProgress(chapters: { start_frame: number; duration_frames: number }[]) {
  const frame = useCurrentFrame()

  const currentChapterIndex = chapters.findIndex((ch, i) => {
    const start = ch.start_frame
    const end = ch.start_frame + ch.duration_frames
    return frame >= start && frame < end
  })

  if (currentChapterIndex === -1) {
    return {
      currentChapter: -1,
      chapterProgress: 0,
      isFirstChapter: false,
      isLastChapter: false,
    }
  }

  const chapter = chapters[currentChapterIndex]
  const chapterProgress = (frame - chapter.start_frame) / chapter.duration_frames

  return {
    currentChapter: currentChapterIndex,
    chapterProgress,
    isFirstChapter: currentChapterIndex === 0,
    isLastChapter: currentChapterIndex === chapters.length - 1,
  }
}

export default useVideoProgress
