<template>
  <div>
    <p style="text-align: center">广播星历告警信息</p>
    <el-table
      id="table"
      :data="fromdatas"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="week"
        label="week">
      </el-table-column>
      <el-table-column
        prop="sec"
        label="sec">
      </el-table-column>
      <el-table-column
        prop="warningInfo1"
        label="warningInfo1">
      </el-table-column>
      <el-table-column
        prop="warningInfo2"
        label="warningInfo2">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['fromdatas'],
  name: 'BroadcastEphemerisWarningInfo',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
