<template>
  <div class="main-page">
    <el-tabs v-model="activeNameOuter" @tab-click="handleClickOuter">
      <el-tab-pane label="BDS-3空间信号质量监测结果数据" name="1">
        <el-tabs v-model="activeNameInner" @tab-click="handleClickInner">
          <el-tab-pane label="定向天线导航卫星信号质量监测结果" name="1">
            <keep-alive>
              <NavSatSignalQuality :data="this.$store.state.BDNavSatSignalQuality"></NavSatSignalQuality>
            </keep-alive>
            <el-select class="componentSelect"
                       v-model="BDSignalComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in BDSignalComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SignalComponent :data="this.getSignalComponent"
                               :father-data="getSignalComponentFatherData"></SignalComponent>
            </keep-alive>
          </el-tab-pane>

          <el-tab-pane label="全向天线导航卫星信号质量监测结果" name="2">
            <keep-alive>
              <NavSatSignalQualityAllDirection
                :data="this.$store.state.BDNavSatSignalQualityAllDirection"></NavSatSignalQualityAllDirection>
            </keep-alive>
            <el-select class="componentSelect"
                       v-model="BDSatComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in BDSatComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SatComponent :data="this.getSatComponent"></SatComponent>
            </keep-alive>
            <el-select class="componentSelect"
                       v-model="BDFrequencyComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in BDFrequencyComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <FrequencyComponent :father-data="getFrequencyComponentFatherData"
                                  :data="this.getFrequencyComponent"></FrequencyComponent>
            </keep-alive>

            <el-select class="componentSelect"
                       v-model="BDSignalComponentAllDirectionSelect" placeholder="请选择">
              <el-option
                v-for="item in BDSignalComponentAllDirectionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SignalComponentAllDirection :father-data="getSignalComponentAllDirectionFatherData"
                                           :data="this.getSignalComponentAllDirection"></SignalComponentAllDirection>
            </keep-alive>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="UTC(NTSC)与BDS3每颗卫星时间的钟差" name="2">
        <keep-alive>
          <BDSSatTimeClockDifference
            :data="this.$store.state.BDSSatTimeClockDifference"></BDSSatTimeClockDifference>
        </keep-alive>
        <keep-alive>
          <BDSClockDifference :data="this.$store.state.BDSClockDifference"></BDSClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="BDS3每颗卫星的星钟改正数" name="3">
        <keep-alive>
          <BDSClockCorrection :data="this.$store.state.BDSClockCorrection"></BDSClockCorrection>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC(NTSC)与BDS3每颗卫星广播北斗时间的钟差" name="4">
        <keep-alive>
          <BDSBroadcastClockDifference
            :data="this.$store.state.BDSBroadcastClockDifference"></BDSBroadcastClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC(NTSC)与BDT的钟差" name="5">
        <keep-alive>
          <BDTClockDifference :data="this.$store.state.BDTClockDifference"></BDTClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="工作状态" name="6">
        <keep-alive>
          <WorkingStateInfos></WorkingStateInfos>
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
import BDSClockDifference from '../../datas/BDSClockDifference'
import NavSatSignalQualityAllDirection from '../../datas/NavSatAllDirection/NavSatSignalQualityAllDirection'
import SatComponent from '../../datas/NavSatAllDirection/SatComponent'
import FrequencyComponent from '../../datas/NavSatAllDirection/FrequencyComponent'
import SignalComponentAllDirection from '../../datas/NavSatAllDirection/SignalComponentAllDirection'
import WorkingStateInfos from '../../datas/WorkingStateInfoSat/WorkingStateInfos'
import storageUtils from '../../../utils/storageUtils'

export default {
  name: 'SatIntegratedDataManagement',
  created () {
    this.initSignalComponentSelect()
    this.initSatComponentSelect()
    this.initFrequencyComponentSelect()
    this.initSignalAllDirectionComponentSelect()
  },
  data () {
    return {
      activeNameOuter: storageUtils.getTabActive('SatIntegratedDataManagementOuter'),
      activeNameInner: storageUtils.getTabActive('SatIntegratedDataManagementInner'),
      BDSSatTimeClockDifference: [],
      BDSClockDifference: [],
      BDSClockCorrection: [],
      BDSBroadcastClockDifference: [],
      BDTClockDifference: [],

      BDSignalComponentOptions: [],
      BDSignalComponentSelect: null,
      BDSatComponentOptions: [],
      BDSatComponentSelect: null,
      BDFrequencyComponentOptions: [],
      BDFrequencyComponentSelect: null,
      BDSignalComponentAllDirectionOptions: [],
      BDSignalComponentAllDirectionSelect: null
    }
  },
  computed: {
    getSignalComponentFatherData: function () {
      // console.log('said', this.$store.state.BDNavSatSignalQuality)
      if (this.$store.state.BDNavSatSignalQuality.length > 0) {
        return {
          'said': this.$store.state.BDNavSatSignalQuality[0].said,
          'sifr': this.$store.state.BDNavSatSignalQuality[0].sifr
        }
      } else {
        return {}
      }
    },
    getSignalComponent: function () {
      if (this.BDSignalComponentSelect != null) {
        return this.$store.state.BDSignalComponent.slice(Number(this.BDSignalComponentSelect), Number(this.BDSignalComponentSelect) + 1)
      } else {
        return []
      }
    },
    getSatComponent: function () {
      if (this.BDSatComponentSelect != null) {
        return this.$store.state.BDSatComponent.slice(Number(this.BDSatComponentSelect), Number(this.BDSatComponentSelect) + 1)
      } else {
        return []
      }
    },
    getFrequencyComponentFatherData: function () {
      if (this.$store.state.BDSatComponent.length > 0) {
        return {
          'satid': this.$store.state.BDSatComponent[Number(this.BDSatComponentSelect)].satID
        }
      } else {
        return {}
      }
    },
    getFrequencyComponent: function () {
      if (this.BDSatComponentSelect != null && this.BDFrequencyComponentSelect != null) {
        return this.$store.state.BDFrequencyComponent[Number(this.BDSatComponentSelect)].slice(Number(this.BDFrequencyComponentSelect), Number(this.BDFrequencyComponentSelect) + 1)
      } else {
        return []
      }
    },
    getSignalComponentAllDirection: function () {
      if (this.BDSatComponentSelect != null && this.BDFrequencyComponentSelect != null && this.BDSignalComponentAllDirectionSelect != null) {
        return this.$store.state.BDSignalComponentAllDirection[Number(this.BDSatComponentSelect)][Number(this.BDFrequencyComponentSelect)].slice(Number(this.BDSignalComponentAllDirectionSelect), Number(this.BDSignalComponentAllDirectionSelect) + 1)
      } else {
        return []
      }
    },
    getSignalComponentAllDirectionFatherData: function () {
      if (this.$store.state.BDSatComponent.length > 0 && this.$store.state.BDNavSatSignalQuality.length > 0) {
        return {
          'satid': this.$store.state.BDSatComponent[Number(this.BDSatComponentSelect)].satID,
          'sifr': this.$store.state.BDNavSatSignalQuality[0].sifr
        }
      } else {
        return {}
      }
    },
    navSignalComponentChange () {
      return this.$store.state.BDSignalComponent
    },
    navSatComponentChange () {
      return this.$store.state.BDSatComponent
    },
    navFrequencyComponentChange () {
      return this.$store.state.BDFrequencyComponent
    },
    navSignalComponentAllDirectionChange () {
      return this.$store.state.BDSignalComponentAllDirection
    }
  },
  watch: {
    navSignalComponentChange () {
      this.initSignalComponentSelect()
    },
    navSatComponentChange () {
      this.initSatComponentSelect()
    },
    navFrequencyComponentChange () {
      this.initFrequencyComponentSelect()
    },
    navSignalComponentAllDirectionChange () {
      this.initSignalAllDirectionComponentSelect()
    }
  },
  methods: {
    handleClickOuter (tab) {
      // console.log(tab, event)
      // console.log(tab.name)
      storageUtils.saveTabActive('SatIntegratedDataManagementOuter', tab.name)
    },
    handleClickInner (tab) {
      // console.log(tab, event)
      // console.log(tab.name)
      storageUtils.saveTabActive('SatIntegratedDataManagementInner', tab.name)
    },
    initSignalComponentSelect () {
      this.BDSignalComponentOptions = []
      for (let i = 0; i < this.$store.state.BDSignalComponent.length; i++) {
        this.BDSignalComponentOptions[i] = {value: String(i), label: '信号分量 ' + (i + 1)}
      }
      if (this.BDSignalComponentOptions.length > 0) {
        this.BDSignalComponentSelect = String(0)
      }
    },
    initSatComponentSelect () {
      this.BDSatComponentOptions = []
      for (let i = 0; i < this.$store.state.BDSatComponent.length; i++) {
        this.BDSatComponentOptions[i] = {value: String(i), label: '卫星 ' + (i + 1)}
      }
      if (this.BDSatComponentOptions.length > 0) {
        this.BDSatComponentSelect = String(0)
      }
    },
    initFrequencyComponentSelect () {
      this.BDFrequencyComponentOptions = []
      if (this.BDSatComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.$store.state.BDFrequencyComponent[this.BDSatComponentSelect].length; i++) {
        this.BDFrequencyComponentOptions[i] = {value: String(i), label: '频点 ' + (i + 1)}
      }
      if (this.BDFrequencyComponentOptions.length > 0) {
        this.BDFrequencyComponentSelect = String(0)
      }
    },
    initSignalAllDirectionComponentSelect () {
      this.BDSignalComponentAllDirectionOptions = []
      if (this.BDSatComponentSelect === null || this.BDFrequencyComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.$store.state.BDSignalComponentAllDirection[Number(this.BDSatComponentSelect)][Number(this.BDFrequencyComponentSelect)].length; i++) {
        this.BDSignalComponentAllDirectionOptions[i] = {value: String(i), label: '分量 ' + (i + 1)}
      }
      if (this.BDSignalComponentAllDirectionOptions.length > 0) {
        this.BDSignalComponentAllDirectionSelect = String(0)
      }
    }
  },
  components: {
    WorkingStateInfos,
    BDSClockDifference,
    BDSSatTimeClockDifference,
    SignalComponent,
    NavSatSignalQuality,
    BDTClockDifference,
    BDSClockCorrection,
    BDSBroadcastClockDifference,
    NavSatSignalQualityAllDirection,
    SatComponent,
    FrequencyComponent,
    SignalComponentAllDirection
  }
}
</script>

<style scoped>

</style>
