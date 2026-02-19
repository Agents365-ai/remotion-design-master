# 13 - Visual Consistency

## The Consistency Principle

Consistent design builds trust and reduces cognitive load.

> If two things look the same, they should behave the same.
> If two things behave differently, they should look different.

## Token-Based Design

Use design tokens instead of hard-coded values:

```tsx
// Bad: Magic numbers
style={{ fontSize: 47, padding: 23, color: '#2468ac' }}

// Good: Design tokens
style={{
  fontSize: tokens.fontSize.subtitle,
  padding: tokens.spacing.element,
  color: tokens.colors.accent,
}}
```

## Areas of Consistency

### 1. Colors

```tsx
// Define once
const colors = {
  accent: '#2563eb',
  positive: '#059669',
  negative: '#dc2626',
}

// Use everywhere
<DataDisplay color={colors.positive} />  // Same green throughout
```

### 2. Typography

```tsx
// Define scale
const fontSize = {
  title: 80,
  subtitle: 56,
  body: 40,
}

// Use consistently
// All titles: 80px
// All subtitles: 56px
// No random sizes like 72px or 64px
```

### 3. Spacing

```tsx
// Define scale
const spacing = {
  tight: 16,
  element: 30,
  section: 50,
}

// Use consistently
// Same gap between all list items
// Same margin before all section titles
```

### 4. Border Radius

```tsx
// Define once
const radii = {
  card: 24,
  button: 16,
  badge: 9999,
}

// All cards: 24px radius
// All buttons: 16px radius
// All badges: pill shape
```

### 5. Shadows

```tsx
// Define levels
const shadows = {
  card: '0 4px 12px rgba(0,0,0,0.08)',
  elevated: '0 8px 24px rgba(0,0,0,0.12)',
}

// Same shadow on all resting cards
// Same shadow on all elevated elements
```

### 6. Animation

```tsx
// Define standards
const animation = {
  duration: 25,
  staggerDelay: 12,
  easing: Easing.out(Easing.cubic),
}

// All fade-ins: 25 frames
// All staggers: 12 frame delay
// All transitions: same easing
```

## Pattern Consistency

### Section Patterns

Every section of the same type should look the same:

```tsx
// All feature lists:
// - Same title position
// - Same icon size
// - Same text alignment
// - Same stagger timing

// All data sections:
// - Same grid layout
// - Same number formatting
// - Same label position
```

### Component Patterns

Components should behave predictably:

```tsx
// All DataDisplay:
// - Value always larger than label
// - Label always below value
// - Same font weights

// All FadeIn:
// - Same default duration
// - Same default y offset
// - Same easing
```

## Breaking Consistency

Sometimes intentional inconsistency is needed:

### When to Break
- Hero section (special, one-time)
- Call-to-action (needs to stand out)
- Error states (needs attention)

### How to Break
- Change ONE property significantly
- Make the difference obvious, not subtle

```tsx
// Normal: Blue accent
color: tokens.colors.accent

// CTA: Gold (intentionally different)
color: '#ffd700'

// Error: Red (semantic meaning)
color: tokens.colors.negative
```

## Consistency Checklist

Before finalizing, verify:

- [ ] All titles use same font size?
- [ ] All body text uses same size?
- [ ] All accent colors from same palette?
- [ ] All cards have same border radius?
- [ ] All shadows at same intensity?
- [ ] All animations same duration?
- [ ] All stagger delays consistent?
- [ ] All similar elements aligned same way?

## Anti-Patterns

### Inconsistent Sizes
```
Bad: Titles at 80px, 76px, 84px, 78px
Good: All titles at 80px
```

### Inconsistent Spacing
```
Bad: Gaps of 24px, 30px, 28px, 32px
Good: All gaps at 30px (or 24px and 48px for hierarchy)
```

### Inconsistent Animation
```
Bad: Some FadeIn 20 frames, some 30, some 45
Good: All FadeIn 25 frames (unless intentional emphasis)
```

### Random Colors
```
Bad: #2468ac, #2563eb, #3b82f6 (similar but different blues)
Good: #2563eb everywhere (one blue)
```

## Quick Reference

Use these values everywhere:

```ts
// Typography
title: 80px, weight 800
subtitle: 56px, weight 600
body: 40px, weight 500
caption: 32px, weight 500

// Spacing
tight: 16px
element: 30px
section: 50px
page: 40px

// Borders
card: 24px radius
button: 16px radius

// Animation
fade: 25 frames
stagger: 12 frames
```
