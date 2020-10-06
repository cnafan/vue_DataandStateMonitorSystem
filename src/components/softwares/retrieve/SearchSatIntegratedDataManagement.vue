<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="BDS3空间信号质量监测" name="BDS3空间信号质量监测结果数据">
        <p style="text-align: center">定向天线导航卫星信号质量监测结果</p>
        <keep-alive>
          <SearchBar target="BDS3NavSatIrregularMonitor" @callSearch="search($event)"
                     :option="this.$store.state.LabelCommon"></SearchBar>
        </keep-alive>
        <keep-alive>
          <NavSatSignalQuality></NavSatSignalQuality>
        </keep-alive>
        <keep-alive>
          <SignalComponent></SignalComponent>
        </keep-alive>
        <br/><br/>

        <p style="text-align: center">全向天线导航卫星信号质量监测结果</p>
        <keep-alive>
          <SearchBar target="NavSatSignalQualityAllDirection" @callSearch="search($event)"
                     :option="this.$store.state.LabelCommon"></SearchBar>
        </keep-alive>
        <keep-alive>
          <NavSatSignalQualityAllDirection></NavSatSignalQualityAllDirection>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <SatComponent></SatComponent>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <FrequencyComponent></FrequencyComponent>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <SignalComponentAllDirection></SignalComponentAllDirection>
        </keep-alive>
      </el-tab-pane>
      <!--      <el-tab-pane label="广播星历告警信息" name="广播星历告警信息">-->
      <!--        <keep-alive>-->
      <!--          <BroadcastEphemerisWarningInfo></BroadcastEphemerisWarningInfo>-->
      <!--        </keep-alive>-->
      <!--      </el-tab-pane>-->
      <el-tab-pane label="UTC与BDS3卫星时间钟差" name="UTC(NTSC)与BDS3每颗卫星时间的钟差">
        <keep-alive>
          <SearchBar target="BDSClockDifference" @callSearch="search($event)"
                     :option="this.$store.state.LabelBDSClockDifference"></SearchBar>
        </keep-alive>
        <keep-alive>
          <BDSSatTimeClockDifference></BDSSatTimeClockDifference>
        </keep-alive>
        <keep-alive>
          <BDSClockDifference></BDSClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="BDS3卫星星钟改正数" name="BDS3每颗卫星的星钟改正数">
        <keep-alive>
          <SearchBar target="BDSClockCorrection" @callSearch="search($event)"
                     :option="this.$store.state.LabelBDSClockCorrection"></SearchBar>
        </keep-alive>
        <keep-alive>
          <BDSClockCorrection :data="BDSClockCorrection"></BDSClockCorrection>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC与BDS3卫星广播北斗钟差" name="UTC(NTSC)与BDS3每颗卫星广播北斗时间的钟差">
        <keep-alive>
          <SearchBar target="BDSBroadcastClockDifference" @callSearch="search($event)"
                     :option="this.$store.state.LabelBDSBroadcastClockDifference"></SearchBar>
        </keep-alive>
        <keep-alive>
          <BDSBroadcastClockDifference :data="BDSBroadcastClockDifference"></BDSBroadcastClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC与BDT钟差" name="UTC(NTSC)与BDT的钟差">
        <keep-alive>
          <SearchBar target="BDTClockDifference" @callSearch="search($event)"
                     :option="this.$store.state.LabelBDTClockDifference"></SearchBar>
        </keep-alive>
        <keep-alive>
          <BDTClockDifference :data="BDTClockDifference"></BDTClockDifference>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BDSBroadcastClockDifference from '../../datas/BDSBroadcastClockDifference'
import BDSClockCorrection from '../../datas/BDSClockCorrection'
import NavSatSignalQuality from '../../datas/NavSat/NavSatSignalQuality'
import BDTClockDifference from '../../datas/BDTClockDifference'
import SignalComponent from '../../datas/NavSat/SignalComponent'
import BDSSatTimeClockDifference from '../../datas/BDSSatTimeClockDifference'
import BroadcastEphemerisWarningInfo from '../../datas/BroadcastEphemerisWarningInfo'
import BDSClockDifference from '../../datas/BDSClockDifference'
import SearchBar from '../../common/SearchBar'
import SignalComponentAllDirection from '../../datas/NavSatAllDirection/SignalComponentAllDirection'
import NavSatSignalQualityAllDirection from '../../datas/NavSatAllDirection/NavSatSignalQualityAllDirection'
import SatComponent from '../../datas/NavSatAllDirection/SatComponent'
import FrequencyComponent from '../../datas/NavSatAllDirection/FrequencyComponent'

export default {
  name: 'SatIntegratedDataManagement',
  data () {
    return {
      activeName: 'BDS3空间信号质量监测结果数据',
      BDSClockCorrection: [],
      BDTClockDifference: [],
      BDSBroadcastClockDifference: []
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    search (argument) {
      let formData = {}
      formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
      switch (argument) {
        case 'BDTClockDifference':
          this.$post('findIrregularByTime', formData).then((response) => {
            console.log(response)
            this.BDTClockDifference = response
          })
          break
        case 'BDSBroadcastClockDifference':
          this.$post('findIrregularByTime', formData).then((response) => {
            console.log(response)
            this.BDSBroadcastClockDifference = response
          })
          break
        case 'BDSClockCorrection':
          this.$post('findIrregularByTime', formData).then((response) => {
            console.log(response)
            this.BDSClockCorrection = response
          })
          break
        default:
          break
      }
    }
  },
  components: {
    BDSClockDifference,
    BroadcastEphemerisWarningInfo,
    BDSSatTimeClockDifference,
    SignalComponent,
    NavSatSignalQuality,
    BDTClockDifference,
    BDSClockCorrection,
    BDSBroadcastClockDifference,
    SignalComponentAllDirection,
    NavSatSignalQualityAllDirection,
    SatComponent,
    FrequencyComponent,
    SearchBar
  }
}
</script>

<style scoped>

</style>
