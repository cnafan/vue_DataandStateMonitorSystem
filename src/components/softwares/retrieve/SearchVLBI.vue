<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="工作状态" name="工作状态">
        <keep-alive>
          <SearchBar target="VLBIWorkState" @callSearch="search($event)"
                     :option="this.$store.state.LabelCommon"></SearchBar>
        </keep-alive>
        <keep-alive>
          <VLBIWorkState :data="VLBIWorkState"></VLBIWorkState>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VLBIWorkState from '../../datas/VLBIWorkState'
import SearchBar from '../../common/SearchBar'

export default {
  name: 'VLBI',
  data () {
    return {
      activeName: '工作状态',
      VLBIWorkState: []
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    },
    search (argument) {
      let formData = {
        'hour': 0,
        'min': 0,
        'sec': 0,
        'ms': 0
      }
      // let input = this.$store.state.SearchInput
      // formData.hour=
      // formData[this.$store.state.SearchItem] = this.$store.state.SearchInput
      switch (argument) {
        case 'VLBIWorkState':
          this.$post('findVLBIWorkStateByTime', formData, 'VLBI工作状态').then((response) => {
            // console.log(response)
            this.VLBIWorkState = response.data
          })
          break
        default:
          break
      }
    }
  },
  components: {
    VLBIWorkState,
    SearchBar
  }
}
</script>

<style scoped>

</style>
