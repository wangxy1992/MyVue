// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mint from "mint-ui"
import "mint-ui/lib/style.css"
//重置样式css
import "./css/reast.css"
import "./css/public_css.css"
//icon样式文件
import "@/css/icon_font/iconfont.css"
import router from './router'
import VueResource from "vue-resource"
//vuex
import store from "@/vuex/publicStore"

Vue.use(Mint)
Vue.use(VueResource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  components: { App },
  template: '<App/>'
})
