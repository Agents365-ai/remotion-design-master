# 06 - Layout Composition

## The Fill-the-Screen Principle

Video content must fill the frame. Unlike web design, there's no scrolling.

### Hard Constraints

```tsx
// Root container
style={{
  position: 'absolute',
  inset: 0,
  overflow: 'hidden',
}}

// Content width
minWidth: 85%   // Never smaller
maxWidth: 95%   // Leave minimal edge breathing room

// Media
objectFit: 'cover'  // Or DualLayerMedia for non-16:9
```

### What to Avoid

```tsx
// BAD: Centering that shrinks content
style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}}

// BAD: Small max-width
style={{ maxWidth: 600 }}  // Creates tiny centered box

// BAD: margin: auto without width control
style={{ margin: 'auto' }}
```

## Grid Systems

### Two-Column Layout

```tsx
<Grid columns={2} gap={60}>
  <div>Left content</div>
  <div>Right content</div>
</Grid>
```

### Three-Column Data

```tsx
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 80,
  width: '100%',
}}>
  <DataDisplay value="99%" label="Accuracy" />
  <DataDisplay value="1.2M" label="Users" />
  <DataDisplay value="<10ms" label="Latency" />
</div>
```

### Asymmetric Split (60/40)

```tsx
<div style={{
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr',
  gap: 60,
}}>
  <div>Main content (larger)</div>
  <div>Side content (smaller)</div>
</div>
```

## Zones

### Subtitle Safe Zone

Always reserve bottom 100px for subtitles:

```tsx
<ContentArea>
  {/* Content automatically has paddingBottom: 140px (40 + 100) */}
  <Title>Your content</Title>
</ContentArea>
```

### Edge Breathing Room

Use 30-50px page padding:

```tsx
padding: 40  // Default
// Content uses 85-95% of remaining space
```

## Vertical Rhythm

### Spacing Scale

```
tight: 16px      // Within grouped elements
element: 30px    // Between related elements
section: 50px    // Between major sections
```

### Common Patterns

```tsx
// Title → subtitle
marginTop: 16-24

// Subtitle → content
marginTop: 32-48

// Content → next section
marginTop: 60-80
```

## Composition Patterns

### Centered Hero

```
┌─────────────────────────────┐
│                             │
│         HERO TITLE          │
│       Supporting text       │
│                             │
└─────────────────────────────┘
```

```tsx
<ContentArea verticalAlign="center">
  <Title size="hero">Hero Title</Title>
  <Title size="medium">Supporting text</Title>
</ContentArea>
```

### Top Title + Center Content

```
┌─────────────────────────────┐
│ Section Title               │
│                             │
│    ┌─────┐  ┌─────┐        │
│    │ A   │  │ B   │        │
│    └─────┘  └─────┘        │
│                             │
└─────────────────────────────┘
```

```tsx
<ContentArea verticalAlign="top">
  <Title>Section Title</Title>
  <Grid columns={2} style={{ marginTop: 60 }}>
    <Card>A</Card>
    <Card>B</Card>
  </Grid>
</ContentArea>
```

### Full-Bleed Media + Overlay

```
┌─────────────────────────────┐
│█████████████████████████████│
│█████ BACKGROUND IMAGE ██████│
│█████████████████████████████│
│         Text Overlay        │
│█████████████████████████████│
└─────────────────────────────┘
```

```tsx
<FullBleed>
  <CoverMedia src={image} />
  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} />
  <ContentArea>
    <Title style={{ color: '#fff' }}>Text Overlay</Title>
  </ContentArea>
</FullBleed>
```

## Alignment Rules

```
Titles: Center (default)
Body text: Center for 1-2 lines, Left for 3+
Data displays: Center
Lists: Left with consistent icon alignment
Cards in grid: Stretch to fill
```

## Debugging Layout

Use `<DebugOverlay show={true} />` to visualize:
- Red border: Screen edge
- Blue dashed: 85% content area
- Pink area: Subtitle safe zone
