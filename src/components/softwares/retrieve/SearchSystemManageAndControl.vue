<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="导航卫星信号质量监测结果" name="导航卫星信号质量监测结果">
        <keep-alive>
        <el-tabs v-model="activeNameDirection" @tab-click="handleClick">
          <el-tab-pane label="定向天线导航卫星信号质量监测结果" name="定向天线导航卫星信号质量监测结果">
            <p style="text-align: center">定向天线导航卫星信号质量监测结果</p>
            <keep-alive>
              <SearchBar target="NavSatSignalQuality" @callSearch="search($event)"
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
            <!--        <el-divider content-position="right">此处为分割线</el-divider>-->
            <keep-alive>
              <SignalComponent :data="this.getSignalComponent"></SignalComponent>
            </keep-alive>
          </el-tab-pane>

          <el-tab-pane label="全向天线导航卫星信号质量监测结果" name="全向天线导航卫星信号质量监测结果">
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

            <el-select class="componentSelect" v-model="SatComponentSelect" placeholder="请选择">
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
              <FrequencyComponent :data="this.getFrequencyComponent"></FrequencyComponent>
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
              <SignalComponentAllDirection :data="this.getSignalComponentAllDirection"></SignalComponentAllDirection>
            </keep-alive>
          </el-tab-pane>
        </el-tabs>
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
      activeNameDirection: '定向天线导航卫星信号质量监测结果',
      NavSatIrregularMonitor: [],
      WorkingStateInfo: [],
      NavSatSignalQuality: [],
      SignalComponent: [],
      NavSatSignalQualityAllDirection: [],
      SignalComponentAllDirection: [],
      SatComponent: [],
      FrequencyComponent: [],

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
  created () {
    this.initSignalComponent()
  },
  mounted () {
    this.initSignalComponent()
  },
  computed: {
    getSignalComponent: function () {
      return this.SignalComponent.slice(this.SignalComponentSelect, this.SignalComponentSelect + 1)
    },
    getSatComponent: function () {
      return this.SatComponent.slice(this.SatComponentSelect, this.SatComponentSelect + 1)
    },
    getFrequencyComponent: function () {
      return this.FrequencyComponent.slice(this.FrequencyComponentSelect, this.FrequencyComponentSelect + 1)
    },
    getSignalComponentAllDirection: function () {
      return this.SignalComponentAllDirection.slice(this.SignalComponentAllDirectionSelect, this.SignalComponentAllDirectionSelect + 1)
    }
  },
  methods: {
    initSignalComponent () {
      this.SignalComponentOptions = []
      for (let i = 0; i < this.SignalComponent.length; i++) {
        this.SignalComponentOptions[i] = {value: i, label: '信号分量 ' + (i + 1)}
      }
    },
    initSatComponent () {
      this.SatComponentOptions = []
      for (let i = 0; i < this.SatComponent.length; i++) {
        this.SatComponentOptions[i] = {value: i, label: '卫星 ' + (i + 1)}
      }
    },
    initFrequencyComponent () {
      this.FrequencyComponentOptions = []
      for (let i = 0; i < this.FrequencyComponent.length; i++) {
        this.FrequencyComponentOptions[i] = {value: i, label: '频点 ' + (i + 1)}
      }
    },
    initSignalComponentAllDirection () {
      this.SignalComponentAllDirectionOptions = []
      for (let i = 0; i < this.SignalComponentAllDirection.length; i++) {
        this.SignalComponentAllDirectionOptions[i] = {value: i, label: '信号分量 ' + (i + 1)}
      }
    },
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
            this.initSignalComponent()
          })
          break
        case 'NavSatSignalQualityAllDirection':
          this.$post('findNavSatSignalQualityAllDirectionByTime', formData).then((response) => {
            console.log(response)
            this.NavSatSignalQualityAllDirection = response.data['NavSatSignalQualityAllDirection']
            this.SignalComponentAllDirection = response.data['SignalComponentAllDirection']
            this.FrequencyComponent = response.data['FrequencyComponent']
            this.SatComponent = response.data['SatComponent']
            this.initSatComponent()
            this.initFrequencyComponent()
            this.initSignalComponentAllDirection()
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
