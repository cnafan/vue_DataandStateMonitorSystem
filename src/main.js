// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
//自动扫描里面的路由配置
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Navigation from "./components/Navigation";
import VueRouter from "vue-router";
import mqtt from "./utils/mqUtils"
import loggerUtils from "./utils/loggerUtils";

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
// import rabbitmqUtils from "./utils/rabbitmqUtils";


Vue.prototype.$mqtt = mqtt;
Vue.prototype.resetSetItem = function (key, newVal) {

  // 创建一个StorageEvent事件
  var newStorageEvent = document.createEvent('StorageEvent');
  const storage = {
    setItem: function (k, val) {
      loggerUtils.saveLog(k, val);

      // 初始化创建的事件
      newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

      // 派发对象
      window.dispatchEvent(newStorageEvent)
    }
  }

  return storage.setItem(key, newVal);

}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //路由配置
  router,
  render: h => h(Navigation),
  // components: { App },
  // template: '<App/>'
})
