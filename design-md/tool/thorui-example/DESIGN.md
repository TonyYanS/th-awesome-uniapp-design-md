# Design System: ThorUI Reference App

## 1. Visual Theme & Atmosphere

### Overall Style
- **Design Language**: Modern Flat, Card-based UI
- **Visual Density**: Comfortable - balanced spacing for readability
- **Dark Mode**: Not supported in base version

### Platform Adaptation
- **iOS Safe Area**: Enabled - respects status bar and home indicator
- **Android Notch**: Handled - automatic safe area insets
- **uni.scss Variables**: Using ThorUI's default token system

### Design Philosophy
ThorUI follows a clean, professional aesthetic with emphasis on usability and performance. The design uses subtle shadows, rounded corners, and a cohesive color system to create a friendly yet professional appearance suitable for utility and productivity apps.

---

## 2. Color Palette & Roles

### Brand Colors
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#5677fc` | Main brand color, primary buttons, links |
| Primary Light | `#5c8dff` | Gradient button end color |
| Primary Dark | `#4a67d6` | Button pressed state |
| Success | `#19be6b` | Success states, positive feedback |
| Warning | `#ff7900` | Warning states, caution actions |
| Error | `#EB0909` | Error states, destructive actions |
| Pink | `#f74d54` | Accent color, highlights |
| Link | `#586c94` | Hyperlink text |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Title | `#333333` | Headlines, important text |
| Body | `#333333` | Main content text |
| Secondary | `#555555` | Secondary content |
| Muted | `#999999` | Hints, timestamps, descriptions |
| Placeholder | `#bfbfbf` | Input placeholders |
| Disabled | `#c0c0c0` | Disabled text |
| Inverse | `#ffffff` | Text on dark backgrounds |

### Background Colors
| Name | Hex | Usage |
|------|-----|-------|
| Page | `#fafafa` | Page background |
| Card | `#ffffff` | Card, elevated surfaces |
| Hover | `#f1f1f1` | Touch/pressed state |
| Mask | `rgba(0,0,0,0.4)` | Modal overlay |
| Grey | `#f5f5f5` | Subtle backgrounds |

### Border Colors
| Name | Hex | Usage |
|------|-----|-------|
| Default | `#eaeef1` | Default borders, dividers |
| Light | `#f5f5f5` | Subtle dividers |

---

## 3. Typography Rules

### Font Family
- **Primary**: `-apple-system-font, Helvetica Neue, Helvetica, sans-serif`
- **System**: Roboto for Android fallback

### Typography Scale
| Role | Size | Line Height | Weight | Letter Spacing | Usage |
|------|------|-------------|--------|----------------|-------|
| Display | 40rpx | 1.2 | 600 | -0.5px | Hero text |
| H1 | 36rpx | 1.3 | 600 | - | Page titles |
| H2 | 32rpx | 1.3 | 600 | - | Section titles |
| H3 | 28rpx | 1.4 | 600 | - | Card titles |
| Body Large | 32rpx | 1.5 | 400 | 0 | Introduction text |
| Body | 28rpx | 1.5 | 400 | 0 | Main content |
| Body Small | 24rpx | 1.5 | 400 | 0 | Secondary text |
| Caption | 24rpx | 1.4 | 400 | 0 | Timestamps, metadata |
| Button | 36rpx | 1.0 | 500 | 0 | Primary button text |
| Button Small | 28rpx | 1.0 | 400 | 0 | Secondary button text |

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
padding: 0 48rpx;
```
- Use: `tui-button[type="primary"]`
- States:
  - Default: Gradient background
  - Pressed: `background: linear-gradient(-90deg, #4a67d6, #4e77d9)`
  - Disabled: `opacity: 0.3`
  - Loading: Show `tui-loading` indicator

**Secondary Button**
```css
background: #ffffff;
border: 1rpx solid #eaeef1;
height: 88rpx;
border-radius: 44rpx;
color: #333;
font-size: 32rpx;
padding: 0 40rpx;
```
- Use: `tui-button[type="white"]`

**Gray Button**
```css
background: #ededed;
color: #999;
height: 88rpx;
border-radius: 44rpx;
```
- Use: `tui-button[type="gray"]`

**Text Button**
```css
background: transparent;
color: #5677fc;
font-size: 28rpx;
padding: 16rpx 24rpx;
```
- Use: `tui-button[plain="true"]`

---

### Cards
```css
background: #ffffff;
border-radius: 12rpx;
box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.08);
padding: 24rpx;
margin: 24rpx;
```
- Use: `tui-card`

**Card Variants**
- Shadow card: `shadow="true"`
- No shadow: `shadow="false"`
- Card with header: Pass `header` prop

---

### List Items
```css
padding: 24rpx 30rpx;
background: #ffffff;
border-bottom: 1rpx solid #eaeef1;
display: flex;
align-items: center;
justify-content: space-between;
```
- Use: `tui-list-cell`
- Last item: Add `last="true"` to remove bottom border

**List Item with Arrow**
```css
/* Arrow indicator on right */
color: #999;
font-size: 28rpx;
content: "›";
```

---

### Form Inputs
```css
height: 96rpx;
padding: 0 24rpx;
border: 1rpx solid #eaeef1;
border-radius: 6rpx;
font-size: 28rpx;
background: #ffffff;
```
- Use: `tui-input`

**Input States**
- Focus: `border-color: #5677fc`
- Error: `border-color: #EB0909`
- Disabled: `opacity: 0.3`, `background: #fafafa`

**Textarea**
```css
min-height: 200rpx;
padding: 24rpx;
border: 1rpx solid #eaeef1;
border-radius: 6rpx;
font-size: 28rpx;
```
- Use: `tui-textarea`

---

### TabBar (Bottom Navigation)
```css
height: 100rpx; /* including 34rpx safe area */
padding-bottom: 34rpx;
background: #ffffff;
border-top: 1rpx solid #eaeef1;
icon-size: 52rpx;
selected-color: #5677fc;
unselected-color: #999999;
```
- Use: `tui-tabbar`
- Safe area handling: Enable `safe-area` prop

---

### Navigation Bar
```css
height: 88rpx;
background: #ffffff;
border-bottom: 1rpx solid #eaeef1;
font-size: 32rpx;
font-weight: 600;
color: #333;
```
- Use: `tui-navigation-bar`

**Navigation Bar Variants**
- Transparent: `transparent="true"`
- Centered title: `centered="true"`
- With back button: Auto-handled

---

### Tags
```css
padding: 8rpx 16rpx;
border-radius: 4rpx;
font-size: 24rpx;
```
- Use: `tui-tag`

**Tag Types**
| Type | Background | Text Color |
|------|------------|------------|
| primary | `rgba(86,119,252,0.1)` | `#5677fc` |
| success | `rgba(25,190,107,0.1)` | `#19be6b` |
| warning | `rgba(255,121,0,0.1)` | `#ff7900` |
| error | `rgba(235,9,9,0.1)` | `#EB0909` |

---

### Badges
```css
min-width: 36rpx;
height: 36rpx;
padding: 0 10rpx;
background: #EB0909;
color: #fff;
border-radius: 18rpx;
font-size: 22rpx;
display: inline-flex;
align-items: center;
justify-content: center;
```
- Use: `tui-badge`

---

### Dividers
```css
height: 1rpx;
background: #eaeef1;
margin: 24rpx 0;
```
- Use: `tui-divider`

**Divider Variants**
- Dashed: `dashed="true"`
- With text: Pass `tui-divider` with content slot

---

## 5. Layout Principles

### Safe Areas
| Area | Value | Implementation |
|------|-------|----------------|
| Status Bar | `uni.getSystemInfoSync().statusBarHeight` | Auto-handled by uniapp |
| Navigation Bar | 44px (iOS) / dynamic | `tui-navigation-bar` |
| Home Indicator | `safeAreaInsets.bottom` | `tui-tabbar[safeArea]` |

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| xs | 8rpx | Tight spacing, icon gaps |
| sm | 16rpx | Small gaps |
| base | 20rpx | Default gap |
| lg | 24rpx | Section spacing |
| xl | 32rpx | Large gaps |
| xxl | 48rpx | Page margins |

### Grid System
- **Columns**: 24
- **Gutter**: 20rpx
- **Margin**: 30rpx
- Use: `tui-row` + `tui-col`

### Common Layout Patterns
```css
/* Page container */
padding: 24rpx;
background: #fafafa;

/* Card container */
margin: 24rpx;
padding: 24rpx;
background: #ffffff;
border-radius: 12rpx;

/* List item spacing */
padding: 24rpx 30rpx;

/* Button group */
gap: 16rpx;
flex-wrap: wrap;
```

---

## 6. Depth & Elevation

### Shadows
| Level | Value | Usage |
|-------|-------|-------|
| Card | `0 2rpx 8rpx rgba(0,0,0,0.08)` | Default card surfaces |
| Elevated | `0 4rpx 16rpx rgba(0,0,0,0.12)` | Floating elements, dropdowns |
| Modal | `0 8rpx 32rpx rgba(0,0,0,0.16)` | Dialogs, modals |
| Button Hover | `rgba(0,0,0,0.1) 0px 4px 12px` | Interactive focus |

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| sm | 4rpx | Tags, badges, small elements |
| base | 6rpx | Inputs, small buttons |
| lg | 12rpx | Cards, containers |
| xl | 24rpx | Large panels, images |
| full | 50% | Avatars, circular buttons |
| pill | 9999rpx | Pills, round buttons |

---

## 7. Touch States & Interactions

### Touch States
| State | Visual Treatment |
|-------|-----------------|
| Default | Normal appearance |
| Pressed | `background-color: #f7f7f9` or opacity change |
| Disabled | `opacity: 0.3`, `pointer-events: none` |
| Loading | Show `tui-loading`, disable interaction |

### Mobile Gestures
| Gesture | Implementation |
|---------|----------------|
| Pull to Refresh | `uni.startPullDownRefresh()` |
| Load More | `onReachBottom` lifecycle |
| Swipe Back | System default (iOS) |
| Long Press | `@longpress` event |
| Swipe Actions | `tui-swipe-action` component |

### Feedback Timing
| Feedback | Duration |
|----------|----------|
| Toast | 2000ms default |
| Loading | Immediate show |
| Modal | Immediate show |

---

## 8. Platform Adaptation

### iOS
- Safe area insets for notch devices
- Home indicator padding
- SF System font (handled by `-apple-system`)
- Translucent navigation bar support

### Android
- Status bar handling (light/dark)
- Navigation bar consideration
- Roboto font fallback
- Material Design ripple effect (optional)

### uni-app Specific
| Setting | Value |
|---------|-------|
| Design width | 750rpx |
| Unit | rpx (recommended for all sizes) |
| DPR | Auto-handled by uni-app |
| Component prefix | `tui-` (ThorUI) |

---

## 9. ThorUI Component Mapping

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Primary Button | `tui-button` | `type="primary"` |
| Secondary Button | `tui-button` | `type="white"` |
| Gray Button | `tui-button` | `type="gray"` |
| Text Button | `tui-button` | `plain="true"` |
| Icon Button | `tui-button` | `shape="circle"`, `width`, `height` |
| Loading Button | `tui-button` | `loading="true"` |
| Card | `tui-card` | `shadow`, `radius` |
| List Item | `tui-list-cell` | `arrow`, `link`, `last` |
| TabBar | `tui-tabbar` | `selected`, `list`, `safeArea` |
| Navigation Bar | `tui-navigation-bar` | `title`, `transparent`, `fixed` |
| Segmented Control | `tui-segmented-control` | `values`, `current` |
| Input | `tui-input` | `type`, `placeholder`, `v-model` |
| Textarea | `tui-textarea` | `maxlength`, `placeholder` |
| Number Box | `tui-numberbox` | `min`, `max`, `step` |
| Slider | `tui-slider` | `min`, `max`, `step`, `showValue` |
| Switch | `tui-switch` | `checked`, `color` |
| Checkbox | `tui-checkbox` | `checked`, `border` |
| Radio | `tui-radio` | `checked`, `border` |
| Picker | `tui-picker` | `level`, `data` |
| DateTime Picker | `tui-datetime` | `startDate`, `endDate` |
| Search Bar | `tui-searchbar` | `placeholder` |
| Tag | `tui-tag` | `type`, `size`, `plain` |
| Badge | `tui-badge` | `count`, `type` |
| Divider | `tui-divider` | `dashed`, `color` |
| Toast | `tui-toast` | `msg`, `duration` |
| Loading | `tui-loading` | `size`, `text`, `mask` |
| Modal | `tui-modal` | `title`, `content`, `buttons` |
| Popup | `tui-popup` | `mode`, `mask`, `tapMask` |
| Action Sheet | `tui-actionsheet` | `list`, `mask` |
| Bottom Popup | `tui-bottom-popup` | `maskClosable` |
| Drawer | `tui-drawer` | `mode`, `width` |
| Grid | `tui-grid` | `columns`, `border` |
| Row | `tui-row` | `gutter` |
| Column | `tui-col` | `span`, `offset` |
| Sticky | `tui-sticky` | `scrollTop` |
| Collapse | `tui-collapse` | `arr`, `accordion` |
| Swipe Action | `tui-swipe-action` | `actions`, `autoClose` |
| Steps | `tui-steps` | `active`, `arr` |
| Tabs | `tui-tabs` | `tabs`, `current` |
| Calendar | `tui-calendar` | `date`, `isOpen` |
| Countdown | `tui-countdown` | `time`, `isDay` |
| Progress | `tui-progress` | `percent`, `height` |
| Circular Progress | `tui-circular-progress` | `percentage`, `size` |
| Image Upload | `tui-upload` | `serverUrl`, `maxCount` |
| Image Preview | `tui-gallery` | `urls`, `current` |
| Image Cropper | `tui-image-cropper` | `width`, `height`, `src` |
| Lazy Load | `tui-lazyload-img` | `src`, `mode` |
| Icon | `tui-icon` | `name`, `size`, `color` |
| Rate | `tui-rate` | `value`, `max`, `size` |
| Pagination | `tui-pagination` | `total`, `current`, `pageSize` |
| Code Input | `tui-code-input` | `length`, `size` |
| Notice Bar | `tui-notice-bar` | `list`, `direction` |
| Scroll Top | `tui-scroll-top` | `threshold`, `bottom` |
| No Data | `tui-no-data` | `msg`, `imgUrl` |
| Skeleton | `tui-skeleton` | `loading`, `animate` |

---

## 10. Agent Prompt Guide

### Quick Color Reference
```
Primary: #5677fc
Primary Light: #5c8dff
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
Button Height: 88rpx / 90rpx
Input Height: 96rpx
Icon Size: 40rpx / 52rpx / 80rpx
Shadow: 0 2rpx 8rpx rgba(0,0,0,0.08)
```

### Example Component Prompts

**"Create a login page using ThorUI components with:
- tui-navigation-bar titled 'Login'
- tui-input for phone number with placeholder 'Please enter phone number'
- tui-input type='password' for password
- tui-button[type='primary'] with gradient #5677fc→#5c8dff, 90rpx height, 45rpx radius
- tui-button[plain] for 'Forgot password' link
- Page background #fafafa, centered content"

**"Build a product list page with:
- tui-navigation-bar with title 'Products'
- tui-searchbar with placeholder 'Search products'
- tui-list-cell for each product with arrow indicator
- Each cell: 120rpx thumbnail, title (28rpx), price (#EB0909), quantity selector using tui-numberbox
- 24rpx padding, #eaeef1 dividers
- Pull to refresh using uni.startPullDownRefresh()"

**"Design a profile settings page with:
- tui-navigation-bar titled 'Settings'
- tui-list-cell items for: Account, Security, Notifications, About
- Each cell with icon (tui-icon), title, arrow indicator
- Last item without bottom border using last='true'
- tui-divider between sections
- tui-button[type='primary'] at bottom for 'Logout'"

**"Create a shopping cart page with:
- tui-checkbox for multi-select using tui-checkbox-group
- tui-list-cell for each item with swipe-delete using tui-swipe-action
- Product image 160rpx, title, price in #EB0909
- tui-numberbox for quantity adjustment
- Bottom fixed bar with tui-checkbox select-all and total price
- tui-button[type='primary'] for checkout, fixed at bottom 100rpx"

### Iteration Guide

1. **Always use ThorUI component names** - tui-button, tui-card, tui-list-cell, etc.
2. **Reference colors by name** - Use Primary (#5677fc), not hardcoded values in prompts
3. **Use rpx units** - All sizes in rpx for consistent scaling
4. **Consider safe areas** - Use 100rpx bottom padding for TabBar pages
5. **Map design to components** - Use the mapping table in Section 9
6. **Document all states** - Include default, pressed, disabled, loading states
7. **Use uni.scss variables** - Reference $uni-color-primary instead of hardcoding

---

## Implementation Notes

### Button Pressed State
```javascript
// In button component
buttonPressed() {
  this.setData({
    background: 'linear-gradient(-90deg, #4a67d6, #4e77d9)'
  })
}
```

### List Item Pressed State
```css
.tui-list-cell:active {
  background-color: #f7f7f9;
}
```

### Safe Area Implementation
```javascript
onShow() {
  const systemInfo = uni.getSystemInfoSync()
  this.safeAreaBottom = systemInfo.safeAreaInsets.bottom
}
```

### Pull to Refresh
```javascript
onPullDownRefresh() {
  // Fetch data
  setTimeout(() => {
    uni.stopPullDownRefresh()
  }, 1000)
}
```

### Image Lazy Load
```html
<tui-lazyload-img src="https://..." mode="widthFix"></tui-lazyload-img>
```
