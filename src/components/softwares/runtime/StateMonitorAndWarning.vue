<template>
  <div class="main-page">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="地面站工作状态信息" name="1">
        <keep-alive>
          <GroundStationWorkStateInfo :data="this.$store.state.GroundStationWorkStateInfo"></GroundStationWorkStateInfo>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import GroundStationWorkStateInfo from '../../datas/GroundStationWorkStateInfo'
import tabMixin from '../../../mixins/tabMixin'

export default {
  name: 'StateMonitorAndWarning',
  mixins: [tabMixin],
  components: {
    GroundStationWorkStateInfo
  }
}
</script>

<style scoped>

</style>
