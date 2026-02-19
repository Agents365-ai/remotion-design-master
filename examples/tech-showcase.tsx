// @ts-nocheck
/**
 * Tech Showcase Example
 *
 * A dark-themed tech/AI showcase video demonstrating:
 * - Dark theme with neon accents
 * - Glassmorphism effects
 * - Pulsing glow animations
 * - Animated counters
 * - Gradient backgrounds
 */

import { AbsoluteFill, Sequence, useCurrentFrame, interpolate } from 'remotion'
import {
  FullBleed, ContentArea,
  FadeIn, SpringPop, SlideIn,
  Title, Text, Caption, Code,
  DataDisplay, AnimatedCounter, ProgressBar,
  Card, List, Badge,
  GradientBackground, PulsingGlow, GlassMorphism,
  tokens, font, darkTech,
} from './design'

// =============================================================================
// DARK THEME SECTIONS
// =============================================================================

const HeroSection = () => (
  <FullBleed background="#0a0a0f">
    <PulsingGlow color="0,212,255" minOpacity={0.1} maxOpacity={0.3} />
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <Badge style={{
          background: 'rgba(0,212,255,0.2)',
          color: '#00d4ff',
          marginBottom: 32,
        }}>
          🚀 Introducing
        </Badge>
      </FadeIn>
      <FadeIn delay={10}>
        <Title
          size="hero"
          style={{
            color: '#fff',
            textShadow: '0 0 60px rgba(0,212,255,0.5)',
          }}
        >
          Next-Gen AI Platform
        </Title>
      </FadeIn>
      <FadeIn delay={25}>
        <Title
          size="medium"
          style={{
            color: 'rgba(255,255,255,0.7)',
            marginTop: 24,
          }}
        >
          Built for the future of development
        </Title>
      </FadeIn>
    </ContentArea>
  </FullBleed>
)

const MetricsSection = () => (
  <FullBleed background="#0a0a0f">
    <ContentArea>
      <FadeIn delay={0}>
        <Caption style={{ color: '#00d4ff', textAlign: 'center' }}>
          PERFORMANCE METRICS
        </Caption>
        <Title style={{ color: '#fff', textAlign: 'center', marginTop: 16 }}>
          Blazing Fast
        </Title>
      </FadeIn>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: 60,
      }}>
        {[
          { value: 10, suffix: 'ms', label: 'Latency', color: '#00d4ff' },
          { value: 99.99, suffix: '%', label: 'Uptime', color: '#22c55e' },
          { value: 1000000, label: 'Requests/sec', color: '#a855f7' },
        ].map((metric, i) => (
          <SpringPop key={i} delay={20 + i * 15}>
            <GlassMorphism style={{ padding: 48, textAlign: 'center' }}>
              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                delay={20 + i * 15}
                style={{
                  fontSize: 100,
                  fontWeight: 800,
                  color: metric.color,
                }}
              />
              <Caption style={{ color: 'rgba(255,255,255,0.6)', marginTop: 16 }}>
                {metric.label}
              </Caption>
            </GlassMorphism>
          </SpringPop>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)

const FeaturesSection = () => (
  <FullBleed>
    <GradientBackground gradient="purpleBlue" />
    <ContentArea>
      <FadeIn delay={0}>
        <Title style={{ color: '#fff', textAlign: 'center' }}>
          Core Features
        </Title>
      </FadeIn>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 40,
        marginTop: 60,
      }}>
        {[
          { icon: '⚡', title: 'Lightning Fast', desc: 'Sub-millisecond inference' },
          { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
          { icon: '🌐', title: 'Global', desc: 'Edge deployment worldwide' },
          { icon: '📊', title: 'Analytics', desc: 'Real-time insights' },
          { icon: '🔄', title: 'Auto-Scale', desc: 'Handles any load' },
          { icon: '🛠️', title: 'Dev Tools', desc: 'Built for developers' },
        ].map((feature, i) => (
          <SpringPop key={i} delay={15 + i * 10}>
            <GlassMorphism style={{ padding: 36, textAlign: 'center' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>
                {feature.icon}
              </div>
              <Text style={{ color: '#fff', fontWeight: 700 }}>
                {feature.title}
              </Text>
              <Caption style={{ color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>
                {feature.desc}
              </Caption>
            </GlassMorphism>
          </SpringPop>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)

const CodeSection = () => (
  <FullBleed background="#0a0a0f">
    <ContentArea>
      <FadeIn delay={0}>
        <Title style={{ color: '#fff' }}>Simple Integration</Title>
      </FadeIn>
      <SlideIn direction="left" delay={15}>
        <Card style={{
          marginTop: 48,
          padding: 48,
          background: '#1e1e1e',
          borderRadius: 24,
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          <Caption style={{ color: '#00d4ff', marginBottom: 20 }}>
            TypeScript
          </Caption>
          <Code style={{
            fontSize: 28,
            color: '#e6e6e6',
            lineHeight: 1.8,
          }}>
{`import { AI } from '@platform/sdk'

const response = await AI.generate({
  model: 'gpt-next',
  prompt: 'Hello, world!',
  stream: true,
})

for await (const chunk of response) {
  console.log(chunk.text)
}`}
          </Code>
        </Card>
      </SlideIn>
    </ContentArea>
  </FullBleed>
)

const CTASection = () => (
  <FullBleed background="#0a0a0f">
    <PulsingGlow color="168,85,247" minOpacity={0.1} maxOpacity={0.25} />
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <Title
          size="large"
          style={{
            color: '#fff',
            textAlign: 'center',
            textShadow: '0 0 40px rgba(168,85,247,0.5)',
          }}
        >
          Ready to Build?
        </Title>
      </FadeIn>
      <FadeIn delay={20}>
        <Text style={{
          color: 'rgba(255,255,255,0.7)',
          textAlign: 'center',
          marginTop: 24,
        }}>
          Start building with the most powerful AI platform
        </Text>
      </FadeIn>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 32,
        marginTop: 48,
      }}>
        <SpringPop delay={35}>
          <Card style={{
            padding: '20px 48px',
            background: '#a855f7',
            border: 'none',
          }}>
            <Text style={{ color: '#fff', fontWeight: 700 }}>
              Get Started Free
            </Text>
          </Card>
        </SpringPop>
        <SpringPop delay={45}>
          <GlassMorphism style={{ padding: '20px 48px' }}>
            <Text style={{ color: '#fff' }}>View Docs</Text>
          </GlassMorphism>
        </SpringPop>
      </div>
    </ContentArea>
  </FullBleed>
)

// =============================================================================
// MAIN COMPOSITION
// =============================================================================

export const TechShowcase = () => {
  return (
    <AbsoluteFill style={{
      fontFamily: font,
      background: '#0a0a0f',
    }}>
      {/* 4K Scale Wrapper */}
      <AbsoluteFill style={{
        transform: 'scale(2)',
        transformOrigin: 'top left',
        width: '50%',
        height: '50%',
      }}>
        <Sequence from={0} durationInFrames={150}>
          <HeroSection />
        </Sequence>

        <Sequence from={150} durationInFrames={180}>
          <MetricsSection />
        </Sequence>

        <Sequence from={330} durationInFrames={180}>
          <FeaturesSection />
        </Sequence>

        <Sequence from={510} durationInFrames={150}>
          <CodeSection />
        </Sequence>

        <Sequence from={660} durationInFrames={120}>
          <CTASection />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  )
}

export default TechShowcase
