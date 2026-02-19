# Remotion Design Master

A comprehensive design system and component library for creating beautiful Remotion videos.

## Quick Start

```tsx
// 1. Copy components to your project
cp -r ~/.claude/skills/remotion-design-master/src/* src/remotion/design/

// 2. Import what you need
import { FullBleed, ContentArea, FadeIn, Title } from './design'
import { minimalWhite } from './design/themes'

// 3. Build beautiful sections
const HeroSection = () => (
  <FullBleed theme={minimalWhite}>
    <ContentArea>
      <FadeIn>
        <Title size="hero">Your Title Here</Title>
      </FadeIn>
    </ContentArea>
  </FullBleed>
)
```

## Design Philosophy

### 1. Fill the Screen
Content uses 85-95% of screen width. No tiny centered boxes. Titles ≥80px.

### 2. Data as Hero
Large numbers (72-120px), bold typography, clear visual hierarchy.

### 3. Purposeful Animation
Every motion serves communication. Fade-ins guide attention. Counters emphasize data.

### 4. Consistency Over Creativity
Design tokens ensure coherence. Themes provide variety within constraints.

## Hard Constraints

These rules are non-negotiable for professional output:

| Constraint | Rule | Reason |
|------------|------|--------|
| Root container | `position: absolute; inset: 0; overflow: hidden` | Fill entire frame |
| Media | `objectFit: cover` or DualLayerMedia | No black bars |
| Content width | ≥85% screen | No tiny centered boxes |
| Title size | ≥80px | Visual impact |
| Page padding | ≤50px | Maximize content area |
| Bottom margin | 100px | Subtitle safe zone |
| 4K output | `transform: scale(2)` wrapper | 1080p design → 4K render |

## Component Library

### Layout
- `FullBleed` - Root container enforcing full-screen coverage
- `ContentArea` - Content wrapper with controlled width (85-95%)
- `CoverMedia` - Full-bleed images/videos
- `DualLayerMedia` - Non-16:9 content (blurred bg + clear fg)
- `Grid` - CSS grid layout helper
- `Stack` - Flex stack (horizontal/vertical)
- `SafeArea` - Respects subtitle margin

### Typography
- `Title` - Hero/large/medium titles
- `Text` - Body text with variants
- `Caption` - Small descriptive text
- `Code` - Monospace code blocks
- `Quote` - Styled quotations

### Data Display
- `DataDisplay` - Large number with label
- `AnimatedCounter` - Number counting animation
- `ProgressBar` - Visual progress indicator
- `Badge` - Status indicators
- `Stat` - Metric with trend

### Animation
- `FadeIn` - Fade + slide up
- `SpringPop` - Elastic scale entrance
- `SlideIn` - Directional slide (left/right/up/down)
- `Reveal` - Clip-path reveal animation
- `Typewriter` - Character-by-character text
- `Stagger` - Sequential child animations

### Effects
- `GlassMorphism` - Frosted glass effect
- `Gradient` - Animated gradient backgrounds
- `Glow` - Pulsing glow effect
- `Noise` - Subtle texture overlay

### Section Patterns
- `HeroSection` - Opening with title + subtitle
- `FeatureList` - Feature showcase
- `DataDashboard` - Multiple data displays
- `Timeline` - Chronological events
- `OutroSection` - Closing with CTA

### Navigation
- `ChapterProgressBar` - Video chapter indicator
- `SectionIndicator` - Current section marker

## Themes

```tsx
import { minimalWhite, darkTech, gradientVibrant, corporateBlue } from './themes'

// Apply theme
<FullBleed theme={minimalWhite}>
  <ContentArea>
    <Title>Themed Content</Title>
  </ContentArea>
</FullBleed>
```

| Theme | Use Case |
|-------|----------|
| `minimalWhite` | Product intros, tutorials, clean presentations |
| `darkTech` | AI/tech topics, cyberpunk style |
| `gradientVibrant` | Creative content, branding |
| `corporateBlue` | Business presentations |

## Design Tokens

All values are centralized in `src/tokens/`:

```tsx
import { colors, fontSize, spacing, shadows } from './tokens'

// Use tokens for consistency
<div style={{
  background: colors.bg,
  padding: spacing.page,
  fontSize: fontSize.title,
  boxShadow: shadows.card,
}}>
```

## Documentation

- `rules/` - 14 design principle documents
- `docs/getting-started.md` - Setup guide
- `docs/color-guide.md` - Color theory and palettes
- `docs/typography-guide.md` - Font pairing and hierarchy
- `docs/component-catalog.md` - Component reference
- `docs/animation-cookbook.md` - Animation patterns

## Integration

This skill complements:
- `video-podcast-maker` - For automated podcast videos
- `tutorial-video-maker` - For screen recording tutorials
- `remotion` - For general Remotion best practices

Import design components into your project and combine with workflow skills.
