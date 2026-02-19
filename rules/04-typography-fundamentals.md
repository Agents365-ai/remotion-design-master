# 04 - Typography Fundamentals

## Type Scale for Video

Video requires larger text than web. Our 1080p base scale:

| Element | Size | Weight | Use |
|---------|------|--------|-----|
| Hero | 100px | 800 | Single big statement |
| Display | 88px | 700 | Large titles |
| Title | 80px | 800 | Section headings |
| Subtitle | 56px | 600 | Secondary headings |
| Heading | 48px | 700 | Content headings |
| Body | 40px | 500 | Main text |
| Body Small | 36px | 400 | Secondary text |
| Caption | 32px | 500 | Labels, metadata |
| Data Large | 120px | 800 | Key metrics |
| Data | 72px | 700 | Standard metrics |

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
Good: Caption at 32px minimum
```

## Quick Reference

```tsx
// Title
<div style={{
  fontSize: 80,
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: -2,
}}>

// Body
<div style={{
  fontSize: 40,
  fontWeight: 500,
  lineHeight: 1.5,
  letterSpacing: 0,
}}>

// Data
<div style={{
  fontSize: 72,
  fontWeight: 800,
  lineHeight: 1,
  letterSpacing: -1,
}}>
```
