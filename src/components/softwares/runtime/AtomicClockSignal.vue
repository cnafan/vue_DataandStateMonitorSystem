<template>
  <div class="main-page">
    <vs-tabs v-model="activeName" @tab-click="handleClick">
      <vs-tab label="CAPST-UTC（NTSC）溯源时差数据" name="1">
        <keep-alive>
          <NTSCTimeDifferenceData :data="this.$store.state.NTSCTimeDifferenceData"></NTSCTimeDifferenceData>
        </keep-alive>
      </vs-tab>
      <vs-tab label="CAPST-UTC（NTSC）溯源时差模型参数" name="2">
        <keep-alive>
          <NTSCTimeDifferenceModelPara
            :data="this.$store.state.NTSCTimeDifferenceModelPara"></NTSCTimeDifferenceModelPara>
        </keep-alive>
      </vs-tab>
      <vs-tab label="时频工作状态" name="3">
        <keep-alive>
          <TimeFrequencyWorkingState :data="this.$store.state.TimeFrequencyWorkingState"></TimeFrequencyWorkingState>
        </keep-alive>
      </vs-tab>
    </vs-tabs>
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
