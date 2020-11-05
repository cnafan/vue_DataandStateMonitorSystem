<template>
  <div id="monitor-div">
    <iframe
      id="iframe-monitor"
      :src=getMonitorServerAddress
      scrolling="no"
      frameborder="0"
      style="position:absolute;height: calc(100% - 60px)">
      IE：你们都看我干吗，我现在也是支持的
    </iframe>
  </div>
</template>

<script>
import store from '../../vuex/store'

export default {
  name: 'Monitor',
  mounted () {
    this.changeMobsfIframe()
    window.onresize = function () {
      this.changeMobsfIframe()
    }
  },
  watch: {
    changeNavMenu: function () {
      console.log('观测到导航烂变换')
      this.changeMobsfIframe()
    },
    netConfigChange: function () {
      // return store.state.NetConfig
      this.changeMobsfIframe()
    }
  },
  computed: {
    changeNavMenu: function () {
      return store.state.menuWidth
    },
    getMonitorServerAddress: function () {
      return 'http://' + store.state.NetConfig.MonitorServerIp + ':3000?kiosk'
      // return 'http://' + store.state.NetConfig.MonitorServerIp + '/zabbix'
    }
  },
  methods: {
    /**
     * iframe-宽高自适应显示
     */
    changeMobsfIframe () {
      // const nav = document.getElementById('el-scrollbar-menu')
      const iframe = document.getElementById('iframe-monitor')
      // console.log(iframe)
      // const deviceWidth = document.body.clientWidth
      // const deviceHeight = document.body.clientHeight
      // const deviceHeight = document.body.clientHeight
      if (iframe != null) {
        // iframe.style.width = deviceWidth - store.state.menuWidth - 30 + 'px'
        iframe.style.width = '83%'
        // console.log(deviceWidth, store.state.menuWidth, iframe.style.width)
        // iframe.style.height = '90%' // 数字是页面布局高度差
      }
    }
  }
}
</script>

<style scoped>

</style>
