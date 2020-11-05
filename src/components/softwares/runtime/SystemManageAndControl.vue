<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="导航卫星信号质量监测结果" name="导航卫星信号质量监测结果">
        <el-tabs v-model="activeNameDirection" @tab-click="handleClick">
          <el-tab-pane label="定向天线导航卫星信号质量监测结果" name="定向天线导航卫星信号质量监测结果">
            <keep-alive>
              <NavSatSignalQuality :data="this.$store.state.NavSatSignalQuality"></NavSatSignalQuality>
            </keep-alive>
            <el-select class="componentSelect"
                       v-model="SignalComponentSelect" placeholder="请选择" default-first-option>
              <el-option
                v-for="item in SignalComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SignalComponent :father-data="getSignalComponentFatherData"
                               :data="this.getSignalComponent"></SignalComponent>
            </keep-alive>
          </el-tab-pane>
          <el-tab-pane label="全向天线导航卫星信号质量监测结果" name="全向天线导航卫星信号质量监测结果">
            <!--            <p style="text-align: center">全向天线导航卫星信号质量监测结果</p>-->
            <keep-alive>
              <NavSatSignalQualityAllDirection
                :data="this.$store.state.NavSatSignalQualityAllDirection"></NavSatSignalQualityAllDirection>
            </keep-alive>
            <el-select class="componentSelect"
                       v-model="SatComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in SatComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SatComponent :data="this.getSatComponent"></SatComponent>
            </keep-alive>
            <el-select class="componentSelect"
                       v-model="FrequencyComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in FrequencyComponentOptions"
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
                       v-model="SignalComponentAllDirectionSelect" placeholder="请选择">
              <el-option
                v-for="item in SignalComponentAllDirectionOptions"
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
      <el-tab-pane label="工作状态信息" name="工作状态信息">
        <WorkingStateInfo></WorkingStateInfo>
      </el-tab-pane>
      <el-tab-pane label="导航卫星异常监测结果" name="导航卫星异常监测结果">
        <NavSatIrregularMonitor :data="this.$store.state.NavSatIrregularMonitor"></NavSatIrregularMonitor>
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

export default {
  name: 'SystemManageAndControl',
  created () {
    this.initSignalComponentSelect()
    this.initSatComponentSelect()
    this.initFrequencyComponentSelect()
    this.initSignalAllDirectionComponentSelect()
  },
  data () {
    return {
      activeName: '导航卫星信号质量监测结果',
      activeNameDirection: '定向天线导航卫星信号质量监测结果',
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
    getSignalComponentFatherData: function () {
      console.log('said', this.$store.state.NavSatSignalQuality)
      if (this.$store.state.NavSatSignalQuality.length > 0) {
        return {
          'said': this.$store.state.NavSatSignalQuality[0].said,
          'sifr': this.$store.state.NavSatSignalQuality[0].sifr
        }
      } else {
        return {}
      }
    },
    getFrequencyComponentFatherData: function () {
      if (this.$store.state.SatComponent.length > 0) {
        return {
          'satid': this.$store.state.SatComponent[Number(this.SatComponentSelect)].satID
        }
      } else {
        return {}
      }
    },
    getSignalComponentAllDirectionFatherData: function () {
      if (this.$store.state.SatComponent.length > 0 && this.$store.state.NavSatSignalQuality.length > 0) {
        return {
          'satid': this.$store.state.SatComponent[Number(this.SatComponentSelect)].satID,
          'sifr': this.$store.state.NavSatSignalQuality[0].sifr
        }
      } else {
        return {}
      }
    },
    getSignalComponent: function () {
      if (this.SignalComponentSelect != null) {
        return this.$store.state.SignalComponent.slice(Number(this.SignalComponentSelect), Number(this.SignalComponentSelect) + 1)
      } else {
        return []
      }
    },
    getSatComponent: function () {
      if (this.SatComponentSelect != null) {
        return this.$store.state.SatComponent.slice(Number(this.SatComponentSelect), Number(this.SatComponentSelect) + 1)
      } else {
        return []
      }
    },
    getFrequencyComponent: function () {
      if (this.SatComponentSelect != null && this.FrequencyComponentSelect != null) {
        return this.$store.state.FrequencyComponent[Number(this.SatComponentSelect)].slice(Number(this.FrequencyComponentSelect), Number(this.FrequencyComponentSelect) + 1)
      } else {
        return []
      }
    },
    getSignalComponentAllDirection: function () {
      if (this.SatComponentSelect != null && this.FrequencyComponentSelect != null && this.SignalComponentAllDirectionSelect != null) {
        return this.$store.state.SignalComponentAllDirection[Number(this.SatComponentSelect)][Number(this.FrequencyComponentSelect)].slice(Number(this.SignalComponentAllDirectionSelect), Number(this.SignalComponentAllDirectionSelect) + 1)
      } else {
        return []
      }
    },
    navSignalComponentChange () {
      return this.$store.state.SignalComponent
    },
    navSatComponentChange () {
      return this.$store.state.SatComponent
    },
    navFrequencyComponentChange () {
      return this.$store.state.FrequencyComponent
    },
    navSignalComponentAllDirectionChange () {
      return this.$store.state.SignalComponentAllDirection
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
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    initSignalComponentSelect () {
      this.SignalComponentOptions = []
      for (let i = 0; i < this.$store.state.SignalComponent.length; i++) {
        this.SignalComponentOptions[i] = {value: String(i), label: '信号分量 ' + (i + 1)}
      }
      if (this.SignalComponentOptions.length > 0) {
        this.SignalComponentSelect = String(0)
      }
    },
    initSatComponentSelect () {
      this.SatComponentOptions = []
      for (let i = 0; i < this.$store.state.SatComponent.length; i++) {
        this.SatComponentOptions[i] = {value: String(i), label: '卫星 ' + (i + 1)}
      }
      if (this.SatComponentOptions.length > 0) {
        this.SatComponentSelect = String(0)
      }
    },
    initFrequencyComponentSelect () {
      this.FrequencyComponentOptions = []
      if (this.SatComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.$store.state.FrequencyComponent[this.SatComponentSelect].length; i++) {
        this.FrequencyComponentOptions[i] = {value: String(i), label: '频点 ' + (i + 1)}
      }
      if (this.FrequencyComponentOptions.length > 0) {
        this.FrequencyComponentSelect = String(0)
      }
    },
    initSignalAllDirectionComponentSelect () {
      this.SignalComponentAllDirectionOptions = []
      if (this.SatComponentSelect === null || this.FrequencyComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.$store.state.SignalComponentAllDirection[this.SatComponentSelect][this.FrequencyComponentSelect].length; i++) {
        this.SignalComponentAllDirectionOptions[i] = {value: String(i), label: '分量 ' + (i + 1)}
      }
      if (this.SignalComponentAllDirectionOptions.length > 0) {
        this.SignalComponentAllDirectionSelect = String(0)
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
    SignalComponent
  }
}
</script>

<style scoped>
</style>
