# 03 - Accessibility Guidelines

## Color Contrast

### Minimum Ratios (WCAG 2.1 AA)

| Element | Ratio | Example |
|---------|-------|---------|
| Body text | 4.5:1 | #1a1a1a on #fff |
| Large text (≥24px) | 3:1 | #4b5563 on #fff |
| UI components | 3:1 | Button borders, icons |
| Decorative only | No requirement | Background patterns |

### Testing Contrast

```ts
// Good: High contrast
{ background: '#fff', color: '#1a1a1a' }  // 16:1

// Acceptable: Meets AA for large text
{ background: '#fff', color: '#6b7280' }  // 4.6:1

// Bad: Fails AA
{ background: '#fff', color: '#d1d5db' }  // 1.7:1
```

## Don't Rely on Color Alone

### Problem
Color-blind users (8% of men, 0.5% of women) may not distinguish:
- Red vs Green
- Blue vs Yellow
- Certain shades of similar colors

### Solution
Combine color with other indicators:

```tsx
// Bad: Color only
<div style={{ color: isPositive ? 'green' : 'red' }}>
  {value}
</div>

// Good: Color + symbol
<div style={{ color: isPositive ? 'green' : 'red' }}>
  {isPositive ? '↑' : '↓'} {value}
</div>

// Good: Color + text
<Badge color={isError ? 'red' : 'green'}>
  {isError ? 'Error' : 'Success'}
</Badge>
```

## Animation Accessibility

### Motion Sensitivity

Some viewers experience motion sickness from:
- Rapid movement
- Parallax effects
- Screen shakes
- Spinning elements

### Guidelines

```ts
// Animation duration
minimum: 15 frames (0.5s at 30fps)  // Perceivable
recommended: 20-30 frames           // Comfortable
maximum: 60 frames (2s)             // Still engaging

// Avoid
- Flash effects (can trigger seizures)
- Rapid blinking (>3 times per second)
- Large-scale rotation
- Unpredictable movement
```

## Text Readability

### Minimum Sizes (1080p base)

| Element | Minimum | Recommended |
|---------|---------|-------------|
| Body text | 32px | 40px |
| Captions | 24px | 32px |
| Titles | 64px | 80px+ |

### Line Length

```
Optimal: 45-75 characters per line
Too short: < 30 characters (choppy reading)
Too long: > 90 characters (hard to track)
```

### Line Height

```ts
body: 1.5      // Standard readability
tight: 1.25    // Headlines only
code: 1.6      // Monospace needs more
```

## Timing Considerations

### Reading Speed

Allow sufficient time to read content:

```ts
// Rough formula
readingFrames = (wordCount / 3) * fps

// Example: 15 words at 30fps
frames = (15 / 3) * 30 = 150 frames (5 seconds)
```

### Animation Overlap

Don't animate multiple elements simultaneously if they contain information:

```tsx
// Bad: Everything animates at once
<FadeIn delay={0}><Title>Title</Title></FadeIn>
<FadeIn delay={0}><Text>Description</Text></FadeIn>

// Good: Staggered for comprehension
<FadeIn delay={0}><Title>Title</Title></FadeIn>
<FadeIn delay={20}><Text>Description</Text></FadeIn>
```

## Checklist

Before finalizing a video:

- [ ] Text contrast ≥ 4.5:1 (body) or ≥ 3:1 (large text)
- [ ] Information not conveyed by color alone
- [ ] No flashing content (>3 flashes/second)
- [ ] Text readable at minimum playback size
- [ ] Sufficient time to read all text
- [ ] Animations are smooth (≥15 frames)
- [ ] Subtitle safe zone respected (bottom 100px)
