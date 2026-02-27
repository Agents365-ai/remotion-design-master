# 04 - Typography Fundamentals

## Why Video Text Is So Large

Video requires 2-4x larger text than web because:

1. **Distance viewing** - TV at 3m, phone at arm's length
2. **Quick comprehension** - 3-5 seconds per scene to read
3. **Compression artifacts** - Small text degrades, larger survives

## Type Scale for Video

Our 1080p base scale (validated from ScraplingVideo production):

| Element | Size | Weight | Use |
|---------|------|--------|-----|
| Hero Max | 400px | 900 | Brand names, single-word maximum impact |
| Hero | 220px | 700 | Section titles |
| Display | 180px | 700 | Large display text |
| Title | 140px | 800 | Content titles |
| Subtitle | 100px | 600 | Secondary headings |
| Heading | 80px | 700 | Content headings |
| Body | 64px | 500 | Main body text |
| Body Small | 56px | 400 | Secondary text |
| Caption | 48px | 500 | Captions, labels |
| Small | 40px | 400 | Small text |
| Micro | 32px | 400 | Minimum readable |
| Data Hero | 180px | 800 | Single huge metric |
| Data Large | 140px | 800 | Large data numbers |
| Data | 100px | 700 | Standard data numbers |
| Icon Hero | 200px | - | Hero emoji |
| Icon Large | 160px | - | Feature icons |
| Icon | 120px | - | Standard icons |

## Font Weight Hierarchy

Weight creates visual hierarchy without size changes:

```
900 (Black)    → Hero numbers, single words
800 (ExtraBold)→ Titles, data displays
700 (Bold)     → Section headings
600 (SemiBold) → Emphasis, labels
500 (Medium)   → Body text
400 (Normal)   → Secondary text
```

## Line Height

| Context | Line Height | When |
|---------|-------------|------|
| 1.0 | Titles, data | Single line |
| 1.1 | Headlines | Short multi-line |
| 1.25 | Subheadings | 2-3 lines |
| 1.5 | Body text | Paragraphs |
| 1.6 | Code blocks | Monospace |

## Letter Spacing

```ts
tight: -2px    // Large titles (tighter = more impactful)
normal: 0      // Body text
wide: 1-2px    // Uppercase labels, small caps
```

## Font Stacks

### Sans-Serif (Default)
```ts
fontFamily: '-apple-system, "SF Pro Display", "Noto Sans SC", "Helvetica Neue", sans-serif'
```

Best for:
- Titles and headings
- Body text
- UI elements
- Data displays

### Monospace
```ts
fontFamily: '"SF Mono", "Fira Code", "JetBrains Mono", Consolas, monospace'
```

Best for:
- Code snippets
- Terminal output
- Technical data
- Timestamps

### Serif (Sparingly)
```ts
fontFamily: 'Georgia, "Times New Roman", serif'
```

Best for:
- Quotes
- Editorial content
- Literary references

## Text Alignment

```
Center align: Titles, data displays, hero text
Left align: Body text, lists, descriptions
Right align: Numbers in tables, timestamps
```

## Common Mistakes

### Too Many Sizes
```
Bad:  12px, 14px, 16px, 18px, 20px (subtle differences)
Good: 32px, 48px, 80px (clear hierarchy)
```

### Inconsistent Weights
```
Bad:  Mixing 400 and 450 (imperceptible difference)
Good: Using only 400, 600, 800 (distinct steps)
```

### Centered Body Text
```
Bad:  Centering paragraphs > 2 lines
Good: Left-align long text, center only titles
```

### Tiny Text
```
Bad:  Caption at 16px (unreadable on video)
Good: Caption at 48px minimum (32px absolute minimum)
```

## Content-Adaptive Sizing

Use sizing tiers based on content density:

| Tier | Items | Title Mult | Use Case |
|------|-------|------------|----------|
| Impact | 1 | 1.5x | Hook, hero, CTA |
| Standard | 2-3 | 1.0x | Features, comparison |
| Compact | 4-6 | 0.8x | Feature grid |
| Dense | 6+ | 0.65x | Data tables |

```ts
import { sizingTiers, selectTier } from './tokens/sizingTiers'

const tier = selectTier(itemCount)  // auto-select
const adjustedTitle = fontSize.hero * sizingTiers[tier].title
```

## Quick Reference

```tsx
// Section Title (hero tier)
<div style={{
  fontSize: 220,
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: -6,
}}>

// Content Title
<div style={{
  fontSize: 140,
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: -2,
}}>

// Body
<div style={{
  fontSize: 64,
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: 0,
}}>

// Data
<div style={{
  fontSize: 100,
  fontWeight: 700,
  lineHeight: 1,
  letterSpacing: -1,
}}>
```
