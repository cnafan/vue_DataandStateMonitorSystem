<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="导航卫星信号质量监测结果" name="导航卫星信号质量监测结果">
        <keep-alive>
          <NavSatSignalQuality :data="this.$store.state.NavSatSignalQuality"></NavSatSignalQuality>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <SignalComponent :data="this.$store.state.SignalComponent[0]"></SignalComponent>
        </keep-alive>
        <br/><br/>
        <keep-alive>
          <NavSatSignalQualityAllDirection :data="this.$store.state.NavSatSignalQualityAllDirection"></NavSatSignalQualityAllDirection>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <SatComponent :data="this.$store.state.SatComponent"></SatComponent>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <FrequencyComponent :data="this.$store.state.FrequencyComponent"></FrequencyComponent>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <SignalComponentAllDirection :data="this.$store.state.SignalComponentAllDirection[0]"></SignalComponentAllDirection>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="工作状态信息" name="工作状态信息">
        <WorkingStateInfo></WorkingStateInfo>
      </el-tab-pane>
      <el-tab-pane label="导航卫星异常监测结果" name="导航卫星异常监测结果">
        <NavSatIrregularMonitor :data="this.$store.state.NavSatIrregularMonitor"></NavSatIrregularMonitor>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NavSatSignalQuality from '../../datas/NavSat/NavSatSignalQuality'
import SignalComponent from '../../datas/NavSat/SignalComponent'
import WorkingStateInfo from '../../datas/WorkingStateInfo'
import NavSatIrregularMonitor from '../../datas/NavSatIrregularMonitor'
import NavSatSignalQualityAllDirection from '../../datas/NavSatAllDirection/NavSatSignalQualityAllDirection'
import SatComponent from '../../datas/NavSatAllDirection/SatComponent'
import FrequencyComponent from '../../datas/NavSatAllDirection/FrequencyComponent'
import SignalComponentAllDirection from '../../datas/NavSatAllDirection/SignalComponentAllDirection'

export default {
  name: 'SystemManageAndControl',
  data () {
    return {
      activeName: '导航卫星信号质量监测结果'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  },
  components: {
    SignalComponentAllDirection,
    FrequencyComponent,
    SatComponent,
    NavSatSignalQualityAllDirection,
    NavSatIrregularMonitor,
    WorkingStateInfo,
    NavSatSignalQuality,
    SignalComponent
  }
}
</script>

<style scoped>

</style>
