<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="GNSS系统时差数据" name="GNSS系统时差数据">
        <GnssSystemClockDifference></GnssSystemClockDifference>
      </el-tab-pane>
      <el-tab-pane label="工作状态" name="工作状态">
        <WorkingStateInfoBDGNSSSystemClock></WorkingStateInfoBDGNSSSystemClock>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GnssSystemClockDifference from '../datas/GnssSystemClockDifference'
import WorkingStateInfoBDGNSSSystemClock from '../datas/WorkingStateInfoBDGNSSSystemClock'

export default {
  name: 'BDGNSSSystemClockMonitor',
  data () {
    return {
      activeName: 'GNSS系统时差数据'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  },
  components: {
    WorkingStateInfoBDGNSSSystemClock,
    GnssSystemClockDifference
  }
}
</script>

<style scoped>

</style>
