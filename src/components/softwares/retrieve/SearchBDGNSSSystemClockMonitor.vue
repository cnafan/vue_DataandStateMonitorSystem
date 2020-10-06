<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="GNSS系统时差数据" name="GNSS系统时差数据">
        <keep-alive>
          <SearchBar target="GnssSystemClockDifference" @callSearch="search($event)"
                     :option="this.$store.state.LabelGnssSystemClockDifference"></SearchBar>
        </keep-alive>
        <keep-alive>
          <GnssSystemClockDifference :data="GnssSystemClockDifference"></GnssSystemClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="工作状态" name="工作状态">
        <keep-alive>
          <SearchBar target="WorkingStateInfoBDGNSSSystemClock" @callSearch="search($event)"
                     :option="this.$store.state.LabelWorkingStateInfoBDGNSSSystemClock"></SearchBar>
        </keep-alive>
        <keep-alive>
          <WorkingStateInfoBDGNSSSystemClock
            :data="WorkingStateInfoBDGNSSSystemClock"></WorkingStateInfoBDGNSSSystemClock>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GnssSystemClockDifference from '../../datas/GnssSystemClockDifference'
import WorkingStateInfoBDGNSSSystemClock from '../../datas/WorkingStateInfoBDGNSSSystemClock'
import SearchBar from '../../common/SearchBar'

export default {
  name: 'BDGNSSSystemClockMonitor',
  data () {
    return {
      activeName: 'GNSS系统时差数据',
      WorkingStateInfoBDGNSSSystemClock: [],
      GnssSystemClockDifference: []
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    search (argument) {
      let formData
      switch (argument) {
        case 'GnssSystemClockDifference':
          formData = {
            'time': '',
            'name': ''
          }
          // formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
          this.$post('findGNSSSystemClockDifference', formData).then((response) => {
            console.log(response)
            this.GnssSystemClockDifference = response
          })
          break
        case 'WorkingStateInfoBDGNSSSystemClock':
          formData = {}
          formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
          this.$post('findGNSSSystemWorkState', formData).then((response) => {
            console.log(response)
            this.WorkingStateInfoBDGNSSSystemClock = response
          })
          break
        default:
          break
      }
    }
  },
  components: {
    WorkingStateInfoBDGNSSSystemClock,
    GnssSystemClockDifference,
    SearchBar
  }
}
</script>

<style scoped>

</style>
