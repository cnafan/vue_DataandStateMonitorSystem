// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import {
//   Aside,
//   Backtop,
//   Button,
//   Card,
//   Carousel,
//   CarouselItem,
//   CascaderPanel,
//   Col,
//   Container,
//   Dialog,
//   Divider,
//   Header,
//   Icon,
//   Main,
//   Menu,
//   MenuItem,
//   Notification,
//   Row,
//   Scrollbar,
//   Submenu,
//   Table,
//   TableColumn,
//   TabPane,
//   Tabs,
//   Timeline,
//   TimelineItem
// } from 'element-ui'

Vue.config.productionTip = false
// Vue.use(ElementUI)
// Vue.use(Dialog)
// Vue.use(Card)
// Vue.use(Scrollbar)
// Vue.use(Aside)
// Vue.use(Container)
// Vue.use(Main)
// Vue.use(Row)
// Vue.use(Col)
// Vue.use(Button)
// Vue.use(Icon)
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Menu)
// Vue.use(MenuItem)
// Vue.use(Tabs)
// Vue.use(TabPane)
// Vue.use(Timeline)
// Vue.use(TimelineItem)
// Vue.use(Divider)
// Vue.use(Backtop)
// Vue.use(Submenu)
// Vue.use(Carousel)
// Vue.use(CarouselItem)
// Vue.use(Header)
// Vue.use(CascaderPanel)
// Vue.prototype.$notify = Notification
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
