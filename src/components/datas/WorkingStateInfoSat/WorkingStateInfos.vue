<template>
  <div>
    <WorkingStateHeader :data="this.$store.state.workingStateInfoSat"></WorkingStateHeader>
    <el-divider class="el-divider-table" content-position="left">定向天线</el-divider>
    <DirectionSignalComponent :data="this.$store.state.workingStateDirection"></DirectionSignalComponent>
    <el-divider class="el-divider-table" content-position="left">全向天线</el-divider>
    <AllDirectionSignalComponent :data="this.$store.state.workingStateAllDirection"></AllDirectionSignalComponent>
    <el-divider class="el-divider-table" content-position="left">广播星历告警</el-divider>
    <BroadcastWarn :data="this.$store.state.workingStateInfoSat"></BroadcastWarn>
    <el-divider class="el-divider-table" content-position="left">授时性能监测工作状态</el-divider>
    <TimeMonitor :data="this.$store.state.workingStateInfoSat"></TimeMonitor>
    <el-divider class="el-divider-table" content-position="left">数据库&FTP状态</el-divider>
    <Server :data="this.$store.state.workingStateInfoSat"></Server>
  </div>
</template>

<script>
import WorkingStateHeader from './WorkingStateHeader'
import DirectionSignalComponent from './DirectionSignalComponent'
import AllDirectionSignalComponent from './AllDirectionSignalComponent'
import BroadcastWarn from './BroadcastWarn'
import TimeMonitor from './TimeMonitor'
import Server from './Server'

export default {
  name: 'WorkingStateInfos',
  components: {
    Server,
    TimeMonitor,
    BroadcastWarn,
    WorkingStateHeader,
    DirectionSignalComponent,
    AllDirectionSignalComponent
  }
}
</script>

<style scoped>

</style>
