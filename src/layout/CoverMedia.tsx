/**
 * CoverMedia - Full-bleed images/videos with objectFit: cover
 *
 * Hard constraints enforced:
 * - width: 100%; height: 100%
 * - objectFit: cover (crops to fill)
 * - position: absolute; inset: 0
 */
// @ts-nocheck
import { Img, Video } from 'remotion'
import React from 'react'

interface CoverMediaProps {
  /** Media source URL (use staticFile() for local files) */
  src: string
  /** Media type: 'image' or 'video' */
  type?: 'image' | 'video'
  /** Additional CSS styles */
  style?: React.CSSProperties
  /** Alt text for images */
  alt?: string
  /** Volume for videos (0 = muted) */
  volume?: number
}

export const CoverMedia: React.FC<CoverMediaProps> = ({
  src,
  type = 'image',
  style,
  alt = '',
  volume = 0,
}) => {
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    ...style,
  }

  if (type === 'video') {
    return <Video src={src} style={baseStyle} volume={volume} />
  }

  return <Img src={src} style={baseStyle} alt={alt} />
}

export default CoverMedia
