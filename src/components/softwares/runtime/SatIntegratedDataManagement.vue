<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="BDS3空间信号质量监测" name="BDS3空间信号质量监测结果数据">
        <el-tabs v-model="activeNameDirection" @tab-click="handleClick">
          <el-tab-pane label="定向天线导航卫星信号质量监测结果" name="定向天线导航卫星信号质量监测结果">
            <keep-alive>
              <NavSatSignalQuality :data="this.$store.state.BDNavSatSignalQuality"></NavSatSignalQuality>
            </keep-alive>
            <el-select class="componentSelect"  @visible-change="visibleChangeValue(false)"
                       v-model="SignalComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in SignalComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SignalComponent :data="this.getSignalComponent"></SignalComponent>
            </keep-alive>
          </el-tab-pane>

          <el-tab-pane label="全向天线导航卫星信号质量监测结果" name="全向天线导航卫星信号质量监测结果">
            <keep-alive>
              <NavSatSignalQualityAllDirection
                :data="this.$store.state.BDNavSatSignalQualityAllDirection"></NavSatSignalQualityAllDirection>
            </keep-alive>
            <el-select class="componentSelect" @visible-change="visibleChangeValue(false)"
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
            <el-select class="componentSelect" @visible-change="visibleChangeValue(false)"
                       v-model="FrequencyComponentSelect" placeholder="请选择">
              <el-option
                v-for="item in FrequencyComponentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <FrequencyComponent :data="this.getFrequencyComponent"></FrequencyComponent>
            </keep-alive>
            <!--              @visible-change="visibleChangeValue(false)" -->
            <el-select class="componentSelect" @visible-change="visibleChangeValue(false)"
                       v-model="SignalComponentAllDirectionSelect" placeholder="请选择">
              <el-option
                v-for="item in SignalComponentAllDirectionOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <keep-alive>
              <SignalComponentAllDirection
                :data="this.getSignalComponentAllDirection"></SignalComponentAllDirection>
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
          <BDSSatTimeClockDifference
            :data="this.$store.state.BDSSatTimeClockDifference"></BDSSatTimeClockDifference>
        </keep-alive>
        <keep-alive>
          <BDSClockDifference :data="this.$store.state.BDSClockDifference"></BDSClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="BDS3卫星星钟改正数" name="BDS3每颗卫星的星钟改正数">
        <keep-alive>
          <BDSClockCorrection :data="this.$store.state.BDSClockCorrection"></BDSClockCorrection>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC与BDS3卫星广播北斗钟差" name="UTC(NTSC)与BDS3每颗卫星广播北斗时间的钟差">
        <keep-alive>
          <BDSBroadcastClockDifference
            :data="this.$store.state.BDSBroadcastClockDifference"></BDSBroadcastClockDifference>
        </keep-alive>
      </el-tab-pane>
      <el-tab-pane label="UTC与BDT钟差" name="UTC(NTSC)与BDT的钟差">
        <keep-alive>
          <BDTClockDifference :data="this.$store.state.BDTClockDifference"></BDTClockDifference>
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
import NavSatSignalQualityAllDirection from '../../datas/NavSatAllDirection/NavSatSignalQualityAllDirection'
import SatComponent from '../../datas/NavSatAllDirection/SatComponent'
import FrequencyComponent from '../../datas/NavSatAllDirection/FrequencyComponent'
import SignalComponentAllDirection from '../../datas/NavSatAllDirection/SignalComponentAllDirection'

export default {
  name: 'SatIntegratedDataManagement',
  data () {
    return {
      activeName: 'BDS3空间信号质量监测结果数据',
      activeNameDirection: '定向天线导航卫星信号质量监测结果',
      BDSSatTimeClockDifference: [],
      BDSClockDifference: [],
      BDSClockCorrection: [],
      BDSBroadcastClockDifference: [],
      BDTClockDifference: [],

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
        return this.$store.state.BDSignalComponent.slice(this.SignalComponentSelect, this.SignalComponentSelect + 1)
      } else {
        return []
      }
    },
    getSatComponent: function () {
      if (this.SatComponentSelect != null) {
        return this.$store.state.BDSatComponent.slice(this.SatComponentSelect, this.SatComponentSelect + 1)
      } else {
        return []
      }
    },
    getFrequencyComponent: function () {
      if (this.SatComponentSelect != null && this.FrequencyComponentSelect != null) {
        return this.$store.state.BDFrequencyComponent[this.SatComponentSelect].slice(this.FrequencyComponentSelect, this.FrequencyComponentSelect + 1)
      } else {
        return []
      }
    },
    getSignalComponentAllDirection: function () {
      if (this.SatComponentSelect != null && this.FrequencyComponentSelect != null && this.SignalComponentAllDirectionSelect != null) {
        return this.$store.state.BDSignalComponentAllDirection[this.SatComponentSelect][this.FrequencyComponentSelect].slice(this.SignalComponentAllDirectionSelect, this.SignalComponentAllDirectionSelect + 1)
      } else {
        return []
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    initSignalComponent () {
      this.SignalComponentOptions = []
      for (let i = 0; i < this.$store.state.BDSignalComponent.length; i++) {
        this.SignalComponentOptions[i] = {value: i, label: '信号分量 ' + (i + 1)}
      }
    },
    initSatComponent () {
      this.SatComponentOptions = []
      for (let i = 0; i < this.$store.state.BDSatComponent.length; i++) {
        this.SatComponentOptions[i] = {value: i, label: '卫星 ' + (i + 1)}
      }
    },
    initFrequencyComponent () {
      this.FrequencyComponentOptions = []
      if (this.SatComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.$store.state.BDFrequencyComponent[this.SatComponentSelect].length; i++) {
        this.FrequencyComponentOptions[i] = {value: i, label: '频点 ' + (i + 1)}
      }
    },
    initSignalComponentAllDirection () {
      this.SignalComponentAllDirectionOptions = []
      if (this.SatComponentSelect === null || this.FrequencyComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.$store.state.BDSignalComponentAllDirection[this.SatComponentSelect][this.FrequencyComponentSelect].length; i++) {
        this.SignalComponentAllDirectionOptions[i] = {value: i, label: '分量 ' + (i + 1)}
      }
    },
    visibleChangeValue () {
      this.initSignalComponent()
      this.initSatComponent()
      this.initFrequencyComponent()
      this.initSignalComponentAllDirection()
    }
  },
  watch: {
    FrequencyComponentOptions () {
    }
  },
  // watch: {
  //   NavSatSignalQualityChange () {
  //     this.initSignalComponent()
  //     if (this.SignalComponentOptions.length > 0) {
  //       this.SignalComponentSelect = this.SignalComponentOptions[0].value
  //     } else {
  //       this.SignalComponentSelect = null
  //     }
  //   },
  //   NavSatSignalQualityAllDirectionChange () {
  //     this.initSatComponent()
  //     if (this.SatComponentOptions.length > 0) {
  //       this.SatComponentSelect = this.SatComponentOptions[0].value
  //     } else {
  //       this.SatComponentSelect = null
  //     }
  //     this.initFrequencyComponent()
  //     if (this.FrequencyComponentOptions.length > 0) {
  //       this.FrequencyComponentSelect = this.FrequencyComponentOptions[0].value
  //     } else {
  //       this.FrequencyComponentSelect = null
  //     }
  //     this.initSignalComponentAllDirection()
  //     if (this.SignalComponentAllDirectionOptions.length > 0) {
  //       this.SignalComponentAllDirectionSelect = this.SignalComponentAllDirectionOptions[0].value
  //     } else {
  //       this.SignalComponentAllDirectionSelect = null
  //     }
  //   }
  // },
  components: {
    BDSClockDifference,
    BroadcastEphemerisWarningInfo,
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
