# 11 - Depth & Visual Effects

## Creating Depth

Flat designs work, but depth adds polish:

### Layering System

```
Layer 1 (Back):   Background, patterns
Layer 2:          Content containers (cards)
Layer 3:          Primary content
Layer 4 (Front):  Overlays, highlights, tooltips
```

### Shadow Elevation

Shadows suggest physical depth:

```tsx
// Subtle (resting state)
boxShadow: '0 1px 3px rgba(0,0,0,0.1)'

// Medium (cards)
boxShadow: '0 4px 12px rgba(0,0,0,0.08)'

// Elevated (focus, hover equivalent)
boxShadow: '0 8px 24px rgba(0,0,0,0.12)'

// High (modals, popups)
boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
```

### Shadow Direction

Consistent light source (top-left):
```tsx
// Standard: light from top-left
boxShadow: '0 4px 12px rgba(0,0,0,0.1)'  // Y offset positive

// Avoid: mixed light sources
boxShadow: '0 -4px 12px ...'  // Inconsistent with rest
```

## Blur Effects

### Background Blur (Glassmorphism)

```tsx
<div style={{
  background: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
}}>
```

Best on:
- Dark backgrounds with light text
- Over images or gradients
- NOT on white backgrounds

### Motion Blur (Sparingly)

```tsx
// Subtle blur during fast motion
filter: `blur(${isMoving ? 2 : 0}px)`
```

## Overlay Effects

### Dark Overlays (for text readability)

```tsx
// Light overlay
<div style={{ background: 'rgba(255,255,255,0.3)' }} />

// Dark overlay
<div style={{ background: 'rgba(0,0,0,0.4)' }} />
```

Guidelines:
- 0.3-0.4 opacity for readability
- 0.5-0.7 for strong dimming
- Match text color to overlay (light on dark, dark on light)

### Gradient Overlays

```tsx
// Bottom fade (for text at bottom)
background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'

// Vignette
background: 'radial-gradient(circle, transparent 60%, rgba(0,0,0,0.3) 100%)'
```

## Glow Effects

### Accent Glows

```tsx
// Soft glow
boxShadow: '0 0 20px rgba(0,212,255,0.3)'

// Intense neon
boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 40px #00d4ff'
```

### Text Glow

```tsx
textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff'
```

### Pulsing Glow

```tsx
const pulse = interpolate(Math.sin(frame * 0.1), [-1, 1], [0.3, 0.5])

boxShadow: `0 0 30px rgba(0,212,255,${pulse})`
```

## Texture Effects

### Noise/Grain

Adds subtle texture to flat areas:

```tsx
// SVG noise overlay
background: `url("data:image/svg+xml...")`
opacity: 0.05
mixBlendMode: 'overlay'
```

### Vignette

Darkens edges, focuses attention:

```tsx
background: `radial-gradient(
  ellipse at center,
  transparent 70%,
  rgba(0,0,0,0.3) 100%
)`
```

## Performance Considerations

### GPU-Friendly
```tsx
// Good: transform, opacity
transform: 'scale(1.1)'
opacity: 0.8

// Good: filter (static)
filter: 'blur(10px)'
```

### Expensive
```tsx
// Avoid animating:
filter: `blur(${animated}px)`  // Expensive
backdropFilter: `blur(${animated}px)`  // Very expensive
boxShadow: `0 0 ${animated}px ...`  // Moderate cost
```

### Optimization
```tsx
// Instead of animating blur:
// 1. Create blurred version as static layer
// 2. Animate opacity between layers

<div style={{ filter: 'blur(10px)', opacity: blurAmount }} />
<div style={{ opacity: 1 - blurAmount }} />
```

## When to Use Effects

### Use Glassmorphism
- Dark/colorful backgrounds
- Modern/tech aesthetic
- Card overlays on images

### Use Shadows
- Light backgrounds
- Content cards
- Establishing hierarchy

### Use Glows
- Dark tech theme
- Emphasis/highlight
- Neon aesthetic

### Use Texture
- Large flat areas
- Cinematic feel
- Hiding compression artifacts

## Anti-Patterns

```
Bad: Effects everywhere
Good: Effects for emphasis only

Bad: Multiple competing effects
Good: One primary effect type per design

Bad: Strong effects on light backgrounds
Good: Subtle effects that don't distract

Bad: Animating expensive effects every frame
Good: Static effects or opacity transitions
```
