// @ts-nocheck
/**
 * Minimal Podcast Example
 *
 * A complete, minimal example of a podcast-style video
 * using the Remotion Design Master components.
 *
 * This example demonstrates:
 * - Basic section structure
 * - Audio sync with timing.json
 * - Chapter progress bar
 * - Clean minimal white theme
 */

import { AbsoluteFill, Sequence, Audio, staticFile } from 'remotion'
import {
  FullBleed, ContentArea,
  FadeIn, SpringPop,
  Title, Text, Caption,
  DataDisplay, List,
  Card, ChapterProgressBar,
  tokens, font,
} from './design'

// Timing data (normally imported from timing.json)
const timing = {
  total_frames: 900, // 30 seconds at 30fps
  fps: 30,
  sections: [
    { name: 'intro', label: 'Intro', start_frame: 0, duration_frames: 180 },
    { name: 'topic1', label: 'Topic 1', start_frame: 180, duration_frames: 270 },
    { name: 'topic2', label: 'Topic 2', start_frame: 450, duration_frames: 270 },
    { name: 'outro', label: 'Outro', start_frame: 720, duration_frames: 180 },
  ],
}

// =============================================================================
// SECTIONS
// =============================================================================

const IntroSection = () => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <Title size="hero">Welcome to the Show</Title>
      </FadeIn>
      <FadeIn delay={20}>
        <Title
          size="medium"
          style={{ color: tokens.colors.textMuted, marginTop: 24 }}
        >
          Episode 1: Getting Started
        </Title>
      </FadeIn>
    </ContentArea>
  </FullBleed>
)

const Topic1Section = () => (
  <FullBleed background="#f8fafc">
    <ContentArea>
      <FadeIn delay={0}>
        <Title>Today's Topic</Title>
      </FadeIn>
      <FadeIn delay={20}>
        <div style={{ marginTop: 48 }}>
          <List
            items={[
              'First key point to discuss',
              'Second important concept',
              'Third takeaway for viewers',
            ]}
            listStyle="bullet"
            gap={32}
            staggerDelay={15}
          />
        </div>
      </FadeIn>
    </ContentArea>
  </FullBleed>
)

const Topic2Section = () => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea>
      <FadeIn delay={0}>
        <Title>Key Statistics</Title>
      </FadeIn>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 60,
      }}>
        {[
          { value: '85%', label: 'Success Rate' },
          { value: '2.5x', label: 'Growth' },
          { value: '10K+', label: 'Users' },
        ].map((item, i) => (
          <SpringPop key={i} delay={20 + i * 15}>
            <DataDisplay
              value={item.value}
              label={item.label}
              size="large"
            />
          </SpringPop>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)

const OutroSection = () => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <Title size="large" style={{ textAlign: 'center' }}>
          Thanks for Watching!
        </Title>
      </FadeIn>
      <FadeIn delay={25}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 40,
          marginTop: 48,
        }}>
          <Card style={{ padding: '24px 48px' }}>
            <Text>👍 Like</Text>
          </Card>
          <Card style={{ padding: '24px 48px' }}>
            <Text>🔔 Subscribe</Text>
          </Card>
        </div>
      </FadeIn>
    </ContentArea>
  </FullBleed>
)

// =============================================================================
// MAIN COMPOSITION
// =============================================================================

export const MinimalPodcast = () => {
  return (
    <AbsoluteFill style={{
      fontFamily: font,
      background: tokens.colors.bg,
    }}>
      {/* 4K Scale Wrapper */}
      <AbsoluteFill style={{
        transform: 'scale(2)',
        transformOrigin: 'top left',
        width: '50%',
        height: '50%',
      }}>
        {/* Audio (uncomment when you have audio file) */}
        {/* <Audio src={staticFile('podcast_audio.wav')} /> */}

        {/* Chapter Progress Bar */}
        <ChapterProgressBar
          chapters={timing.sections}
          totalFrames={timing.total_frames}
        />

        {/* Sections */}
        <Sequence from={0} durationInFrames={180}>
          <IntroSection />
        </Sequence>

        <Sequence from={180} durationInFrames={270}>
          <Topic1Section />
        </Sequence>

        <Sequence from={450} durationInFrames={270}>
          <Topic2Section />
        </Sequence>

        <Sequence from={720} durationInFrames={180}>
          <OutroSection />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  )
}

export default MinimalPodcast
