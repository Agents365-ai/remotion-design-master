# Color Guide

Choosing and applying colors effectively.

## Theme Selection

| Theme | Best For |
|-------|----------|
| **Minimal White** | Product demos, tutorials, comparisons |
| **Dark Tech** | AI/tech content, cyberpunk aesthetic |
| **Gradient Vibrant** | Creative, entertainment, branding |
| **Corporate Blue** | Business presentations, reports |

## Applying Themes

```tsx
import { FullBleed, ContentArea, Title } from './design'
import { minimalWhite, darkTech, gradientVibrant, corporateBlue } from './design/themes'

// Option 1: Pass theme to components
<FullBleed theme={minimalWhite}>
  <ContentArea theme={minimalWhite}>
    <Title theme={minimalWhite}>Themed Title</Title>
  </ContentArea>
</FullBleed>

// Option 2: Use theme values directly
<FullBleed background={darkTech.colors.bg}>
  <Title style={{ color: darkTech.colors.accent }}>Dark Title</Title>
</FullBleed>
```

## Color Token Reference

### Minimal White

```tsx
colors: {
  bg: '#ffffff',           // Pure white
  text: '#1a1a1a',         // Dark gray
  textMuted: 'rgba(0,0,0,0.5)',
  accent: '#2563eb',       // Blue
  positive: '#059669',     // Green
  negative: '#dc2626',     // Red
  warning: '#ea580c',      // Orange
}
```

### Dark Tech

```tsx
colors: {
  bg: '#0a0a0f',           // Near black
  bgCard: 'rgba(255,255,255,0.05)',
  text: '#ffffff',
  textMuted: 'rgba(255,255,255,0.6)',
  accent: '#00d4ff',       // Neon cyan
  accentPurple: '#a855f7', // Neon purple
  positive: '#22c55e',
  negative: '#ef4444',
}
```

### Gradient Vibrant

```tsx
colors: {
  bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  text: '#ffffff',
  textMuted: 'rgba(255,255,255,0.8)',
  accent: '#ffd700',       // Gold
}

// Available gradients
gradientBackgrounds: {
  purpleBlue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  pinkRed: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  blueCyan: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  orangeYellow: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
}
```

## Data Visualization Colors

### Semantic Colors

```tsx
// Always use these for data
positive: tokens.colors.positive  // Growth, success
negative: tokens.colors.negative  // Decline, error
accent: tokens.colors.accent      // Neutral highlight
warning: tokens.colors.warning    // Attention needed
```

### Example

```tsx
<DataDisplay
  value="+23%"
  label="Revenue Growth"
  color={tokens.colors.positive}
/>

<DataDisplay
  value="-5%"
  label="Churn Rate"
  color={tokens.colors.negative}
/>
```

## Background Patterns

### Solid Colors

```tsx
<FullBleed background="#ffffff">  // White
<FullBleed background="#0a0a0f">  // Dark
<FullBleed background="#f8fafc">  // Light gray
```

### Gradients

```tsx
import { gradientBackgrounds } from './design/themes'

<FullBleed background={gradientBackgrounds.purpleBlue}>
<FullBleed background={gradientBackgrounds.blueCyan}>
```

### With Effects

```tsx
<FullBleed background="#0a0a0f">
  <RadialGlow color="0,212,255" opacity={0.2} />
  <ContentArea>...</ContentArea>
</FullBleed>
```

## Text on Backgrounds

### Light Backgrounds
```tsx
text: '#1a1a1a'
textMuted: 'rgba(0,0,0,0.5)'
```

### Dark Backgrounds
```tsx
text: '#ffffff'
textMuted: 'rgba(255,255,255,0.6)'
```

### Gradient Backgrounds
```tsx
text: '#ffffff'
textShadow: '0 2px 10px rgba(0,0,0,0.3)'  // Add shadow for readability
```

## Color Accessibility

### Contrast Checklist

- [ ] Body text has 4.5:1 contrast ratio?
- [ ] Large text (≥24px) has 3:1 contrast ratio?
- [ ] Data doesn't rely solely on color?
- [ ] Positive/negative data has icon or symbol?

### Testing

Use online contrast checkers:
- WebAIM Contrast Checker
- Coolors Contrast Checker

## Quick Reference

```tsx
// Import everything
import { tokens, palette, semanticColors, gradients } from './design/tokens'

// Common patterns
const white = tokens.colors.bg           // #fff
const dark = '#0a0a0f'                   // Near black
const accent = tokens.colors.accent      // #2563eb
const positive = tokens.colors.positive  // #059669
const negative = tokens.colors.negative  // #dc2626
```
