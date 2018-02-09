import '@/assets/js/hotcss.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {
  numberConvert
} from '@/assets/js/filter'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper /* { default global options } */)

Vue.config.productionTip = false

Vue.filter('numberConvert', numberConvert)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
