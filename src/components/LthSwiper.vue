<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

const activeIndex = ref(0)

// 当轮播图滑动时更新激活索引
const onChange: UniHelper.SwiperOnChange = (ev) => {
  // 感叹号是非空断言
  activeIndex.value = ev.detail!.current
}

const props = defineProps<{
  list: BannerItem[]
}>()
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="true" :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
:host {
  display: block;
  height: 280rpx;
  margin: 20rpx 30rpx;
}
/* 轮播图 */
.carousel {
  height: 100%;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #f7f7f7;
  border-radius: 24rpx;
  box-shadow: 0 12rpx 30rpx rgba(0, 0, 0, 0.08);

  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 20rpx;
    display: flex;
    justify-content: center;

    .dot {
      width: 12rpx;
      height: 12rpx;
      margin: 0 8rpx;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.6);
      transition: all 0.3s ease;
    }

    .active {
      width: 36rpx;
      border-radius: 6rpx;
      background-image: linear-gradient(to right, #075985, #0ea5e9);
      box-shadow: 0 4rpx 10rpx rgba(7, 89, 133, 0.3);
    }
  }

  .navigator,
  .image {
    width: 100%;
    height: 100%;
    border-radius: 24rpx;
  }
}
</style>
