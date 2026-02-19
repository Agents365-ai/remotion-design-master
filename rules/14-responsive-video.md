# 14 - Responsive Video Design

## Fixed vs Responsive

Unlike web, video has fixed dimensions. However, we design at one resolution and scale for output.

### The Scale Pattern

Design at 1080p, render at 4K:

```tsx
// Wrap entire composition
<AbsoluteFill style={{
  transform: 'scale(2)',
  transformOrigin: 'top left',
  width: '50%',
  height: '50%',
}}>
  {/* Design at 1920x1080, renders at 3840x2160 */}
</AbsoluteFill>
```

### Why 1080p Base?

- Easier mental math (1080 vs 2160)
- Standard design reference
- Scales cleanly to 4K (2x)
- Works at 720p too (0.67x)

## Designing for Multiple Outputs

### 16:9 (Standard)
- 3840×2160 (4K) - Primary
- 1920×1080 (1080p) - Preview/lower bandwidth
- 1280×720 (720p) - Mobile/low bandwidth

### 9:16 (Vertical/Mobile)
- 1080×1920 - TikTok, Reels, Stories
- Different composition required

### 1:1 (Square)
- 1080×1080 - Instagram feed
- Different composition required

## Safe Zones

### Title Safe (Inner 90%)

Critical text should stay within inner 90%:

```tsx
// ~5% margin on each side
const titleSafeArea = {
  top: '5%',
  left: '5%',
  right: '5%',
  bottom: '5%',
}
```

### Action Safe (Inner 95%)

Important visual elements within inner 95%:

```tsx
// ~2.5% margin on each side
const actionSafeArea = {
  top: '2.5%',
  left: '2.5%',
  right: '2.5%',
  bottom: '2.5%',
}
```

### Subtitle Safe

Bottom 100px reserved:

```tsx
paddingBottom: spacing.page + 100
```

## Platform Considerations

### YouTube
- Thumbnail appears bottom-right (avoid text there)
- Progress bar at bottom
- Title safe zone matters

### Bilibili
- Danmaku (comments) overlay content
- Keep center relatively clean
- Progress bar + chapter markers at bottom

### Mobile Viewing
- Smaller screens = larger minimum text
- Keep text ≥32px (1080p base)
- Avoid fine details

## Font Sizing for Scale

### Minimum Readable Sizes

At 1080p design:
```
Minimum: 28-32px (barely readable on mobile)
Comfortable: 40px (body text)
Headlines: 64px+ (clear focus)
```

At 720p playback (scaled down):
```
Your 32px → appears as 24px
Your 40px → appears as 30px
Your 80px → appears as 60px
```

## Testing Multi-Resolution

### Quick Preview Render

```bash
# 720p preview (faster render)
npx remotion render ... --scale 0.33

# 1080p preview
npx remotion render ... --scale 0.5

# Full 4K
npx remotion render ... --scale 1
```

### Check at Multiple Sizes

1. Full screen on monitor (largest)
2. Half-screen window (medium)
3. Phone simulation (smallest)

## Aspect Ratio Adaptation

### Horizontal to Vertical

Can't just crop—need to recompose:

```
Horizontal (16:9):
┌───────────────────────────┐
│  Title      │   Image     │
│  • Point 1  │             │
│  • Point 2  │             │
└───────────────────────────┘

Vertical (9:16):
┌───────────┐
│   Image   │
│           │
├───────────┤
│   Title   │
│ • Point 1 │
│ • Point 2 │
└───────────┘
```

### Square Adaptation

```
Square (1:1):
┌─────────────┐
│    Title    │
│             │
│  ┌───────┐  │
│  │ Image │  │
│  └───────┘  │
│             │
│  Points...  │
└─────────────┘
```

## Compression Considerations

### High-Motion Areas

- Gradients may show banding
- Fine text may blur
- Add subtle noise to gradients

### Static Areas

- Compress well
- Good for data displays
- Clean text rendering

### Bitrate Recommendations

```bash
# Preview quality
--video-bitrate 4M

# Standard quality
--video-bitrate 8M

# High quality
--video-bitrate 16M

# Maximum quality (large files)
--video-bitrate 32M
```

## Quick Checklist

- [ ] Designed at 1080p with scale(2)?
- [ ] Text ≥32px at design size?
- [ ] Critical content within title safe (90%)?
- [ ] Subtitle safe zone (100px bottom)?
- [ ] Tested at smaller playback sizes?
- [ ] No fine details that compress poorly?
- [ ] Appropriate bitrate for platform?
