// @ts-nocheck
/**
 * Podcast Video Template
 *
 * Optimized for podcast/commentary style videos with:
 * - Multiple talking sections
 * - Data visualizations
 * - Quote highlights
 * - Chapter navigation
 *
 * Usage:
 *   1. Generate timing.json with generate_tts.py
 *   2. Copy this template to your project
 *   3. Customize sections based on your content
 */

import { AbsoluteFill, Sequence, Audio, staticFile, useCurrentFrame } from 'remotion'
import {
  FullBleed, ContentArea, CoverMedia,
  FadeIn, SpringPop, SlideIn,
  Title, Text, Caption,
  DataDisplay, AnimatedCounter, ProgressBar,
  Card, List,
  ChapterProgressBar,
  PulsingGlow, GradientBackground,
  tokens, font, darkTech, minimalWhite,
} from '../design'

// =============================================================================
// SECTION TEMPLATES
// =============================================================================

/**
 * Intro/Hero Section
 * Large title with optional background media
 */
export const IntroSection = ({
  title,
  subtitle,
  backgroundImage,
}: {
  title: string
  subtitle?: string
  backgroundImage?: string
}) => (
  <FullBleed background="#0a0a0f">
    {backgroundImage && (
      <CoverMedia
        src={staticFile(backgroundImage)}
        type="image"
        style={{ opacity: 0.3 }}
      />
    )}
    <PulsingGlow color="0,212,255" minOpacity={0.1} maxOpacity={0.3} />
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <Title
          size="hero"
          style={{
            color: '#fff',
            textShadow: '0 0 40px rgba(0,212,255,0.5)',
          }}
        >
          {title}
        </Title>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={20}>
          <Title
            size="medium"
            style={{
              color: 'rgba(255,255,255,0.7)',
              marginTop: 24,
            }}
          >
            {subtitle}
          </Title>
        </FadeIn>
      )}
    </ContentArea>
  </FullBleed>
)

/**
 * Topic Section
 * For discussing a single topic with bullet points
 */
export const TopicSection = ({
  title,
  points,
  theme = 'light',
}: {
  title: string
  points: string[]
  theme?: 'light' | 'dark'
}) => {
  const isDark = theme === 'dark'
  const bg = isDark ? '#0a0a0f' : tokens.colors.bg
  const textColor = isDark ? '#fff' : tokens.colors.text

  return (
    <FullBleed background={bg}>
      <ContentArea>
        <FadeIn delay={0}>
          <Title style={{ color: textColor }}>{title}</Title>
        </FadeIn>
        <div style={{ marginTop: 48 }}>
          <List
            items={points}
            listStyle="bullet"
            gap={32}
            staggerDelay={15}
            style={{ color: textColor }}
          />
        </div>
      </ContentArea>
    </FullBleed>
  )
}

/**
 * Data Section
 * Display key metrics with animated counters
 */
export const DataSection = ({
  title,
  metrics,
}: {
  title: string
  metrics: Array<{
    value: number
    label: string
    prefix?: string
    suffix?: string
    color?: string
  }>
}) => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea>
      <FadeIn delay={0}>
        <Title>{title}</Title>
      </FadeIn>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 60,
        flexWrap: 'wrap',
        gap: 40,
      }}>
        {metrics.map((m, i) => (
          <SpringPop key={i} delay={20 + i * 15}>
            <div style={{ textAlign: 'center' }}>
              <AnimatedCounter
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                delay={20 + i * 15}
                style={{
                  fontSize: tokens.fontSize.dataLarge,
                  fontWeight: 800,
                  color: m.color || tokens.colors.accent,
                }}
              />
              <Caption style={{ marginTop: 16 }}>{m.label}</Caption>
            </div>
          </SpringPop>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)

/**
 * Quote Section
 * Highlight an important quote
 */
export const QuoteSection = ({
  quote,
  attribution,
}: {
  quote: string
  attribution?: string
}) => (
  <FullBleed>
    <GradientBackground gradient="purpleBlue" />
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <div style={{
          fontSize: 64,
          fontWeight: 700,
          color: '#fff',
          fontStyle: 'italic',
          textAlign: 'center',
          lineHeight: 1.4,
          maxWidth: '90%',
          margin: '0 auto',
        }}>
          "{quote}"
        </div>
      </FadeIn>
      {attribution && (
        <FadeIn delay={25}>
          <Caption style={{
            color: 'rgba(255,255,255,0.8)',
            textAlign: 'center',
            marginTop: 32,
          }}>
            — {attribution}
          </Caption>
        </FadeIn>
      )}
    </ContentArea>
  </FullBleed>
)

/**
 * Comparison Section
 * Before/After or A vs B comparison
 */
export const ComparisonSection = ({
  title,
  leftLabel,
  leftItems,
  rightLabel,
  rightItems,
}: {
  title: string
  leftLabel: string
  leftItems: string[]
  rightLabel: string
  rightItems: string[]
}) => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea>
      <FadeIn delay={0}>
        <Title style={{ textAlign: 'center' }}>{title}</Title>
      </FadeIn>
      <div style={{
        display: 'flex',
        gap: 60,
        marginTop: 48,
      }}>
        <SlideIn direction="left" delay={15}>
          <Card style={{ flex: 1, padding: 40 }}>
            <Caption style={{
              color: tokens.colors.negative,
              marginBottom: 24,
            }}>
              {leftLabel}
            </Caption>
            <List items={leftItems} listStyle="bullet" gap={20} />
          </Card>
        </SlideIn>
        <SlideIn direction="right" delay={15}>
          <Card style={{ flex: 1, padding: 40 }}>
            <Caption style={{
              color: tokens.colors.positive,
              marginBottom: 24,
            }}>
              {rightLabel}
            </Caption>
            <List items={rightItems} listStyle="check" gap={20} />
          </Card>
        </SlideIn>
      </div>
    </ContentArea>
  </FullBleed>
)

/**
 * Outro Section
 * Call to action with social buttons
 */
export const OutroSection = ({
  message = 'Thanks for Watching!',
  ctas = ['👍 Like', '🔔 Subscribe', '💬 Comment'],
}: {
  message?: string
  ctas?: string[]
}) => (
  <FullBleed background="#0a0a0f">
    <PulsingGlow color="168,85,247" />
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <Title
          size="large"
          style={{
            color: '#fff',
            textAlign: 'center',
          }}
        >
          {message}
        </Title>
      </FadeIn>
      <FadeIn delay={25}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 40,
          marginTop: 48,
        }}>
          {ctas.map((cta, i) => (
            <SpringPop key={i} delay={30 + i * 10}>
              <Card style={{
                padding: '24px 48px',
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
              }}>
                <Text style={{ color: '#fff' }}>{cta}</Text>
              </Card>
            </SpringPop>
          ))}
        </div>
      </FadeIn>
    </ContentArea>
  </FullBleed>
)
