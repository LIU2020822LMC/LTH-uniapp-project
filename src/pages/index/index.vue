<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI } from '@/services/home'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const bannerList = ref<BannerItem[]>([])

// 获取首页轮播图数据
const getHomeBanner = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBanner()
})
</script>

<template>
  <CustomNavbar />
  <LthSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss"></style>
