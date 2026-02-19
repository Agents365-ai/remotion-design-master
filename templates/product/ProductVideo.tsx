// @ts-nocheck
/**
 * Product Video Template
 *
 * Optimized for product demos and marketing with:
 * - Hero product shots
 * - Feature showcases
 * - Pricing comparison
 * - Social proof
 * - Call to action
 *
 * Usage:
 *   1. Copy to your project
 *   2. Add product images/videos
 *   3. Customize content and branding
 */

import { AbsoluteFill, Sequence, Audio, staticFile, Img } from 'remotion'
import {
  FullBleed, ContentArea, CoverMedia,
  FadeIn, SpringPop, SlideIn,
  Title, Text, Caption,
  DataDisplay, AnimatedCounter,
  Card, List, Badge, Button,
  GradientBackground, PulsingGlow, GlassMorphism,
  tokens, font,
} from '../design'

// =============================================================================
// PRODUCT VIDEO SECTIONS
// =============================================================================

/**
 * Product Hero
 * Opening shot with product name and tagline
 */
export const ProductHero = ({
  productName,
  tagline,
  backgroundImage,
  logoSrc,
}: {
  productName: string
  tagline?: string
  backgroundImage?: string
  logoSrc?: string
}) => (
  <FullBleed>
    {backgroundImage ? (
      <CoverMedia
        src={staticFile(backgroundImage)}
        type="image"
        style={{ filter: 'brightness(0.7)' }}
      />
    ) : (
      <GradientBackground gradient="purpleBlue" />
    )}
    <ContentArea verticalAlign="center">
      {logoSrc && (
        <FadeIn delay={0}>
          <Img
            src={staticFile(logoSrc)}
            style={{
              height: 120,
              marginBottom: 40,
            }}
          />
        </FadeIn>
      )}
      <FadeIn delay={10}>
        <Title
          size="hero"
          style={{
            color: '#fff',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}
        >
          {productName}
        </Title>
      </FadeIn>
      {tagline && (
        <FadeIn delay={25}>
          <Title
            size="medium"
            style={{
              color: 'rgba(255,255,255,0.9)',
              marginTop: 24,
            }}
          >
            {tagline}
          </Title>
        </FadeIn>
      )}
    </ContentArea>
  </FullBleed>
)

/**
 * Problem Statement
 * Identify the pain point
 */
export const ProblemSection = ({
  title = 'The Problem',
  problems,
}: {
  title?: string
  problems: string[]
}) => (
  <FullBleed background="#fef2f2">
    <ContentArea>
      <FadeIn delay={0}>
        <Badge style={{
          background: tokens.colors.negative,
          color: '#fff',
          marginBottom: 24,
        }}>
          ❌ Pain Point
        </Badge>
        <Title style={{ color: tokens.colors.negative }}>{title}</Title>
      </FadeIn>
      <div style={{ marginTop: 48 }}>
        <List
          items={problems}
          listStyle="bullet"
          gap={28}
          staggerDelay={12}
          style={{ color: '#991b1b' }}
        />
      </div>
    </ContentArea>
  </FullBleed>
)

/**
 * Solution Section
 * Introduce the product as the solution
 */
export const SolutionSection = ({
  title = 'The Solution',
  description,
  productImage,
}: {
  title?: string
  description: string
  productImage?: string
}) => (
  <FullBleed background="#f0fdf4">
    <ContentArea>
      <FadeIn delay={0}>
        <Badge style={{
          background: tokens.colors.positive,
          color: '#fff',
          marginBottom: 24,
        }}>
          ✓ Solution
        </Badge>
        <Title style={{ color: tokens.colors.positive }}>{title}</Title>
      </FadeIn>
      <FadeIn delay={20}>
        <Text style={{ marginTop: 32, color: '#166534', maxWidth: '80%' }}>
          {description}
        </Text>
      </FadeIn>
      {productImage && (
        <SpringPop delay={35}>
          <Img
            src={staticFile(productImage)}
            style={{
              marginTop: 48,
              maxWidth: '70%',
              borderRadius: 24,
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            }}
          />
        </SpringPop>
      )}
    </ContentArea>
  </FullBleed>
)

/**
 * Features Grid
 * Showcase key features
 */
export const FeaturesSection = ({
  title = 'Key Features',
  features,
}: {
  title?: string
  features: Array<{
    icon: string
    title: string
    description: string
  }>
}) => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea>
      <FadeIn delay={0}>
        <Title style={{ textAlign: 'center' }}>{title}</Title>
      </FadeIn>
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(features.length, 3)}, 1fr)`,
        gap: 40,
        marginTop: 60,
      }}>
        {features.map((feature, i) => (
          <SpringPop key={i} delay={20 + i * 15}>
            <Card style={{
              padding: 40,
              textAlign: 'center',
              height: '100%',
            }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>
                {feature.icon}
              </div>
              <Text style={{ fontWeight: 700, marginBottom: 12 }}>
                {feature.title}
              </Text>
              <Caption>{feature.description}</Caption>
            </Card>
          </SpringPop>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)

/**
 * Social Proof
 * Testimonials and stats
 */
export const SocialProofSection = ({
  stats,
  testimonial,
}: {
  stats?: Array<{ value: string; label: string }>
  testimonial?: { quote: string; author: string; role?: string }
}) => (
  <FullBleed background="#f8fafc">
    <ContentArea>
      {stats && (
        <>
          <FadeIn delay={0}>
            <Caption style={{ textAlign: 'center', marginBottom: 40 }}>
              TRUSTED BY THOUSANDS
            </Caption>
          </FadeIn>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: testimonial ? 60 : 0,
          }}>
            {stats.map((stat, i) => (
              <SpringPop key={i} delay={10 + i * 15}>
                <DataDisplay
                  value={stat.value}
                  label={stat.label}
                  size="large"
                />
              </SpringPop>
            ))}
          </div>
        </>
      )}
      {testimonial && (
        <FadeIn delay={stats ? 50 : 0}>
          <Card style={{ padding: 48, textAlign: 'center' }}>
            <Text style={{
              fontSize: 44,
              fontStyle: 'italic',
              lineHeight: 1.5,
              marginBottom: 24,
            }}>
              "{testimonial.quote}"
            </Text>
            <Caption>
              {testimonial.author}
              {testimonial.role && ` • ${testimonial.role}`}
            </Caption>
          </Card>
        </FadeIn>
      )}
    </ContentArea>
  </FullBleed>
)

/**
 * Pricing Section
 * Display pricing tiers
 */
export const PricingSection = ({
  title = 'Simple Pricing',
  plans,
}: {
  title?: string
  plans: Array<{
    name: string
    price: string
    period?: string
    features: string[]
    highlighted?: boolean
  }>
}) => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea>
      <FadeIn delay={0}>
        <Title style={{ textAlign: 'center' }}>{title}</Title>
      </FadeIn>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 40,
        marginTop: 60,
      }}>
        {plans.map((plan, i) => (
          <SlideIn key={i} direction={i === 0 ? 'left' : 'right'} delay={20}>
            <Card style={{
              padding: 48,
              width: 350,
              border: plan.highlighted ? `3px solid ${tokens.colors.accent}` : undefined,
              transform: plan.highlighted ? 'scale(1.05)' : undefined,
            }}>
              {plan.highlighted && (
                <Badge style={{
                  position: 'absolute',
                  top: -15,
                  right: 20,
                  background: tokens.colors.accent,
                  color: '#fff',
                }}>
                  POPULAR
                </Badge>
              )}
              <Caption style={{ marginBottom: 16 }}>{plan.name}</Caption>
              <div style={{ marginBottom: 24 }}>
                <span style={{
                  fontSize: tokens.fontSize.dataLarge,
                  fontWeight: 800,
                }}>
                  {plan.price}
                </span>
                {plan.period && (
                  <Caption style={{ marginLeft: 8 }}>/{plan.period}</Caption>
                )}
              </div>
              <List
                items={plan.features}
                listStyle="check"
                gap={16}
              />
            </Card>
          </SlideIn>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)

/**
 * CTA Section
 * Final call to action
 */
export const CTASection = ({
  title = 'Get Started Today',
  subtitle,
  buttonText = 'Start Free Trial',
  backgroundGradient = true,
}: {
  title?: string
  subtitle?: string
  buttonText?: string
  backgroundGradient?: boolean
}) => (
  <FullBleed>
    {backgroundGradient ? (
      <GradientBackground gradient="purpleBlue" />
    ) : (
      <div style={{ background: tokens.colors.bg, position: 'absolute', inset: 0 }} />
    )}
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <Title
          size="large"
          style={{
            color: backgroundGradient ? '#fff' : tokens.colors.text,
            textAlign: 'center',
          }}
        >
          {title}
        </Title>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={15}>
          <Text style={{
            color: backgroundGradient ? 'rgba(255,255,255,0.9)' : tokens.colors.textMuted,
            textAlign: 'center',
            marginTop: 24,
          }}>
            {subtitle}
          </Text>
        </FadeIn>
      )}
      <SpringPop delay={30}>
        <Button
          variant="primary"
          size="large"
          style={{
            marginTop: 48,
            background: backgroundGradient ? '#fff' : tokens.colors.accent,
            color: backgroundGradient ? tokens.colors.accent : '#fff',
            padding: '24px 64px',
            fontSize: 32,
          }}
        >
          {buttonText}
        </Button>
      </SpringPop>
    </ContentArea>
  </FullBleed>
)
