<template>
  <div id="app">
    <!--  ffd04b  409EFF-->
    <el-menu
      class="el-menu-demo" mode="horizontal"
      :default-active="$route.path"
      text-color="#303133"
      active-text-color="#E6A23C"
      @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">空间信号质量监测评估</template>
        <el-menu-item index="SystemManageAndControl">系统管理控制软件</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">北斗/GNSS系统时间监测评估</template>
        <el-menu-item index="bdgnsssystemclock">GNSS（Galileo）时差数据综合处理软件</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">中科院在轨卫星地面数据支持</template>
        <el-menu-item index="satintegrated">卫星综合管理软件</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">高精度转发式卫星授时</template>
        <el-menu-item index="AtomicClockSignal">原子钟信号监测与自主切换软件</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">VLBI观测导航卫星及UT1测量</template>
        <el-menu-item index="VLBI">VLBI站控软件</el-menu-item>
      </el-submenu>

      <el-menu-item index="log">日志中心</el-menu-item>

      <!--    <el-menu-item index="6"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
      <!--      <el-submenu index="7">-->
      <!--        <template slot="title">我的工作台</template>-->
      <!--        <el-menu-item index="7-1">选项1</el-menu-item>-->
      <!--        <el-menu-item index="7-2">选项2</el-menu-item>-->
      <!--        <el-menu-item index="7-3">选项3</el-menu-item>-->
      <!--        <el-submenu index="7-4">-->
      <!--          <template slot="title">选项4</template>-->
      <!--          <el-menu-item index="7-4-1">选项1</el-menu-item>-->
      <!--          <el-menu-item index="7-4-2">选项2</el-menu-item>-->
      <!--          <el-menu-item index="7-4-3">选项3</el-menu-item>-->
      <!--        </el-submenu>-->
      <!--      </el-submenu>-->
    </el-menu>
    <!--    <router-view id="content-pane"></router-view>-->

    <keep-alive>
      <SystemManageAndControl v-show="SystemManageAndControlVisible"></SystemManageAndControl>
    </keep-alive>
    <keep-alive>
      <BDGNSSSystemClockMonitor v-show="BDGNSSSystemClockMonitorVisible"></BDGNSSSystemClockMonitor>
    </keep-alive>
    <keep-alive>
      <SatIntegraterdDataManagement v-show="SatIntegraterdDataManagementVisible"></SatIntegraterdDataManagement>
    </keep-alive>
    <keep-alive>
      <AtomicClockSignal v-show="AtomicClockSignalVisible"></AtomicClockSignal>
    </keep-alive>
    <keep-alive>
      <VLBI v-show="VLBIVisible"></VLBI>
    </keep-alive>
    <keep-alive>
      <Logger v-show="LoggerVisible"></Logger>
    </keep-alive>
  </div>
</template>

<script>

import AtomicClockSignal from "./softwares/AtomicClockSignal";
import BDGNSSSystemClockMonitor from "./softwares/BDGNSSSystemClockMonitor";
import SatIntegraterdDataManagement from "./softwares/SatIntegraterdDataManagement";
import SystemManageAndControl from "./softwares/SystemManageAndControl";
import VLBI from "./softwares/VLBI";
import Logger from "./Logger";

export default {
  name: "Navigation",
  components: {
    Logger,
    VLBI,
    SystemManageAndControl,
    SatIntegraterdDataManagement, BDGNSSSystemClockMonitor, AtomicClockSignal
  },
  data() {
    return {
      activeIndex: '1',
      AtomicClockSignalVisible: false,
      BDGNSSSystemClockMonitorVisible: false,
      SatIntegraterdDataManagementVisible: false,
      SystemManageAndControlVisible: false,
      VLBIVisible: false,
      LoggerVisible: false,
    };
  },
  created() {
    // mqClient.initMQ();
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "SystemManageAndControl":
          this.SystemManageAndControlVisible = true;
          this.BDGNSSSystemClockMonitorVisible = false;
          this.SatIntegraterdDataManagementVisible = false;
          this.AtomicClockSignalVisible = false;
          this.VLBIVisible = false;
          this.LoggerVisible = false;
          break;
        case "bdgnsssystemclock":
          this.SystemManageAndControlVisible = false;
          this.BDGNSSSystemClockMonitorVisible = true;
          this.SatIntegraterdDataManagementVisible = false;
          this.AtomicClockSignalVisible = false;
          this.VLBIVisible = false;
          this.LoggerVisible = false;
          break;
        case "satintegrated":
          this.SystemManageAndControlVisible = false;
          this.BDGNSSSystemClockMonitorVisible = false;
          this.SatIntegraterdDataManagementVisible = true;
          this.AtomicClockSignalVisible = false;
          this.VLBIVisible = false;
          this.LoggerVisible = false;
          break;
        case "AtomicClockSignal":
          this.SystemManageAndControlVisible = false;
          this.BDGNSSSystemClockMonitorVisible = false;
          this.SatIntegraterdDataManagementVisible = false;
          this.AtomicClockSignalVisible = true;
          this.VLBIVisible = false;
          this.LoggerVisible = false;
          break;
        case "VLBI":
          this.SystemManageAndControlVisible = false;
          this.BDGNSSSystemClockMonitorVisible = false;
          this.SatIntegraterdDataManagementVisible = false;
          this.AtomicClockSignalVisible = false;
          this.VLBIVisible = true;
          this.LoggerVisible = false;
          break;
        case "log":
          this.SystemManageAndControlVisible = false;
          this.BDGNSSSystemClockMonitorVisible = false;
          this.SatIntegraterdDataManagementVisible = false;
          this.AtomicClockSignalVisible = false;
          this.VLBIVisible = false;
          this.LoggerVisible = true;
          break;
        default:
          this.SystemManageAndControlVisible = false;
          this.BDGNSSSystemClockMonitorVisible = false;
          this.SatIntegraterdDataManagementVisible = false;
          this.AtomicClockSignalVisible = false;
          this.VLBIVisible = false;
          this.LoggerVisible = false;
          break;
      }

    }
  }
}
</script>


<style scoped>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#content-pane {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
}
</style>
