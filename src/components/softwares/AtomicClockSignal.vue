<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差数据" name="CAPST-UTC（NTSC）溯源时差数据">
        <NTSCTimeDifferenceData :fromdatas="NTSCTimeDifferenceData"></NTSCTimeDifferenceData>
      </el-tab-pane>
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差模型参数" name="CAPST-UTC（NTSC）溯源时差模型参数">
        <NTSCTimeDifferenceModelPara :fromdatas="NTSCTimeDifferenceModelPara"></NTSCTimeDifferenceModelPara>
      </el-tab-pane>
      <el-tab-pane label="时频工作状态" name="时频工作状态">
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
      activeName: 'CAPST-UTC（NTSC）溯源时差数据'
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
