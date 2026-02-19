# 07 - Visual Hierarchy

## Hierarchy Principles

Visual hierarchy guides the viewer's eye in order of importance:

1. **Size** - Larger = more important
2. **Weight** - Bolder = more important
3. **Color** - Saturated/contrasting = more important
4. **Position** - Top/center = more important
5. **Whitespace** - More space around = more important

## Size as Primary Tool

In video, size differences must be dramatic:

```
Hero: 100px     → Primary focus
Title: 80px     → Section identity
Subtitle: 56px  → Supporting context
Body: 40px      → Details
Caption: 32px   → Metadata
```

**Rule:** Adjacent hierarchy levels should differ by at least 1.4x.

## The One-Second Test

Viewers should understand the visual priority in one second.

### Good Example
```
┌─────────────────────────┐
│      BIG TITLE          │  ← Immediately obvious
│    smaller subtitle     │  ← Clear secondary
│  body text that gives   │  ← Tertiary detail
│  more context...        │
└─────────────────────────┘
```

### Bad Example
```
┌─────────────────────────┐
│  Title Text Here        │  ← All similar size
│  Subtitle appears       │  ← No clear hierarchy
│  Body follows next      │
└─────────────────────────┘
```

## Color for Hierarchy

### Primary vs Secondary Text

```tsx
// Primary (high contrast)
color: tokens.colors.text  // #1a1a1a on white

// Secondary (reduced contrast)
color: tokens.colors.textMuted  // rgba(0,0,0,0.5)
```

### Accent for Emphasis

```tsx
// Key data or action
color: tokens.colors.accent  // Blue

// Positive/negative indicators
color: tokens.colors.positive  // Green
color: tokens.colors.negative  // Red
```

## Whitespace Hierarchy

More whitespace = more importance:

```tsx
// Hero section: lots of breathing room
padding: 60
marginTop: 80

// Content section: moderate spacing
padding: 40
marginTop: 50

// Dense data: tighter spacing
padding: 24
gap: 16
```

## Information Density

### Video vs Web

Web allows dense information (users scan/scroll).
Video requires sparse information (linear consumption).

```
Per screen maximum:
- 1 main concept
- 3-5 supporting points
- 50-100 words of text
```

### Progressive Disclosure

Reveal information in stages with animation:

```tsx
<FadeIn delay={0}>
  <Title>Main Point</Title>
</FadeIn>
<FadeIn delay={15}>
  <Text>Supporting detail one</Text>
</FadeIn>
<FadeIn delay={30}>
  <Text>Supporting detail two</Text>
</FadeIn>
```

## Hierarchy Patterns

### Data-First

```
┌─────────────────────────┐
│         42%             │  ← Huge number
│    Efficiency Gain      │  ← Small label
└─────────────────────────┘
```

Number is hero, label is context.

### Title-First

```
┌─────────────────────────┐
│     Key Features        │  ← Clear section title
│  • Feature one          │  ← Supporting list
│  • Feature two          │
│  • Feature three        │
└─────────────────────────┘
```

Title establishes context, list provides details.

### Media-First

```
┌─────────────────────────┐
│  ████ IMAGE ████████    │  ← Visual dominates
│  Caption below image    │  ← Text supports
└─────────────────────────┘
```

Image communicates, text clarifies.

## Common Mistakes

### No Clear Focal Point
```
Bad: Everything same size and weight
Good: One element clearly dominates
```

### Too Many Focal Points
```
Bad: 3 things competing for attention
Good: 1 primary, 2 supporting
```

### Hierarchy Through Complexity
```
Bad: Using shadows, borders, colors all at once
Good: Size and weight alone create hierarchy
```

## Quick Checklist

- [ ] Can identify primary element in <1 second?
- [ ] Size difference between levels ≥1.4x?
- [ ] Only one "hero" element per screen?
- [ ] Secondary elements clearly subordinate?
- [ ] Whitespace reinforces hierarchy?
