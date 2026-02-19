# Remotion 设计大师

一个集中式的设计系统和组件库，用于创建精美的 Remotion 视频。

## 概述

本技能提供设计原则、可复用组件和视觉指南，与 Remotion 技术知识相辅相成。它消除了代码重复，确保输出一致、专业的视频效果。

**核心特性：**
- 设计令牌（颜色、字体、间距、阴影、圆角）
- 4 个主题预设（极简白、暗黑科技、渐变炫彩、商务蓝）
- "填满屏幕"约束的布局组件
- 动画基元（FadeIn、SpringPop、SlideIn、Reveal、Typewriter）
- 章节模式（HeroSection、FeatureList、DataDashboard 等）
- 14 份设计规则文档
- 即用型模板和示例

## 安装

### Claude Code

```bash
# 克隆到 Claude Code 技能目录
git clone https://github.com/Agents365-ai/remotion-design-master.git ~/.claude/skills/remotion-design-master
```

技能将自动在 Claude Code 中可用。当你处理 Remotion 视频项目时，Claude 会参考设计规则和组件。

### OpenCode

```bash
# 克隆到 OpenCode 技能目录
git clone https://github.com/Agents365-ai/remotion-design-master.git ~/.opencode/skills/remotion-design-master
```

或者添加到 `~/.opencode/settings.json`：

```json
{
  "skills": [
    "~/.opencode/skills/remotion-design-master"
  ]
}
```

### 手动安装

如果你更喜欢直接使用组件而不使用技能系统：

```bash
# 克隆到任意位置
git clone https://github.com/Agents365-ai/remotion-design-master.git

# 复制组件到你的 Remotion 项目
cp -r remotion-design-master/src/* your-project/src/remotion/design/
```

## 使用方法

安装后，AI 助手将自动：

1. **应用设计规则** - 创建视频组件时遵循 `rules/` 中的 14 条设计原则
2. **使用设计令牌** - 引用 `src/tokens/` 中集中管理的颜色、字体、间距
3. **推荐组件** - 建议合适的布局、动画和 UI 组件
4. **强制约束** - 确保"填满屏幕"布局和其他硬性约束

### 示例提示

```
"为我的产品视频创建一个 Hero 部分"
"添加一个带动画计数器的数据仪表盘"
"对这个部分应用暗黑科技主题"
"让内容使用交错动画淡入"
```

## 快速开始

### 复制组件到你的项目

```bash
cp -r ~/.claude/skills/remotion-design-master/src/* your-project/src/remotion/design/
```

### 2. 导入并使用

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
    {/* 4K 缩放包装器 */}
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

## 目录结构

```
remotion-design-master/
├── SKILL.md              # 主入口，设计理念
├── CLAUDE.md             # 项目说明
├── rules/                # 14 份设计原则文档
│   ├── 01-color-theory.md
│   ├── 02-color-palettes.md
│   ├── ...
│   └── 14-responsive-video.md
├── src/
│   ├── tokens/           # 设计令牌
│   ├── themes/           # 主题预设
│   ├── layout/           # FullBleed, ContentArea, CoverMedia 等
│   ├── animation/        # FadeIn, SpringPop, SlideIn 等
│   ├── components/
│   │   ├── typography/   # Title, Text, Caption, Code, Quote
│   │   ├── data/         # DataDisplay, AnimatedCounter, ProgressBar
│   │   ├── ui/           # Card, Button, List, Badge
│   │   └── navigation/   # ChapterProgressBar, SectionIndicator
│   ├── effects/          # GlassMorphism, Gradient, Glow, Noise
│   ├── patterns/         # HeroSection, FeatureList, DataDashboard
│   └── hooks/            # useTheme, useAnimation, useProgress
├── docs/                 # 文档指南
├── templates/            # 视频模板
└── examples/             # 完整示例
```

## 可用主题

| 主题 | 适用场景 |
|------|----------|
| **极简白 (Minimal White)** | 产品演示、教程、对比 |
| **暗黑科技 (Dark Tech)** | AI/科技内容、赛博朋克风格 |
| **渐变炫彩 (Gradient Vibrant)** | 创意、娱乐、品牌 |
| **商务蓝 (Corporate Blue)** | 商业演示、报告 |

```tsx
import { FullBleed, ContentArea, Title, darkTech } from './design'

<FullBleed theme={darkTech}>
  <ContentArea theme={darkTech}>
    <Title theme={darkTech}>暗黑主题标题</Title>
  </ContentArea>
</FullBleed>
```

## 布局组件

| 组件 | 用途 |
|------|------|
| `<FullBleed>` | 根容器，`inset: 0; overflow: hidden` |
| `<ContentArea>` | 内容包装器，85-95% 宽度 |
| `<CoverMedia>` | 全屏媒体，`objectFit: cover` |
| `<DualLayerMedia>` | 模糊背景 + 清晰前景（用于非 16:9 素材） |
| `<Grid>` | CSS Grid 辅助组件 |
| `<Stack>` / `<HStack>` / `<VStack>` | Flexbox 布局 |

## 动画基元

| 组件 | 效果 |
|------|------|
| `<FadeIn>` | 淡入 + 可选向上滑动 |
| `<SpringPop>` | 弹性缩放入场 |
| `<SlideIn>` | 方向滑入 + 淡入 |
| `<Reveal>` | 裁剪路径揭示动画 |
| `<Typewriter>` | 逐字打字效果 |
| `<Stagger>` | 子元素依次动画 |

```tsx
<FadeIn delay={0} duration={25}>
  <Title>淡入效果</Title>
</FadeIn>

<SpringPop delay={15} overshoot={1.5}>
  <DataDisplay value="42%" label="增长" />
</SpringPop>
```

## 硬性约束

每个组件都强制执行以下规则：

1. **根容器**：`position: absolute; inset: 0; overflow: hidden`
2. **媒体**：`objectFit: cover`（非 16:9 使用 DualLayerMedia）
3. **内容宽度**：≥85% 屏幕宽度
4. **标题大小**：≥80px
5. **底部边距**：100px 字幕安全区

**禁止的写法：**
- 根容器使用 `margin: auto`（会缩小内容）
- 不带 DualLayerMedia 使用 `objectFit: contain`（产生黑边）
- `maxWidth` 值小于 80%

## 文档

| 文件 | 内容 |
|------|------|
| `docs/getting-started.md` | 安装和设置 |
| `docs/color-guide.md` | 色彩理论和调色板 |
| `docs/typography-guide.md` | 文字样式和层级 |
| `docs/component-catalog.md` | 完整组件参考 |
| `docs/animation-cookbook.md` | 动画模式和配方 |

## 示例

包含三个完整的视频示例：

- `examples/minimal-podcast.tsx` - 干净的白色主题播客
- `examples/tech-showcase.tsx` - 带霓虹效果的暗黑主题
- `examples/data-report.tsx` - 企业数据演示

## 许可证

MIT

## 支持作者

如果这个项目对你有帮助，欢迎支持作者：

<table>
  <tr>
    <td align="center">
      <img src="images/wechat-pay.png" width="180" alt="微信支付">
      <br>
      <b>微信支付</b>
    </td>
    <td align="center">
      <img src="images/alipay.png" width="180" alt="支付宝">
      <br>
      <b>支付宝</b>
    </td>
  </tr>
</table>

## 作者

**Agents365-ai**

- B站: https://space.bilibili.com/441831884
- GitHub: https://github.com/Agents365-ai
