import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

// 添加拦截器
const httpInterceptor = {
  // 拦截前触发
  // // invoke：Uniapp拦截器的固定钩子，意思是「请求发起前触发」
  invoke(options: UniApp.RequestOptions) {
    // 1. 非http开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    // 2.请求超时
    options.timeout = 10000
    // 3.添加小程序请求头标识，告诉服务器“这个请求来自小程序”
    options.header = {
      ...options.header, // 保留原来的请求头（避免覆盖自定义头）
      'source-client': 'miniapp',
    }
    // 4.添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
    // console.log(options)
  },
}
// 拦截所有uni.request()发起的普通接口请求；
uni.addInterceptor('request', httpInterceptor)
// 拦截所有uni.uploadFile()发起的文件上传请求；
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}

// 请求函数
export const http = <T>(options: UniApp.RequestOptions) => {
  // 1.返回Promise对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 2.请求成功
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 提起核心数据 res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401 || res.statusCode === 404) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      // 请求成功
      fail: (err) => {
        uni.showToast({
          icon: 'none',
          title: '网络错误,换个网络试试',
        })
        reject(err)
      },
    })
  })
}

console.log()
