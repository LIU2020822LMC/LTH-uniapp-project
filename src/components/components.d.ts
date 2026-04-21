import LthSwiper from './LthSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    LthSwiper: typeof LthSwiper
  }
}
