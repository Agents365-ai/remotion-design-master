# 15 - Thumbnail Design Guidelines (Bilibili)

## Core Principle: Centered, Clean, Readable

White background, all content centered vertically and horizontally. Large bold text dominates the frame. At 170px wide on a phone screen, the title must still be readable.

## Why Thumbnails Need Special Treatment

70%+ of Bilibili impressions happen on **mobile** where thumbnails display at ~170×128px (4:3) or ~168×94px (16:9). A 4K source (3840px) shrinks **22x** to reach mobile. Design for mobile first.

### The Math (1080p design space → mobile display)

```
1920px design → 170px mobile = 11.3x reduction
Chinese minimum readable: ~14px on screen
14px × 11.3 = 158px minimum in design space

→ Chinese title must be ≥160px to be readable on mobile
```

## Default Style: White Centered

```
┌──────────────────────────────────┐
│                                  │
│     🏷️标签A  🏷️标签B  🚀⚡🔥    │
│                                  │
│        视频封面标题                │
│     副标题铺满整个画面宽度         │
│                                  │
└──────────────────────────────────┘
```

- **White background** (#ffffff)
- All elements **centered** (flex column, justify-content: center, align-items: center)
- Tags and icons in **same row**
- Title below tags, subtitle below title
- Minimal padding (40-50px)

## Font Size Rules

All sizes are for **1080p design space** (no scale(2) — Composition renders at 1920×1080 or 1200×900 directly):

| Level | Size | Mobile Equivalent | Usage | Max Characters |
|-------|------|-------------------|-------|----------------|
| **L1 Title** | 150-160px | 13-14px | Core message, must be readable | 2-6 Chinese chars |
| **L2 Subtitle** | 56-60px | 5-6px | Supporting info | 4-10 chars |
| **L3 Tags** | 40-44px | 4px | Color blocks with text | 2-4 chars per tag |
| **Icons/Emoji** | 70-80px | 6-7px | Visual anchors next to tags | - |

### Chinese Typography Requirements

- **Font weight**: 900 (black) for title, 700 (bold) for subtitle and tags
- **Font family**: PingFang SC, Noto Sans SC (clear strokes, free commercial use)
- **Letter spacing**: 2-6px — Chinese needs breathing room
- **Title color**: #1a1a2e (near-black, high contrast on white)
- **Subtitle color**: #666 (medium gray)
- **Never use**: Serif/Song fonts (stroke details disappear at thumbnail scale)

## Layout Structure

3 rows, all centered:

```
Row 1: Tags + Icons (same row, centered)
Row 2: Title (large, centered, bold)
Row 3: Subtitle (medium, centered, gray)
```

Gap between rows: 24px. Padding from edges: 40-50px.

### Element Budget: 2-5 elements maximum

| Priority | Element | Role | Required? |
|----------|---------|------|-----------|
| P0 | Large title (2-6 chars) | "What is this" | Yes |
| P1 | Subtitle | Supporting context | Yes |
| P2 | 1-3 tags | Category/keywords | Optional |
| P3 | 1-3 icons/emoji | Visual anchors | Optional |

## Color Strategy

| Element | Color | Notes |
|---------|-------|-------|
| Background | `#ffffff` | Clean white |
| Title | `#1a1a2e` | Near-black, maximum contrast |
| Subtitle | `#666666` | Medium gray, secondary hierarchy |
| Tag text | `#f97316` | Orange, attention-grabbing |
| Tag background | `rgba(249,115,22,0.1)` | Light orange tint |
| Tag border | `3px solid rgba(249,115,22,0.3)` | Visible at small sizes |

## Safe Zones (4:3 + 16:9 dual crop)

Bilibili uses 4:3 on mobile home, 16:9 elsewhere. Core content must survive both crops. Centered layout naturally handles this — content stays in the safe zone.

```
16:9 source (1920×1080)
┌─────────────────────────────────────────┐
│ ░░░│                              │░░░  │
│ ░░░│    ★ SAFE ZONE ★             │░░░  │
│ ░░░│    (center 80% × 85%)       │░░░  │
│ ░░░│    Centered content is safe  │░░░  │
│ ░░░│                              │░░░  │
│ ░░░│──────────────────────────────│░░░  │
│ ░░░│ ⚠️ bottom 60px: B站 duration │░░░  │
└─────────────────────────────────────────┘
```

## Bilibili Specs

| Ratio | Resolution | Usage |
|-------|------------|-------|
| 16:9 | 1920×1080 | Playback page, desktop |
| 4:3 | 1200×900 | Mobile home feed |

⚠️ **Both ratios MANDATORY** — missing either causes broken display.

## Thumbnail Tokens

```tsx
export const thumbnailTokens = {
  fontSize: {
    title: 160,       // L1: primary title
    titleCompact: 150, // L1: for 4:3 or longer titles
    subtitle: 60,      // L2: supporting text
    subtitleCompact: 56,
    tag: 44,           // L3: tag labels
    icon: 80,          // emoji/icon size
  },
  colors: {
    background: '#ffffff',
    title: '#1a1a2e',
    subtitle: '#666666',
    tagText: '#f97316',
    tagBg: 'rgba(249,115,22,0.1)',
    tagBorder: 'rgba(249,115,22,0.3)',
  },
  spacing: {
    padding: '40px 50px',
    rowGap: 24,
    tagGap: 20,
  },
  fontWeight: {
    title: 900,
    subtitle: 700,
    tag: 700,
  },
  letterSpacing: {
    title: 6,
    subtitle: 2,
  },
  borders: {
    tag: '3px solid',
    tagRadius: 24,
  },
}
```

## Component Template

```tsx
import { AbsoluteFill } from 'remotion'

const font = "'PingFang SC', 'Noto Sans SC', sans-serif"

export const Thumbnail = ({
  title = '视频封面标题',
  subtitle = '副标题铺满整个画面宽度区域',
  tags = ['标签A', '标签B'],
  icons = ['🚀', '⚡', '🔥'],
}) => (
  <AbsoluteFill style={{ background: '#ffffff', fontFamily: font }}>
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 50px',
      gap: 24,
    }}>
      {/* Tags + Icons row */}
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        {tags.map((tag, i) => (
          <div key={i} style={{
            background: 'rgba(249,115,22,0.1)',
            border: '3px solid rgba(249,115,22,0.3)',
            borderRadius: 24,
            padding: '14px 36px',
            fontSize: 44,
            fontWeight: 700,
            color: '#f97316',
          }}>{tag}</div>
        ))}
        {icons.map((icon, i) => (
          <span key={i} style={{ fontSize: 80 }}>{icon}</span>
        ))}
      </div>

      {/* Title */}
      <div style={{
        fontSize: 160,
        fontWeight: 900,
        letterSpacing: 6,
        color: '#1a1a2e',
        lineHeight: 1.2,
        textAlign: 'center',
      }}>
        {title}
      </div>

      {/* Subtitle */}
      <div style={{
        fontSize: 60,
        fontWeight: 700,
        color: '#666',
        letterSpacing: 2,
        textAlign: 'center',
      }}>
        {subtitle}
      </div>
    </div>
  </AbsoluteFill>
)
```

## Quick Checklist

- [ ] Title ≥150px and centered?
- [ ] Total elements ≤5?
- [ ] Font weight ≥900 for title, ≥700 for subtitle?
- [ ] White background (#ffffff)?
- [ ] Tags + icons in same row?
- [ ] All content centered (vertical + horizontal)?
- [ ] No text in bottom-right corner area (B站 duration badge)?
- [ ] Generated both 16:9 AND 4:3? ⚠️ **MANDATORY**
- [ ] Tested at 170px width — title still readable?
