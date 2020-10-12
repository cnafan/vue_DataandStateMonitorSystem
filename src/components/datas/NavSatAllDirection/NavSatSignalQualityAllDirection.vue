<template>
  <div>
<!--        <p style="text-align: center"></p>-->
    <el-table
      class="table"
      :data="data"
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
        prop="stationID"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="numOfSat"
        label="卫星数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'NavSatSignalQualityAllDirection',
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
