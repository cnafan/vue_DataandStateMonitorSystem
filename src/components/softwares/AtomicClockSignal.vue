<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差数据" name="1">
        <NTSCTimeDifferenceData :fromdatas="NTSCTimeDifferenceData"></NTSCTimeDifferenceData>
      </el-tab-pane>
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差模型参数" name="2">
        <NTSCTimeDifferenceModelPara :fromdatas="NTSCTimeDifferenceModelPara"></NTSCTimeDifferenceModelPara>
      </el-tab-pane>
      <el-tab-pane label="时频工作状态" name="3">
        <TimeFrequencyWorkingState :fromdatas="TimeFrequencyWorkingState"></TimeFrequencyWorkingState>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TimeFrequencyWorkingState from '../datas/TimeFrequencyWorkingState'
import NTSCTimeDifferenceModelPara from '../datas/NTSCTimeDifferenceModelPara'
import NTSCTimeDifferenceData from '../datas/NTSCTimeDifferenceData'

export default {
  name: 'AtomicClockSignal',
  props: {
    NTSCTimeDifferenceData: {
      type: Array
    },
    NTSCTimeDifferenceModelPara: {
      type: Array
    },
    TimeFrequencyWorkingState: {
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
    NTSCTimeDifferenceData,
    NTSCTimeDifferenceModelPara,
    TimeFrequencyWorkingState
  }
}
</script>

<style scoped>

</style>
