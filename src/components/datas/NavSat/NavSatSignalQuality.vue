<template>
  <div>
<!--    <p style="text-align: center">定向天线导航卫星信号质量监测结果</p>-->
    <el-table
      id="table"
      :data="this.data"
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
        prop="said"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="stid"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="sifr"
        label="信号频点">
      </el-table-column>
      <el-table-column
        prop="nuco"
        label="信号分量数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'NavSatSignalQuality',
  props: {
    'data': {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
