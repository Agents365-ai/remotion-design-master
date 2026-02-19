// @ts-nocheck
/**
 * Remotion Root Configuration
 *
 * This file registers your video compositions with Remotion.
 * Copy to your project and customize.
 *
 * Usage:
 *   1. Copy to your project: cp templates/Root.tsx src/remotion/
 *   2. Update imports to point to your video components
 *   3. Adjust fps, dimensions, and duration as needed
 */

import { Composition, Still } from 'remotion'
import { MyVideo } from './Video'

// Import timing if available
// import timing from '../../videos/your-video/timing.json'

// Default configuration
const FPS = 30
const WIDTH = 3840  // 4K
const HEIGHT = 2160 // 4K
const DEFAULT_DURATION = 30 * 30  // 30 seconds at 30fps

export const RemotionRoot = () => {
  // Use timing.json total_frames if available, otherwise default
  // const totalFrames = timing?.total_frames || DEFAULT_DURATION

  return (
    <>
      {/* Main Video Composition */}
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={DEFAULT_DURATION}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
        defaultProps={{}}
      />

      {/* 16:9 Thumbnail for video platforms */}
      <Still
        id="Thumbnail16x9"
        component={MyVideo}
        width={1920}
        height={1080}
        defaultProps={{}}
      />

      {/* Preview composition at 1080p for faster iteration */}
      <Composition
        id="Preview"
        component={MyVideo}
        durationInFrames={DEFAULT_DURATION}
        fps={FPS}
        width={1920}
        height={1080}
        defaultProps={{}}
      />
    </>
  )
}
