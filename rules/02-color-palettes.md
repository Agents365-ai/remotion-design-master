# 02 - Pre-built Color Palettes

## Minimal White

**Use case:** Product intros, tutorials, clean presentations

```ts
colors: {
  bg: '#ffffff',
  text: '#1a1a1a',
  textMuted: 'rgba(0,0,0,0.5)',
  accent: '#2563eb',      // Blue
  positive: '#059669',    // Green
  negative: '#dc2626',    // Red
  warning: '#ea580c',     // Orange
}
```

**Characteristics:**
- Maximum content focus
- High readability
- Works with any content type
- Professional appearance

---

## Dark Tech

**Use case:** AI/tech topics, cyberpunk, futuristic

```ts
colors: {
  bg: '#0a0a0f',
  bgCard: 'rgba(255,255,255,0.05)',
  text: '#ffffff',
  textMuted: 'rgba(255,255,255,0.6)',
  accent: '#00d4ff',      // Neon cyan
  accentPurple: '#a855f7', // Neon purple
  positive: '#22c55e',
  negative: '#ef4444',
}
```

**Characteristics:**
- Dramatic appearance
- Glow effects enhance impact
- Requires text shadows for readability
- Best with glassmorphism cards

---

## Gradient Vibrant

**Use case:** Creative content, branding, entertainment

```ts
// Background gradients
purpleBlue: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
pinkRed: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
blueCyan: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'

// Text on gradients
text: '#ffffff'
accent: '#ffd700'  // Gold stands out on gradients
```

**Characteristics:**
- Eye-catching, emotional
- Requires text shadow for readability
- Use white/gold accents
- Works well with floating cards

---

## Corporate Blue

**Use case:** Business presentations, reports, professional

```ts
colors: {
  bg: '#f8fafc',
  bgCard: '#ffffff',
  text: '#0f172a',
  textMuted: '#64748b',
  accent: '#1e40af',      // Deep blue
  accentSecondary: '#0ea5e9', // Sky blue
  positive: '#059669',
  negative: '#dc2626',
}
```

**Characteristics:**
- Trustworthy, professional
- Subtle shadows over glows
- Clean borders over glassmorphism
- Consistent with business software

---

## Creating Custom Palettes

### Step 1: Choose Base Colors
```ts
const primary = '#2563eb'   // Your brand color
const neutral = '#1a1a1a'   // Text color
```

### Step 2: Generate Variants
```ts
// Lighter/darker variants
primary50: lighten(primary, 45%)  // Backgrounds
primary100: lighten(primary, 40%)
primary600: primary              // Main accent
primary700: darken(primary, 10%) // Hover states
primary900: darken(primary, 30%) // Text on light
```

### Step 3: Add Semantic Colors
```ts
positive: '#059669'  // Success, growth
negative: '#dc2626'  // Error, decline
warning: '#f59e0b'   // Attention needed
info: primary        // Informational
```

### Step 4: Test Combinations
- Title on background
- Body text on background
- Accent on background
- Text on accent color
