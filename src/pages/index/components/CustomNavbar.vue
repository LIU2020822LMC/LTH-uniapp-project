<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref<string[]>([])

// 获取首页轮播图数据
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  console.log('首页轮播图数据:', res)
  // bannerList.value = res.result || []
}

onLoad(() => {
  getHomeBanner()
})
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
  padding-bottom: 24rpx;
  box-shadow: 0 4rpx 20rpx rgba(7, 89, 133, 0.15);

  .logo {
    display: flex;
    align-items: center;
    height: 64rpx;
    padding-left: 32rpx;
    padding-top: 12rpx;

    .logo-title {
      font-size: 40rpx;
      color: #fff;
      font-weight: 600;
      letter-spacing: 6rpx;
      font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
      text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.1);
    }

    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 300;
      margin: 4rpx 0 0 24rpx;
      padding-left: 24rpx;
      border-left: 2rpx solid rgba(255, 255, 255, 0.3);
      font-size: 24rpx;
      letter-spacing: 4rpx;
    }
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32rpx;
    height: 76rpx;
    margin: 28rpx 32rpx 0;
    color: #fff;
    font-size: 28rpx;
    border-radius: 38rpx;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(12px);
    border: 1rpx solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:active {
      background-color: rgba(255, 255, 255, 0.3);
      transform: scale(0.98);
    }
  }

  .icon-search {
    display: flex;
    align-items: center;
    &::before {
      margin-right: 16rpx;
      font-size: 32rpx;
      color: #fff;
      opacity: 0.9;
    }
  }

  .icon-scan {
    font-size: 36rpx;
    padding: 12rpx;
    color: #fff;
    opacity: 0.9;
  }
}
</style>
