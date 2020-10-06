// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './vuex/store'
import 'element-ui/lib/theme-chalk/index.css'
import ECharts from 'vue-echarts'
import 'echarts-gl'
import '../static/css/fontello-embedded.css'
// import axios from 'axios'
//
// axios.defaults.baseURL = 'http://localhost:8082/'
// axios.defaults.timeout = 10000
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// Vue.prototype.$axios = axios
import {fetch, post} from './utils/axios'

Vue.prototype.$post = post
Vue.prototype.$get = fetch
Vue.component('v-chart', ECharts)
Vue.config.productionTip = false

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
