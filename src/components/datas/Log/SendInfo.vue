<template>
  <div>
    <el-table
      id="table"
      :data="this.$store.state.SendInfo"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">

      <el-table-column
        prop="info"
        label="数据类型">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="name"
        label="信宿标识">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'SendInfo'
}
</script>

<style scoped>

</style>
