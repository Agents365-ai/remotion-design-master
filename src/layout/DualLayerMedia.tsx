/**
 * DualLayerMedia - For non-16:9 content (blurred bg + clear foreground)
 *
 * Structure:
 * 1. Background: Media scaled 140% + blurred (objectFit: cover)
 * 2. Overlay: Semi-transparent for readability
 * 3. Foreground: Clear media (objectFit: contain)
 *
 * Use for: portraits, screenshots, square images, any non-16:9 content
 */
// @ts-nocheck
import { Img, Video } from 'remotion'
import React from 'react'
import { FullBleed } from './FullBleed'

interface DualLayerMediaProps {
  /** Media source URL (use staticFile() for local files) */
  src: string
  /** Media type: 'image' or 'video' */
  type?: 'image' | 'video'
  /** Foreground fit mode: 'contain' or 'cover' */
  foregroundFit?: 'contain' | 'cover'
  /** Background blur amount in pixels */
  blurAmount?: number
  /** Overlay opacity (0-1) for readability */
  overlayOpacity?: number
  /** Overlay color (default: white) */
  overlayColor?: string
  /** Volume for videos (0 = muted) */
  volume?: number
}

export const DualLayerMedia: React.FC<DualLayerMediaProps> = ({
  src,
  type = 'image',
  foregroundFit = 'contain',
  blurAmount = 30,
  overlayOpacity = 0.3,
  overlayColor = '255,255,255',
  volume = 0,
}) => {
  const MediaComponent = type === 'video' ? Video : Img
  const mediaProps = type === 'video' ? { volume } : {}

  return (
    <FullBleed>
      {/* Background layer: scaled + blurred */}
      <MediaComponent
        src={src}
        style={{
          position: 'absolute',
          inset: '-20%', // Scale to 140% to ensure no edges visible
          width: '140%',
          height: '140%',
          objectFit: 'cover',
          filter: `blur(${blurAmount}px)`,
        }}
        {...mediaProps}
      />

      {/* Overlay layer: improves readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `rgba(${overlayColor},${overlayOpacity})`,
        }}
      />

      {/* Foreground layer: clear media */}
      <MediaComponent
        src={src}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: foregroundFit,
        }}
        {...mediaProps}
      />
    </FullBleed>
  )
}

export default DualLayerMedia
