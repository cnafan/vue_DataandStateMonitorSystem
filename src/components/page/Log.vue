<template>
  <div class="main-page">
    <vs-tabs position="top" @click-tag="handleClick">
      <vs-tab label="系统信息" name="1">
        <SystemInfo></SystemInfo>
      </vs-tab>
      <vs-tab label="接收信息" name="2">
        <ReceiveInfo></ReceiveInfo>
      </vs-tab>
      <vs-tab label="发送信息" name="3">
        <SendInfo></SendInfo>
      </vs-tab>
    </vs-tabs>
    <!--    <vs-tabs v-model="activeName" @tab-click="handleClick">-->
    <!--      <vs-tab label="系统信息" name="SystemInfo">-->
    <!--        <keep-alive>-->
    <!--          <SystemInfo></SystemInfo>-->
    <!--        </keep-alive>-->
    <!--      </vs-tab>-->
    <!--      <vs-tab label="发送信息" name="SendInfo">-->
    <!--        <keep-alive>-->
    <!--          <SendInfo></SendInfo>-->
    <!--        </keep-alive>-->
    <!--      </vs-tab>-->
    <!--      <vs-tab label="接收信息" name="ReceiveInfo">-->
    <!--        <keep-alive>-->
    <!--          <ReceiveInfo></ReceiveInfo>-->
    <!--        </keep-alive>-->
    <!--      </vs-tab>-->
    <!--    </vs-tabs>-->
  </div>
</template>

<script>
import SystemInfo from '../datas/Log/SystemInfo'
import SendInfo from '../datas/Log/SendInfo'
import ReceiveInfo from '../datas/Log/ReceiveInfo'
import storageUtils from '../../utils/storageUtils'

export default {
  name: 'Log',
  components: {ReceiveInfo, SendInfo, SystemInfo},
  data () {
    return {
      activeName: storageUtils.getTabActive('Log')
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log('log', tab, event)
      console.log('log', tab.name)
      storageUtils.saveTabActive('Log', tab.name)
    }
  }
}
</script>

<style scoped>

</style>
