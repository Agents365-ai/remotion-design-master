# Typography Guide

Effective text styling for video content.

## Font Stack

```tsx
import { font, fontFamily } from './design/tokens'

// Default sans-serif
fontFamily.sans = '-apple-system, "SF Pro Display", "Noto Sans SC", "Helvetica Neue", sans-serif'

// Monospace for code
fontFamily.mono = '"SF Mono", "Fira Code", "JetBrains Mono", Consolas, monospace'

// Apply to video
<AbsoluteFill style={{ fontFamily: font }}>
  ...
</AbsoluteFill>
```

## Size Scale

| Name | Size | Use Case |
|------|------|----------|
| hero | 100px | Single big statement |
| display | 88px | Large titles |
| title | 80px | Section headings |
| subtitle | 56px | Secondary headings |
| heading | 48px | Content headings |
| body | 40px | Main text |
| bodySmall | 36px | Secondary text |
| caption | 32px | Labels, metadata |
| dataHero | 140px | Single huge metric |
| dataLarge | 120px | Large numbers |
| data | 72px | Standard numbers |

## Typography Components

### Title

```tsx
import { Title, HeroTitle, SectionTitle, Subtitle } from './design'

<Title size="hero">Hero Title</Title>
<Title size="large">Section Title</Title>
<Title size="medium">Subtitle</Title>

// Or use convenience components
<HeroTitle>Big Statement</HeroTitle>
<SectionTitle>Section</SectionTitle>
<Subtitle>Supporting text</Subtitle>
```

### Text

```tsx
import { Text, MutedText, BoldText } from './design'

<Text>Regular body text</Text>
<Text muted>Secondary text</Text>
<Text bold>Emphasized text</Text>
<MutedText>Also secondary</MutedText>
```

### Caption

```tsx
import { Caption, Label } from './design'

<Caption>Small descriptive text</Caption>
<Label>UPPERCASE LABEL</Label>
```

### Code

```tsx
import { Code, CodeBlock, InlineCode } from './design'

<InlineCode>const x = 1</InlineCode>

<CodeBlock>
{`function hello() {
  console.log('Hello World')
}`}
</CodeBlock>
```

### Quote

```tsx
import { Quote, PullQuote } from './design'

<Quote attribution="Author Name">
  This is a quoted text with styling.
</Quote>

<PullQuote>Large dramatic quote</PullQuote>
```

## Weight Guide

| Weight | Value | Use |
|--------|-------|-----|
| extrabold | 800 | Titles, data |
| bold | 700 | Headings |
| semibold | 600 | Labels, emphasis |
| medium | 500 | Body text |
| normal | 400 | Secondary text |

## Line Height

```tsx
// For single-line text (titles)
lineHeight: 1.0 or 1.1

// For multi-line text (body)
lineHeight: 1.5

// For code
lineHeight: 1.6
```

## Letter Spacing

```tsx
// Tight (large titles)
letterSpacing: -2

// Normal (body text)
letterSpacing: 0

// Wide (uppercase labels)
letterSpacing: 2
```

## Common Patterns

### Hero + Subtitle

```tsx
<FadeIn>
  <Title size="hero">Main Message</Title>
</FadeIn>
<FadeIn delay={15}>
  <Title size="medium" color={tokens.colors.textMuted}>
    Supporting context
  </Title>
</FadeIn>
```

### Data + Label

```tsx
<div style={{ textAlign: 'center' }}>
  <div style={{
    fontSize: tokens.fontSize.dataLarge,
    fontWeight: 800,
    color: tokens.colors.accent,
  }}>
    42%
  </div>
  <div style={{
    fontSize: tokens.fontSize.caption,
    color: tokens.colors.textMuted,
    marginTop: 12,
  }}>
    Efficiency Gain
  </div>
</div>
```

### Section Title + Body

```tsx
<Title>Section Title</Title>
<Text style={{ marginTop: 32 }}>
  Body text that provides more detail about the section.
</Text>
```

## Text Alignment

```
Center: Titles, data displays, short text (1-2 lines)
Left: Body paragraphs (3+ lines), lists
Right: Numbers in tables, timestamps
```

## Dark Theme Typography

```tsx
import { darkTech } from './design/themes'

// On dark backgrounds, add text glow
<Title
  theme={darkTech}
  style={{
    textShadow: '0 0 10px rgba(0,212,255,0.5)',
  }}
>
  Neon Title
</Title>
```

## Quick Reference

```tsx
// Standard title
<Title size="large">Section Title</Title>

// Muted subtitle
<Title size="medium" color={tokens.colors.textMuted}>
  Subtitle
</Title>

// Body text
<Text>Regular paragraph text</Text>

// Large data number
<span style={{
  fontSize: tokens.fontSize.dataLarge,
  fontWeight: 800,
  color: tokens.colors.accent,
}}>
  99.9%
</span>
```
