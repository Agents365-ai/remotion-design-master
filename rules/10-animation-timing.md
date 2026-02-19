# 10 - Animation Timing & Choreography

## Timing Framework

Structure animation around content timing:

```
Section Start
├─ 0-30 frames:    Title/heading entrance
├─ 15-45 frames:   Subtitle/context entrance
├─ 30-90 frames:   Main content appears
├─ 60+ frames:     Secondary elements
└─ Section end - 30: Prepare for transition
```

## Stagger Patterns

### Linear Stagger
Each item delayed equally:
```tsx
delay = index * 12  // 12 frames apart

// Items appear at: 0, 12, 24, 36, 48...
```

### Cascade Stagger
Items appear faster as sequence progresses:
```tsx
delay = index * 12 - (index * 2)

// Items appear at: 0, 10, 18, 24, 28...
```

### Grouped Stagger
Groups appear together, then next group:
```tsx
groupDelay = Math.floor(index / 3) * 30
itemDelay = (index % 3) * 10

// Group 1: 0, 10, 20
// Group 2: 30, 40, 50
```

## Section Timing

### Hero Section (3-5 seconds)

```tsx
// Frame 0: Title starts
<FadeIn delay={0}><Title>Main Title</Title></FadeIn>

// Frame 15: Subtitle follows
<FadeIn delay={15}><Subtitle>Supporting text</Subtitle></FadeIn>

// Frame 30-90: Title/subtitle fully visible
// Total: ~90-150 frames
```

### Feature List (5-8 seconds)

```tsx
// Frame 0: Section title
<FadeIn delay={0}><Title>Features</Title></FadeIn>

// Frame 20+: Features stagger in
features.map((f, i) => (
  <FadeIn delay={20 + i * 12}>{f}</FadeIn>
))

// 4 features × 12 frame delay = 48 frames of staggering
// Total: ~150-240 frames
```

### Data Section (4-6 seconds)

```tsx
// Frame 0: Title
<FadeIn delay={0}><Title>Key Metrics</Title></FadeIn>

// Frame 20: Data values pop in
data.map((d, i) => (
  <SpringPop delay={20 + i * 10}>
    <AnimatedCounter value={d.value} delay={20 + i * 10} />
  </SpringPop>
))

// Total: ~120-180 frames
```

## Easing Selection

### Entrance Animations
```tsx
Easing.out(Easing.cubic)  // Standard decelerate
Easing.out(Easing.quart)  // Stronger decelerate
Easing.out(Easing.back)   // Overshoot (playful)
```

### Exit Animations
```tsx
Easing.in(Easing.cubic)   // Accelerate away
Easing.in(Easing.quart)   // Quick departure
```

### Continuous/Loop
```tsx
Easing.inOut(Easing.sine) // Smooth oscillation
// Or simple Math.sin() for breathing effects
```

## Synchronization

### Audio Sync

If you have TTS timing (from timing.json):
```tsx
// Section starts at frame 450
<Sequence from={450} durationInFrames={300}>
  {/* Animations relative to section start */}
  <FadeIn delay={0}>...</FadeIn>  // Actually frame 450
</Sequence>
```

### Beat Sync

For musical content:
```tsx
// At 120 BPM, beats occur every 15 frames (30fps)
const beatFrame = Math.floor(frame / 15) * 15

// Trigger on beat
const onBeat = frame % 15 === 0
```

## Transition Timing

### Section Transitions

End current section cleanly before starting next:

```
Section A ending:
  Frame -30: Stop new animations
  Frame -15: Optional fade out
  Frame 0: Section B begins

Section B starting:
  Frame 0: Background/setup ready
  Frame 5-10: First content appears
```

### Avoiding Overlap

```tsx
// Bad: Both sections animate simultaneously
<Sequence from={100} durationInFrames={120}>...</Sequence>
<Sequence from={200} durationInFrames={120}>...</Sequence>
// Overlap at frames 200-220

// Good: Clean transitions
<Sequence from={100} durationInFrames={100}>...</Sequence>
<Sequence from={200} durationInFrames={120}>...</Sequence>
// No overlap
```

## Timing Quick Reference

| Animation | Duration | Delay Pattern |
|-----------|----------|---------------|
| Title fade | 25 frames | 0 |
| Subtitle | 25 frames | +15 |
| Body text | 25 frames | +30 |
| List items | 20 frames | +12 each |
| Data pop | 20 frames | +10 each |
| Counter | 30 frames | With pop |
| Card | 25 frames | +15 each |
| Icon | 15 frames | +8 each |

## Reading Time Calculator

Ensure content stays long enough to read:

```ts
// Approximate reading speed: 3 words/second
// At 30fps: 10 frames per word

const readingFrames = wordCount * 10

// Add animation time
const totalFrames = animationDuration + readingFrames + 30
```

Example:
- 15 word subtitle
- 25 frame animation
- = 25 + 150 + 30 = 205 frames minimum (~7 seconds)
