<template>
  <div class="main-page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="GNSS系统时差数据" name="1">
        <GnssSystemClockDifference :data="this.$store.state.GnssSystemClockDifference"></GnssSystemClockDifference>
      </el-tab-pane>
      <el-tab-pane label="工作状态" name="2">
        <WorkingStateInfoBDGNSSSystemClock :data="this.$store.state.WorkingStateInfoBDGNSSSystemClock"></WorkingStateInfoBDGNSSSystemClock>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GnssSystemClockDifference from '../../datas/GnssSystemClockDifference'
import WorkingStateInfoBDGNSSSystemClock from '../../datas/WorkingStateInfoBDGNSSSystemClock'
import tabMixin from '../../../mixins/tabMixin'

export default {
  name: 'BDGNSSSystemClockMonitor',
  mixins: [tabMixin],
  components: {
    WorkingStateInfoBDGNSSSystemClock,
    GnssSystemClockDifference
  }
}
</script>

<style scoped>

</style>
