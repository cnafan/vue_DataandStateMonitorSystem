<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="BDS3空间信号质量监测结果数据" name="1">
        <keep-alive>
          <NavSatSignalQuality></NavSatSignalQuality>
        </keep-alive>
        <keep-alive>
          <SignalComponent></SignalComponent>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="广播星历告警信息" name="2">
        <keep-alive>
          <BroadcastEphemerisWarningInfo></BroadcastEphemerisWarningInfo>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC(NTSC)于BDS3每颗卫星时间的钟差" name="3">
        <keep-alive>
          <BDSSatTimeClockDifference></BDSSatTimeClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="BDS3每颗卫星的星钟改正数" name="4">
        <keep-alive>
          <BDSClockCorrection></BDSClockCorrection>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC(NTSC)于BDS3每颗卫星广播北斗时间的钟差" name="5">
        <keep-alive>
          <BDSBroadcastClockDifference></BDSBroadcastClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC(NTSC)于BDT的钟差" name="6">
        <keep-alive>
          <BDTClockDifference></BDTClockDifference>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BDSBroadcastClockDifference from "../datas/BDSBroadcastClockDifference";
import BDSClockCorrection from "../datas/BDSClockCorrection";
import NavSatSignalQuality from "../datas/NavSatSignalQuality";
import BDTClockDifference from "../datas/BDTClockDifference";
import SignalComponent from "../datas/SignalComponent";
import BDSSatTimeClockDifference from "../datas/BDSSatTimeClockDifference";
import BroadcastEphemerisWarningInfo from "../datas/BroadcastEphemerisWarningInfo";

export default {
  name: "SatIntegraterdDataManagement",
  data() {
    return {
      activeName: '1'
    };
  },
  methods: {
    handleClick(tab, event) {
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
