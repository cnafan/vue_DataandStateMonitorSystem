<template>
  <div>
    <p style="text-align: center"></p>
    <el-table
      id="table"
      :data="this.$store.state.SatComponent"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="time"
        label="时标">
      </el-table-column>
      <el-table-column
        prop="satID"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="nufr"
        label="信号频点数">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'SatComponent'
}
</script>

<style scoped>

</style>
