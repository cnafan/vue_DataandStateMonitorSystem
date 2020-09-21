<template>
  <div>
    <el-table
      id="table"
      :data="this.$store.state.ReceiveInfo"
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
        label="信源标识">
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
  name: 'ReceiveInfo'
}
</script>

<style scoped>

</style>
