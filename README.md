# Remotion Design Master

A centralized design system and component library for creating beautiful Remotion videos.

## Overview

This skill provides design principles, reusable components, and visual guidelines that complement technical Remotion knowledge. It eliminates code duplication and ensures consistent, professional video output.

**Key Features:**
- Design tokens (colors, typography, spacing, shadows, radii)
- 4 theme presets (minimal-white, dark-tech, gradient-vibrant, corporate-blue)
- Layout components with "fill the screen" constraints
- Animation primitives (FadeIn, SpringPop, SlideIn, Reveal, Typewriter)
- Section patterns (HeroSection, FeatureList, DataDashboard, etc.)
- 14 design rule documents
- Ready-to-use templates and examples

## Quick Start

### 1. Copy Components to Your Project

```bash
cp -r ~/.claude/skills/remotion-design-master/src/* your-project/src/remotion/design/
```

### 2. Import and Use

```tsx
import { AbsoluteFill, Sequence } from 'remotion'
import {
  FullBleed, ContentArea,
  FadeIn, SpringPop,
  Title, Text,
  DataDisplay,
  tokens, font,
} from './design'

export const MyVideo = () => (
  <AbsoluteFill style={{ fontFamily: font }}>
    {/* 4K Scale Wrapper */}
    <AbsoluteFill style={{
      transform: 'scale(2)',
      transformOrigin: 'top left',
      width: '50%',
      height: '50%',
    }}>
      <Sequence from={0} durationInFrames={90}>
        <FullBleed background={tokens.colors.bg}>
          <ContentArea verticalAlign="center">
            <FadeIn delay={0}>
              <Title size="hero">Hello World</Title>
            </FadeIn>
          </ContentArea>
        </FullBleed>
      </Sequence>
    </AbsoluteFill>
  </AbsoluteFill>
)
```

## Directory Structure

```
remotion-design-master/
├── SKILL.md              # Main entry, design philosophy
├── CLAUDE.md             # Project instructions
├── rules/                # 14 design principle documents
│   ├── 01-color-theory.md
│   ├── 02-color-palettes.md
│   ├── ...
│   └── 14-responsive-video.md
├── src/
│   ├── tokens/           # Design tokens
│   ├── themes/           # Theme presets
│   ├── layout/           # FullBleed, ContentArea, CoverMedia, etc.
│   ├── animation/        # FadeIn, SpringPop, SlideIn, etc.
│   ├── components/
│   │   ├── typography/   # Title, Text, Caption, Code, Quote
│   │   ├── data/         # DataDisplay, AnimatedCounter, ProgressBar
│   │   ├── ui/           # Card, Button, List, Badge
│   │   └── navigation/   # ChapterProgressBar, SectionIndicator
│   ├── effects/          # GlassMorphism, Gradient, Glow, Noise
│   ├── patterns/         # HeroSection, FeatureList, DataDashboard
│   └── hooks/            # useTheme, useAnimation, useProgress
├── docs/                 # Documentation guides
├── templates/            # Video templates
└── examples/             # Complete examples
```

## Available Themes

| Theme | Best For |
|-------|----------|
| **Minimal White** | Product demos, tutorials, comparisons |
| **Dark Tech** | AI/tech content, cyberpunk aesthetic |
| **Gradient Vibrant** | Creative, entertainment, branding |
| **Corporate Blue** | Business presentations, reports |

```tsx
import { FullBleed, ContentArea, Title, darkTech } from './design'

<FullBleed theme={darkTech}>
  <ContentArea theme={darkTech}>
    <Title theme={darkTech}>Dark Theme Title</Title>
  </ContentArea>
</FullBleed>
```

## Layout Components

| Component | Purpose |
|-----------|---------|
| `<FullBleed>` | Root container with `inset: 0; overflow: hidden` |
| `<ContentArea>` | Content wrapper, 85-95% width |
| `<CoverMedia>` | Full-bleed media with `objectFit: cover` |
| `<DualLayerMedia>` | Blurred background + clear foreground for non-16:9 |
| `<Grid>` | CSS Grid helper |
| `<Stack>` / `<HStack>` / `<VStack>` | Flexbox layouts |

## Animation Primitives

| Component | Effect |
|-----------|--------|
| `<FadeIn>` | Fade in with optional slide up |
| `<SpringPop>` | Elastic scale entrance |
| `<SlideIn>` | Directional slide with fade |
| `<Reveal>` | Clip-path reveal animation |
| `<Typewriter>` | Character-by-character text |
| `<Stagger>` | Sequential child animations |

```tsx
<FadeIn delay={0} duration={25}>
  <Title>Fades in</Title>
</FadeIn>

<SpringPop delay={15} overshoot={1.5}>
  <DataDisplay value="42%" label="Growth" />
</SpringPop>
```

## Hard Constraints

Every component enforces these rules:

1. **Root container**: `position: absolute; inset: 0; overflow: hidden`
2. **Media**: `objectFit: cover` (use DualLayerMedia for non-16:9)
3. **Content width**: ≥85% of screen
4. **Title size**: ≥80px
5. **Bottom margin**: 100px subtitle safe area

**Forbidden patterns:**
- `margin: auto` on root (shrinks content)
- `objectFit: contain` without DualLayerMedia (black bars)
- `maxWidth` values under 80%

## Documentation

| File | Content |
|------|---------|
| `docs/getting-started.md` | Installation and setup |
| `docs/color-guide.md` | Color theory and palettes |
| `docs/typography-guide.md` | Text styling and hierarchy |
| `docs/component-catalog.md` | Complete component reference |
| `docs/animation-cookbook.md` | Animation patterns and recipes |

## Examples

Three complete video examples are included:

- `examples/minimal-podcast.tsx` - Clean white theme podcast
- `examples/tech-showcase.tsx` - Dark theme with neon effects
- `examples/data-report.tsx` - Corporate data presentation

## License

MIT

## Support

If this project helps you, consider supporting the author:

<table>
  <tr>
    <td align="center">
      <img src="images/wechat-pay.png" width="180" alt="WeChat Pay">
      <br>
      <b>WeChat Pay</b>
    </td>
    <td align="center">
      <img src="images/alipay.png" width="180" alt="Alipay">
      <br>
      <b>Alipay</b>
    </td>
  </tr>
</table>

## Author

**Agents365-ai**

- Bilibili: https://space.bilibili.com/441831884
- GitHub: https://github.com/Agents365-ai
