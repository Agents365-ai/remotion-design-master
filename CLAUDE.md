# CLAUDE.md

Project instructions for remotion-design-master skill.

## What This Is

A centralized design system and component library for Remotion video creation. Provides design principles, reusable components, and visual guidelines.

## Language

Write all code, comments, and documentation in English.

## Git Commits

Do NOT add "Co-Authored-By: Claude" to commit messages.

## Directory Structure

```
remotion-design-master/
├── SKILL.md              # Main entry, design philosophy, quick start
├── CLAUDE.md             # This file - project instructions
├── rules/                # Design principle documents (14 files)
├── src/
│   ├── tokens/           # Design tokens (colors, typography, spacing)
│   ├── themes/           # Theme presets (minimal-white, dark-tech, etc.)
│   ├── layout/           # Layout components (FullBleed, ContentArea, etc.)
│   ├── animation/        # Animation primitives (FadeIn, SpringPop, etc.)
│   ├── components/       # UI components
│   │   ├── typography/   # Title, Text, Caption, Code, Quote
│   │   ├── data/         # DataDisplay, AnimatedCounter, ProgressBar
│   │   ├── ui/           # Card, Button, Icon, Divider, List
│   │   ├── media/        # KenBurnsMedia, ImageFrame, DeviceFrame
│   │   └── navigation/   # ChapterProgressBar, SectionIndicator
│   ├── effects/          # Visual effects (GlassMorphism, Gradient, Glow)
│   ├── patterns/         # Section patterns (HeroSection, FeatureList)
│   └── hooks/            # Custom hooks (useTheme, useAnimation)
├── docs/                 # Documentation
├── templates/            # Project templates
└── examples/             # Complete examples
```

## Hard Constraints (MUST FOLLOW)

Every Remotion component must satisfy:

1. **Root container**: `position: absolute; inset: 0; overflow: hidden`
2. **All Img/Video**: `width: 100%; height: 100%; objectFit: cover`
3. **Content width**: ≥85% screen (never `maxWidth: 600px` or similar small values)
4. **Non-16:9 media**: Must use `<DualLayerMedia>` (blurred bg + clear fg)

**Forbidden patterns:**
- `margin: auto` (shrinks content to center)
- `justifyContent: center` on root container (shrinks content)
- `objectFit: contain` without DualLayerMedia (causes black bars)
- `maxWidth` values under 80% of screen width

## Design Tokens

All design values must be centralized in `src/tokens/`:
- Colors (bg, text, accent, semantic)
- Typography (hero→caption scale)
- Spacing (page, section, element, tight)
- Shadows (subtle→elevated)
- Border radii (sm, md, lg, full)

## Component Guidelines

1. **Props**: Use TypeScript interfaces for all props
2. **Defaults**: Provide sensible defaults from tokens
3. **Theme**: Accept optional `theme` prop for customization
4. **Animation**: Use Remotion's `useCurrentFrame` and `interpolate`
5. **Documentation**: Include JSDoc comments explaining usage

## File Naming

- Components: PascalCase (e.g., `FullBleed.tsx`)
- Tokens/themes: camelCase (e.g., `minimalWhite.ts`)
- Documentation: kebab-case (e.g., `getting-started.md`)
- Rules: numbered prefix (e.g., `01-color-theory.md`)

## Key Commands

```bash
# Copy components to a project
cp -r ~/.claude/skills/remotion-design-master/src/* your-project/src/remotion/design/

# TypeScript check
npx tsc --noEmit src/**/*.ts src/**/*.tsx

# Preview in Remotion Studio
npx remotion studio
```

## Relationship to Other Skills

- **video-podcast-maker**: Should import layout/components from this skill
- **tutorial-video-maker**: Should import layout/components from this skill
- **remotion**: Technical skill (31 rules) - this is the design complement

## Accessibility

- Text contrast: 4.5:1 minimum (body), 3:1 (large text ≥18px or 14px bold)
- Don't rely solely on color to convey meaning
- Provide sufficient animation duration (≥15 frames for most transitions)
