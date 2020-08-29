<template>
  <div>
    <Navigation></Navigation>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="系统管理控制软件" name="first">
        <NavSatSignalQuality></NavSatSignalQuality>
        <WorkingStateInfoBDGNSSSystemClock></WorkingStateInfoBDGNSSSystemClock>
      </el-tab-pane>
      <el-tab-pane label="GNSS（Galileo）时差数据综合处理软件" name="second">
        <BDSBroadcastClockDifference></BDSBroadcastClockDifference>
      </el-tab-pane>
      <el-tab-pane label="定向天线导航卫星信号质量监测结果" name="third">
        <SignalComponent></SignalComponent>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">
        <VLBIWorkState></VLBIWorkState>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import WorkingStateInfoBDGNSSSystemClock from "../components/datas/WorkingStateInfoBDGNSSSystemClock";
import NavSatSignalQuality from "../components/datas/NavSatSignalQuality"
import BDSBroadcastClockDifference from "../components/datas/BDSBroadcastClockDifference";
import SignalComponent from "../components/datas/SignalComponent";
import VLBIWorkState from "../components/datas/VLBIWorkState";
import Navigation from "../components/Navigation";

export default {
  name: "main",
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components: {
    Navigation,
    VLBIWorkState,
    SignalComponent, WorkingStateInfoBDGNSSSystemClock, NavSatSignalQuality, BDSBroadcastClockDifference
  }
}
</script>

<style scoped>

</style>
