/**
 * FeatureList - Feature showcase pattern
 *
 * List of features with icons and descriptions.
 */
// @ts-nocheck
import React from 'react'
import { FullBleed } from '../layout/FullBleed'
import { ContentArea } from '../layout/ContentArea'
import { Title } from '../components/typography/Title'
import { FadeIn } from '../animation/FadeIn'
import { Stagger } from '../animation/Stagger'
import { tokens, fontSize, fontWeight, fontFamily } from '../tokens'
import type { Theme } from '../themes'

interface Feature {
  icon?: string
  title: string
  description?: string
}

interface FeatureListProps {
  /** Section title */
  title?: string
  /** List of features */
  features: Feature[]
  /** Number of columns */
  columns?: number
  /** Theme for styling */
  theme?: Theme
  /** Background color */
  background?: string
}

export const FeatureList: React.FC<FeatureListProps> = ({
  title,
  features,
  columns = 2,
  theme,
  background,
}) => {
  const bgColor = background ?? theme?.colors.bg ?? tokens.colors.bg
  const textColor = theme?.colors.text ?? tokens.colors.text
  const mutedColor = theme?.colors.textMuted ?? tokens.colors.textMuted
  const accentColor = theme?.colors.accent ?? tokens.colors.accent

  return (
    <FullBleed background={bgColor} theme={theme}>
      <ContentArea theme={theme}>
        {title && (
          <FadeIn>
            <Title size="large" theme={theme} style={{ marginBottom: 60 }}>
              {title}
            </Title>
          </FadeIn>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gap: 48,
            width: '100%',
          }}
        >
          <Stagger staggerDelay={12} initialDelay={title ? 20 : 0}>
            {features.map((feature, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 24,
                }}
              >
                {feature.icon && (
                  <span
                    style={{
                      fontSize: 56,
                      lineHeight: 1,
                    }}
                  >
                    {feature.icon}
                  </span>
                )}
                <div>
                  <div
                    style={{
                      fontSize: fontSize.subtitle,
                      fontWeight: fontWeight.bold,
                      color: textColor,
                      fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
                      marginBottom: feature.description ? 12 : 0,
                    }}
                  >
                    {feature.title}
                  </div>
                  {feature.description && (
                    <div
                      style={{
                        fontSize: fontSize.body,
                        color: mutedColor,
                        fontFamily: theme?.typography.fontFamily ?? fontFamily.sans,
                        lineHeight: 1.4,
                      }}
                    >
                      {feature.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Stagger>
        </div>
      </ContentArea>
    </FullBleed>
  )
}

export default FeatureList
