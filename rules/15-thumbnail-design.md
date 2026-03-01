# 15 - Thumbnail Design Guidelines (Bilibili)

## Core Principle: Fill the Frame

Thumbnails must **fill every pixel**. No empty space, no breathing room, no tiny centered text floating in whitespace. Content should press against the edges. The goal: at 170px wide on a phone screen, your thumbnail is still a punch in the eye.

## Why Thumbnails Need Special Treatment

70%+ of Bilibili impressions happen on **mobile** where thumbnails display at ~170×128px (4:3) or ~168×94px (16:9). A 4K source (3840px) shrinks **22x** to reach mobile. Design for mobile first.

### The Math (1080p design space → mobile display)

```
1920px design → 170px mobile = 11.3x reduction
Chinese minimum readable: ~14px on screen
14px × 11.3 = 158px minimum in design space

→ Chinese title must be ≥160px to be readable on mobile
```

## Font Size Rules

All sizes are for **1080p design space** (with scale(2) to 4K):

| Level | Size | Mobile Equivalent | Usage | Max Characters |
|-------|------|-------------------|-------|----------------|
| **L1 Title** | 200-300px | 18-27px | Core message, must be readable | 2-6 Chinese chars |
| **L2 Subtitle** | 100-140px | 9-12px | Supporting info, readable | 4-8 chars |
| **L3 Tags** | 72-96px | 6-8px | Color blocks with text | 2-4 chars per tag |
| **Icons/Emoji** | 120-180px | 11-16px | Visual anchors | - |

### Chinese Typography Requirements

- **Font weight**: 800-900 (extrabold/black) — thin strokes vanish at small sizes
- **Font family**: PingFang SC, Noto Sans SC, Source Han Sans (clear strokes, free commercial use)
- **Letter spacing**: 2-6px — Chinese needs breathing room between characters
- **Never use**: Serif/Song fonts (stroke details disappear at thumbnail scale)

## Layout: Fill the Screen

### Element Budget: 2-5 elements maximum

| Priority | Element | Role | Required? |
|----------|---------|------|-----------|
| P0 | Large title (2-6 chars) | "What is this" | Yes |
| P1 | Visual focus (icon/face/data) | Grab attention | Yes |
| P2 | 1-2 tags | Category/emotion | Optional |
| P3 | Subtitle | Extra context | Optional |

### Fill-the-Frame Patterns

```
Pattern A: Full-Bleed Title (most impactful)
┌──────────────────────────────────┐
│ 🏷️标签  🏷️标签                  │
│                                  │
│    大标题占满整个                  │
│    画面宽度无留白                  │
│                                  │
│    副标题铺满底部区域              │
└──────────────────────────────────┘
→ Title uses 90%+ width, padding ≤20px

Pattern B: Split Layout (text + visual)
┌──────────────────────────────────┐
│ 大标题大标题  │  📊              │
│ 大标题大标题  │  大图标           │
│              │  或数据           │
│ 副标题铺满   │  占满右半          │
└──────────────────────────────────┘
→ Each half fills its space completely

Pattern C: Data Hero (numbers as visual)
┌──────────────────────────────────┐
│  🏷️ 标签                        │
│                                  │
│        10x                       │
│     超大数据铺满                  │
│                                  │
│   说明文字占满底部宽度            │
└──────────────────────────────────┘
→ Data number at 300-400px, fills center

Pattern D: Full-Bleed Image + Overlay
┌──────────────────────────────────┐
│                                  │
│     Background Image             │
│     (cover entire frame)         │
│                                  │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│  大白字铺满  🏷️标签  🏷️标签     │
└──────────────────────────────────┘
→ Dark gradient overlay, text spans full width
```

### Hard Constraints for Filling

| Rule | Value | Reason |
|------|-------|--------|
| Content width | **≥90% of frame** | No tiny centered boxes |
| Padding | **≤20px** | Maximize content area |
| Title width | **≥85% of frame width** | Text should span the frame |
| Background | **100% coverage** | No visible frame edges |
| Element gaps | **≤24px** | Tight composition, not sparse |

## Color Strategy

Bilibili feed background is white/light gray (#f5f5f5). Your thumbnail must **contrast against the feed**.

| Strategy | Feed Contrast | CTR Potential | Recommended |
|----------|---------------|---------------|-------------|
| **Dark bg + white text** | Highest | ⭐⭐⭐ | Default choice |
| **Gradient bg + white text** | High | ⭐⭐⭐ | Premium feel |
| **Saturated color + white text** | High | ⭐⭐ | Brand/series |
| White bg + colored text | Low | ⭐ | Avoid |

High-energy colors: red, orange, blue, purple. Avoid: gray, brown (low energy).

## Safe Zones (4:3 + 16:9 dual crop)

Bilibili uses 4:3 on mobile home, 16:9 elsewhere. Core content must survive both crops:

```
16:9 source (1920×1080)
┌─────────────────────────────────────────┐
│ ░░░│                              │░░░  │
│ ░░░│    ★ SAFE ZONE ★             │░░░  │
│ ░░░│    (center 80% × 85%)       │░░░  │
│ ░░░│    All critical content here │░░░  │
│ ░░░│                              │░░░  │
│ ░░░│──────────────────────────────│░░░  │
│ ░░░│ ⚠️ bottom 60px: B站 duration │░░░  │
└─────────────────────────────────────────┘
  ↑                                   ↑
  Left 10% may be cropped        Right 10%
  in 4:3 display                 may be cropped
```

**Safe zone**: center **1536×918px** at 1080p (80% × 85% of frame).

## Bilibili Specs

| Ratio | Resolution | Usage |
|-------|------------|-------|
| 16:9 | 1920×1080 or 3840×2160 | Playback page, desktop |
| 4:3 | 1440×1080 or 2880×2160 | Mobile home feed |

⚠️ **Both ratios MANDATORY** — missing either causes broken display.

## Thumbnail Tokens

```tsx
export const thumbnailTokens = {
  fontSize: {
    title: 260,        // L1: primary title (200-300px range)
    titleCompact: 200,  // L1: when title has 5-6 chars
    subtitle: 120,     // L2: supporting text
    tag: 80,           // L3: tag labels
    dataHero: 360,     // huge single number
    icon: 140,         // emoji/icon size
  },
  spacing: {
    padding: 20,       // frame edge padding (minimal!)
    tagGap: 16,        // between tags (tight)
    elementGap: 20,    // between major elements (tight)
  },
  fontWeight: {
    title: 900,        // black — maximum impact
    subtitle: 700,     // bold
    tag: 700,          // bold
  },
  letterSpacing: {
    title: 4,          // Chinese breathing room
    subtitle: 2,
  },
  borders: {
    tag: '3px solid',  // visible at small sizes
    card: '3px solid rgba(0,0,0,0.1)',
    radius: 24,
  },
}
```

## Component Template

```tsx
// Fill-the-frame thumbnail — dark gradient background
export const Thumbnail = () => (
  <AbsoluteFill style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', fontFamily: font }}>
    <AbsoluteFill style={{
      transform: 'scale(2)',
      transformOrigin: 'top left',
      width: '50%',
      height: '50%'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {/* Tags - 80px, span full width */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
          <div style={{
            background: 'rgba(249,115,22,0.25)',
            border: '3px solid rgba(249,115,22,0.4)',
            borderRadius: 24,
            padding: '12px 28px',
            fontSize: 80,
            fontWeight: 700,
            color: '#fb923c'
          }}>标签</div>
        </div>

        {/* Main Title - 260px, fills width */}
        <div style={{
          fontSize: 260,
          fontWeight: 900,
          letterSpacing: 4,
          color: '#fff',
          lineHeight: 1.1,
          width: '100%',
        }}>
          大标题占满
        </div>

        {/* Subtitle - 120px, fills width */}
        <div style={{
          fontSize: 120,
          fontWeight: 700,
          color: 'rgba(255,255,255,0.7)',
          marginTop: 16,
          width: '100%',
        }}>
          副标题铺满整个宽度
        </div>

        {/* Visual anchors - large icons */}
        <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
          <span style={{ fontSize: 140 }}>🚀</span>
          <span style={{ fontSize: 140 }}>⚡</span>
          <span style={{ fontSize: 140 }}>🔥</span>
        </div>
      </div>
    </AbsoluteFill>
  </AbsoluteFill>
)
```

## Quick Checklist

- [ ] Title ≥200px and spans ≥85% of frame width?
- [ ] Total elements ≤5?
- [ ] Font weight ≥800 for Chinese text?
- [ ] Icons ≥120px?
- [ ] Dark/gradient background (not white)?
- [ ] Padding ≤20px (content pressed to edges)?
- [ ] Core content within center safe zone (80%×85%)?
- [ ] No text in bottom-right corner (B站 duration badge)?
- [ ] Generated both 16:9 AND 4:3? ⚠️ **MANDATORY**
- [ ] Tested at 170px width — still readable?
