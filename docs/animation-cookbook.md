# Animation Cookbook

Common animation patterns and recipes.

## Basic Entrances

### Fade In + Slide Up

The most common entrance animation.

```tsx
import { FadeIn } from './design'

<FadeIn delay={0} duration={25} y={30}>
  <Title>Slides up while fading in</Title>
</FadeIn>
```

### Pop Scale

For emphasis, icons, data points.

```tsx
import { SpringPop } from './design'

<SpringPop delay={0} overshoot={1.5}>
  <DataDisplay value="42%" />
</SpringPop>
```

### Slide From Direction

```tsx
import { SlideInLeft, SlideInRight } from './design'

<SlideInLeft distance={100}>
  <Card>From left</Card>
</SlideInLeft>

<SlideInRight distance={100}>
  <Card>From right</Card>
</SlideInRight>
```

## Staggered Lists

### Simple Stagger

```tsx
import { FadeIn } from './design'

{items.map((item, i) => (
  <FadeIn key={i} delay={i * 12}>
    <Item>{item}</Item>
  </FadeIn>
))}
```

### Using Stagger Component

```tsx
import { Stagger } from './design'

<Stagger staggerDelay={12} animation="fadeIn">
  <Item>First</Item>
  <Item>Second</Item>
  <Item>Third</Item>
</Stagger>
```

### Pop Stagger for Data

```tsx
{data.map((d, i) => (
  <SpringPop key={i} delay={i * 10}>
    <DataDisplay value={d.value} label={d.label} />
  </SpringPop>
))}
```

## Number Animations

### Counting Up

```tsx
import { AnimatedCounter } from './design'

<AnimatedCounter
  value={1000000}
  duration={30}
  suffix=" users"
/>
```

### With SpringPop Container

```tsx
<SpringPop delay={0}>
  <AnimatedCounter value={42} suffix="%" delay={0} />
</SpringPop>
```

### Multiple Counters

```tsx
{metrics.map((m, i) => (
  <SpringPop key={i} delay={i * 15}>
    <AnimatedCounter
      value={m.value}
      delay={i * 15}
      prefix={m.prefix}
      suffix={m.suffix}
    />
  </SpringPop>
))}
```

## Progress Animations

### Horizontal Bar

```tsx
import { ProgressBar } from './design'

<ProgressBar
  value={75}
  delay={20}
  duration={30}
  showLabel={true}
/>
```

### Multiple Bars

```tsx
{skills.map((skill, i) => (
  <div key={i} style={{ marginBottom: 24 }}>
    <Caption>{skill.name}</Caption>
    <ProgressBar
      value={skill.level}
      delay={i * 10}
      duration={25}
    />
  </div>
))}
```

## Section Transitions

### Title → Content Pattern

```tsx
const Section = () => (
  <FullBleed>
    <ContentArea>
      {/* Title first */}
      <FadeIn delay={0}>
        <Title>Section Title</Title>
      </FadeIn>

      {/* Content after title settles */}
      <FadeIn delay={25}>
        <Grid columns={2}>
          {items.map((item, i) => (
            <FadeIn key={i} delay={25 + i * 12}>
              <Card>{item}</Card>
            </FadeIn>
          ))}
        </Grid>
      </FadeIn>
    </ContentArea>
  </FullBleed>
)
```

### Hero → Features Flow

```tsx
// Sequence timing
<Sequence from={0} durationInFrames={120}>
  <HeroSection title="Product Name" />
</Sequence>

<Sequence from={120} durationInFrames={180}>
  <FeatureList features={features} />
</Sequence>
```

## Ambient Animations

### Ken Burns (Slow Zoom)

```tsx
import { KenBurnsMedia } from './design/components/media'

<KenBurnsMedia
  src={staticFile('landscape.jpg')}
  config={{
    startScale: 1.0,
    endScale: 1.15,
    focus: 'center',
  }}
/>
```

### Pulsing Glow

```tsx
import { PulsingGlow } from './design'

<FullBleed background="#0a0a0f">
  <PulsingGlow
    color="0,212,255"
    minOpacity={0.2}
    maxOpacity={0.4}
    cycleDuration={60}
  />
  <ContentArea>...</ContentArea>
</FullBleed>
```

### Gradient Shift

```tsx
import { GradientShift } from './design'

<FullBleed>
  <GradientShift startHue={220} hueRange={40} />
  <ContentArea>...</ContentArea>
</FullBleed>
```

## Text Animations

### Typewriter

```tsx
import { Typewriter } from './design'

<Typewriter
  text="Typing this out..."
  speed={2}      // Frames per character
  cursor={true}
/>
```

### Word-by-Word Reveal

```tsx
const words = text.split(' ')

{words.map((word, i) => (
  <FadeIn key={i} delay={i * 8} duration={15}>
    <span>{word} </span>
  </FadeIn>
))}
```

## Custom Animations

### Using Hooks

```tsx
import { useProgress, useScale, usePulse } from './design/hooks'

const MyAnimation = () => {
  const opacity = useProgress({ delay: 0, duration: 25 })
  const scale = useScale({ delay: 5, overshoot: 1.5 })
  const pulse = usePulse(1, 1.05, 30)

  return (
    <div style={{
      opacity,
      transform: `scale(${scale * pulse})`,
    }}>
      Content
    </div>
  )
}
```

### Raw Interpolate

```tsx
import { useCurrentFrame, interpolate, Easing } from 'remotion'

const frame = useCurrentFrame()

const progress = interpolate(frame, [0, 30], [0, 1], {
  extrapolateLeft: 'clamp',
  extrapolateRight: 'clamp',
  easing: Easing.out(Easing.cubic),
})
```

## Timing Reference

| Animation | Duration | Delay Pattern |
|-----------|----------|---------------|
| FadeIn | 25 | +0 |
| Subtitle | 25 | +15 |
| Content | 25 | +30 |
| List items | 20 | +12 each |
| Data pop | 20 | +10 each |
| Counter | 30 | With pop |
| Progress | 30 | +0 or staggered |

## Anti-Patterns

```tsx
// Bad: Everything at once
<FadeIn delay={0}><Title /></FadeIn>
<FadeIn delay={0}><Subtitle /></FadeIn>  // Same delay!
<FadeIn delay={0}><Content /></FadeIn>

// Good: Staggered
<FadeIn delay={0}><Title /></FadeIn>
<FadeIn delay={15}><Subtitle /></FadeIn>
<FadeIn delay={30}><Content /></FadeIn>

// Bad: Too fast
<FadeIn duration={5}>  // Imperceptible

// Good: Comfortable
<FadeIn duration={25}>  // Visible animation

// Bad: Linear timing
interpolate(frame, [0, 30], [0, 1])  // No easing

// Good: Eased
interpolate(frame, [0, 30], [0, 1], {
  easing: Easing.out(Easing.cubic)
})
```
