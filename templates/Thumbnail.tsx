// @ts-nocheck
/**
 * Thumbnail Template for Bilibili
 *
 * All elements scaled 2x for thumbnail readability.
 * Generates both 16:9 and 4:3 versions.
 *
 * Usage:
 *   1. Copy to your project
 *   2. Customize colors, title, tags, features
 *   3. Register in Root.tsx with Still component
 */

import { AbsoluteFill } from 'remotion'
import { thumbnailTokens } from '../src/tokens/thumbnail'

const font = '-apple-system, "SF Pro Display", "Noto Sans SC", "Helvetica Neue", sans-serif'

// Customize these colors
const colors = {
  bg: '#ffffff',
  text: '#1a1a1a',
  muted: '#6b7280',
  primary: '#7c3aed',
  secondary: '#2563eb',
  accent: '#10b981',
  orange: '#f97316',
}

const { fontSize, spacing, borders } = thumbnailTokens

// Reusable Tag component for thumbnails
const Tag = ({ children, color = colors.orange }: { children: React.ReactNode; color?: string }) => (
  <div style={{
    background: `${color}15`,
    border: `${borders.tagWidth}px solid ${color}30`,
    borderRadius: borders.radiusMedium,
    padding: spacing.tagPadding,
    fontSize: fontSize.tag,
    fontWeight: 700,
    color,
  }}>{children}</div>
)

// Reusable Card component for thumbnails
const Card = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{
    background: 'rgba(0,0,0,0.02)',
    border: `${borders.cardWidth}px solid rgba(0,0,0,0.08)`,
    borderRadius: borders.radiusLarge,
    padding: spacing.cardPadding,
    textAlign: 'center',
    ...style,
  }}>{children}</div>
)

// Main thumbnail content (shared between 16:9 and 4:3)
const ThumbnailContent = () => (
  <div style={{
    position: 'absolute',
    inset: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    {/* Tags */}
    <div style={{ display: 'flex', gap: spacing.tagGap, marginBottom: spacing.sectionGap }}>
      <Tag color={colors.orange}>61K+ ⭐</Tag>
      <Tag color={colors.accent}>开源神器</Tag>
    </div>

    {/* Main Title */}
    <div style={{
      fontSize: fontSize.title,
      fontWeight: 800,
      letterSpacing: -4,
      background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }}>
      Your Title
    </div>

    {/* Subtitle */}
    <div style={{
      fontSize: fontSize.subtitle,
      color: colors.muted,
      marginTop: spacing.tagGap,
    }}>
      Your subtitle goes here
    </div>

    {/* Feature Cards */}
    <div style={{ display: 'flex', gap: spacing.cardGap, marginTop: spacing.containerPadding }}>
      <Card>
        <div style={{ fontSize: fontSize.cardIcon }}>🧠</div>
        <div style={{ fontSize: fontSize.cardTitle, fontWeight: 600, color: colors.primary, marginTop: 8 }}>Feature 1</div>
      </Card>
      <Card>
        <div style={{ fontSize: fontSize.cardIcon }}>📋</div>
        <div style={{ fontSize: fontSize.cardTitle, fontWeight: 600, color: colors.secondary, marginTop: 8 }}>Feature 2</div>
      </Card>
      <Card>
        <div style={{ fontSize: fontSize.cardIcon }}>✅</div>
        <div style={{ fontSize: fontSize.cardTitle, fontWeight: 600, color: colors.accent, marginTop: 8 }}>Feature 3</div>
      </Card>
    </div>
  </div>
)

// 16:9 Thumbnail (3840x2160)
export const Thumbnail16x9 = () => (
  <AbsoluteFill style={{ background: colors.bg, fontFamily: font }}>
    <AbsoluteFill style={{
      transform: 'scale(2)',
      transformOrigin: 'top left',
      width: '50%',
      height: '50%',
    }}>
      <ThumbnailContent />
    </AbsoluteFill>
  </AbsoluteFill>
)

// 4:3 Thumbnail (2880x2160)
export const Thumbnail4x3 = () => (
  <AbsoluteFill style={{ background: colors.bg, fontFamily: font }}>
    <AbsoluteFill style={{
      transform: 'scale(2)',
      transformOrigin: 'top left',
      width: '50%',
      height: '50%',
    }}>
      <ThumbnailContent />
    </AbsoluteFill>
  </AbsoluteFill>
)

export default Thumbnail16x9
