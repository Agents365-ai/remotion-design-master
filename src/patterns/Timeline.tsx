/**
 * Timeline - Chronological events pattern
 *
 * Vertical or horizontal timeline of events.
 */
// @ts-nocheck
import React from 'react'
import { FullBleed } from '../layout/FullBleed'
import { ContentArea } from '../layout/ContentArea'
import { Title } from '../components/typography/Title'
import { FadeIn } from '../animation/FadeIn'
import { Stagger } from '../animation/Stagger'
import { tokens, fontSize, fontWeight, fontFamily, radii } from '../tokens'
import type { Theme } from '../themes'

interface TimelineEvent {
  date?: string
  title: string
  description?: string
  icon?: string
}

interface TimelineProps {
  /** Section title */
  title?: string
  /** Timeline events */
  events: TimelineEvent[]
  /** Layout direction */
  direction?: 'vertical' | 'horizontal'
  /** Theme for styling */
  theme?: Theme
  /** Background color */
  background?: string
}

export const Timeline: React.FC<TimelineProps> = ({
  title,
  events,
  direction = 'vertical',
  theme,
  background,
}) => {
  const bgColor = background ?? theme?.colors.bg ?? tokens.colors.bg
  const textColor = theme?.colors.text ?? tokens.colors.text
  const mutedColor = theme?.colors.textMuted ?? tokens.colors.textMuted
  const accentColor = theme?.colors.accent ?? tokens.colors.accent

  if (direction === 'horizontal') {
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

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 24, width: '100%' }}>
            <Stagger staggerDelay={15} initialDelay={title ? 20 : 0} animation="slideUp">
              {events.map((event, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  {/* Icon/dot */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: radii.full,
                      background: accentColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 24,
                      color: '#fff',
                      marginBottom: 16,
                    }}
                  >
                    {event.icon ?? (i + 1)}
                  </div>

                  {event.date && (
                    <div
                      style={{
                        fontSize: fontSize.caption,
                        color: accentColor,
                        fontWeight: fontWeight.semibold,
                        marginBottom: 8,
                      }}
                    >
                      {event.date}
                    </div>
                  )}

                  <div
                    style={{
                      fontSize: fontSize.body,
                      fontWeight: fontWeight.bold,
                      color: textColor,
                      marginBottom: event.description ? 8 : 0,
                    }}
                  >
                    {event.title}
                  </div>

                  {event.description && (
                    <div
                      style={{
                        fontSize: fontSize.caption,
                        color: mutedColor,
                        lineHeight: 1.4,
                      }}
                    >
                      {event.description}
                    </div>
                  )}
                </div>
              ))}
            </Stagger>
          </div>
        </ContentArea>
      </FullBleed>
    )
  }

  // Vertical timeline
  return (
    <FullBleed background={bgColor} theme={theme}>
      <ContentArea theme={theme} verticalAlign="top">
        {title && (
          <FadeIn>
            <Title size="large" theme={theme} style={{ marginBottom: 48 }}>
              {title}
            </Title>
          </FadeIn>
        )}

        <div style={{ position: 'relative', width: '100%', paddingLeft: 60 }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 20,
              top: 0,
              bottom: 0,
              width: 4,
              background: accentColor + '30',
              borderRadius: radii.full,
            }}
          />

          <Stagger staggerDelay={12} initialDelay={title ? 20 : 0}>
            {events.map((event, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: 40,
                  position: 'relative',
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: -48,
                    width: 20,
                    height: 20,
                    borderRadius: radii.full,
                    background: accentColor,
                  }}
                />

                <div>
                  {event.date && (
                    <div
                      style={{
                        fontSize: fontSize.caption,
                        color: accentColor,
                        fontWeight: fontWeight.semibold,
                        marginBottom: 4,
                      }}
                    >
                      {event.date}
                    </div>
                  )}
                  <div
                    style={{
                      fontSize: fontSize.subtitle,
                      fontWeight: fontWeight.bold,
                      color: textColor,
                      marginBottom: event.description ? 8 : 0,
                    }}
                  >
                    {event.title}
                  </div>
                  {event.description && (
                    <div
                      style={{
                        fontSize: fontSize.body,
                        color: mutedColor,
                        lineHeight: 1.4,
                      }}
                    >
                      {event.description}
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

export default Timeline
