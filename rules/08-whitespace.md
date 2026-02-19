# 08 - Whitespace & Breathing Room

## Whitespace is Design

Empty space is not wasted space. It:
- Directs attention
- Groups related elements
- Creates visual calm
- Improves comprehension

## Macro vs Micro Whitespace

### Macro Whitespace
Large-scale spacing between major sections:

```tsx
// Between sections
marginTop: 50-80px

// Page edge padding
padding: 30-50px

// Above/below hero elements
margin: 60-100px
```

### Micro Whitespace
Fine spacing within components:

```tsx
// Between icon and text
gap: 12px

// Inside cards
padding: 24-36px

// Between list items
gap: 16-24px
```

## The Proximity Principle

Elements close together are perceived as related:

```
┌─────────────────────────┐
│  Title                  │
│  subtitle               │  ← Related (close)
│                         │
│                         │  ← Separation
│  Another Title          │
│  another subtitle       │  ← Different group
└─────────────────────────┘
```

### Application

```tsx
// Related elements: tight spacing
<div style={{ gap: 8 }}>
  <Title>Revenue</Title>
  <DataDisplay value="$4.2M" />
</div>

// Separate groups: more spacing
<div style={{ marginTop: 60 }}>
  <Title>Costs</Title>
  <DataDisplay value="$1.1M" />
</div>
```

## Spacing Scale

Use consistent spacing values:

```ts
spacing = {
  tight: 16,     // Within grouped elements
  element: 30,   // Between related elements
  section: 50,   // Between major sections
  page: 40,      // Edge padding
}
```

### When to Use Each

| Spacing | Use Case |
|---------|----------|
| 8-12px | Icon to text, line items |
| 16px | Within cards, between related items |
| 24-32px | Between paragraphs, list items |
| 40-50px | Between content sections |
| 60-80px | Between major sections |
| 100px | Bottom subtitle margin |

## Edge Padding

Video frames need edge breathing room:

```tsx
// Too tight (content touches edge)
padding: 0  // BAD

// Acceptable
padding: 30-50px  // GOOD

// Content still uses 85-95% of remaining space
```

## Asymmetric Spacing

Not all spacing needs to be equal:

```tsx
// Title gets more space above than below
<div style={{ marginTop: 80, marginBottom: 32 }}>
  <Title>Section Title</Title>
</div>

// Subtitle closer to title it belongs to
<Title style={{ marginBottom: 16 }}>Title</Title>
<Subtitle>Belongs with title above</Subtitle>
```

## Density Levels

### Sparse (Presentations, Heroes)
```tsx
padding: 60
gap: 48
```
- Maximum impact
- Single focused message
- Large type sizes

### Moderate (Features, Lists)
```tsx
padding: 40
gap: 32
```
- Multiple related points
- Clear groupings
- Standard body text

### Dense (Data, Tables)
```tsx
padding: 24
gap: 16
```
- Information-heavy
- Comparison layouts
- Smaller type acceptable

## Whitespace Anti-Patterns

### Cramped
```
Bad: Elements touching or nearly touching
- Title directly on image
- Cards with 8px padding
- No margin between sections
```

### Floating
```
Bad: Equal spacing everywhere
- Content feels disconnected
- No visual grouping
- Elements drift apart
```

### Inconsistent
```
Bad: Random spacing values
- 23px here, 47px there
- No rhythm or pattern
- Feels undesigned
```

## Quick Reference

```
Title to subtitle:      16-24px
Subtitle to body:       24-32px
Body paragraphs:        24px
List items:             16-24px
Card internal:          32-48px
Section to section:     48-80px
Page padding:           30-50px
Subtitle safe zone:     100px (bottom)
```
