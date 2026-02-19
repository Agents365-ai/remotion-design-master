# 09 - Animation Principles

## Purpose-Driven Animation

Every animation should serve one of these purposes:

1. **Guide attention** - Draw eye to important elements
2. **Show relationships** - Connect related information
3. **Indicate progress** - Show state changes
4. **Add polish** - Make static content feel alive

**If animation serves no purpose, remove it.**

## The 12 Principles (Adapted for UI)

### 1. Timing
Duration affects perception:
- Quick (15 frames) = Snappy, responsive
- Medium (25-30 frames) = Comfortable, natural
- Slow (45+ frames) = Dramatic, deliberate

### 2. Easing
Never use linear motion. Natural movement accelerates/decelerates.

```tsx
// Common easings
Easing.out(Easing.cubic)   // Decelerate (entrance)
Easing.in(Easing.cubic)    // Accelerate (exit)
Easing.inOut(Easing.cubic) // Both (transitions)
Easing.out(Easing.back)    // Overshoot (emphasis)
```

### 3. Anticipation
Prepare viewers for movement:
```tsx
// Slight scale down before pop
scale: 0.95 → 1.15 → 1.0
```

### 4. Follow-Through
Let motion settle naturally:
```tsx
// Overshoot then settle
scale: 0 → 1.1 → 1.0  (with Easing.back)
```

### 5. Secondary Action
Support main animation with subtle effects:
```tsx
// Primary: Title fades in
// Secondary: Slight background pulse
```

## Animation Timing

### Duration Guidelines

```
Micro-interactions:     10-15 frames
Standard transitions:   20-30 frames
Dramatic reveals:       45-60 frames
Number counting:        30-45 frames
Stagger delay:          8-15 frames/item
```

### Frame-Based Calculations

At 30fps:
```
15 frames = 0.5 seconds
30 frames = 1 second
45 frames = 1.5 seconds
60 frames = 2 seconds
```

## Animation Types

### Entrance Animations

```tsx
// Fade + slide (most common)
<FadeIn y={30} duration={25}>

// Scale pop (for emphasis)
<SpringPop overshoot={1.5}>

// Reveal (for dramatic)
<Reveal direction="left">
```

### Data Animations

```tsx
// Number counting
<AnimatedCounter value={1000} duration={30} />

// Progress bar
<ProgressBar value={75} duration={30} />
```

### Ambient Animations

```tsx
// Ken Burns (image zoom)
<KenBurnsMedia startScale={1} endScale={1.1} />

// Pulsing glow
<PulsingGlow minOpacity={0.3} maxOpacity={0.5} />
```

## Stagger Patterns

Sequential animations create rhythm:

```tsx
// Manual stagger
<FadeIn delay={0}>Item 1</FadeIn>
<FadeIn delay={12}>Item 2</FadeIn>
<FadeIn delay={24}>Item 3</FadeIn>

// Automatic stagger
<Stagger staggerDelay={12}>
  <Item />
  <Item />
  <Item />
</Stagger>
```

## Animation Anti-Patterns

### Too Fast
```
Bad: 5 frames (imperceptible, jarring)
Good: 20+ frames (comfortable to watch)
```

### Too Slow
```
Bad: 90+ frames (frustrating, boring)
Good: 45 frames max for most content
```

### Too Many
```
Bad: 5 things animating simultaneously
Good: 1-2 elements at a time, staggered
```

### No Purpose
```
Bad: Constant motion for motion's sake
Good: Animation guides attention to content
```

### Linear Timing
```
Bad: interpolate without easing
Good: Always use easing functions
```

## Performance Considerations

### Prefer Transform/Opacity
```tsx
// Good: GPU-accelerated
transform: translateY(30px)
opacity: 0.5

// Avoid: Layout-triggering
marginTop: 30px
height: 100px
```

### Avoid Filter Animations
```tsx
// Bad: filter changes every frame
filter: `blur(${animated}px)`

// Better: Animate opacity of blurred layer
<div style={{ filter: 'blur(10px)', opacity: animated }} />
```

## Quick Reference

```tsx
// Standard fade-in
<FadeIn delay={0} duration={25} y={30}>

// Pop entrance
<SpringPop delay={0} duration={20} overshoot={1.5}>

// Staggered list
<Stagger staggerDelay={12} animation="fadeIn">

// Number counter
<AnimatedCounter value={1000} duration={30}>
```
