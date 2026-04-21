<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
console.log('安全区域边距:', safeAreaInsets)
</script>

<template>
  <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <!-- logo文字 -->
    <view class="logo">
      <text class="logo-title">澜庭汇</text>
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
  background-image: linear-gradient(135deg, #075985 0%, #0ea5e9 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 20rpx;

  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 30rpx;
    padding-top: 10rpx;

    .logo-title {
      font-size: 38rpx;
      color: #fff;
      font-weight: 600;
      letter-spacing: 4rpx;
      font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
    }

    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      font-weight: 300;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid rgba(255, 255, 255, 0.5);
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
    color: #e0f2fe;
    font-size: 26rpx;
    border-radius: 12rpx;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    transition: all 0.3s;

    &:active {
      background-color: rgba(255, 255, 255, 0.25);
    }
  }

  .icon-search {
    &::before {
      margin-right: 14rpx;
      font-weight: bold;
      color: #fff;
    }
  }

  .icon-scan {
    font-size: 32rpx;
    padding: 10rpx;
    color: #fff;
  }
}
</style>
