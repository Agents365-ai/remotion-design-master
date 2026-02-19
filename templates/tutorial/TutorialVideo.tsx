// @ts-nocheck
/**
 * Tutorial Video Template
 *
 * Optimized for educational/how-to content with:
 * - Step-by-step instructions
 * - Code demonstrations
 * - Screen recording placeholders
 * - Progress indicators
 *
 * Usage:
 *   1. Copy to your project
 *   2. Replace screen recording placeholders with actual captures
 *   3. Customize steps and content
 */

import { AbsoluteFill, Sequence, Audio, staticFile, Img, Video } from 'remotion'
import {
  FullBleed, ContentArea, DualLayerMedia,
  FadeIn, SpringPop, SlideIn, Typewriter,
  Title, Text, Caption, Code, CodeBlock,
  DataDisplay, ProgressBar,
  Card, List, Badge,
  tokens, font,
} from '../design'

// =============================================================================
// TUTORIAL SECTION COMPONENTS
// =============================================================================

/**
 * Title Card
 * Opening slide with tutorial name
 */
export const TitleCard = ({
  title,
  subtitle,
  duration,
  level = 'Beginner',
}: {
  title: string
  subtitle?: string
  duration?: string
  level?: 'Beginner' | 'Intermediate' | 'Advanced'
}) => {
  const levelColor = {
    Beginner: tokens.colors.positive,
    Intermediate: tokens.colors.warning,
    Advanced: tokens.colors.negative,
  }[level]

  return (
    <FullBleed background={tokens.colors.bg}>
      <ContentArea verticalAlign="center">
        <FadeIn delay={0}>
          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <Badge style={{ background: levelColor, color: '#fff' }}>
              {level}
            </Badge>
            {duration && (
              <Badge style={{ background: tokens.colors.textMuted, color: '#fff' }}>
                {duration}
              </Badge>
            )}
          </div>
        </FadeIn>
        <FadeIn delay={10}>
          <Title size="hero">{title}</Title>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={25}>
            <Title
              size="medium"
              style={{ color: tokens.colors.textMuted, marginTop: 16 }}
            >
              {subtitle}
            </Title>
          </FadeIn>
        )}
      </ContentArea>
    </FullBleed>
  )
}

/**
 * Agenda Section
 * Show what will be covered
 */
export const AgendaSection = ({
  title = "What You'll Learn",
  items,
}: {
  title?: string
  items: string[]
}) => (
  <FullBleed background="#f8fafc">
    <ContentArea>
      <FadeIn delay={0}>
        <Title>{title}</Title>
      </FadeIn>
      <div style={{ marginTop: 48 }}>
        <List
          items={items}
          listStyle="numbered"
          gap={28}
          staggerDelay={12}
        />
      </div>
    </ContentArea>
  </FullBleed>
)

/**
 * Step Section
 * Individual tutorial step with number indicator
 */
export const StepSection = ({
  stepNumber,
  totalSteps,
  title,
  description,
  children,
}: {
  stepNumber: number
  totalSteps: number
  title: string
  description?: string
  children?: React.ReactNode
}) => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea>
      {/* Progress indicator */}
      <FadeIn delay={0}>
        <div style={{ marginBottom: 32 }}>
          <Caption style={{ marginBottom: 8 }}>
            Step {stepNumber} of {totalSteps}
          </Caption>
          <ProgressBar
            value={(stepNumber / totalSteps) * 100}
            height={8}
            delay={0}
            duration={20}
          />
        </div>
      </FadeIn>

      {/* Step title */}
      <FadeIn delay={10}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: tokens.colors.accent,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 40,
            fontWeight: 800,
          }}>
            {stepNumber}
          </div>
          <Title>{title}</Title>
        </div>
      </FadeIn>

      {description && (
        <FadeIn delay={25}>
          <Text style={{ marginTop: 24, marginLeft: 104 }}>
            {description}
          </Text>
        </FadeIn>
      )}

      {/* Step content */}
      {children && (
        <FadeIn delay={35}>
          <div style={{ marginTop: 40, marginLeft: 104 }}>
            {children}
          </div>
        </FadeIn>
      )}
    </ContentArea>
  </FullBleed>
)

/**
 * Code Demo Section
 * Show code with syntax highlighting placeholder
 */
export const CodeDemoSection = ({
  title,
  description,
  code,
  language = 'typescript',
}: {
  title: string
  description?: string
  code: string
  language?: string
}) => (
  <FullBleed background="#1e1e1e">
    <ContentArea>
      <FadeIn delay={0}>
        <Title style={{ color: '#fff' }}>{title}</Title>
      </FadeIn>
      {description && (
        <FadeIn delay={15}>
          <Text style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16 }}>
            {description}
          </Text>
        </FadeIn>
      )}
      <FadeIn delay={25}>
        <Card style={{
          marginTop: 40,
          padding: 40,
          background: '#2d2d2d',
          borderRadius: 16,
        }}>
          <Caption style={{
            color: 'rgba(255,255,255,0.5)',
            marginBottom: 16,
          }}>
            {language}
          </Caption>
          <Typewriter
            text={code}
            speed={1}
            style={{
              fontFamily: tokens.fontFamily.mono,
              fontSize: 28,
              color: '#e6e6e6',
              lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
            }}
          />
        </Card>
      </FadeIn>
    </ContentArea>
  </FullBleed>
)

/**
 * Screen Recording Section
 * Placeholder for screen capture content
 */
export const ScreenRecordingSection = ({
  videoSrc,
  imageSrc,
  caption,
}: {
  videoSrc?: string
  imageSrc?: string
  caption?: string
}) => (
  <FullBleed background="#0a0a0f">
    {/* Use DualLayerMedia for non-16:9 screenshots */}
    {imageSrc && (
      <DualLayerMedia
        src={staticFile(imageSrc)}
        type="image"
        blurAmount={30}
        overlayOpacity={0.5}
      />
    )}
    {videoSrc && (
      <Video
        src={staticFile(videoSrc)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    )}
    {caption && (
      <div style={{
        position: 'absolute',
        bottom: 120,
        left: 0,
        right: 0,
        textAlign: 'center',
      }}>
        <FadeIn delay={0}>
          <Card style={{
            display: 'inline-block',
            padding: '16px 32px',
            background: 'rgba(0,0,0,0.8)',
          }}>
            <Caption style={{ color: '#fff' }}>{caption}</Caption>
          </Card>
        </FadeIn>
      </div>
    )}
  </FullBleed>
)

/**
 * Key Takeaways Section
 * Summary of important points
 */
export const KeyTakeawaysSection = ({
  title = 'Key Takeaways',
  items,
}: {
  title?: string
  items: string[]
}) => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea>
      <FadeIn delay={0}>
        <Title>{title}</Title>
      </FadeIn>
      <div style={{ marginTop: 48 }}>
        <List
          items={items}
          listStyle="check"
          gap={28}
          staggerDelay={15}
        />
      </div>
    </ContentArea>
  </FullBleed>
)

/**
 * Call to Action Section
 * Next steps and resources
 */
export const CTASection = ({
  title = 'Next Steps',
  actions,
}: {
  title?: string
  actions: Array<{ label: string; description?: string }>
}) => (
  <FullBleed background="#f8fafc">
    <ContentArea>
      <FadeIn delay={0}>
        <Title style={{ textAlign: 'center' }}>{title}</Title>
      </FadeIn>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        marginTop: 48,
        flexWrap: 'wrap',
      }}>
        {actions.map((action, i) => (
          <SpringPop key={i} delay={20 + i * 15}>
            <Card style={{
              padding: 40,
              textAlign: 'center',
              minWidth: 280,
            }}>
              <Text style={{ fontWeight: 700 }}>{action.label}</Text>
              {action.description && (
                <Caption style={{ marginTop: 12 }}>
                  {action.description}
                </Caption>
              )}
            </Card>
          </SpringPop>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)
