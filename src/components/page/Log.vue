<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="系统信息" name="SystemInfo">
        <keep-alive>
          <SystemInfo></SystemInfo>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="发送信息" name="SendInfo">
        <keep-alive>
          <SendInfo></SendInfo>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="接收信息" name="ReceiveInfo">
        <keep-alive>
          <ReceiveInfo></ReceiveInfo>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import SystemInfo from '../datas/Log/SystemInfo'
import SendInfo from '../datas/Log/SendInfo'
import ReceiveInfo from '../datas/Log/ReceiveInfo'
export default {
  name: 'Log',
  components: {ReceiveInfo, SendInfo, SystemInfo},
  data () {
    return {
      activeName: 'SystemInfo'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>

<style scoped>

</style>
