<template>
  <div>
<!--    <p style="text-align: center">BDS3每颗卫星的星钟改正数</p>-->
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="station"
        :formatter="getStationName"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="time"
        label="数据时标（UTC）">
      </el-table-column>
      <el-table-column
        prop="svid"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="svclk"
        label="该颗卫星的星钟改正数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'BDSClockCorrection',
  props: {
    'data': {
      type: Array
    }
  },
  methods: {
    getStationName (row, column, cellValue) {
      switch (cellValue) {
        case 0:
          return '海外站'
        case 1:
          return '西安站'
        default:
          break
      }
    }
  }
}
</script>

<style scoped>

</style>
