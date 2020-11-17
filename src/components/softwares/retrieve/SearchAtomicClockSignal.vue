<template>
  <div class="main-page">
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
          <MultipleSearchBar :search-rules="searchRulesNTSCTimeDifferenceModelPara" :limit=2
                             target="NTSCTimeDifferenceModelPara" @callSearch="search($event)"
                             :option="this.$store.state.LabelNTSCTimeDifferenceModelPara"></MultipleSearchBar>
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
import MultipleSearchBar from '../../common/MultipleSearchBar'

export default {
  name: 'AtomicClockSignal',
  data () {
    return {
      activeName: 'CAPST-UTC（NTSC）溯源时差数据',
      NTSCTimeDifferenceData: [],
      TimeFrequencyWorkingState: [],
      NTSCTimeDifferenceModelPara: [],
      searchRulesNTSCTimeDifferenceModelPara: '1.周+周内秒'
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
          formData = {}
          formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
          this.$post('findNTSCTimeDifferenceByData', formData, 'NTSC溯源时差数据').then((response) => {
            // console.log(response)
            this.NTSCTimeDifferenceData = response.data
          })
          break
        case 'NTSCTimeDifferenceModelPara':
          formData = {}
          let input = this.$store.state.SearchInput.split(' ')
          for (let i = 0; i < this.$store.state.SearchItem.length; i++) {
            formData[this.$store.state.SearchItem[i]] = input[i]
          }
          // formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
          this.$post('findNTSCTimeDifferenceParaByTime', formData, 'NTSC溯源时差模型').then((response) => {
            // console.log(response)
            this.NTSCTimeDifferenceModelPara = response.data
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
    MultipleSearchBar,
    SearchBar,
    NTSCTimeDifferenceData,
    NTSCTimeDifferenceModelPara,
    TimeFrequencyWorkingState
  }
}
</script>

<style scoped>

</style>
