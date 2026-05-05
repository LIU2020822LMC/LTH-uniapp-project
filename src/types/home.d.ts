/**
 * 首页-广告区域数据类型
 */
export type BannerItem = {
  hrefUrl: string
  id: number
  imgUrl: string
  type: number
}

/** 首页-前台类目数据类型 */
export type CategoryItem = {
  /** 图标路径 */
  icon: string
  /** id */
  id: string
  /** 分类名称 */
  name: string
}
