<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="GNSS系统时差数据" name="1">
        <GnssSystemClockDifference :fromdatas="GnssSystemClockDifference"></GnssSystemClockDifference>
      </el-tab-pane>
      <el-tab-pane label="工作状态" name="2">
        <WorkingStateInfoBDGNSSSystemClock :fromdatas="WorkingStateInfoBDGNSSSystemClock"></WorkingStateInfoBDGNSSSystemClock>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import GnssSystemClockDifference from '../datas/GnssSystemClockDifference'
import WorkingStateInfoBDGNSSSystemClock from '../datas/WorkingStateInfoBDGNSSSystemClock'

export default {
  name: 'BDGNSSSystemClockMonitor',
  props: {
    GnssSystemClockDifference: {
      type: Array
    },
    WorkingStateInfoBDGNSSSystemClock: {
      type: Array
    }
  },
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
    WorkingStateInfoBDGNSSSystemClock,
    GnssSystemClockDifference
  }
}
</script>

<style scoped>

</style>
