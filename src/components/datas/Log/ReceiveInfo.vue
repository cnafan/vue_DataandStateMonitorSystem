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
        prop="MeasName"
        label="信源标识">
      </el-table-column>
      <el-table-column
        prop="MeasName"
        label="信宿标识">
      </el-table-column>
      <el-table-column
        prop="MeasTime"
        label="时间">
      </el-table-column>
      <el-table-column
        prop="MeasValue"
        label="内容">
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
