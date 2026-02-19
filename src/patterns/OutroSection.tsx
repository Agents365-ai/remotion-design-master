/**
 * OutroSection - Closing section with CTA
 *
 * Thanks, follow, subscribe section for video endings.
 */
// @ts-nocheck
import React from 'react'
import { FullBleed } from '../layout/FullBleed'
import { ContentArea } from '../layout/ContentArea'
import { Title } from '../components/typography/Title'
import { FadeIn } from '../animation/FadeIn'
import { SpringPop } from '../animation/SpringPop'
import { tokens, fontSize, fontWeight, fontFamily } from '../tokens'
import type { Theme } from '../themes'

interface CTAItem {
  icon: string
  label: string
  sublabel?: string
}

interface OutroSectionProps {
  /** Main message */
  message?: string
  /** Call-to-action items */
  ctas?: CTAItem[]
  /** Theme for styling */
  theme?: Theme
  /** Background color */
  background?: string
}

// Default Bilibili-style CTAs
const defaultCTAs: CTAItem[] = [
  { icon: '👍', label: 'Like', sublabel: '点赞' },
  { icon: '💰', label: 'Coin', sublabel: '投币' },
  { icon: '⭐', label: 'Favorite', sublabel: '收藏' },
]

export const OutroSection: React.FC<OutroSectionProps> = ({
  message = 'Thanks for Watching!',
  ctas = defaultCTAs,
  theme,
  background,
}) => {
  const bgColor = background ?? theme?.colors.bg ?? tokens.colors.bg
  const textColor = theme?.colors.text ?? tokens.colors.text
  const mutedColor = theme?.colors.textMuted ?? tokens.colors.textMuted

  return (
    <FullBleed background={bgColor} theme={theme}>
      <ContentArea theme={theme}>
        <FadeIn>
          <Title size="large" theme={theme}>
            {message}
          </Title>
        </FadeIn>

        {ctas.length > 0 && (
          <FadeIn delay={15}>
            <div
              style={{
                display: 'flex',
                gap: 80,
                marginTop: 60,
              }}
            >
              {ctas.map((cta, i) => (
                <SpringPop key={i} delay={25 + i * 10}>
                  <div style={{ textAlign: 'center' }}>
                    <div
                      style={{
                        fontSize: 64,
                        marginBottom: 12,
                      }}
                    >
                      {cta.icon}
                    </div>
                    <div
                      style={{
                        fontSize: fontSize.body,
                        fontWeight: fontWeight.bold,
                        color: textColor,
                        fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
                      }}
                    >
                      {cta.label}
                    </div>
                    {cta.sublabel && (
                      <div
                        style={{
                          fontSize: fontSize.caption,
                          color: mutedColor,
                          fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
                        }}
                      >
                        {cta.sublabel}
                      </div>
                    )}
                  </div>
                </SpringPop>
              ))}
            </div>
          </FadeIn>
        )}
      </ContentArea>
    </FullBleed>
  )
}

export default OutroSection
