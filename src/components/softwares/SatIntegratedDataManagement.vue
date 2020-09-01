<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="BDS3空间信号质量监测结果数据" name="BDS3空间信号质量监测结果数据">
        <keep-alive>
          <NavSatSignalQuality :fromdatas="NavSatSignalQuality"></NavSatSignalQuality>
        </keep-alive>
        <keep-alive>
          <SignalComponent :fromdatas="SignalComponent"></SignalComponent>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="广播星历告警信息" name="广播星历告警信息">
        <keep-alive>
          <BroadcastEphemerisWarningInfo :fromdatas="BroadcastEphemerisWarningInfo"></BroadcastEphemerisWarningInfo>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC(NTSC)于BDS3每颗卫星时间的钟差" name="UTC(NTSC)于BDS3每颗卫星时间的钟差">
        <keep-alive>
          <BDSSatTimeClockDifference :fromdatas="BDSSatTimeClockDifference"></BDSSatTimeClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="BDS3每颗卫星的星钟改正数" name="BDS3每颗卫星的星钟改正数">
        <keep-alive>
          <BDSClockCorrection :fromdatas="BDSClockCorrection"></BDSClockCorrection>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC(NTSC)于BDS3每颗卫星广播北斗时间的钟差" name="UTC(NTSC)于BDS3每颗卫星广播北斗时间的钟差">
        <keep-alive>
          <BDSBroadcastClockDifference :fromdatas="BDSBroadcastClockDifference"></BDSBroadcastClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC(NTSC)于BDT的钟差" name="UTC(NTSC)于BDT的钟差">
        <keep-alive>
          <BDTClockDifference :fromdatas="BDTClockDifference"></BDTClockDifference>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BDSBroadcastClockDifference from '../datas/BDSBroadcastClockDifference'
import BDSClockCorrection from '../datas/BDSClockCorrection'
import NavSatSignalQuality from '../datas/NavSatSignalQuality'
import BDTClockDifference from '../datas/BDTClockDifference'
import SignalComponent from '../datas/SignalComponent'
import BDSSatTimeClockDifference from '../datas/BDSSatTimeClockDifference'
import BroadcastEphemerisWarningInfo from '../datas/BroadcastEphemerisWarningInfo'

export default {
  name: 'SatIntegratedDataManagement',
  props: {
    BDSBroadcastClockDifference: {
      type: Array
    },
    BDSClockCorrection: {
      type: Array
    },
    NavSatSignalQuality: {
      type: Array
    },
    BDTClockDifference: {
      type: Array
    },
    SignalComponent: {
      type: Array
    },
    BDSSatTimeClockDifference: {
      type: Array
    },
    BroadcastEphemerisWarningInfo: {
      type: Array
    }
  },
  data () {
    return {
      activeName: 'BDS3空间信号质量监测结果数据'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    BroadcastEphemerisWarningInfo,
    BDSSatTimeClockDifference,
    SignalComponent,
    NavSatSignalQuality,
    BDTClockDifference,
    BDSClockCorrection,
    BDSBroadcastClockDifference
  }
}
</script>

<style scoped>

</style>
