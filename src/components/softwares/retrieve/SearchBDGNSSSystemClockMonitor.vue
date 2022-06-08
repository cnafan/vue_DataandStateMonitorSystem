<template>
  <div class="main-page">
    <vs-tabs v-model="activeName" @tab-click="handleClick">
      <vs-tab label="GNSS系统时差数据" name="1">
        <keep-alive>
          <MultipleSearchBar :search-rules="searchRulesGnssSystemClockDifference" :limit="2"
                             target="GnssSystemClockDifference" @callSearch="search($event)"
                             :option="this.$store.state.LabelGnssSystemClockDifference"></MultipleSearchBar>
        </keep-alive>
        <keep-alive>
          <GnssSystemClockDifference :data="GnssSystemClockDifference"></GnssSystemClockDifference>
        </keep-alive>
      </vs-tab>
      <vs-tab label="工作状态" name="2">
        <keep-alive>
          <SearchBar target="WorkingStateInfoBDGNSSSystemClock" @callSearch="search($event)"
                     :option="this.$store.state.LabelWorkingStateInfoBDGNSSSystemClock"></SearchBar>
        </keep-alive>
        <keep-alive>
          <WorkingStateInfoBDGNSSSystemClock
              :data="WorkingStateInfoBDGNSSSystemClock"></WorkingStateInfoBDGNSSSystemClock>
        </keep-alive>
      </vs-tab>
    </vs-tabs>
  </div>
</template>

<script>
import GnssSystemClockDifference from '../../datas/GnssSystemClockDifference'
import WorkingStateInfoBDGNSSSystemClock from '../../datas/WorkingStateInfoBDGNSSSystemClock'
import SearchBar from '../../common/SearchBar'
import MultipleSearchBar from '../../common/MultipleSearchBar'
import tabMixin from '../../../mixins/tabMixin'

export default {
  name: 'SearchBDGNSSSystemClockMonitor',
  mixins: [tabMixin],
  data() {
    return {
      WorkingStateInfoBDGNSSSystemClock: [],
      GnssSystemClockDifference: [],
      searchRulesGnssSystemClockDifference: '1.数据值  2.数据类型+数据产生时间'
    }
  },
  methods: {
    search(argument) {
      let formData
      switch (argument) {
        case 'GnssSystemClockDifference': {
          formData = {}
          let input = this.$store.state.SearchInput.split(' ')
          // console.log(this.$store.state.SearchItem)
          for (let i = 0; i < this.$store.state.SearchItem.length; i++) {
            formData[this.$store.state.SearchItem[i]] = input[i]
          }
          // formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
          this.$post('findGNSSSystemClockDifference', formData, 'GNSS系统时差数据').then((response) => {
            // console.log(response)
            this.GnssSystemClockDifference = response.data
          })
          break
        }
        case 'WorkingStateInfoBDGNSSSystemClock':
          formData = {}
          formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
          this.$post('findGNSSSystemWorkState', formData, 'GNSS工作状态').then((response) => {
            // console.log(response)
            this.WorkingStateInfoBDGNSSSystemClock = response.data
          })
          break
        default:
          break
      }
    }
  },
  components: {
    MultipleSearchBar,
    WorkingStateInfoBDGNSSSystemClock,
    GnssSystemClockDifference,
    SearchBar
  }
}
</script>

<style scoped>

</style>
