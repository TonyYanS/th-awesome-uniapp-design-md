# How to Write a DESIGN.md for uni-app

A comprehensive guide to creating effective DESIGN.md files for uni-app projects using ThorUI components.

## Overview

DESIGN.md is a plain-text design system document that AI agents can understand and use to generate consistent UI. Unlike Figma exports or JSON schemas, DESIGN.md uses natural language that LLMs can easily parse and apply.

## When to Create a DESIGN.md

- Starting a new uni-app project
- Documenting design decisions for a team
- Creating reusable design patterns
- Training AI coding agents on your design system

## File Structure

Each DESIGN.md package should include:

```
design-md/
└── category/
    └── app-name/
        ├── DESIGN.md       # Required: Main design document
        ├── preview.html    # Optional: Visual preview
        └── tokens.json     # Optional: Design tokens in JSON
```

## Writing Guide

### 1. Visual Theme & Atmosphere

Describe the overall design direction:

```markdown
### Overall Style
- **Design Language**: Modern Minimal, Card-based Flat Design
- **Visual Density**: Comfortable
- **Dark Mode**: Not supported (v1)

### Platform Adaptation
- **iOS Safe Area**: Enabled
- **Android Notch**: Handled
- **uni.scss Variables**: Using
```

Be specific about:
- Design philosophy (minimalist, content-focused, etc.)
- Visual weight and density
- Platform-specific considerations
- Whether dark mode is supported

### 2. Color Palette & Roles

Document all colors with semantic names and usage:

```markdown
### Brand Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#5677fc` | Main brand color, CTAs |
| Success | `#19be6b` | Success states |
| Warning | `#ff7900` | Warning states |
| Error | `#EB0909` | Error states |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Title | `#333333` | Headlines |
| Body | `#333333` | Main content |
| Muted | `#999999` | Secondary text |
```

Include:
- All brand/brand colors
- Text hierarchy colors
- Background colors
- Border colors
- State colors (success, warning, error)

### 3. Typography Rules

Document the complete type system:

```markdown
### Font Family
- **Primary**: `-apple-system-font, Helvetica Neue, Helvetica, sans-serif`
- **Monospace**: `SF Mono, Menlo, Courier, monospace`

### Typography Scale
| Role | Size | Line Height | Weight |
|------|------|-------------|--------|
| Display | 40rpx | 1.2 | 600 |
| H1 | 36rpx | 1.3 | 600 |
| Body | 28rpx | 1.5 | 400 |
| Caption | 24rpx | 1.4 | 400 |
```

Always include:
- Font family stack (with mobile fallbacks)
- Complete size scale
- Line heights
- Font weights
- Letter spacing (if important)

### 4. Component Stylings

Document each component with ThorUI mapping:

```markdown
### Primary Button
- Use: `tui-button[type="primary"]`
- Styling:
  ```css
  background: linear-gradient(-90deg, #5677fc, #5c8dff);
  height: 90rpx;
  border-radius: 45rpx;
  color: #fff;
  font-size: 36rpx;
  ```
- States:
  - Default: Gradient background
  - Pressed: opacity 0.9 or #f1f1f1 background
  - Disabled: opacity 0.3
  - Loading: Show tui-loading

### Card
- Use: `tui-card`
- Styling:
  ```css
  background: #ffffff;
  border-radius: 12rpx;
  box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.08);
  padding: 24rpx;
  ```
```

Key components to document:
- Buttons (all variants)
- Cards
- List items
- Form inputs
- Navigation (top and bottom)
- Tags and badges
- Modals and popups

### 5. Layout Principles

Document spacing and grid:

```markdown
### Safe Areas
- Status Bar: `uni.getSystemInfoSync().statusBarHeight`
- Navigation Bar: 44px (iOS) / dynamic (Android)
- Home Indicator: Safe area bottom

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| xs | 8rpx | Tight spacing |
| sm | 16rpx | Small gaps |
| base | 20rpx | Default gap |
| lg | 24rpx | Section spacing |
| xl | 32rpx | Large gaps |

### Grid
- 24-column system
- Gutter: 20rpx
- Margin: 30rpx
```

### 6. Depth & Elevation

Document shadows and elevation:

```markdown
### Shadows
| Level | Value | Usage |
|-------|-------|-------|
| Card | `0 2rpx 8rpx rgba(0,0,0,0.08)` | Default cards |
| Elevated | `0 4rpx 16rpx rgba(0,0,0,0.12)` | Floating elements |
| Modal | `0 8rpx 32rpx rgba(0,0,0,0.16)` | Dialogs |

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| sm | 4rpx | Tags, badges |
| base | 6rpx | Inputs, small buttons |
| lg | 12rpx | Cards, containers |
| full | 9999rpx | Pills, round buttons |
```

### 7. Touch States & Interactions

Document mobile-specific behavior:

```markdown
### Touch States
| State | Visual Treatment |
|-------|-----------------|
| Default | Normal appearance |
| Pressed | background-color: #f1f1f1 |
| Disabled | opacity: 0.3 |
| Loading | Show tui-loading |

### Mobile Gestures
| Gesture | Implementation |
|---------|----------------|
| Pull to Refresh | `uni.startPullDownRefresh()` |
| Load More | `onReachBottom` |
| Swipe Back | System default |

### Feedback Components
- Toast: `tui-toast`
- Modal: `tui-modal`
- Loading: `tui-loading`
```

### 8. Platform Adaptation

Document platform-specific considerations:

```markdown
### iOS
- Safe area insets for notch devices
- Home indicator padding
- SF System font

### Android
- Status bar handling
- Material Design touch ripples
- Roboto font fallback

### uni-app
- Design width: 750rpx
- Use rpx for all sizes
- Use uni.scss for theme variables
```

### 9. ThorUI Component Mapping

Map design elements to ThorUI components:

```markdown
| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Primary Button | `tui-button` | `type="primary"` |
| Card | `tui-card` | - |
| List Item | `tui-list-cell` | `arrow` |
| TabBar | `tui-tabbar` | `selected` |
| Input | `tui-input` | `type` |
```

Include all components used in the design system.

### 10. Agent Prompt Guide

Provide quick reference and example prompts:

```markdown
### Quick Color Reference
```
Primary: #5677fc
Success: #19be6b
Background: #ffffff / #fafafa
Text: #333333 / #999999
Border: #eaeef1
```

### Quick Size Reference
```
Font: 24rpx / 28rpx / 32rpx / 36rpx / 40rpx
Radius: 4rpx / 6rpx / 12rpx / 24rpx / 9999rpx
```

### Example Prompt
"Create a product detail page with:
- Navigation bar using tui-navigation-bar with title 'Product Detail'
- Product image using tui-gallery for preview
- Product info card using tui-card with title, price, description
- Primary button 'Buy Now' using tui-button with gradient #5677fc→#5c8dff
- Secondary button 'Add to Cart' using tui-button with outline style"
```

## Writing Tips

### Do's
- ✅ Use specific HEX color codes
- ✅ Use rpx units for all measurements
- ✅ Map to specific ThorUI component names
- ✅ Include all component states (default, pressed, disabled, loading)
- ✅ Document mobile-specific interactions
- ✅ Include safe area handling
- ✅ Provide example prompts for common patterns

### Don'ts
- ❌ Don't use vague descriptions ("nice blue color")
- ❌ Don't mix units (use rpx consistently)
- ❌ Don't skip component states
- ❌ Don't forget mobile considerations
- ❌ Don't omit the ThorUI component mapping

## Converting from Design Files

When creating a DESIGN.md from existing designs:

1. **Extract Colors**: Note all colors used and assign semantic names
2. **Document Typography**: Measure font sizes, weights, line heights
3. **Component Inventory**: List all UI components
4. **Measure Spacing**: Document margins, paddings, gaps
5. **Map to ThorUI**: Match components to ThorUI equivalents
6. **Document Interactions**: Note touch states, animations

## Tools & Resources

- [ThorUI Documentation](https://thorui.cn/doc/)
- [Google Stitch DESIGN.md Guide](https://stitch.withgoogle.com/docs/design-md/format/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - For token transformation
- [W3C Design Token Format](https://design-tokens.github.io/community-group/format/)
