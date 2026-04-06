# ThorUI Component Mapping Guide

This document maps common design elements to ThorUI components for use in DESIGN.md files.

## How to Use This Guide

When writing a DESIGN.md, reference this mapping to ensure design elements are correctly translated to ThorUI components.

---

## Button Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Primary Button | `tui-button` | `type="primary"`, `size="lg"` |
| Secondary Button | `tui-button` | `type="white"` or `type="gray"` |
| Outline Button | `tui-button` | `plain="true"` |
| Text Button | `tui-button` | `plain="true"`, `backgroundColor="transparent"` |
| Icon Button | `tui-button` | `width`, `height`, `shape="circle"` |
| Button with Loading | `tui-button` | `loading="true"` |
| Button Group | `tui-form-button` | Used within forms |

### Button Styling Reference

```css
/* Primary Button */
background: linear-gradient(-90deg, #5677fc, #5c8dff);
height: 90rpx;
border-radius: 45rpx;
color: #fff;
font-size: 36rpx;

/* Secondary Button */
background: #ffffff;
border: 1rpx solid #eaeef1;
height: 88rpx;
border-radius: 44rpx;
color: #333333;
font-size: 32rpx;

/* Disabled State */
opacity: 0.3;
```

---

## Navigation Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Top Navigation Bar | `tui-navigation-bar` | `title`, `transparent`, `fixed` |
| Bottom Tab Bar | `tui-tabbar` | `selected`, `unselected`, `isdots` |
| Bottom Navigation | `tui-bottom-navigation` | `list`, `current` |
| Segmented Control | `tui-segmented-control` | `values`, `current` |
| Tab Control | `tui-tabs` | `tabs`, `current`, `scroll` |
| Index List | `tui-index-list` | `list`, `selected` |

### Navigation Bar Props

```javascript
{
  title: 'Page Title',
  transparent: false,      // Transparent background
  fixed: true,              // Fixed at top
  statusBar: true,          // Include status bar height
  leftWidth: 200,           // Left area width
  rightWidth: 200           // Right area width
}
```

### TabBar Props

```javascript
{
  selected: 0,              // Current selected index
  unselectedColor: '#999999',
  selectedColor: '#5677fc',  // Primary color
  color: '#666666',
  list: [
    { pagePath: '/pages/index/index', text: 'Home', iconPath: '...', selectedIconPath: '...' },
    { pagePath: '/pages/cate/cate', text: 'Category', iconPath: '...', selectedIconPath: '...' },
    { pagePath: '/pages/cart/cart', text: 'Cart', iconPath: '...', selectedIconPath: '...' },
    { pagePath: '/pages/my/my', text: 'My', iconPath: '...', selectedIconPath: '...' }
  ]
}
```

---

## Layout Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Grid Layout | `tui-grid` | `columns`, `border`, `imgsize` |
| Grid Item | `tui-grid-item` | - |
| Row | `tui-row` | `gutter` |
| Column | `tui-col` | `span`, `offset` |
| Sticky Container | `tui-sticky` | `scroll`, `container` |
| White Space | `tui-white-space` | `height` |
| Wing Blank | `tui-wing-blank` | `margin` |

### Grid System (24 columns)

```javascript
<tui-row gutter="20">
  <tui-col span="12"><view>Half width</view></tui-col>
  <tui-col span="12"><view>Half width</view></tui-col>
</tui-row>

// Common spans:
// span="24" = Full width
// span="12" = 1/2 width
// span="8"  = 1/3 width
// span="6"  = 1/4 width
// span="4"  = 1/6 width
```

---

## Content Display Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Card | `tui-card` | `shadow`, `radius` |
| List Item | `tui-list-cell` | `arrow`, `link`, `radius` |
| Section Title | `tui-section` | `title`, `size`, `bold` |
| Avatar | `tui-avatar` | `size`, `shape`, `src` |
| Image | `tui-image` | `src`, `width`, `height`, `lazyLoad` |
| Badge | `tui-badge` | `count`, `type`, `size` |
| Tag | `tui-tag` | `type`, `size`, `plain` |
| Divider | `tui-divider` | `color`, `dashed`, `height` |
| Skeleton | `tui-skeleton` | `loading`, `animate` |
| No Data | `tui-no-data` | `msg`, `imgUrl` |

### Card Styling

```css
background: #ffffff;
border-radius: 12rpx;
box-shadow: 0 2rpx 8rpx rgba(0,0,0,0.08);
padding: 24rpx;
margin: 24rpx;
```

---

## Form Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Text Input | `tui-input` | `type`, `placeholder`, `v-model` |
| Textarea | `tui-textarea` | `maxlength`, `placeholder`, `autoHeight` |
| Number Box | `tui-numberbox` | `min`, `max`, `step` |
| Slider | `tui-slider` | `min`, `max`, `step`, `showValue` |
| Switch | `tui-switch` | `checked`, `color`, `size` |
| Checkbox | `tui-checkbox` | `checked`, `disabled`, `border` |
| Radio | `tui-radio` | `checked`, `disabled`, `border` |
| Picker | `tui-picker` | `level`, `data`, `selectedText` |
| DateTime Picker | `tui-datetime` | `startDate`, `endDate`, `format` |
| Search Bar | `tui-searchbar` | `placeholder`, `clear` |
| Form | `tui-form` | `model`, `rules` |
| Form Item | `tui-form-item` | `label`, `prop` |
| Form Button | `tui-form-button` | `type`, `native-type` |

### Input Styling

```css
height: 96rpx;
padding: 0 24rpx;
border: 1rpx solid #eaeef1;
border-radius: 6rpx;
font-size: 28rpx;
background: #ffffff;
```

### Input Types

| type | Usage |
|------|-------|
| `text` | Default text input |
| `number` | Numeric keyboard |
| `digit` | Decimal numbers |
| `idcard` | ID card number |
| `password` | Password (masked) |

---

## Feedback Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Toast | `tui-toast` | `msg`, `duration`, `type` |
| Loading | `tui-loading` | `size`, `text`, `mask` |
| Modal | `tui-modal` | `title`, `content`, `buttons` |
| Alert | `tui-alert` | `title`, `content` |
| Tips | `tui-tips` | `msg`, `type`, `useToast` |
| Progress | `tui-progress` | `percent`, `height`, `color` |
| Circular Progress | `tui-circular-progress` | `percentage`, `size`, `lineSize` |

### Loading Usage

```javascript
// Show loading
this.$refs.popup.show();

// With tui-loading component
<tui-loading text="Loading..." :mask="true"></tui-loading>
```

---

## Popup Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Popup | `tui-popup` | `mode`, `mask`, `tapMask` |
| Drawer | `tui-drawer` | `mode`, `width`, `mask` |
| Action Sheet | `tui-actionsheet` | `list`, `mask`, `cancel` |
| Bottom Popup | `tui-bottom-popup` | `maskClosable`, `scroll` |
| Bubble Popup | `tui-bubble-popup` | `direction`, `triangle` |
| Landscape/Popup | `tui-landscape` | `visible`, `close` |

### Popup Modes

| mode | Usage |
|------|-------|
| `top` | Slide from top |
| `bottom` | Slide from bottom |
| `center` | Fade in center |
| `left` | Slide from left |
| `right` | Slide from right |

---

## Data Visualization

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Column Chart | `tui-charts-column` | `data`, `width`, `height` |
| Bar Chart | `tui-charts-bar` | `data`, `width`, `height` |
| Line Chart | `tui-charts-line` | `data`, `width`, `height` |
| Pie Chart | `tui-charts-pie` | `data`, `width`, `height` |
| Area Chart | `tui-charts-area` | `data`, `width`, `height` |
| Radar Chart | `tui-charts-radar` | `data`, `width`, `height` |
| Funnel Chart | `tui-charts-funnel` | `data`, `width`, `height` |
| Calendar | `tui-calendar` | `date`, `isOpen`, `range` |
| Countdown | `tui-countdown` | `time`, `isDay`, `type` |
| Steps | `tui-steps` | `active`, `arr`, `direction` |

---

## Media Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Image Cropper | `tui-image-cropper` | `width`, `height`, `src` |
| Gallery | `tui-gallery` | `urls`, `current` |
| Image Preview | `tui-gallery` | `urls`, `current`, `hideOnClose` |
| Image Upload | `tui-upload` | `serverUrl`, `formData`, `maxCount` |
| Lazy Load Image | `tui-lazyload-img` | `src`, `mode`, `loading` |
| Poster | `tui-poster` | `data`, `width`, `height` |

---

## Advanced Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Collapse | `tui-collapse` | `arr`, `accordion` |
| Swipe Action | `tui-swipe-action` | `actions`, `autoClose` |
| Slide View | `tui-slide-view` | `slideButtons`, `show` |
| Virtual List | `tui-virtual-list` | `list`, `itemSize` |
| Virtual Table | `tui-virtual-table` | `columns`, `data`, `height` |
| Cascade Selection | `tui-cascade-selection` | `data`, `keys`, `selected` |
| Waterfall | `tui-waterfall` | `list`, `columnGap` |
| Time Axis | `tui-time-axis` | `list`, `direction` |
| Tree View | `tui-tree-view` | `treeData`, `expanded` |

---

## Utility Components

| Design Element | ThorUI Component | Key Props |
|----------------|------------------|-----------|
| Icon | `tui-icon` | `name`, `size`, `color` |
| Link | `tui-link` | `href`, `text`, `color` |
| Text | `tui-text` | `text`, `size`, `color` |
| Rate/Star | `tui-rate` | `value`, `max`, `size` |
| Grade | `tui-grade` | `value`, `max` |
| Pagination | `tui-pagination` | `total`, `current`, `pageSize` |
| Code Input | `tui-code-input` | `length`, `size`, `dot` |
| Keyboard | `tui-keyboard` | `type`, `value` |
| Digital Keyboard | `tui-digital-keyboard` | `value`, `dot` |
| Digital Roller | `tui-digital-roller` | `list`, `value` |
| Notice Bar | `tui-notice-bar` | `list`, `direction`, `speed` |
| Vertical Notice | `tui-notice-vertical` | `list`, `duration` |
| Scroll Top | `tui-scroll-top` | `threshold`, `bottom` |

---

## Component State Reference

### Common State Props

| State | Props |
|-------|-------|
| Disabled | `disabled="true"` |
| Loading | `loading="true"` |
| Selected | `selected="true"` |
| Checked | `checked="true"` |
| Expanded | `expanded="true"` |
| Active | `active="0"` (steps) |

### Interactive States

| State | Implementation |
|-------|----------------|
| Default | Normal appearance |
| Hover/Press | `hover-class="tui-item-hover"` or `#f1f1f1` background |
| Disabled | `disabled="true"` + `opacity: 0.3` |
| Loading | `loading="true"` |

---

## uni.scss Variables (ThorUI Defaults)

```scss
/* Color */
$uni-color-primary: #5677fc;
$uni-color-success: #19be6b;
$uni-color-warning: #ff7900;
$uni-color-error: #EB0909;

/* Text */
$uni-text-color: #333333;
$uni-text-color-inverse: #ffffff;
$uni-text-color-grey: #999999;
$uni-text-color-placeholder: #bfbfbf;
$uni-text-color-disable: #c0c0c0;

/* Background */
$uni-bg-color: #ffffff;
$uni-bg-color-grey: #fafafa;
$uni-bg-color-hover: #f1f1f1;
$uni-bg-color-mask: rgba(0, 0, 0, 0.4);

/* Border */
$uni-border-color: #eaeef1;

/* Font Size */
$uni-font-size-sm: 24rpx;
$uni-font-size-base: 28rpx;
$uni-font-size-lg: 32rpx;

/* Border Radius */
$uni-border-radius-sm: 4rpx;
$uni-border-radius-base: 6rpx;
$uni-border-radius-lg: 12rpx;
$uni-border-radius-circle: 50%;

/* Spacing */
$uni-spacing-row-sm: 10rpx;
$uni-spacing-row-base: 20rpx;
$uni-spacing-row-lg: 30rpx;
$uni-spacing-col-sm: 8rpx;
$uni-spacing-col-base: 16rpx;
$uni-spacing-col-lg: 24rpx;
```

---

## Example Usage in DESIGN.md

```markdown
### Primary Button
- Use: `tui-button[type="primary"]`
- Styling: Primary gradient background (#5677fc → #5c8dff), 90rpx height, 45rpx radius
- States: Default, Pressed (#f1f1f1 bg), Disabled (opacity 0.3)

### List Item
- Use: `tui-list-cell`
- Styling: 24rpx padding, bottom border #eaeef1, arrow indicator
- States: Default, Pressed (#f1f1f1 bg), Disabled

### TabBar
- Use: `tui-tabbar`
- Selected color: #5677fc
- Unselected color: #999999
- Height: 100rpx (including safe area)
```
