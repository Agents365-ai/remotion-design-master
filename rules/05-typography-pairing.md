# 05 - Typography Pairing

## The Pairing Principle

Good typography pairing creates contrast through **one axis of difference**:
- Size contrast (large vs small)
- Weight contrast (bold vs regular)
- Style contrast (sans vs serif)

**Don't** combine multiple similar fonts. Use one font family with size/weight variation.

## Recommended Pairings

### Title + Body (Same Family)

```tsx
// Most common and safest approach
const Title = {
  fontFamily: 'SF Pro Display',
  fontSize: 80,
  fontWeight: 800,
}

const Body = {
  fontFamily: 'SF Pro Display',
  fontSize: 40,
  fontWeight: 500,
}
```

### Sans Title + Mono Code

```tsx
// For technical content
const Title = {
  fontFamily: 'SF Pro Display',
  fontSize: 80,
  fontWeight: 700,
}

const Code = {
  fontFamily: 'SF Mono',
  fontSize: 36,
  fontWeight: 400,
}
```

### Sans Content + Serif Quote

```tsx
// For editorial/testimonial content
const Content = {
  fontFamily: 'SF Pro Display',
  fontSize: 40,
  fontWeight: 500,
}

const Quote = {
  fontFamily: 'Georgia',
  fontSize: 48,
  fontWeight: 400,
  fontStyle: 'italic',
}
```

## Size Ratios

Use consistent ratios between sizes:

```
1.25 ratio (Minor Third):
32 → 40 → 50 → 63 → 78

1.333 ratio (Perfect Fourth):
32 → 43 → 57 → 76 → 101

1.5 ratio (Perfect Fifth):
32 → 48 → 72 → 108 → 162
```

Our default scale uses approximately 1.25-1.5:
```
Caption: 32px
Body: 40px (32 × 1.25)
Subtitle: 56px (40 × 1.4)
Title: 80px (56 × 1.43)
Hero: 100px (80 × 1.25)
```

## Visual Hierarchy Patterns

### Pattern 1: Title-Subtitle-Body

```tsx
<FadeIn>
  <Title size="large">Main Heading</Title>
</FadeIn>
<FadeIn delay={15}>
  <Title size="medium" color={mutedColor}>
    Supporting tagline
  </Title>
</FadeIn>
<FadeIn delay={30}>
  <Text>Detailed description goes here...</Text>
</FadeIn>
```

### Pattern 2: Label-Data-Caption

```tsx
<Caption uppercase>REVENUE</Caption>
<DataDisplay value="$4.2M" size="large" />
<Caption>+23% YoY</Caption>
```

### Pattern 3: Heading-List

```tsx
<Title>Key Features</Title>
<List items={[
  'Feature one',
  'Feature two',
  'Feature three',
]} />
```

## Weight Combinations

```
Title (800) + Subtitle (600) + Body (500)
Title (800) + Caption (600) + Body (400)
Data (800) + Label (500)
```

## Spacing Between Elements

```ts
// Title to subtitle
marginTop: 16-24px

// Subtitle to body
marginTop: 24-32px

// Paragraph to paragraph
marginTop: 24px

// Heading to content
marginTop: 32-48px

// Section to section
marginTop: 48-64px
```

## Common Mistakes

### Using Too Many Fonts
```
Bad: Title in Montserrat, body in Roboto, caption in Open Sans
Good: All SF Pro Display with size/weight variation
```

### Inconsistent Pairing
```
Bad: Some titles bold, others not
Good: All titles consistently weight 800
```

### No Clear Hierarchy
```
Bad: Title 48px, subtitle 44px (too similar)
Good: Title 80px, subtitle 48px (clear difference)
```
