<template>
  <div class="main-page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="地面站工作状态信息" name="1">
        <keep-alive>
          <SearchBar target="GroundStationWorkStateInfo" @callSearch="search($event)"
                     :option="this.$store.state.LabelCommon"></SearchBar>
        </keep-alive>
        <keep-alive>
          <GroundStationWorkStateInfo :data="GroundStationWorkStateInfo"></GroundStationWorkStateInfo>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GroundStationWorkStateInfo from '../../datas/GroundStationWorkStateInfo'
import SearchBar from '../../common/SearchBar'
import tabMixin from '../../../mixins/tabMixin'

export default {
  name: 'SearchStateMonitorAndWarning',
  mixins: [tabMixin],
  data () {
    return {
      GroundStationWorkStateInfo: []
    }
  },
  methods: {
    search (argument) {
      let formData = {}
      formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
      switch (argument) {
        case 'GroundStationWorkStateInfo':
          this.$post('findGroundStationByTime', formData, '地面站工作状态').then((response) => {
            // console.log(response)
            this.GroundStationWorkStateInfo = response.data
          })
          break
        default:
          break
      }
    }
  },
  components: {
    GroundStationWorkStateInfo,
    SearchBar
  }
}
</script>

<style scoped>

</style>
