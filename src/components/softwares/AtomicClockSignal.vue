<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差数据" name="CAPST-UTC（NTSC）溯源时差数据">
        <keep-alive>
          <NTSCTimeDifferenceData></NTSCTimeDifferenceData>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差模型参数" name="CAPST-UTC（NTSC）溯源时差模型参数">
        <keep-alive>
          <NTSCTimeDifferenceModelPara></NTSCTimeDifferenceModelPara>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="时频工作状态" name="时频工作状态">
        <keep-alive>
          <TimeFrequencyWorkingState></TimeFrequencyWorkingState>
        </keep-alive>
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
  data () {
    return {
      activeName: 'CAPST-UTC（NTSC）溯源时差数据'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
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
