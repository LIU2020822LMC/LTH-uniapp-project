import { http } from '@/utils/http'

// 首页-广告区域-小程序
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}
