# 12 - Glassmorphism Design

## What is Glassmorphism?

A design style featuring:
- Transparent backgrounds
- Background blur
- Subtle borders
- Layered depth

Creates a "frosted glass" effect.

## Core Properties

```tsx
const glassCard = {
  background: 'rgba(255,255,255,0.1)',      // Transparent
  backdropFilter: 'blur(10px)',              // Blur behind
  WebkitBackdropFilter: 'blur(10px)',        // Safari support
  border: '1px solid rgba(255,255,255,0.2)', // Subtle edge
  borderRadius: 20,
}
```

## When to Use

### Good Use Cases
- Dark backgrounds with colorful elements behind
- Gradient backgrounds
- Image backgrounds
- Tech/modern aesthetic
- Floating cards/modals

### Poor Use Cases
- White/light solid backgrounds (no blur visible)
- Low contrast scenarios
- Heavy text content
- Accessibility-focused designs

## Variations

### Light Glass (on dark bg)

```tsx
{
  background: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.2)',
  backdropFilter: 'blur(10px)',
}
```

### Dark Glass (on light bg)

```tsx
{
  background: 'rgba(0,0,0,0.1)',
  border: '1px solid rgba(0,0,0,0.1)',
  backdropFilter: 'blur(10px)',
}
```

### Colored Glass

```tsx
{
  background: 'rgba(0,100,255,0.1)',
  border: '1px solid rgba(0,100,255,0.2)',
  backdropFilter: 'blur(10px)',
}
```

## Blur Intensity

```
5px:   Subtle frosting
10px:  Standard glass effect
15px:  Strong blur
20px+: Very frosted, obscures background
```

## Background Requirements

Glassmorphism needs something to blur:

```tsx
// Good: Gradient background
<div style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
  <GlassCard>Content</GlassCard>
</div>

// Good: Image background
<div>
  <CoverMedia src={image} />
  <GlassCard>Overlay content</GlassCard>
</div>

// Bad: Solid white background (blur invisible)
<div style={{ background: '#fff' }}>
  <GlassCard>Looks like normal card</GlassCard>
</div>
```

## Text Readability

Glass can reduce text contrast. Compensate:

```tsx
// Increase background opacity for text areas
{
  background: 'rgba(0,0,0,0.3)', // Higher opacity
  color: '#fff',
}

// Or use text shadow
{
  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
}
```

## Layering Glass Elements

Multiple glass layers create depth:

```tsx
// Background layer
<div style={{ backdropFilter: 'blur(20px)', background: 'rgba(0,0,0,0.2)' }}>

  // Foreground layer (less blur, more transparent)
  <div style={{ backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.1)' }}>
    Content
  </div>
</div>
```

## Performance

`backdropFilter` is expensive. Optimize:

```tsx
// Don't: Animate blur
backdropFilter: `blur(${animatedValue}px)`  // Expensive!

// Do: Static blur, animate other properties
backdropFilter: 'blur(10px)'
opacity: animatedValue  // Cheap
transform: `scale(${animatedValue})`  // Cheap
```

## Complete Example

```tsx
const DarkTechSection = () => (
  <FullBleed background="#0a0a0f">
    {/* Colorful glow behind glass */}
    <RadialGlow color="0,212,255" cx={30} cy={40} opacity={0.2} />
    <RadialGlow color="168,85,247" cx={70} cy={60} opacity={0.15} />

    <ContentArea>
      {/* Glass card */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 24,
        padding: '40px 60px',
      }}>
        <Title style={{ color: '#fff' }}>Glassmorphism</Title>
        <Text style={{ color: 'rgba(255,255,255,0.8)' }}>
          Frosted glass effect
        </Text>
      </div>
    </ContentArea>
  </FullBleed>
)
```

## Accessibility Note

Glassmorphism can reduce contrast. Always:
- Test text readability
- Increase background opacity if needed
- Consider providing high-contrast fallback
- Don't rely solely on glass for important UI boundaries
