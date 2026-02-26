# 15 - Thumbnail Design Guidelines (Bilibili)

## Why Thumbnails Need Special Treatment

Thumbnails are viewed at small sizes. Standard video text sizes appear **tiny** when shrunk to thumbnail dimensions.

### The Math

A 4K video (3840x2160) displayed as a thumbnail is scaled down by **12x**. Your 40px body text becomes ~3px - illegible.

## Thumbnail Design Rules

### 1. Scale All Elements 2x

| Element | Video Size | Thumbnail Size |
|---------|------------|----------------|
| Title | 64-80px | 140-200px |
| Subtitle | 28-36px | 56-80px |
| Tags/Badges | 20-28px | 40-56px |
| Icons | 32-48px | 56-80px |
| Card text | 14-20px | 28-40px |

### 2. Element Count

Thumbnails can have **3-15 elements** depending on content:

| Type | Elements | Example |
|------|----------|---------|
| Minimal | 3-5 | Title + subtitle + 1-2 icons |
| Standard | 5-8 | Title + tags + 3 feature cards |
| Rich | 8-15 | Title + tags + grid of features |

### 3. Maximize Contrast

- White backgrounds: dark text (#1a1a1a to #333)
- Dark backgrounds: white text (#fff)
- Colored elements: high-saturation colors
- Borders: 2px+ thickness

### 4. Bilibili Safe Zones

```
┌────────────────────────────────────┐
│                                    │
│        Main Content Area           │
│        (center focus)              │
│                                    │
├────────────────────────────────────┤
│ ⚠️ Bottom corners: platform badges │
└────────────────────────────────────┘
```

Avoid placing text in bottom corners (duration, badges).

## Bilibili Thumbnail Specs

| Ratio | Resolution | Usage |
|-------|------------|-------|
| 16:9 | 1920×1080 or 3840×2160 | Primary |
| 4:3 | 1440×1080 or 2880×2160 | Alternative |

**Both ratios recommended** - Bilibili displays different ratios in different contexts.

## Thumbnail Component Template

```tsx
export const Thumbnail = () => (
  <AbsoluteFill style={{ background: '#fff', fontFamily: font }}>
    <AbsoluteFill style={{
      transform: 'scale(2)',
      transformOrigin: 'top left',
      width: '50%',
      height: '50%'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Tags - 40px font */}
        <div style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
          <div style={{
            background: 'rgba(249,115,22,0.15)',
            border: '2px solid rgba(249,115,22,0.3)',
            borderRadius: 20,
            padding: '16px 32px',
            fontSize: 40,
            fontWeight: 700,
            color: '#f97316'
          }}>Tag 1</div>
        </div>

        {/* Main Title - 144px */}
        <div style={{
          fontSize: 144,
          fontWeight: 800,
          letterSpacing: -4,
          background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Title
        </div>

        {/* Subtitle - 56px */}
        <div style={{ fontSize: 56, marginTop: 24, color: '#666' }}>
          Subtitle
        </div>

        {/* Feature cards - 56px icons, 28px text */}
        <div style={{ display: 'flex', gap: 40, marginTop: 64 }}>
          <div style={{
            background: 'rgba(0,0,0,0.02)',
            border: '2px solid rgba(0,0,0,0.08)',
            borderRadius: 24,
            padding: '32px 48px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: 56 }}>🎯</div>
            <div style={{ fontSize: 28, fontWeight: 600, marginTop: 8 }}>Feature</div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
)
```

## Thumbnail Tokens

```tsx
export const thumbnailTokens = {
  fontSize: {
    title: 144,
    titleLarge: 200,
    subtitle: 56,
    tag: 40,
    cardTitle: 28,
    cardIcon: 56,
  },
  spacing: {
    tagGap: 24,
    sectionGap: 32,
    cardGap: 40,
    cardPadding: '32px 48px',
  },
  borders: {
    tag: '2px solid',
    card: '2px solid rgba(0,0,0,0.08)',
    radius: 20,
  },
}
```

## Quick Checklist

- [ ] All text at 2x video size?
- [ ] Title 140px+?
- [ ] Icons 56px+?
- [ ] No text in bottom corners?
- [ ] Generated both 16:9 and 4:3?
