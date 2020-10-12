<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="导航卫星信号质量监测结果" name="导航卫星信号质量监测结果">
        <el-tabs v-model="activeNameDirection" @tab-click="handleClick">
          <el-tab-pane label="定向天线导航卫星信号质量监测结果" name="定向天线导航卫星信号质量监测结果">
            <keep-alive>
              <NavSatSignalQuality :data="this.$store.state.NavSatSignalQuality"></NavSatSignalQuality>
            </keep-alive>
            <el-select @visible-change="visibleChangeValue(false)" class="componentSelect"
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
            <!--            <p style="text-align: center">全向天线导航卫星信号质量监测结果</p>-->
            <keep-alive>
              <NavSatSignalQualityAllDirection
                :data="this.$store.state.NavSatSignalQualityAllDirection"></NavSatSignalQualityAllDirection>
            </keep-alive>
            <el-select @visible-change="visibleChangeValue(false)" class="componentSelect"
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
            <el-select @visible-change="visibleChangeValue(false)" class="componentSelect"
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
            <el-select @visible-change="visibleChangeValue(false)" class="componentSelect"
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
    getSignalComponent: function () {
      if (this.SignalComponentSelect != null) {
        return this.$store.state.SignalComponent.slice(this.SignalComponentSelect, this.SignalComponentSelect + 1)
      } else {
        return []
      }
    },
    getSatComponent: function () {
      if (this.SatComponentSelect != null) {
        return this.$store.state.SatComponent.slice(this.SatComponentSelect, this.SatComponentSelect + 1)
      } else {
        return []
      }
    },
    getFrequencyComponent: function () {
      // console.log('this.SatComponentSelect', this.SatComponentSelect)
      // console.log('FrequencyComponent', this.$store.state.FrequencyComponent)
      // [this.SatComponentSelect]
      if (this.SatComponentSelect != null && this.FrequencyComponentSelect != null) {
        return this.$store.state.FrequencyComponent[this.SatComponentSelect].slice(this.FrequencyComponentSelect, this.FrequencyComponentSelect + 1)
      } else {
        return []
      }
    },
    getSignalComponentAllDirection: function () {
      if (this.SatComponentSelect != null && this.FrequencyComponentSelect != null && this.SignalComponentAllDirectionSelect != null) {
        return this.$store.state.SignalComponentAllDirection[this.SatComponentSelect][this.FrequencyComponentSelect].slice(this.SignalComponentAllDirectionSelect, this.SignalComponentAllDirectionSelect + 1)
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
      for (let i = 0; i < this.$store.state.SignalComponent.length; i++) {
        this.SignalComponentOptions[i] = {value: i, label: '信号分量 ' + (i + 1)}
      }
    },
    initSatComponent () {
      this.SatComponentOptions = []
      for (let i = 0; i < this.$store.state.SatComponent.length; i++) {
        this.SatComponentOptions[i] = {value: i, label: '卫星 ' + (i + 1)}
      }
    },
    initFrequencyComponent () {
      this.FrequencyComponentOptions = []
      if (this.SatComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.$store.state.FrequencyComponent[this.SatComponentSelect].length; i++) {
        this.FrequencyComponentOptions[i] = {value: i, label: '频点 ' + (i + 1)}
      }
    },
    initSignalComponentAllDirection () {
      this.SignalComponentAllDirectionOptions = []
      if (this.SatComponentSelect === null || this.FrequencyComponentSelect === null) {
        return
      }
      for (let i = 0; i < this.$store.state.SignalComponentAllDirection[this.SatComponentSelect][this.FrequencyComponentSelect].length; i++) {
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
