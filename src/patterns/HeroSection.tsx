/**
 * HeroSection - Opening section pattern
 *
 * Classic hero section with title, subtitle, and optional background.
 */
// @ts-nocheck
import { staticFile } from 'remotion'
import React from 'react'
import { FullBleed } from '../layout/FullBleed'
import { ContentArea } from '../layout/ContentArea'
import { CoverMedia } from '../layout/CoverMedia'
import { Title } from '../components/typography/Title'
import { FadeIn } from '../animation/FadeIn'
import { tokens } from '../tokens'
import type { Theme } from '../themes'

interface HeroSectionProps {
  /** Main title text */
  title: string
  /** Subtitle text (optional) */
  subtitle?: string
  /** Background image path (optional) */
  backgroundImage?: string
  /** Background color/gradient (if no image) */
  background?: string
  /** Dark overlay opacity over image (0-1) */
  overlayOpacity?: number
  /** Theme for styling */
  theme?: Theme
  /** Title color override */
  titleColor?: string
  /** Subtitle color override */
  subtitleColor?: string
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  background,
  overlayOpacity = 0.4,
  theme,
  titleColor,
  subtitleColor,
}) => {
  const hasImage = !!backgroundImage
  const bgColor = background ?? theme?.colors.bg ?? tokens.colors.bg
  const txtColor = titleColor ?? (hasImage ? '#fff' : theme?.colors.text ?? tokens.colors.text)
  const subColor = subtitleColor ?? (hasImage ? 'rgba(255,255,255,0.8)' : theme?.colors.textMuted ?? tokens.colors.textMuted)

  return (
    <FullBleed background={hasImage ? undefined : bgColor} theme={theme}>
      {/* Background image */}
      {hasImage && <CoverMedia src={backgroundImage} />}

      {/* Dark overlay for readability */}
      {hasImage && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `rgba(0,0,0,${overlayOpacity})`,
          }}
        />
      )}

      {/* Content */}
      <ContentArea theme={theme}>
        <FadeIn>
          <Title size="hero" color={txtColor} theme={theme}>
            {title}
          </Title>
        </FadeIn>
        {subtitle && (
          <FadeIn delay={15}>
            <Title size="medium" color={subColor} theme={theme} style={{ marginTop: 24 }}>
              {subtitle}
            </Title>
          </FadeIn>
        )}
      </ContentArea>
    </FullBleed>
  )
}

export default HeroSection
