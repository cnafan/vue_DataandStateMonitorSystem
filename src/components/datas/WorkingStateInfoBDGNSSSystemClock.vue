<template>
  <div>
    <p style="text-align: center">工作状态</p>
    <el-table
      id="table"
      :data="this.$store.state.WorkingStateInfoBDGNSSSystemClock"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="measTime"
        label="数据产生时间">
      </el-table-column>
      <el-table-column
        prop="measValue"
        label="数据值">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'WorkingStateInfoBDGNSSSystemClock',
  methods: {
    datas () {
      return this.$store.getters.getData
    }
  }
}
</script>

<style scoped>
</style>
