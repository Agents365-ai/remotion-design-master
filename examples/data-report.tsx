// @ts-nocheck
/**
 * Data Report Example
 *
 * A corporate-style data report video demonstrating:
 * - Clean professional aesthetic
 * - Animated charts and progress bars
 * - Comparison tables
 * - Key metrics dashboard
 * - Executive summary format
 */

import { AbsoluteFill, Sequence } from 'remotion'
import {
  FullBleed, ContentArea,
  FadeIn, SpringPop, SlideIn,
  Title, Text, Caption,
  DataDisplay, AnimatedCounter, ProgressBar,
  Card, List, Badge,
  tokens, font,
} from './design'

// =============================================================================
// REPORT SECTIONS
// =============================================================================

const TitleSlide = () => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <Caption style={{ color: tokens.colors.accent }}>
          Q4 2024 REPORT
        </Caption>
      </FadeIn>
      <FadeIn delay={10}>
        <Title size="hero" style={{ marginTop: 24 }}>
          Annual Performance Review
        </Title>
      </FadeIn>
      <FadeIn delay={25}>
        <Text style={{ color: tokens.colors.textMuted, marginTop: 32 }}>
          Key metrics and insights for stakeholders
        </Text>
      </FadeIn>
    </ContentArea>
  </FullBleed>
)

const ExecutiveSummary = () => (
  <FullBleed background="#f8fafc">
    <ContentArea>
      <FadeIn delay={0}>
        <Badge style={{ background: tokens.colors.accent, color: '#fff' }}>
          Executive Summary
        </Badge>
        <Title style={{ marginTop: 24 }}>Key Highlights</Title>
      </FadeIn>
      <div style={{
        display: 'flex',
        gap: 40,
        marginTop: 48,
      }}>
        {[
          { value: '+23%', label: 'Revenue Growth', color: tokens.colors.positive },
          { value: '1.2M', label: 'Active Users', color: tokens.colors.accent },
          { value: '94%', label: 'Customer Satisfaction', color: tokens.colors.positive },
          { value: '-12%', label: 'Operating Costs', color: tokens.colors.positive },
        ].map((item, i) => (
          <SpringPop key={i} delay={15 + i * 12}>
            <Card style={{ flex: 1, padding: 36, textAlign: 'center' }}>
              <DataDisplay
                value={item.value}
                label={item.label}
                color={item.color}
                size="large"
              />
            </Card>
          </SpringPop>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)

const RevenueBreakdown = () => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea>
      <FadeIn delay={0}>
        <Title>Revenue by Segment</Title>
      </FadeIn>
      <div style={{ marginTop: 48 }}>
        {[
          { name: 'Enterprise', value: 45, amount: '$4.5M' },
          { name: 'SMB', value: 30, amount: '$3.0M' },
          { name: 'Consumer', value: 18, amount: '$1.8M' },
          { name: 'Other', value: 7, amount: '$0.7M' },
        ].map((segment, i) => (
          <FadeIn key={i} delay={15 + i * 12}>
            <div style={{ marginBottom: 32 }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 12,
              }}>
                <Text style={{ fontWeight: 600 }}>{segment.name}</Text>
                <div>
                  <Text style={{ fontWeight: 700, color: tokens.colors.accent }}>
                    {segment.amount}
                  </Text>
                  <Caption style={{ marginLeft: 16 }}>{segment.value}%</Caption>
                </div>
              </div>
              <ProgressBar
                value={segment.value}
                height={24}
                delay={20 + i * 12}
                duration={30}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)

const YoYComparison = () => (
  <FullBleed background="#f8fafc">
    <ContentArea>
      <FadeIn delay={0}>
        <Title>Year-over-Year Comparison</Title>
      </FadeIn>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 40,
        marginTop: 48,
      }}>
        <SlideIn direction="left" delay={15}>
          <Card style={{ padding: 40 }}>
            <Caption style={{ color: tokens.colors.textMuted, marginBottom: 24 }}>
              2023
            </Caption>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>Revenue</Text>
                <Text style={{ fontWeight: 700 }}>$8.1M</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>Users</Text>
                <Text style={{ fontWeight: 700 }}>850K</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>NPS</Text>
                <Text style={{ fontWeight: 700 }}>72</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>Churn</Text>
                <Text style={{ fontWeight: 700 }}>5.2%</Text>
              </div>
            </div>
          </Card>
        </SlideIn>
        <SlideIn direction="right" delay={15}>
          <Card style={{
            padding: 40,
            border: `2px solid ${tokens.colors.positive}`,
          }}>
            <Caption style={{ color: tokens.colors.positive, marginBottom: 24 }}>
              2024
            </Caption>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>Revenue</Text>
                <div>
                  <Text style={{ fontWeight: 700 }}>$10.0M</Text>
                  <Badge style={{
                    marginLeft: 12,
                    background: tokens.colors.positive,
                    color: '#fff',
                    fontSize: 20,
                  }}>
                    +23%
                  </Badge>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>Users</Text>
                <div>
                  <Text style={{ fontWeight: 700 }}>1.2M</Text>
                  <Badge style={{
                    marginLeft: 12,
                    background: tokens.colors.positive,
                    color: '#fff',
                    fontSize: 20,
                  }}>
                    +41%
                  </Badge>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>NPS</Text>
                <div>
                  <Text style={{ fontWeight: 700 }}>78</Text>
                  <Badge style={{
                    marginLeft: 12,
                    background: tokens.colors.positive,
                    color: '#fff',
                    fontSize: 20,
                  }}>
                    +6
                  </Badge>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Text>Churn</Text>
                <div>
                  <Text style={{ fontWeight: 700 }}>3.8%</Text>
                  <Badge style={{
                    marginLeft: 12,
                    background: tokens.colors.positive,
                    color: '#fff',
                    fontSize: 20,
                  }}>
                    -1.4%
                  </Badge>
                </div>
              </div>
            </div>
          </Card>
        </SlideIn>
      </div>
    </ContentArea>
  </FullBleed>
)

const KeyInsights = () => (
  <FullBleed background={tokens.colors.bg}>
    <ContentArea>
      <FadeIn delay={0}>
        <Title>Key Insights</Title>
      </FadeIn>
      <div style={{ marginTop: 48 }}>
        <List
          items={[
            'Enterprise segment drove 60% of revenue growth',
            'Mobile app adoption increased 85% year-over-year',
            'Customer acquisition cost reduced by 18%',
            'Product NPS reached all-time high of 78',
            'International expansion contributed 25% of new revenue',
          ]}
          listStyle="check"
          gap={32}
          staggerDelay={12}
        />
      </div>
    </ContentArea>
  </FullBleed>
)

const Outlook = () => (
  <FullBleed background="#f0f9ff">
    <ContentArea verticalAlign="center">
      <FadeIn delay={0}>
        <Badge style={{ background: tokens.colors.accent, color: '#fff' }}>
          2025 Outlook
        </Badge>
        <Title size="large" style={{ marginTop: 24, textAlign: 'center' }}>
          Targeting 40% Growth
        </Title>
      </FadeIn>
      <FadeIn delay={20}>
        <Text style={{
          textAlign: 'center',
          marginTop: 32,
          color: tokens.colors.textMuted,
          maxWidth: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
          With continued investment in product innovation and
          international expansion, we're positioned for accelerated growth.
        </Text>
      </FadeIn>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 60,
        marginTop: 60,
      }}>
        {[
          { value: '$14M', label: 'Target Revenue' },
          { value: '2M', label: 'User Goal' },
          { value: '5', label: 'New Markets' },
        ].map((item, i) => (
          <SpringPop key={i} delay={35 + i * 15}>
            <DataDisplay
              value={item.value}
              label={item.label}
              size="large"
              color={tokens.colors.accent}
            />
          </SpringPop>
        ))}
      </div>
    </ContentArea>
  </FullBleed>
)

// =============================================================================
// MAIN COMPOSITION
// =============================================================================

export const DataReport = () => {
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
        <Sequence from={0} durationInFrames={120}>
          <TitleSlide />
        </Sequence>

        <Sequence from={120} durationInFrames={150}>
          <ExecutiveSummary />
        </Sequence>

        <Sequence from={270} durationInFrames={180}>
          <RevenueBreakdown />
        </Sequence>

        <Sequence from={450} durationInFrames={180}>
          <YoYComparison />
        </Sequence>

        <Sequence from={630} durationInFrames={150}>
          <KeyInsights />
        </Sequence>

        <Sequence from={780} durationInFrames={150}>
          <Outlook />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  )
}

export default DataReport
