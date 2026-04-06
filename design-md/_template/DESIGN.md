# Design System: [App Name]

## 1. Visual Theme & Atmosphere

### Overall Style
- **Design Language**: [e.g., Modern Minimal, Card-based, Flat Design]
- **Visual Density**: [Compact / Comfortable / Relaxed]
- **Dark Mode**: [Supported / Not Supported]

### Platform Adaptation
- **iOS Safe Area**: [Enabled / Disabled]
- **Android Notch**: [Handled / Not Handled]
- **uni.scss Variables**: [Using / Not Using]

---

## 2. Color Palette & Roles

### Brand Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#5677fc` | Main brand color, CTAs |
| Success | `#19be6b` | Success states, positive actions |
| Warning | `#ff7900` | Warning states |
| Error | `#EB0909` | Error states, destructive actions |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Title | `#333333` | Headlines, important text |
| Body | `#333333` | Main content |
| Secondary | `#555555` | Secondary content |
| Muted | `#999999` | Hints, timestamps |
| Placeholder | `#bfbfbf` | Input placeholders |
| Disabled | `#c0c0c0` | Disabled text |

### Background Colors
| Name | Hex | Usage |
|------|-----|-------|
| Page | `#fafafa` | Page background |
| Card | `#ffffff` | Card, elevated surfaces |
| Hover | `#f1f1f1` | Touch/hover state |
| Mask | `rgba(0,0,0,0.4)` | Modal overlay |

### Border Colors
| Name | Hex | Usage |
|------|-----|-------|
| Default | `#eaeef1` | Default borders |
| Light | `#f5f5f5` | Subtle dividers |

---

## 3. Typography Rules

### Font Family
- **Primary**: `-apple-system-font, Helvetica Neue, Helvetica, sans-serif`
- **Monospace**: `SF Mono, Menlo, Courier, monospace`

### Typography Scale
| Role | Size | Line Height | Weight | Letter Spacing |
|------|------|-------------|--------|----------------|
| Display | 40rpx | 1.2 | 600 | -0.5px |
| H1 | 36rpx | 1.3 | 600 | -0.4px |
| H2 | 32rpx | 1.3 | 600 | -0.3px |
| H3 | 28rpx | 1.4 | 600 | -0.2px |
| Body Large | 32rpx | 1.5 | 400 | 0 |
| Body | 28rpx | 1.5 | 400 | 0 |
| Body Small | 24rpx | 1.5 | 400 | 0 |
| Caption | 24rpx | 1.4 | 400 | 0 |
| Overline | 20rpx | 1.3 | 500 | 0.5px |

---

## 4. Component Stylings

### Buttons

**Primary Button**
```css
background: linear-gradient(-90deg, #5677fc, #5c8dff);
height: 90rpx;
border-radius: 45rpx;
color: #fff;
font-size: 36rpx;
font-weight: 500;
```
- Use: `tui-button[type="primary"]`

**Secondary Button**
```css
background: #ffffff;
border: 1rpx solid #eaeef1;
height: 88rpx;
border-radius: 44rpx;
color: #333;
font-size: 32rpx;
```
- Use: `tui-button[type="white"]`

**Text Button**
```css
background: transparent;
color: #5677fc;
font-size: 28rpx;
```
- Use: `tui-button[plain]`

**Disabled State**
```css
opacity: 0.3;
pointer-events: none;
```

**Loading State**
- Use: `tui-loading` component

---

### Cards
```css
background: #ffffff;
border-radius: 12rpx;
box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.08);
padding: 24rpx;
margin: 24rpx;
```
- Use: `tui-card` component

---

### List Items
```css
padding: 24rpx 30rpx;
background: #ffffff;
border-bottom: 1rpx solid #eaeef1;
```
- Use: `tui-list-cell` component

---

### Form Inputs
```css
height: 96rpx;
padding: 0 24rpx;
border: 1rpx solid #eaeef1;
border-radius: 6rpx;
font-size: 28rpx;
```
- Use: `tui-input` component

---

### TabBar (Bottom Navigation)
```css
height: 100rpx; /* including safe area */
icon-size: 52rpx;
selected-color: #5677fc;
unselected-color: #999999;
```
- Use: `tui-tabbar` component

---

### Navigation Bar
```css
height: 88rpx; /* excluding status bar */
background: #ffffff;
border-bottom: 1rpx solid #eaeef1;
```
- Use: `tui-navigation-bar` component

---

## 5. Layout Principles

### Safe Areas
| Area | Handling |
|------|----------|
| Status Bar | `uni.getSystemInfoSync().statusBarHeight` |
| Navigation Bar | 44px (iOS) / dynamic (Android) |
| Home Indicator | `uni.getSystemInfoSync().safeAreaInsets.bottom` |

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| xs | 8rpx | Tight spacing |
| sm | 16rpx | Small gaps |
| base | 20rpx | Default gap |
| lg | 24rpx | Section spacing |
| xl | 32rpx | Large gaps |
| xxl | 48rpx | Page margins |

### Grid System
- 24-column grid
- Gutter: 20rpx
- Margin: 30rpx
- Use: `tui-row` + `tui-col` components

---

## 6. Depth & Elevation

### Shadows
| Level | Value | Usage |
|-------|-------|-------|
| Card | `0 2rpx 8rpx rgba(0,0,0,0.08)` | Card surfaces |
| Elevated | `0 4rpx 16rpx rgba(0,0,0,0.12)` | Floating elements |
| Modal | `0 8rpx 32rpx rgba(0,0,0,0.16)` | Dialogs, modals |

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| sm | 4rpx | Badges, small elements |
| base | 6rpx | Inputs, buttons |
| lg | 12rpx | Cards, containers |
| xl | 24rpx | Large panels |
| full | 9999rpx | Pills, round buttons |

---

## 7. Touch States & Interactions

### Touch States
| State | Visual Treatment |
|-------|-----------------|
| Default | Normal appearance |
| Pressed | `background-color: #f1f1f1` |
| Disabled | `opacity: 0.3` |
| Loading | Show `tui-loading` |

### Mobile Gestures
| Gesture | Implementation |
|---------|----------------|
| Pull to Refresh | `uni.startPullDownRefresh()` |
| Load More | `onReachBottom` lifecycle |
| Swipe Back | System default |
| Long Press | `@longpress` event |

### Feedback
- Toast: `tui-toast`
- Modal: `tui-modal`
- Loading: `tui-loading`

---

## 8. Platform Adaptation

### iOS
- Safe area insets for notch devices
- Home indicator padding
- SF System font

### Android
- Status bar handling
- Navigation bar consideration
- Roboto font fallback

### uni-app Specific
| Setting | Value |
|---------|-------|
| Design width | 750rpx |
| Unit | rpx (recommended) |
| DPR | Auto-handled by uni-app |

---

## 9. ThorUI Component Mapping

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Primary Button | `tui-button` | `type="primary"` |
| Secondary Button | `tui-button` | `type="white"` |
| Text Button | `tui-button` | `plain` |
| Card | `tui-card` | - |
| List Item | `tui-list-cell` | `arrow`, `tap` |
| TabBar | `tui-tabbar` | `selected`, `unselected` |
| Navigation Bar | `tui-navigation-bar` | `title`, `transparent` |
| Input | `tui-input` | `type`, `placeholder` |
| Textarea | `tui-textarea` | `maxlength`, `placeholder` |
| Popup | `tui-popup` | `mode`, `mask` |
| Modal | `tui-modal` | `title`, `content` |
| Toast | `tui-toast` | `msg`, `duration` |
| Loading | `tui-loading` | `size`, `text` |
| Grid | `tui-grid` | `columns`, `border` |
| Tag | `tui-tag` | `type`, `size` |
| Badge | `tui-badge` | `count`, `type` |
| Divider | `tui-divider` | `color`, `dashed` |
| Steps | `tui-steps` | `active`, `direction` |
| Tabs | `tui-tabs` | `tabs`, `current` |
| Picker | `tui-picker` | `level`, `data` |
| DateTime | `tui-datetime` | `start-date`, `end-date` |
| Slider | `tui-slider` | `min`, `max`, `step` |
| Switch | `tui-switch` | `checked`, `color` |
| Checkbox | `tui-checkbox` | `checked`, `disabled` |
| Radio | `tui-radio` | `checked`, `disabled` |
| SearchBar | `tui-searchbar` | `placeholder`, `clear` |

---

## 10. Agent Prompt Guide

### Quick Color Reference
```
Primary: #5677fc
Success: #19be6b
Warning: #ff7900
Error: #EB0909
Background: #ffffff / #fafafa
Text: #333333 / #999999
Border: #eaeef1
```

### Quick Size Reference
```
Font: 24rpx / 28rpx / 32rpx / 36rpx / 40rpx
Radius: 4rpx / 6rpx / 12rpx / 24rpx / 9999rpx
Spacing: 8rpx / 16rpx / 24rpx / 32rpx / 48rpx
```

### Example Component Prompts

**"Create a product card using tui-card with primary color #5677fc, showing product image, title, price, and a primary buy button."**

**"Build a login page with:
- Navigation bar with title 'Login' using tui-navigation-bar
- Phone input using tui-input with placeholder 'Please enter phone number'
- Password input using tui-input with type='password'
- Primary button 'Login' using tui-button with gradient background #5677fc→#5c8dff
- Text button 'Forgot password' using tui-button with plain style
- Page background #fafafa"**

**"Design a bottom tabbar with 4 tabs: Home, Categories, Cart, Profile. Use tui-tabbar with icons, primary color #5677fc for selected state, #999999 for unselected."**

**"Create a list page showing order items using tui-list-cell with arrow indicators. Each item should have product thumbnail (120rpx), title, price, and quantity. Use 24rpx padding and #eaeef1 dividers."**

### Iteration Guide

1. Always use ThorUI component names in prompts
2. Reference color tokens by name, not hardcoded values
3. Use rpx units for all measurements
4. Consider safe areas on mobile
5. Map design elements to ThorUI components using the mapping table in Section 9
