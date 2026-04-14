<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log('安全区域边距:', safeAreaInsets)
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png"></image>
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>

<style lang="scss">
/* 自定义导航条 */
.navbar {
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 20rpx;
  border-bottom: 1rpx solid #f0f0f0;

  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    padding-top: 10rpx;

    .logo-image {
      width: 166rpx;
      height: 39rpx;
      // 使用灰色滤镜让彩色logo变成黑白风格，更显高级
      filter: grayscale(100%) contrast(150%);
    }

    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #000;
      font-weight: 300;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #000;
      font-size: 24rpx;
      letter-spacing: 2rpx;
    }
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30rpx;
    height: 72rpx;
    margin: 24rpx 30rpx 10rpx;
    color: #999;
    font-size: 26rpx;
    border-radius: 8rpx;
    background-color: #f7f7f7;
    transition: all 0.3s;

    &:active {
      background-color: #efefef;
    }
  }

  .icon-search {
    &::before {
      margin-right: 14rpx;
      font-weight: bold;
      color: #333;
    }
  }

  .icon-scan {
    font-size: 32rpx;
    padding: 10rpx;
    color: #333;
  }
}
</style>
