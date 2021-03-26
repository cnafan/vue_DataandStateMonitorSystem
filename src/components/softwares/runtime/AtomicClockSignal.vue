<template>
  <div class="main-page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差数据" name="1">
        <keep-alive>
          <NTSCTimeDifferenceData :data="this.$store.state.NTSCTimeDifferenceData"></NTSCTimeDifferenceData>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="CAPST-UTC（NTSC）溯源时差模型参数" name="2">
        <keep-alive>
          <NTSCTimeDifferenceModelPara
            :data="this.$store.state.NTSCTimeDifferenceModelPara"></NTSCTimeDifferenceModelPara>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="时频工作状态" name="3">
        <keep-alive>
          <TimeFrequencyWorkingState :data="this.$store.state.TimeFrequencyWorkingState"></TimeFrequencyWorkingState>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TimeFrequencyWorkingState from '../../datas/TimeFrequencyWorkingState'
import NTSCTimeDifferenceModelPara from '../../datas/NTSCTimeDifferenceModelPara'
import NTSCTimeDifferenceData from '../../datas/NTSCTimeDifferenceData'
import tabMixin from '../../../mixins/tabMixin'

export default {
  name: 'AtomicClockSignal',
  mixins: [tabMixin],
  components: {
    NTSCTimeDifferenceData,
    NTSCTimeDifferenceModelPara,
    TimeFrequencyWorkingState
  }
}
</script>

<style scoped>

</style>
