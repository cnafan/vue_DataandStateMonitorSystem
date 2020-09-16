<template>
  <div>
    <p style="text-align: center">全向天线导航卫星信号质量监测结果</p>
    <el-table
      id="table"
      :data="this.$store.state.NavSatSignalQualityAllDirection"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      border
      stripe
      style="width:100%">
      <el-table-column
        prop="time"
        label="时标">
      </el-table-column>
      <el-table-column
        prop="stid"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="nusa"
        label="卫星数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'NavSatSignalQualityAllDirection'
}
</script>

<style scoped>

</style>
