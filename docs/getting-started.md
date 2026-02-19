# Getting Started

Set up the Remotion Design Master system in your project.

## Installation

### 1. Copy Components

```bash
# Copy entire source directory
cp -r ~/.claude/skills/remotion-design-master/src/* your-project/src/remotion/design/
```

### 2. Install Dependencies

Ensure you have Remotion installed:

```bash
npm install remotion @remotion/cli
```

### 3. Import Components

```tsx
// Import what you need
import {
  // Layout
  FullBleed, ContentArea, CoverMedia, DualLayerMedia,
  // Animation
  FadeIn, SpringPop, SlideIn, Stagger,
  // Typography
  Title, Text, Caption,
  // Data
  DataDisplay, AnimatedCounter, ProgressBar,
  // UI
  Card, Button, List, Badge,
  // Effects
  GlassMorphism, GradientBackground, PulsingGlow,
  // Patterns
  HeroSection, FeatureList, DataDashboard, OutroSection,
  // Tokens & Themes
  tokens, minimalWhite, darkTech,
} from './design'
```

## Quick Start Example

```tsx
import { AbsoluteFill, Sequence } from 'remotion'
import { FullBleed, ContentArea, Title, FadeIn, tokens, font } from './design'

export const MyVideo = () => (
  <AbsoluteFill style={{ fontFamily: font }}>
    <Sequence from={0} durationInFrames={90}>
      <FullBleed background={tokens.colors.bg}>
        <ContentArea>
          <FadeIn>
            <Title size="hero">Hello World</Title>
          </FadeIn>
        </ContentArea>
      </FullBleed>
    </Sequence>
  </AbsoluteFill>
)
```

## Using Themes

```tsx
import { FullBleed, ContentArea, Title, darkTech } from './design'

const DarkSection = () => (
  <FullBleed theme={darkTech}>
    <ContentArea theme={darkTech}>
      <Title theme={darkTech}>Dark Theme</Title>
    </ContentArea>
  </FullBleed>
)
```

## 4K Output with Scale Wrapper

For 4K rendering (3840×2160), design at 1080p and scale:

```tsx
export const MyVideo = () => (
  <AbsoluteFill style={{ background: tokens.colors.bg }}>
    {/* Scale wrapper for 4K */}
    <AbsoluteFill style={{
      transform: 'scale(2)',
      transformOrigin: 'top left',
      width: '50%',
      height: '50%',
    }}>
      {/* Your content at 1080p design */}
      <Sequence from={0} durationInFrames={90}>
        <HeroSection
          title="4K Video"
          subtitle="Designed at 1080p, rendered at 4K"
        />
      </Sequence>
    </AbsoluteFill>
  </AbsoluteFill>
)
```

## Project Structure

```
your-project/
├── src/
│   └── remotion/
│       ├── design/           # ← Copied from skill
│       │   ├── tokens/
│       │   ├── themes/
│       │   ├── layout/
│       │   ├── animation/
│       │   ├── components/
│       │   ├── effects/
│       │   ├── patterns/
│       │   └── hooks/
│       ├── Video.tsx         # Your main video
│       └── Root.tsx          # Remotion entry
├── public/
│   └── media/                # Your media assets
└── remotion.config.ts
```

## Next Steps

1. Read [Color Guide](./color-guide.md) for palette selection
2. Read [Typography Guide](./typography-guide.md) for text styling
3. Browse [Component Catalog](./component-catalog.md) for all components
4. Check [Animation Cookbook](./animation-cookbook.md) for motion patterns
5. Review `rules/` for design principles
