/**
 * DataDashboard - Multiple data displays pattern
 *
 * Grid of key metrics/stats.
 */
// @ts-nocheck
import React from 'react'
import { FullBleed } from '../layout/FullBleed'
import { ContentArea } from '../layout/ContentArea'
import { Title } from '../components/typography/Title'
import { DataDisplay } from '../components/data/DataDisplay'
import { AnimatedCounter } from '../components/data/AnimatedCounter'
import { FadeIn } from '../animation/FadeIn'
import { SpringPop } from '../animation/SpringPop'
import { tokens } from '../tokens'
import type { Theme } from '../themes'

interface DataItem {
  value: string | number
  label: string
  color?: string
  /** If value is a number, animate it */
  animate?: boolean
  prefix?: string
  suffix?: string
}

interface DataDashboardProps {
  /** Section title */
  title?: string
  /** Data items to display */
  items: DataItem[]
  /** Number of columns */
  columns?: number
  /** Theme for styling */
  theme?: Theme
  /** Background color */
  background?: string
}

export const DataDashboard: React.FC<DataDashboardProps> = ({
  title,
  items,
  columns = 3,
  theme,
  background,
}) => {
  const bgColor = background ?? theme?.colors.bg ?? tokens.colors.bg

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
            gap: 80,
            width: '100%',
          }}
        >
          {items.map((item, i) => (
            <SpringPop key={i} delay={(title ? 20 : 0) + i * 10}>
              <DataDisplay
                value={
                  typeof item.value === 'number' && item.animate !== false ? (
                    <AnimatedCounter
                      value={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      delay={(title ? 20 : 0) + i * 10}
                    />
                  ) : (
                    `${item.prefix ?? ''}${item.value}${item.suffix ?? ''}`
                  )
                }
                label={item.label}
                color={item.color}
                theme={theme}
              />
            </SpringPop>
          ))}
        </div>
      </ContentArea>
    </FullBleed>
  )
}

export default DataDashboard
