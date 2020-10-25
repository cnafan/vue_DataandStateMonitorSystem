<template>
  <div>
    <iframe
      :src=getMonitorServerAddress
      scrolling="no" frameborder="0"
      style="position:absolute;">
      IE：你们都看我干吗，我现在也是支持的
    </iframe>
  </div>
</template>

<script>
import store from '../../vuex/store'

export default {
  name: 'Monitor',
  mounted () {
    /**
     * iframe-宽高自适应显示
     */
    function changeMobsfIframe () {
      const mobsf = document.getElementById('mobsf')
      // const deviceWidth = document.body.clientWidth
      // const deviceHeight = document.body.clientHeight
      mobsf.style.width = '100%' // 数字是页面布局宽度差值
      mobsf.style.height = '100%' // 数字是页面布局高度差
    }

    changeMobsfIframe()

    window.onresize = function () {
      changeMobsfIframe()
    }
  },
  computed: {
    getMonitorServerAddress: function () {
      return 'http://' + store.state.NetConfig.MonitorServerIp + ':3000/d/6BciddtMk/server?orgId=1&var-group=windows&var-host=' + store.state.NetConfig.MonitorClientIp + '&var-netif=All&kiosk'
    }
  }
}
</script>

<style scoped>

</style>
