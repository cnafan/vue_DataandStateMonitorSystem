<template>
  <div class="main-page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="BDS3空间信号质量监测" name="BDS3空间信号质量监测结果数据">
        <!--        <p style="text-align: center">定向天线导航卫星信号质量监测结果</p>-->

        <el-tabs v-model="activeNameDirection" @tab-click="handleClick">
          <el-tab-pane label="定向天线导航卫星信号质量监测结果" name="定向天线导航卫星信号质量监测结果">
            <keep-alive>
              <SearchBar target="BDNavSatSignalQuality" @callSearch="search($event)"
                         :option="this.$store.state.LabelCommon"></SearchBar>
            </keep-alive>
            <keep-alive>
              <NavSatSignalQuality :data="NavSatSignalQuality"></NavSatSignalQuality>
            </keep-alive>
            <el-select class="componentSelect" v-model="SignalComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in SignalComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SignalComponent :data="getSignalComponent"></SignalComponent>
            </keep-alive>
          </el-tab-pane>
          <el-tab-pane label="全向天线导航卫星信号质量监测结果" name="全向天线导航卫星信号质量监测结果">
            <keep-alive>
              <SearchBar target="BDNavSatSignalQualityAllDirection" @callSearch="search($event)"
                         :option="this.$store.state.LabelCommon"></SearchBar>
            </keep-alive>
            <keep-alive>
              <NavSatSignalQualityAllDirection
                :data="NavSatSignalQualityAllDirection"></NavSatSignalQualityAllDirection>
            </keep-alive>
            <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
            <el-select class="componentSelect" v-model="SatComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in SatComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SatComponent :data="getSatComponent"></SatComponent>
            </keep-alive>
            <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
            <el-select class="componentSelect" v-model="FrequencyComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in FrequencyComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <FrequencyComponent :data="getFrequencyComponent"></FrequencyComponent>
            </keep-alive>
            <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
            <el-select class="componentSelect" v-model="SignalComponentAllDirectionSelect" placeholder="请选择">
              <el-option
                v-for="item in SignalComponentAllDirectionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SignalComponentAllDirection :data="getSignalComponentAllDirection"></SignalComponentAllDirection>
            </keep-alive>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <!--      <el-tab-pane label="广播星历告警信息" name="广播星历告警信息">-->
      <!--        <keep-alive>-->
      <!--          <BroadcastEphemerisWarningInfo></BroadcastEphemerisWarningInfo>-->
      <!--        </keep-alive>-->
      <!--      </el-tab-pane>-->
      <el-tab-pane label="UTC与BDS3卫星时间钟差" name="UTC(NTSC)与BDS3每颗卫星时间的钟差">
        <keep-alive>
          <SearchBar target="BDSClockDifference" @callSearch="search($event)"
                     :option="this.$store.state.LabelBDSSatTimeClockDifference"></SearchBar>
        </keep-alive>
        <keep-alive>
          <BDSSatTimeClockDifference :data="this.BDSSatTimeClockDifference"></BDSSatTimeClockDifference>
        </keep-alive>
        <keep-alive>
          <BDSClockDifference :data="BDSClockDifference"></BDSClockDifference>
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
      activeNameDirection: '定向天线导航卫星信号质量监测结果',
      BDSClockCorrection: [],
      BDTClockDifference: [],
      BDSBroadcastClockDifference: [],
      BDSSatTimeClockDifference: [],
      BDSClockDifference: [],

      NavSatSignalQuality: [],
      SignalComponent: [],
      NavSatSignalQualityAllDirection: [],
      SatComponent: [],
      FrequencyComponent: [],
      SignalComponentAllDirection: [],

      SignalComponentOptions: [],
      SignalComponentSelect: null,
      SatComponentOptions: [],
      SatComponentSelect: null,
      FrequencyComponentOptions: [],
      FrequencyComponentSelect: null,
      SignalComponentAllDirectionOptions: [],
      SignalComponentAllDirectionSelect: null
    }
  },
  computed: {
    getSignalComponent: function () {
      if (this.SignalComponentSelect != null) {
        return this.SignalComponent.slice(this.SignalComponentSelect, this.SignalComponentSelect + 1)
      } else {
        return []
      }
    },
    getSatComponent: function () {
      if (this.SatComponentSelect != null) {
        return this.SatComponent.slice(this.SatComponentSelect, this.SatComponentSelect + 1)
      } else {
        return []
      }
    },
    getFrequencyComponent: function () {
      if (this.SatComponentSelect != null && this.FrequencyComponentSelect != null) {
        return this.FrequencyComponent[this.SatComponentSelect].slice(this.FrequencyComponentSelect, this.FrequencyComponentSelect + 1)
      } else {
        return []
      }
    },
    getSignalComponentAllDirection: function () {
      if (this.SatComponentSelect != null && this.FrequencyComponentSelect != null && this.SignalComponentAllDirectionSelect != null) {
        return this.SignalComponentAllDirection[this.SatComponentSelect][this.FrequencyComponentSelect].slice(this.SignalComponentAllDirectionSelect, this.SignalComponentAllDirectionSelect + 1)
      } else {
        return []
      }
    }
    // navSignalComponentChange () {
    //   return this.SignalComponent
    // },
    // navSatComponentChange () {
    //   return this.SatComponent
    // },
    // navFrequencyComponentChange () {
    //   return this.FrequencyComponent
    // },
    // navSignalComponentAllDirectionChange () {
    //   return this.SignalComponentAllDirection
    // }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    initSignalComponentSelect () {
      this.SignalComponentOptions = []
      for (let i = 0; i < this.SignalComponent.length; i++) {
        this.SignalComponentOptions[i] = {value: i, label: '信号分量 ' + (i + 1)}
      }
      if (this.SignalComponentOptions.length > 0) {
        this.SignalComponentSelect = 0
      }
    },
    initSatComponentSelect () {
      this.SatComponentOptions = []
      for (let i = 0; i < this.SatComponent.length; i++) {
        this.SatComponentOptions[i] = {value: i, label: '卫星 ' + (i + 1)}
      }
      if (this.SatComponentOptions.length > 0) {
        this.SatComponentSelect = 0
      }
    },
    initFrequencyComponentSelect () {
      this.FrequencyComponentOptions = []
      if (this.SatComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.FrequencyComponent[this.SatComponentSelect].length; i++) {
        this.FrequencyComponentOptions[i] = {value: i, label: '频点 ' + (i + 1)}
      }
      if (this.FrequencyComponentOptions.length > 0) {
        this.FrequencyComponentSelect = 0
      }
    },
    initSignalAllDirectionComponentSelect () {
      this.SignalComponentAllDirectionOptions = []
      if (this.SatComponentSelect === null || this.FrequencyComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.SignalComponentAllDirection[this.SatComponentSelect][this.FrequencyComponentSelect].length; i++) {
        this.SignalComponentAllDirectionOptions[i] = {value: i, label: '信号分量 ' + (i + 1)}
      }
      if (this.SignalComponentAllDirectionOptions.length > 0) {
        this.SignalComponentAllDirectionSelect = 0
      }
    },
    search (argument) {
      let formData = {}
      formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
      switch (argument) {
        case 'BDTClockDifference':
          this.$post('findBDTClockCorrectionByTime', formData, 'UTC与BDT的钟差').then((response) => {
            // console.log(response)
            this.BDTClockDifference = response.data.BDTClockDifference
          })
          break
        case 'BDSBroadcastClockDifference':
          this.$post('findBDSBroadcastClockCorrectionByTime', formData, 'UTC与BDS3广播北斗钟差').then((response) => {
            // console.log(response)
            this.BDSBroadcastClockDifference = response.data.BDSBroadcastClockDifference
          })
          break
        case 'BDSClockCorrection':
          this.$post('findBDSClockCorrectionByTime', formData, 'BDS3星钟改正数').then((response) => {
            // console.log(response)
            this.BDSClockCorrection = response.data.BDSClockCorrection
          })
          break
        case 'BDSClockDifference':
          this.$post('findBDSClockDifferenceByTime', formData, 'UTC与BDS3卫星钟差').then((response) => {
            // console.log(response)
            this.BDSSatTimeClockDifference = response.data['BDSSatTimeClockDifference']
            this.BDSClockDifference = response.data['BDSClockDifference']
          })
          break
        case 'BDNavSatSignalQuality':
          this.$post('findSpaceQualityResultByTime', formData, '定向BDS-3信号质量').then((response) => {
            // console.log(response.data)
            this.NavSatSignalQuality = response.data['BDNavSatSignalQuality']
            this.SignalComponent = response.data['BDSignalComponent']
            this.initSignalComponentSelect()
          })
          break
        case 'BDNavSatSignalQualityAllDirection':
          this.$post('findSpaceQualityResultAllDirectionByTime', formData, '全向BDS-3信号质量').then((response) => {
            // console.log(response.data)
            this.NavSatSignalQualityAllDirection = response.data['BDNavSatSignalQualityAllDirection']
            this.SatComponent = response.data['BDSatComponent']
            this.initSatComponentSelect()
            this.FrequencyComponent = response.data['BDFrequencyComponent']
            this.initFrequencyComponentSelect()
            this.SignalComponentAllDirection = response.data['BDSignalComponentAllDirection']
            this.initSignalAllDirectionComponentSelect()
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
