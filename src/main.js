// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import '../static/theme/primary_index.css'
import 'vuesax/dist/vuesax.css'
import 'default-passive-events'
import ElementUI from 'element-ui'
import 'material-icons/iconfont/material-icons.css'
import '../static/css/fontello-embedded.css'
import {fetch, post, postStandard} from './utils/axios'
import Vuesax from 'vuesax'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
import { PieChart, GaugeChart,LineChart} from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  GraphicComponent,
  ToolboxComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
  GraphicComponent,
  ToolboxComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  PieChart,
  LineChart,
  GaugeChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);
Vue.use(Vuesax)
// Vue.use(dataV)
Vue.use(ElementUI)
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$notify = Notification
// Vue.prototype.$message = Message
Vue.prototype.$echarts = echarts
Vue.prototype.$post = post
Vue.prototype.$postStandard = postStandard
Vue.prototype.$get = fetch
Vue.config.productionTip = false
Vue.config.performance = true
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
