<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差数据" name="CAPST-UTC（NTSC）溯源时差数据">
        <keep-alive>
          <SearchBar target="NTSCTimeDifferenceData" @callSearch="search($event)"
                     :option="this.$store.state.LabelNTSCTimeDifferenceData"></SearchBar>
        </keep-alive>
        <keep-alive>
          <NTSCTimeDifferenceData :data="NTSCTimeDifferenceData"></NTSCTimeDifferenceData>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差模型参数" name="CAPST-UTC（NTSC）溯源时差模型参数">
        <keep-alive>
          <SearchBar target="NTSCTimeDifferenceModelPara" @callSearch="search($event)"
                     :option="this.$store.state.LabelNTSCTimeDifferenceModelPara"></SearchBar>
        </keep-alive>
        <keep-alive>
          <NTSCTimeDifferenceModelPara :data="NTSCTimeDifferenceModelPara"></NTSCTimeDifferenceModelPara>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="时频工作状态" name="时频工作状态">
        <keep-alive>
          <SearchBar target="TimeFrequencyWorkingState" @callSearch="search($event)"
                     :option="this.$store.state.LabelTimeFrequencyWorkingState"></SearchBar>
        </keep-alive>
        <keep-alive>
          <TimeFrequencyWorkingState :data="TimeFrequencyWorkingState"></TimeFrequencyWorkingState>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TimeFrequencyWorkingState from '../../datas/TimeFrequencyWorkingState'
import NTSCTimeDifferenceModelPara from '../../datas/NTSCTimeDifferenceModelPara'
import NTSCTimeDifferenceData from '../../datas/NTSCTimeDifferenceData'
import SearchBar from '../../common/SearchBar'

export default {
  name: 'AtomicClockSignal',
  data () {
    return {
      activeName: 'CAPST-UTC（NTSC）溯源时差数据',
      NTSCTimeDifferenceData: [],
      TimeFrequencyWorkingState: [],
      NTSCTimeDifferenceModelPara: []
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    search (argument) {
      let formData
      switch (argument) {
        case 'NTSCTimeDifferenceData':
          formData = {
            'data': 0
          }
          // formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
          this.$post('findNTSCTimeDifferenceByData', formData).then((response) => {
            console.log(response)
            this.NTSCTimeDifferenceData = response
          })
          break
        case 'NTSCTimeDifferenceModelPara':
          formData = {
            'week': 0,
            'sec': 0
          }
          // formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
          this.$post('findNTSCTimeDifferenceParaByTime', formData).then((response) => {
            console.log(response)
            this.NTSCTimeDifferenceModelPara = response
          })
          break
        case 'TimeFrequencyWorkingState':
          break
        default:
          break
      }
    }
  },
  components: {
    SearchBar,
    NTSCTimeDifferenceData,
    NTSCTimeDifferenceModelPara,
    TimeFrequencyWorkingState
  }
}
</script>

<style scoped>

</style>
