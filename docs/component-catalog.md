# Component Catalog

Complete reference of all available components.

## Layout Components

### FullBleed

Full-screen container with hard constraints.

```tsx
import { FullBleed } from './design'

<FullBleed
  background="#ffffff"      // Color or gradient
  theme={minimalWhite}      // Optional theme
  style={{}}                // Additional styles
>
  {children}
</FullBleed>
```

### ContentArea

Content wrapper with controlled width (85-95%).

```tsx
import { ContentArea } from './design'

<ContentArea
  minWidth={0.85}           // 0-1 (% of screen)
  maxWidth={0.95}
  padding={40}              // Pixels
  verticalAlign="center"    // 'top' | 'center' | 'bottom'
  theme={minimalWhite}
>
  {children}
</ContentArea>
```

### CoverMedia

Full-bleed image/video with objectFit: cover.

```tsx
import { CoverMedia } from './design'
import { staticFile } from 'remotion'

<CoverMedia
  src={staticFile('media/hero.jpg')}
  type="image"              // 'image' | 'video'
  alt="Description"
/>
```

### DualLayerMedia

For non-16:9 content (blurred bg + clear fg).

```tsx
import { DualLayerMedia } from './design'

<DualLayerMedia
  src={staticFile('media/screenshot.png')}
  type="image"
  foregroundFit="contain"   // 'contain' | 'cover'
  blurAmount={30}           // Pixels
  overlayOpacity={0.3}      // 0-1
/>
```

### Grid & Stack

Layout helpers.

```tsx
import { Grid, Stack, HStack, VStack } from './design'

<Grid columns={3} gap={40}>
  <Card>1</Card>
  <Card>2</Card>
  <Card>3</Card>
</Grid>

<HStack gap={24} align="center">
  <Icon>1</Icon>
  <Text>Horizontal items</Text>
</HStack>

<VStack gap={16}>
  <Text>Vertical</Text>
  <Text>Stack</Text>
</VStack>
```

---

## Typography Components

### Title

```tsx
import { Title, HeroTitle, SectionTitle, Subtitle } from './design'

<Title size="hero">Hero</Title>      // 100px
<Title size="large">Title</Title>    // 80px
<Title size="medium">Subtitle</Title> // 56px
```

### Text

```tsx
import { Text, MutedText, BoldText } from './design'

<Text>Body text</Text>
<Text muted>Secondary</Text>
<Text bold>Emphasized</Text>
```

### Caption

```tsx
import { Caption, Label } from './design'

<Caption>Small text</Caption>
<Label>UPPERCASE</Label>
```

### Code

```tsx
import { Code, CodeBlock, InlineCode } from './design'

<InlineCode>code</InlineCode>
<CodeBlock>{`multi\nline`}</CodeBlock>
```

### Quote

```tsx
import { Quote, PullQuote } from './design'

<Quote attribution="Name">Quote text</Quote>
<PullQuote>Large quote</PullQuote>
```

---

## Data Components

### DataDisplay

```tsx
import { DataDisplay, PositiveData, NegativeData } from './design'

<DataDisplay
  value="42%"
  label="Growth"
  color={tokens.colors.accent}
  size="large"              // 'hero' | 'large' | 'medium' | 'small'
/>

<PositiveData value="+15%" label="Revenue" />
<NegativeData value="-3%" label="Churn" />
```

### AnimatedCounter

```tsx
import { AnimatedCounter, PercentageCounter, CurrencyCounter } from './design'

<AnimatedCounter
  value={1000}
  delay={0}
  duration={30}
  prefix="$"
  suffix="M"
/>

<PercentageCounter value={99.9} />
<CurrencyCounter value={4200000} currency="$" />
```

### ProgressBar

```tsx
import { ProgressBar, VerticalProgressBar } from './design'

<ProgressBar
  value={75}
  height={40}
  width="100%"
  showLabel={true}
  delay={0}
  duration={30}
/>
```

### Badge & Stat

```tsx
import { Badge, SuccessBadge, Stat, PositiveStat } from './design'

<Badge variant="success">Active</Badge>
<SuccessBadge>Complete</SuccessBadge>

<Stat
  value="1.2M"
  label="Users"
  change="+23%"
  trend="up"
/>
```

---

## Animation Components

### FadeIn

```tsx
import { FadeIn, FadeInUp, FadeInPlace } from './design'

<FadeIn delay={0} duration={25} y={30}>
  <Title>Fades in</Title>
</FadeIn>
```

### SpringPop

```tsx
import { SpringPop, SubtlePop, DramaticPop } from './design'

<SpringPop delay={0} overshoot={1.5}>
  <DataDisplay value="42%" />
</SpringPop>
```

### SlideIn

```tsx
import { SlideIn, SlideInLeft, SlideInRight } from './design'

<SlideIn direction="left" distance={100} fade={true}>
  <Card>Slides in</Card>
</SlideIn>
```

### Reveal

```tsx
import { Reveal, RevealLeft, RevealCenter } from './design'

<Reveal direction="left" duration={30}>
  <Title>Revealed</Title>
</Reveal>
```

### Stagger

```tsx
import { Stagger } from './design'

<Stagger staggerDelay={12} animation="fadeIn">
  <Item />
  <Item />
  <Item />
</Stagger>
```

### Typewriter

```tsx
import { Typewriter, CodeTypewriter } from './design'

<Typewriter text="Typing effect..." speed={2} cursor={true} />
```

---

## UI Components

### Card

```tsx
import { Card, ElevatedCard, GlassCard } from './design'

<Card variant="default" padding="36px 56px" radius={24}>
  Content
</Card>

<ElevatedCard>With shadow</ElevatedCard>
<GlassCard>Glassmorphism</GlassCard>
```

### Button

```tsx
import { Button, PrimaryButton, OutlineButton } from './design'

<Button variant="primary" size="large">
  Click
</Button>
```

### List

```tsx
import { List, NumberedList, CheckList } from './design'

<List
  items={['Feature 1', 'Feature 2', 'Feature 3']}
  listStyle="bullet"
  gap={24}
/>

<CheckList items={['Done', 'Done', 'Done']} />
```

### Divider

```tsx
import { Divider, GradientDivider } from './design'

<Divider margin={24} />
<GradientDivider />
```

---

## Effects

### GlassMorphism

```tsx
import { GlassMorphism, DarkGlass, LightGlass } from './design'

<GlassMorphism blur={10} opacity={0.1}>
  Content
</GlassMorphism>
```

### Gradient

```tsx
import { GradientBackground, GradientShift, RadialGlow } from './design'

<GradientBackground gradient="purpleBlue" />
<GradientShift startHue={220} />
<RadialGlow color="0,212,255" opacity={0.3} />
```

### Glow

```tsx
import { PulsingGlow, GlowWrapper, TextGlow } from './design'

<PulsingGlow color="0,212,255" />
<TextGlow color="#00d4ff">Glowing text</TextGlow>
```

### Noise

```tsx
import { NoiseOverlay, FilmGrain, Vignette } from './design'

<NoiseOverlay opacity={0.05} animate={false} />
<FilmGrain />
<Vignette intensity={0.3} />
```

---

## Section Patterns

### HeroSection

```tsx
import { HeroSection } from './design'

<HeroSection
  title="Main Title"
  subtitle="Supporting text"
  backgroundImage={staticFile('hero.jpg')}
  overlayOpacity={0.4}
/>
```

### FeatureList

```tsx
import { FeatureList } from './design'

<FeatureList
  title="Features"
  features={[
    { icon: '1', title: 'Fast', description: 'Speed' },
    { icon: '2', title: 'Easy', description: 'Simple' },
  ]}
  columns={2}
/>
```

### DataDashboard

```tsx
import { DataDashboard } from './design'

<DataDashboard
  title="Key Metrics"
  items={[
    { value: 1000000, label: 'Users', animate: true },
    { value: '99.9%', label: 'Uptime' },
  ]}
  columns={3}
/>
```

### OutroSection

```tsx
import { OutroSection } from './design'

<OutroSection
  message="Thanks for Watching!"
  ctas={[
    { icon: '1', label: 'Like' },
    { icon: '2', label: 'Subscribe' },
  ]}
/>
```

---

## Navigation

### ChapterProgressBar

```tsx
import { ChapterProgressBar } from './design'

<ChapterProgressBar
  chapters={[
    { name: 'intro', label: 'Intro', start_frame: 0, duration_frames: 90 },
    { name: 'main', label: 'Main', start_frame: 90, duration_frames: 180 },
  ]}
  totalFrames={270}
  height={130}
/>
```

### SectionIndicator

```tsx
import { SectionIndicator, DotsIndicator } from './design'

<DotsIndicator total={5} current={2} />
```
