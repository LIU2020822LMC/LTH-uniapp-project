---
name: "css-stylist"
description: "专门用于编写高质量CSS/SCSS样式代码。当用户要求编写样式、优化UI、调整布局、修改组件外观时调用。"
---

# CSS 样式专家

此 Skill 用于指导 AI 编写规范、可维护、高质量的 CSS/SCSS 样式代码。

## 核心原则

1. **语义化优先** - 类名应描述功能而非外观
2. **可维护性** - 使用变量和混合器避免重复
3. **响应式适配** - 考虑多设备和屏幕尺寸
4. **性能意识** - 避免过度嵌套和复杂选择器

## 命名规范

### BEM 命名法（推荐）
```css
/* 块 */
.card { }

/* 元素 */
.card__title { }
.card__content { }
.card__image { }

/* 修饰符 */
.card--highlighted { }
.card__button--primary { }
```

### 通用命名
```css
/* 组件类 */
.header { }
.footer { }
.sidebar { }
.container { }
.wrapper { }

/* 功能类 */
.text-center { }
.flex-center { }
.mt-20 { }
.hidden { }
```

## 样式组织结构

### 1. 变量定义（Variables）
```scss
// 颜色
$primary-color: #1890ff;
$secondary-color: #52c41a;
$text-color: #333;
$text-secondary: #666;
$border-color: #e8e8e8;
$bg-color: #f5f5f5;

// 间距
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;

// 圆角
$radius-sm: 4px;
$radius-md: 8px;
$radius-lg: 12px;
$radius-full: 9999px;

// 阴影
$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
```

### 2. 混合器（Mixins）
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

@mixin flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@mixin text-ellipsis($lines: 1) {
  @if $lines == 1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  } @else {
    display: -webkit-box;
    -webkit-line-clamp: $lines;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

@mixin card {
  background: #fff;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
  padding: $spacing-md;
}
```

### 3. 组件样式模板
```vue
<style lang="scss">
// ========== 变量 ==========
$component-name: (
  color: #xxx,
  bg-color: #xxx,
);

// ========== 基础样式 ==========
.component {
  // 盒模型
  display: flex;
  flex-direction: column;
  
  // 尺寸
  width: 100%;
  min-height: 100px;
  padding: 16px;
  margin: 8px 0;
  
  // 外观
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  // 文字
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  
  // 状态
  &--active {
    background: #f0f0f0;
  }
  
  &:hover {
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
}

// ========== 子元素 ==========
.component {
  &__header {
    font-weight: bold;
    margin-bottom: 12px;
  }
  
  &__content {
    color: #666;
  }
  
  &__footer {
    margin-top: auto;
    text-align: right;
  }
}
</style>
```

## 常用布局模式

### Flexbox 布局
```scss
// 水平居中
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// 两端对齐
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// 垂直居中容器
.flex-col-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

// 自动换行
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
```

### Grid 布局
```scss
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
```

## 响应式断点

```scss
// 移动端优先
$breakpoints: (
  'sm': 576px,
  'md': 768px,
  'lg': 992px,
  'xl': 1200px,
  'xxl': 1400px
);

@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}

// 使用示例
.container {
  padding: 16px;
  
  @include respond-to('md') {
    padding: 24px;
    max-width: 720px;
  }
  
  @include respond-to('lg') {
    padding: 32px;
    max-width: 960px;
  }
}
```

## 小程序特有规范

### 单位选择
- **rpx**：推荐用于宽度、高度、间距（自动适配不同屏幕）
- **px**：谨慎使用，仅用于极细的边框（1px）
- **vh/vw**：慎用，小程序支持有限

### 安全区域适配
```scss
.safe-area-bottom {
  padding-bottom: constant(safe-area-inset-bottom); // 兼容iOS < 11.2
  padding-bottom: env(safe-area-inset-bottom);    // 兼容iOS >= 11.2
}

// 或使用 calc
.safe-area-bottom {
  padding-bottom: calc(16px + constant(safe-area-inset-bottom));
  padding-bottom: calc(16px + env(safe-area-inset-bottom));
}
```

### 海洋蓝主题色值
```scss
$ocean-blue: (
  50: #f0f9ff,
  100: #e0f2fe,
  200: #bae6fd,
  300: #7dd3fc,
  400: #38bdf8,
  500: #0ea5e9,
  600: #0284c7,
  700: #0369a1,
  800: #075985,
  900: #0c4a6e,
);
```

## 动画与过渡

```scss
@mixin transition($props: all, $duration: 0.3s, $ease: ease) {
  transition: $props $duration $ease;
}

// 使用
.btn {
  @include transition(transform, 0.2s);
  
  &:hover {
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.98);
  }
}

// 淡入淡出
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}
```

## 代码质量检查清单

- [ ] 使用语义化类名
- [ ] 颜色、间距使用变量
- [ ] 避免深度嵌套（不超过3层）
- [ ] 样式已考虑响应式
- [ ] 动画有合适的时长（0.2s-0.5s）
- [ ] 考虑了暗色模式（如需要）
- [ ] 无重复样式代码

## 调用场景

当用户要求以下内容时，请参考此 Skill：
- "写一下这个组件的样式"
- "帮我优化一下UI"
- "调整一下布局"
- "换个颜色主题"
- "添加动画效果"
- "改成响应式"
