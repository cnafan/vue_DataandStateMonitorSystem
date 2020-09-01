// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Backtop,
  Button,
  Carousel,
  CarouselItem, Col,
  Divider,
  Icon,
  Menu,
  MenuItem,
  Notification, Row,
  Submenu,
  Table,
  TableColumn,
  TabPane,
  Tabs,
  Timeline,
  TimelineItem
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Divider)
Vue.use(Backtop)
Vue.use(Submenu)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.prototype.$notify = Notification

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
