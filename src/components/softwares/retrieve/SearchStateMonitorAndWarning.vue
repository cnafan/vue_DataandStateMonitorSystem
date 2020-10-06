<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="地面站工作状态信息" name="地面站工作状态信息">
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

export default {
  name: 'StateMonitorAndWarning',
  data () {
    return {
      activeName: '地面站工作状态信息',
      GroundStationWorkStateInfo: []
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
        case 'GroundStationWorkStateInfo':
          this.$post('findGroundStationByTime', formData).then((response) => {
            console.log(response)
            this.GroundStationWorkStateInfo = response
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
