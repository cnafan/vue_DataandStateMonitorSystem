<template>
  <div>
<!--    <p style="text-align: center">GNSS系统时差数据</p>-->
    <el-table
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">

      <el-table-column
        prop="MeasName"
        label="数据类型">
      </el-table-column>
      <el-table-column
        prop="MeasTime"
        label="数据产生时间">
      </el-table-column>
      <el-table-column
        prop="MeasValue"
        label="数据值">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'GnssSystemClockDifference',
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
