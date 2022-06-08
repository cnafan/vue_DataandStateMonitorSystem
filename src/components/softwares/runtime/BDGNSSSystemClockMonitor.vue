<template>
  <div class="main-page">
    <vs-tabs v-model="activeName" @tab-click="handleClick">
      <vs-tab label="GNSS系统时差数据" name="1">
        <GnssSystemClockDifference :data="this.$store.state.GnssSystemClockDifference"></GnssSystemClockDifference>
      </vs-tab>
      <vs-tab label="工作状态" name="2">
        <WorkingStateInfoBDGNSSSystemClock :data="this.$store.state.WorkingStateInfoBDGNSSSystemClock"></WorkingStateInfoBDGNSSSystemClock>
      </vs-tab>
    </vs-tabs>
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
