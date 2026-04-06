# Design System: 开平城市公共服务平台 (Kaiping Public Service Platform)

## 1. Visual Theme & Atmosphere

### Overall Style
- **Design Language**: Modern Government Service, Warm Earthy Tones
- **Visual Density**: Comfortable - balanced spacing for readability
- **Dark Mode**: Supported via `data-theme="dark"` on root node

### Brand Story
开平是中国著名的侨乡，拥有世界文化遗产碉楼群和赤坎古镇。设计系统以当地文化元素为灵感：
- **主色 #4e6b59**: 碉楼青砖 + 竹林生态
- **辅色 #7d5f39**: 赤坎古镇砖石
- **背景色 #F5F2E9**: 温暖的米黄色调，呼应侨乡阳光

### Platform Adaptation
- **iOS Safe Area**: Enabled - respects status bar and home indicator
- **Android Notch**: Handled - automatic safe area insets
- **uni.scss Variables**: Using custom design token system
- **Design Width**: 750rpx

---

## 2. Color Palette & Roles

### Brand Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#4e6b59` | Main brand color, primary buttons, links |
| Primary Strong | `#3d5747` | Primary button pressed state |
| Primary Weak | `rgba(78,107,89,0.12)` | Primary backgrounds, tags |
| Primary Light | `rgba(78,107,89,0.08)` | Subtle primary backgrounds |
| Secondary | `#7d5f39` | Secondary actions, accents |
| Secondary Strong | `#6b5030` | Secondary pressed state |
| Secondary Weak | `rgba(125,95,57,0.12)` | Secondary backgrounds |
| Secondary Light | `rgba(125,95,57,0.08)` | Subtle secondary backgrounds |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Ink | `#132f2a` | Primary text, headlines |
| Ink-2 | `#274641` | Secondary text |
| Ink-3 | `#38382e` | Titles, emphasis |
| Muted | `#6e7268` | Hints, timestamps, descriptions |
| Placeholder | `#9a9d95` | Input placeholders |

### Background Colors
| Name | Hex | Usage |
|------|-----|-------|
| Page | `#F5F2E9` | Page background |
| BG Soft | `#fcf9ee` | Soft surfaces |
| BG Raw | `#feffd6` | Highlight surfaces |
| Surface | `#feffd6` | Card backgrounds |
| Surface Container | `#f6f4e7` | Container backgrounds |
| Surface Raised | `#fcf9ee` | Raised surfaces |
| Surface Strong | `#ffffff` | Strong elevated surfaces |

### Functional Colors
| Name | Hex | Usage |
|------|-----|-------|
| Success | `#27a06b` | Success states, positive feedback |
| Success Weak | `rgba(39,160,107,0.12)` | Success backgrounds |
| Warning | `#d9911a` | Warning states |
| Warning Weak | `rgba(217,145,26,0.12)` | Warning backgrounds |
| Danger | `#d96b53` | Error states, destructive actions |
| Danger Weak | `rgba(217,107,83,0.12)` | Danger backgrounds |
| Info | `#4d6de3` | Information states |
| Info Weak | `rgba(77,109,227,0.12)` | Info backgrounds |
| Accent Warm | `#8e6c31` | Warm accent highlights |
| Accent Warm Weak | `rgba(142,108,49,0.12)` | Warm accent backgrounds |

### Border & Divider Colors
| Name | Hex | Usage |
|------|-----|-------|
| Line | `rgba(19,47,42,0.08)` | Default dividers |
| Line Strong | `rgba(19,47,42,0.14)` | Emphasized dividers |
| Border | `rgba(19,47,42,0.06)` | Subtle borders |
| Border Light | `rgba(255,255,255,0.68)` | Light borders |

### Overlay & Glass Colors
| Name | Hex | Usage |
|------|-----|-------|
| Overlay | `rgba(15,41,37,0.48)` | Modal overlay |
| Overlay Light | `rgba(15,41,37,0.24)` | Light overlay |
| Glass BG | `rgba(255,255,255,0.14)` | Glass effect background |
| Glass Border | `rgba(255,255,255,0.10)` | Glass effect border |

---

## 3. Typography Rules

### Font Family
- **Primary**: `"Avenir Next", "SF Pro Display", "PingFang SC", "Hiragino Sans GB", sans-serif`
- **System Fallback**: `-apple-system, Helvetica Neue, Helvetica, sans-serif`

### Typography Scale
| Role | Size | Line Height | Weight | Usage |
|------|------|-------------|--------|-------|
| Hero | 48rpx | 1.15 | 700 (Bold) | First screen headline |
| Display | 52rpx | 1.15 | 700 | Hero titles |
| H1 | 46rpx | 1.15 | 700 | Page titles |
| H2 | 40rpx | 1.2 | 700 | Section titles |
| H3 | 36rpx | 1.3 | 600 | Card titles |
| H4 | 32rpx | 1.3 | 600 | Subsection titles |
| Body Large | 28rpx | 1.55 | 400 | Primary content |
| Body | 24rpx | 1.55 | 400 | Default text |
| Body Small | 22rpx | 1.55 | 400 | Secondary text |
| Caption | 20rpx | 1.4 | 400 | Timestamps, metadata |
| Label | 18rpx | 1.4 | 400 | Tags, labels |
| Overline | 18rpx | 1.3 | 500 | Uppercase labels |

### Font Weights
| Token | Value |
|-------|-------|
| Regular | 400 |
| Medium | 500 |
| Semibold | 600 |
| Bold | 700 |
| Extrabold | 800 |

---

## 4. Component Stylings

### Buttons

**Primary Button**
```css
background: #4e6b59;
height: 84rpx;
border-radius: 999rpx;
color: #ffffff;
font-size: 28rpx;
font-weight: 500;
box-shadow: 0 6rpx 16rpx rgba(78,107,89,0.18);
```
- States:
  - Default: `#4e6b59` background
  - Pressed: `#3d5747` background
  - Disabled: `opacity: 0.4`

**Secondary Button**
```css
background: rgba(125,95,57,0.12);
height: 72rpx;
border-radius: 999rpx;
color: #7d5f39;
font-size: 26rpx;
font-weight: 500;
```
- States:
  - Default: Secondary weak background
  - Pressed: Secondary light background

**Pill Button (Small)**
```css
background: rgba(78,107,89,0.08);
height: 60rpx;
border-radius: 999rpx;
color: #4e6b59;
font-size: 22rpx;
font-weight: 500;
padding: 0 24rpx;
```

**Text Button**
```css
background: transparent;
color: #4e6b59;
font-size: 24rpx;
font-weight: 500;
```
- No background, no border

---

### Cards

**Domain Service Card (首页服务卡片)**
```css
background: linear-gradient(180deg, #ffffff 0%, #f7fbf7 100%);
border: 1px solid rgba(78,107,89,0.12);
border-radius: 24rpx;
box-shadow: 0 6rpx 18rpx rgba(56,56,46,0.03);
padding: 24rpx 22rpx;
min-height: 238rpx;
```

**Topic Card (专题卡片)**
```css
background: linear-gradient(180deg, rgba(20,20,16,0.62) 0%, rgba(20,20,16,0.26) 56%);
border-radius: 24rpx;
min-height: 332rpx;
padding: 28rpx;
```
- Image fills card with gradient overlay

**Goods Card (商品卡片)**
```css
background: linear-gradient(180deg, rgba(20,20,16,0.58) 0%, rgba(20,20,16,0.24) 56%);
border-radius: 24rpx;
min-height: 332rpx;
```
- Similar to topic card, used for products

**News Item Card (新闻卡片)**
```css
background: #ffffff;
border-radius: 24rpx;
box-shadow: 0 4rpx 12rpx rgba(56,56,46,0.03);
padding: 24rpx 26rpx;
display: flex;
align-items: center;
gap: 20rpx;
```
- Horizontal layout with thumbnail

---

### List Items

**Standard List Cell**
```css
padding: 24rpx 30rpx;
background: #ffffff;
border-bottom: 1rpx solid rgba(19,47,42,0.08);
```
- Use for settings, menu items

**With Icon List Cell**
```css
padding: 24rpx 26rpx;
gap: 20rpx;
```
- Icon on left, text on right

---

### Navigation Bar (Topbar)

**Home Topbar**
```css
position: fixed;
top: 0;
z-index: 500;
background: linear-gradient(180deg, rgba(254,255,214,0.74) 0%, rgba(252,249,238,0.62) 100%);
box-shadow: 0 12rpx 34rpx rgba(56,56,46,0.06);
padding: 12rpx 24rpx;
```
- Scroll-aware opacity change
- Brand icon + title on left, search icon on right

**Standard Page Navbar**
```css
height: 88rpx;
background: #ffffff;
border-bottom: 1rpx solid rgba(19,47,42,0.08);
font-size: 32rpx;
font-weight: 600;
color: #132f2a;
```

---

### TabBar

```css
height: 100rpx;
padding-bottom: env(safe-area-inset-bottom);
background: #ffffff;
border-top: 1rpx solid rgba(19,47,42,0.08);
icon-size: 52rpx;
selected-color: #4e6b59;
unselected-color: #6e7268;
```
- Fixed at bottom
- 4 tabs: 首页(HOME), 服务(SERVICE), 消息(MESSAGE), 我的(MINE)

---

### Form Inputs

**Standard Input**
```css
height: 80rpx;
padding: 0 24rpx;
border: 1rpx solid rgba(19,47,42,0.08);
border-radius: 14rpx;
font-size: 24rpx;
background: #ffffff;
```
- States:
  - Focus: `border-color: #4e6b59`
  - Error: `border-color: #d96b53`

**Textarea**
```css
min-height: 160rpx;
padding: 24rpx;
border: 1rpx solid rgba(19,47,42,0.08);
border-radius: 14rpx;
font-size: 24rpx;
```

---

### Tags & Badges

**City Tag (城市标签)**
```css
padding: 4rpx 10rpx;
border-radius: 10rpx;
font-size: 20rpx;
background: rgba(125,95,57,0.08);
color: #7d5f39;
```

**Status Badge**
```css
padding: 4rpx 12rpx;
border-radius: 10rpx;
font-size: 18rpx;
```
- Success: green background
- Warning: warning background
- Danger: danger background

---

### Skeleton Loading

```css
background: linear-gradient(90deg, #f0ebe3 25%, #faf7f2 50%, #f0ebe3 75%);
background-size: 200% 100%;
animation: skeletonShimmer 1.25s linear infinite;
```

---

## 5. Layout Principles

### Safe Areas
| Area | Value | Implementation |
|------|-------|----------------|
| Status Bar | `uni.getSystemInfoSync().statusBarHeight` | Auto-handled |
| Navigation Bar | 44px (iOS) / dynamic | `tui-navigation-bar` |
| Home Indicator | `safeAreaInsets.bottom` | TabBar padding |

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| xxs | 6rpx | Tight internal spacing |
| xs | 10rpx | Small gaps |
| sm | 12rpx | Compact elements |
| md | 16rpx | Default gap |
| base | 18rpx | Base spacing unit |
| lg | 22rpx | Section spacing |
| xl | 24rpx | Large gaps |
| 2xl | 28rpx | Major sections |
| 3xl | 32rpx | Page margins |
| 4xl | 40rpx | Extra large |
| 5xl | 52rpx | Hero spacing |

### Page Layout
```css
page-padding-x: 24rpx;
page-padding-y: 24rpx;
page-safe-bottom: env(safe-area-inset-bottom);
```

### Component Gaps
```css
component-gap: 14rpx;
section-gap: 26rpx;
card-gap: 16rpx;
card-inner-padding: 24rpx;
```

### Grid
- No fixed grid system
- Use flexbox for most layouts
- Card grids: 2 columns with 16-18rpx gaps

---

## 6. Depth & Elevation

### Shadows
| Level | Value | Usage |
|-------|-------|-------|
| xs | `0 2rpx 8rpx rgba(56,56,46,0.04)` | Subtle elevation |
| Soft | `0 8rpx 20rpx rgba(56,56,46,0.06)` | Cards |
| MD | `0 12rpx 32rpx rgba(56,56,46,0.08)` | Elevated elements |
| LG | `0 18rpx 48rpx rgba(56,56,46,0.10)` | Floating elements |
| XL | `0 22rpx 60rpx rgba(56,56,46,0.12)` | Modals |
| Hero | `0 28rpx 80rpx rgba(56,56,46,0.18)` | Major heroes |

### Component Shadows
```css
shadow-button: 0 6rpx 16rpx rgba(78,107,89,0.18);
shadow-icon-button: 0 6rpx 16rpx rgba(56,56,46,0.08);
```

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| xs | 10rpx | Tags, small badges |
| sm | 14rpx | Inputs, small buttons |
| md | 18rpx | Card internal elements |
| lg | 22rpx | Cards, panels |
| xl | 26rpx | Large panels |
| 2xl | 30rpx | Major cards |
| 3xl | 40rpx | Special large panels |
| full | 999rpx | Pills, avatars |

---

## 7. Touch States & Interactions

### Touch States
| State | Visual Treatment |
|-------|-----------------|
| Default | Normal appearance |
| Pressed | `opacity: 0.9` or slight darken |
| Disabled | `opacity: 0.4`, `pointer-events: none` |
| Loading | Show skeleton or spinner |

### Mobile Gestures
| Gesture | Implementation |
|---------|----------------|
| Pull to Refresh | `uni.startPullDownRefresh()` |
| Load More | `onReachBottom` lifecycle |
| Swipe Back | System default (iOS) |
| Long Press | `@longpress` event |
| Tap | Standard click handling |

### Feedback Timing
| Feedback | Duration |
|----------|----------|
| Toast | 2000ms default |
| Loading | Immediate show |
| Modal | Immediate show |
| Page Transition | 280ms |

---

## 8. Platform Adaptation

### iOS
- Safe area insets for notch devices
- Home indicator padding
- SF System font (handled by font stack)

### Android
- Status bar handling (light/dark)
- Navigation bar consideration
- Material Design touch ripples (optional)

### uni-app Specific
| Setting | Value |
|---------|-------|
| Design width | 750rpx |
| Unit | rpx (recommended) |
| DPR | Auto-handled by uni-app |
| Component prefix | `tui-` (ThorUI) |

---

## 9. ThorUI Component Mapping

### Custom vs ThorUI Components

| Design Element | Component | Type |
|----------------|-----------|------|
| TabBar | `city-tabbar.vue` | Custom |
| Toast | `city-toast.vue` | Custom |
| Loading | `city-loading-spinner.vue` | Custom |
| Empty State | `city-empty-state.vue` | Custom |
| Tag | `city-tag.vue` | Custom |
| List Cell | `city-list-cell.vue` | Custom |
| Banner | `tui-banner` | ThorUI |
| Button | `tui-button` | ThorUI |
| Card | `tui-card` | ThorUI |
| TabBar | `tui-tabbar` | ThorUI |
| SearchBar | `tui-searchbar` | ThorUI |
| Navigation Bar | `tui-navigation-bar` | ThorUI |
| List Cell | `tui-list-cell` | ThorUI |
| Grid | `tui-grid` | ThorUI |
| Icon | `tui-icon` | ThorUI |
| Footer | `tui-footer` | ThorUI |
| Fab | `tui-fab` | ThorUI |
| Notice Bar | `tui-notice-bar` | ThorUI |
| Tag | `tui-tag` | ThorUI |
| Tabs | `tui-tabs` | ThorUI |

### Custom Component Colors (Kaiping Brand)

| Component | Primary Color | Secondary Color |
|-----------|-------------|-----------------|
| city-tag | `#4e6b59` | `#7d5f39` |
| city-tabbar | `#4e6b59` (selected) | `#6e7268` (unselected) |
| city-toast | `#4e6b59` | - |

---

## 10. Agent Prompt Guide

### Quick Color Reference
```
Primary: #4e6b59
Primary Strong: #3d5747
Secondary: #7d5f39
Background: #F5F2E9 / #ffffff
Text: #132f2a / #6e7268
Success: #27a06b
Warning: #d9911a
Danger: #d96b53
Border: rgba(19,47,42,0.08)
```

### Quick Size Reference
```
Font: 18rpx / 20rpx / 22rpx / 24rpx / 28rpx / 32rpx / 36rpx / 40rpx / 46rpx / 48rpx
Radius: 10rpx / 14rpx / 18rpx / 22rpx / 24rpx / 30rpx / 999rpx
Spacing: 6rpx / 10rpx / 12rpx / 16rpx / 18rpx / 22rpx / 24rpx / 28rpx / 32rpx
Shadow: 0 2rpx 8rpx rgba(56,56,46,0.04)
```

### Example Component Prompts

**"Create a home page service card with:
- tui-card or custom card component
- Background gradient from white to #f7fbf7
- Border: 1px solid rgba(78,107,89,0.12)
- Border radius: 24rpx
- Box shadow: 0 6rpx 18rpx rgba(56,56,46,0.03)
- Service icon on top left
- Service name (32rpx, bold, #38382e)
- Service description (20rpx, #6e7268)
- Primary color accent: #4e6b59
- Secondary color accent: #7d5f39"

**"Build a news list item card with:
- Horizontal layout: text left, image right
- Card background: #ffffff
- Border radius: 24rpx
- Padding: 24rpx 26rpx
- Gap between text and image: 20rpx
- Title: 26rpx, bold, #38382e
- Tag using city-tag component with type='brown'
- Thumbnail: 220rpx width, 132rpx height, border-radius 18rpx
- Box shadow: 0 4rpx 12rpx rgba(56,56,46,0.03)"

**"Design a top navigation bar with:
- Fixed position at top
- Background: linear gradient from rgba(254,255,214,0.74) to rgba(252,249,238,0.62)
- Box shadow: 0 12rpx 34rpx rgba(56,56,46,0.06)
- Left: location icon + '开平公共服务' title in #4e6b59
- Right: search icon
- Use safe area padding for status bar
- Scroll-aware opacity change"

**"Create a tabbar with 4 tabs using city-tabbar:
- Tab 1: 首页 (HOME) - home icon
- Tab 2: 服务 (SERVICE) - service icon
- Tab 3: 消息 (MESSAGE) - message icon
- Tab 4: 我的 (MINE) - profile icon
- Selected color: #4e6b59
- Unselected color: #6e7268
- Height: 100rpx with safe area bottom
- Background: #ffffff with top border rgba(19,47,42,0.08)"

**"Build a topic card carousel item with:
- Image background with aspectFill mode
- Gradient overlay: linear-gradient from rgba(20,20,16,0.62) to rgba(20,20,16,0.08)
- Border radius: 24rpx
- Min height: 332rpx
- Content positioned at bottom with padding: 28rpx
- Tag text: uppercase, 18rpx, letter-spacing 4rpx, white color
- Title: 48rpx, bold, white
- Use for travel/tourism content"

### Iteration Guide

1. **Use Kaiping brand colors** - Primary #4e6b59, Secondary #7d5f39
2. **Use rpx units** - All sizes in rpx for consistent scaling
3. **Follow card patterns** - Service cards, topic cards, goods cards, news cards
4. **Use custom components** - city-tabbar, city-tag, city-toast, city-empty-state
5. **Map to ThorUI** - For complex components, use ThorUI equivalents
6. **Consider dark mode** - Test with `data-theme="dark"` on root node
7. **Safe area handling** - Always respect safe area insets on mobile

---

## Implementation Notes

### Dark Mode Colors
When `data-theme="dark"` is set:
- Primary becomes: `#1db89c`
- Background becomes: `#0e1c18`
- Text becomes: `#e4ede9`

### Animation Classes
```css
.fade-up { animation: fadeUp 420ms ease-out both; }
.fade-in { animation: fadeIn 280ms ease-out both; }
.delay-1 { animation-delay: 100ms; }
.delay-2 { animation-delay: 200ms; }
.delay-3 { animation-delay: 300ms; }
.delay-4 { animation-delay: 400ms; }
```

### Scroll-aware Topbar
```javascript
const navOpacity = computed(() => Math.min(scrollTop.value / 180, 1));
const topbarPanelStyle = computed(() => ({
  paddingTop: `${safeTop.value}px`,
  background: `linear-gradient(180deg, rgba(254,255,214,${0.74 + navOpacity.value * 0.18}), rgba(252,249,238,${0.62 + navOpacity.value * 0.24}))`,
  boxShadow: `0 ${12 + navOpacity.value * 4}rpx ${34 + navOpacity.value * 8}rpx rgba(56,56,46,${0.06 + navOpacity.value * 0.04})`
}));
```
