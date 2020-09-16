<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="地面站工作状态信息" name="地面站工作状态信息">
        <keep-alive>
          <GroundStationWorkStateInfo></GroundStationWorkStateInfo>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GroundStationWorkStateInfo from '../datas/GroundStationWorkStateInfo'

export default {
  name: 'StateMonitorAndWarning',
  data () {
    return {
      activeName: '地面站工作状态信息'
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  },
  components: {
    GroundStationWorkStateInfo
  }
}
</script>

<style scoped>

</style>
