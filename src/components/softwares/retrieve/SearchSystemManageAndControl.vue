<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="导航卫星信号质量监测结果" name="导航卫星信号质量监测结果">
        <p style="text-align: center">定向天线导航卫星信号质量监测结果</p>
        <keep-alive>
          <SearchBar target="NavSatSignalQuality" @callSearch="search($event)"
                     :option="this.$store.state.LabelCommon"></SearchBar>
        </keep-alive>
        <keep-alive>
          <NavSatSignalQuality :data="NavSatSignalQuality"></NavSatSignalQuality>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <SignalComponent :data="SignalComponent"></SignalComponent>
        </keep-alive>
        <br/><br/>

        <p style="text-align: center">全向天线导航卫星信号质量监测结果</p>
        <keep-alive>
          <SearchBar target="NavSatSignalQualityAllDirection" @callSearch="search($event)"
                     :option="this.$store.state.LabelCommon"></SearchBar>
        </keep-alive>
        <keep-alive>
          <NavSatSignalQualityAllDirection
            :data="this.NavSatSignalQualityAllDirection"></NavSatSignalQualityAllDirection>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <SatComponent :data="this.SatComponent"></SatComponent>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <FrequencyComponent :data="this.FrequencyComponent"></FrequencyComponent>
        </keep-alive>
        <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
        <keep-alive>
          <SignalComponentAllDirection :data="this.SignalComponentAllDirection"></SignalComponentAllDirection>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="工作状态信息" name="工作状态信息">
        <keep-alive>
          <SearchBar target="WorkingStateInfo" @callSearch="search($event)"
                     :option="this.$store.state.LabelCommon"></SearchBar>
        </keep-alive>
        <WorkingStateInfo></WorkingStateInfo>
      </el-tab-pane>
      <el-tab-pane label="导航卫星异常监测结果" name="导航卫星异常监测结果">
        <keep-alive>
          <SearchBar target="NavSatIrregularMonitor" @callSearch="search($event)"
                     :option="this.$store.state.LabelNavSatIrregularMonitor"></SearchBar>
        </keep-alive>
        <keep-alive>
          <NavSatIrregularMonitor :data="this.NavSatIrregularMonitor"></NavSatIrregularMonitor>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import NavSatSignalQuality from '../../datas/NavSat/NavSatSignalQuality'
import SignalComponent from '../../datas/NavSat/SignalComponent'
import WorkingStateInfo from '../../datas/WorkingStateInfo'
import NavSatIrregularMonitor from '../../datas/NavSatIrregularMonitor'
import NavSatSignalQualityAllDirection from '../../datas/NavSatAllDirection/NavSatSignalQualityAllDirection'
import SatComponent from '../../datas/NavSatAllDirection/SatComponent'
import FrequencyComponent from '../../datas/NavSatAllDirection/FrequencyComponent'
import SignalComponentAllDirection from '../../datas/NavSatAllDirection/SignalComponentAllDirection'
import SearchBar from '../../common/SearchBar'

export default {
  name: 'SystemManageAndControl',
  data () {
    return {
      activeName: '导航卫星信号质量监测结果',
      NavSatIrregularMonitor: [],
      NavSatSignalQuality: [],
      SignalComponent: [],
      NavSatSignalQualityAllDirection: [],
      SatComponent: [],
      FrequencyComponent: [],
      SignalComponentAllDirection: [],
      WorkingStateInfo: []
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
        case 'NavSatIrregularMonitor':
          this.$post('findIrregularByTime', formData).then((response) => {
            console.log(response)
            this.NavSatIrregularMonitor = response.data
          })
          break
        case 'WorkingStateInfo':
          this.$post('findWorkStateByTime', formData).then((response) => {
            console.log(response)
            this.WorkingStateInfo = response.data
          })
          break
        case 'NavSatSignalQuality':
          this.$post('findNavSatSignalQualityByTime', formData).then((response) => {
            console.log(response)
            this.NavSatSignalQuality = response.data['NavSatSignalQuality']
            this.SignalComponent = response.data['SignalComponent']
          })
          break
        default:
          break
      }
    }
  },
  components: {
    SignalComponentAllDirection,
    FrequencyComponent,
    SatComponent,
    NavSatSignalQualityAllDirection,
    NavSatIrregularMonitor,
    WorkingStateInfo,
    NavSatSignalQuality,
    SignalComponent,
    SearchBar
  }
}
</script>

<style scoped>

</style>
