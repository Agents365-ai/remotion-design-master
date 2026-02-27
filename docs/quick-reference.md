# Quick Reference: Video Sizing Cheatsheet

Practical size combinations for common video section types.
All sizes in pixels for 1080p design (use `scale(2)` wrapper for 4K output).

## Section Types at a Glance

| Section Type | Title | Subtitle | Body | Icon | Padding |
|--------------|-------|----------|------|------|---------|
| **Hook/Hero** | 330 | 140 | 77 | 300 | 80 |
| **Intro/CTA** | 330 | 140 | 77 | 300 | 80 |
| **Features (2-3)** | 220 | 100 | 64 | 200 | 60 |
| **Comparison (2)** | 220 | 100 | 64 | 200 | 60 |
| **Grid (4-6)** | 176 | 85 | 58 | 150 | 48 |
| **Data Table** | 143 | 70 | 51 | 120 | 40 |

## Copy-Paste Snippets

### Hook/Hero Section (Impact Tier)
```tsx
// Brand name or hook question - maximum visual impact
<div style={{ fontSize: 400, fontWeight: 900, letterSpacing: -6 }}>
  Scrapling
</div>

// Section title
<div style={{ fontSize: 330, fontWeight: 700, letterSpacing: -6 }}>
  为什么选择我们？
</div>

// Subtitle
<div style={{ fontSize: 140, fontWeight: 600 }}>
  Supporting context here
</div>

// Hero emoji
<div style={{ fontSize: 300 }}>🚀</div>
```

### Standard Content Section (Standard Tier)
```tsx
// Section title (top-center recommended)
<div style={{ fontSize: 220, fontWeight: 700, letterSpacing: -6, textAlign: 'center' }}>
  核心功能
</div>

// Content card
<div style={{ padding: 60, borderRadius: 32, background: '#f9fafb' }}>
  {/* Card title */}
  <div style={{ fontSize: 100, fontWeight: 700 }}>功能名称</div>
  {/* Card description */}
  <div style={{ fontSize: 64, fontWeight: 500 }}>功能描述文字</div>
  {/* Icon */}
  <div style={{ fontSize: 200 }}>⚡</div>
</div>
```

### Feature Grid (Compact Tier)
```tsx
// Section title
<div style={{ fontSize: 176, fontWeight: 700, letterSpacing: -4 }}>
  生态系统
</div>

// Grid container
<div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
  {features.map(f => (
    <div style={{ padding: 48, flex: '1 1 300px', borderRadius: 24 }}>
      <div style={{ fontSize: 150 }}>{f.icon}</div>
      <div style={{ fontSize: 85, fontWeight: 600 }}>{f.title}</div>
      <div style={{ fontSize: 58, fontWeight: 400 }}>{f.desc}</div>
    </div>
  ))}
</div>
```

### Data Display (Dense Tier)
```tsx
// Metric card
<div style={{ textAlign: 'center', padding: 40 }}>
  <div style={{ fontSize: 180, fontWeight: 800 }}>98%</div>
  <div style={{ fontSize: 70, fontWeight: 500, color: '#6b7280' }}>Success Rate</div>
</div>

// Comparison bars
<div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
  <div style={{ fontSize: 51, width: 200 }}>Feature Name</div>
  <div style={{ flex: 1, height: 40, background: '#2563eb', borderRadius: 20 }} />
  <div style={{ fontSize: 72, fontWeight: 700 }}>2.5x</div>
</div>
```

## Sizing Tier Multipliers

Apply to base sizes for automatic content adaptation:

```tsx
import { sizingTiers, selectTier, tierSizes } from './tokens/sizingTiers'

// Auto-select based on item count
const tier = selectTier(items.length)  // 1→impact, 2-3→standard, 4-6→compact, 6+→dense

// Get pre-calculated sizes
const sizes = tierSizes[tier]
// sizes.sectionTitle, sizes.contentTitle, sizes.subtitle, sizes.body, sizes.icon

// Or calculate dynamically
const adjustedTitle = fontSize.hero * sizingTiers[tier].title
```

## Title Position Options

```tsx
// Top-center (recommended for video)
<div style={{
  position: 'absolute', top: 60, left: 0, right: 0,
  textAlign: 'center',
  fontSize: 220, fontWeight: 700,
}}>

// Top-left (presentation style)
<div style={{
  position: 'absolute', top: 60, left: 80,
  fontSize: 220, fontWeight: 700,
}}>

// Full-center (hero/hook only)
<div style={{
  display: 'flex', justifyContent: 'center', alignItems: 'center',
  height: '100%',
  fontSize: 400, fontWeight: 900,
}}>
```

## Safe Zones

```
┌────────────────────────────────────────────────────┐
│ ↕ 60px top margin                                  │
│ ←80px                                         80px→│
│                                                    │
│              [Content Area 85-95%]                 │
│                                                    │
│ ↕ 140px bottom margin (subtitle + progress bar)   │
└────────────────────────────────────────────────────┘
```

## Minimum Sizes

| Element | Minimum | Reason |
|---------|---------|--------|
| Body text | 48px | Readable at 720p playback |
| Captions | 40px | Legible on mobile |
| Progress bar text | 32px | Absolute minimum |
| Icons | 80px | Recognizable at distance |

## Common Patterns

### Card with Icon + Text
```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: 40, padding: 60 }}>
  <div style={{ fontSize: 160 }}>🔥</div>
  <div>
    <div style={{ fontSize: 100, fontWeight: 700 }}>Card Title</div>
    <div style={{ fontSize: 64, color: '#6b7280' }}>Description text</div>
  </div>
</div>
```

### Stat with Label
```tsx
<div style={{ textAlign: 'center' }}>
  <div style={{ fontSize: 180, fontWeight: 800, color: '#2563eb' }}>42%</div>
  <div style={{ fontSize: 72, fontWeight: 500, marginTop: 16 }}>Improvement</div>
</div>
```

### Before/After Comparison
```tsx
<div style={{ display: 'flex', gap: 60 }}>
  <div style={{ flex: 1, padding: 48, background: '#fef2f2', borderRadius: 24 }}>
    <div style={{ fontSize: 72, fontWeight: 600, color: '#dc2626' }}>Before</div>
    <div style={{ fontSize: 140, fontWeight: 800, marginTop: 24 }}>Old Value</div>
  </div>
  <div style={{ flex: 1, padding: 48, background: '#f0fdf4', borderRadius: 24 }}>
    <div style={{ fontSize: 72, fontWeight: 600, color: '#16a34a' }}>After</div>
    <div style={{ fontSize: 140, fontWeight: 800, marginTop: 24 }}>New Value</div>
  </div>
</div>
```
