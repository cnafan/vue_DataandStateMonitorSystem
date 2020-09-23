<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="BDS3空间信号质量监测" name="BDS3空间信号质量监测结果数据">
        <keep-alive>
          <NavSatSignalQuality></NavSatSignalQuality>
        </keep-alive>
        <keep-alive>
          <SignalComponent></SignalComponent>
        </keep-alive>
      </el-tab-pane>
<!--      <el-tab-pane label="广播星历告警信息" name="广播星历告警信息">-->
<!--        <keep-alive>-->
<!--          <BroadcastEphemerisWarningInfo></BroadcastEphemerisWarningInfo>-->
<!--        </keep-alive>-->
<!--      </el-tab-pane>-->
      <el-tab-pane label="UTC与BDS3卫星时间钟差" name="UTC(NTSC)与BDS3每颗卫星时间的钟差">
        <keep-alive>
          <BDSSatTimeClockDifference></BDSSatTimeClockDifference>
        </keep-alive>
        <keep-alive>
          <BDSClockDifference></BDSClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="BDS3卫星星钟改正数" name="BDS3每颗卫星的星钟改正数">
        <keep-alive>
          <BDSClockCorrection></BDSClockCorrection>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC与BDS3卫星广播北斗钟差" name="UTC(NTSC)与BDS3每颗卫星广播北斗时间的钟差">
        <keep-alive>
          <BDSBroadcastClockDifference></BDSBroadcastClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC与BDT钟差" name="UTC(NTSC)与BDT的钟差">
        <keep-alive>
          <BDTClockDifference></BDTClockDifference>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BDSBroadcastClockDifference from '../datas/BDSBroadcastClockDifference'
import BDSClockCorrection from '../datas/BDSClockCorrection'
import NavSatSignalQuality from '../datas/NavSat/NavSatSignalQuality'
import BDTClockDifference from '../datas/BDTClockDifference'
import SignalComponent from '../datas/NavSat/SignalComponent'
import BDSSatTimeClockDifference from '../datas/BDSSatTimeClockDifference'
import BroadcastEphemerisWarningInfo from '../datas/BroadcastEphemerisWarningInfo'
import BDSClockDifference from '../datas/BDSClockDifference'

export default {
  name: 'SatIntegratedDataManagement',
  data () {
    return {
      activeName: 'BDS3空间信号质量监测结果数据'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  },
  components: {
    BDSClockDifference,
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
