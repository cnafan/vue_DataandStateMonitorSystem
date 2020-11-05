<template>
  <div>
<!--    <p style="text-align: center">工作状态</p>-->
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="currentTime"
        label="时标">
      </el-table-column>
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
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>
</style>
