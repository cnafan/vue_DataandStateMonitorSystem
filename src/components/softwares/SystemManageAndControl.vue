<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="导航卫星信号质量监测结果" name="1">
        <NavSatSignalQuality :fromdatas="NavSatSignalQuality"></NavSatSignalQuality>
        <SignalComponent :fromdatas="SignalComponent"></SignalComponent>
      </el-tab-pane>
      <el-tab-pane label="工作状态信息" name="2">
        <WorkingStateInfo :fromdatas="WorkingStateInfo"></WorkingStateInfo>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NavSatSignalQuality from '../datas/NavSatSignalQuality'
import SignalComponent from '../datas/SignalComponent'
import WorkingStateInfo from '../datas/WorkingStateInfo'

export default {
  props: {
    NavSatSignalQuality: {
      type: Array
    },
    WorkingStateInfo: {
      type: Array
    },
    SignalComponent: {
      type: Array
    }
  },
  name: 'SystemManageAndControl',
  data () {
    return {
      activeName: '1'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    WorkingStateInfo,
    NavSatSignalQuality,
    SignalComponent
  }
}
</script>

<style scoped>

</style>
