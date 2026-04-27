<script setup lang="ts">
//
</script>

<template>
  <view class="category">
    <navigator
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
      v-for="item in 10"
      :key="item"
    >
      <image
        class="icon"
        src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_1.png"
      ></image>
      <text class="text">居家</text>
    </navigator>
  </view>
</template>

<style lang="scss">
// ========== 变量 ==========
$category-bg: #ffffff;
$category-text-color: #666666;
$category-active-bg: #f0f9ff;
$category-shadow: 0 8rpx 24rpx rgba(15, 23, 42, 0.06);

$category-mt: 20rpx;
$category-py: 12rpx;
$item-width: 150rpx;
$item-py: 14rpx;
$icon-size: 100rpx;
$text-size: 26rpx;
$radius-md: 16rpx;
$radius-lg: 24rpx;
$transition-duration: 0.2s;

// ========== 混合器 ==========
@mixin flex-col-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@mixin smooth-transition($props: all) {
  transition: $props $transition-duration ease;
}

/* 前台类目 */
.category {
  margin-top: $category-mt;
  padding: $category-py 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;
  background: $category-bg;
  border-radius: $radius-lg;
  box-shadow: $category-shadow;

  .category-item {
    width: $item-width;
    @include flex-col-center;
    padding: $item-py 0;
    box-sizing: border-box;
    border-radius: $radius-md;
    @include smooth-transition(transform);
    @include smooth-transition(background-color);

    &:active {
      transform: scale(0.96);
      background-color: $category-active-bg;
    }

    .icon {
      width: $icon-size;
      height: $icon-size;
    }

    .text {
      margin-top: 10rpx;
      font-size: $text-size;
      color: $category-text-color;
      line-height: 1.2;
    }
  }
}
</style>
