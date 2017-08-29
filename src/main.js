// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'

// 基础样式表
import '@/assets/styles/index.sass'

// swiper插件
Vue.use(VueAwesomeSwiper)
// 图片懒加载插件
Vue.use(VueLazyload,{
  loading: require('@/assets/images/default.png')
})
// 解决点击延迟
fastclick.attach(document.body);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted(){
    this.$nextTick(() => {
      this.zoom();
      window.addEventListener('resize',this.zoom);
    })
  },
  methods: {
    zoom(){
      let w = window.innerWidth;
      let body = document.body;
      body.style.zoom = w / 640;
    }
  }
})
