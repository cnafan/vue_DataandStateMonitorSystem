<template>
  <div style="width: 100%">
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
        :formatter="getStationName"
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
  },
  methods: {
    getStationName (row, column, cellValue) {
      switch (cellValue) {
        case 2:
          return '7.3米L天线'
        case 8:
          return '13米C/L_1天线'
        case 15:
          return '盱眙5米天线'
        case 16:
          return '三亚5米天线'
        case 26:
          return '明思克5米天线'
        case 30:
          return '接收机1'
        case 31:
          return '接收机2'
        case 32:
          return '接收机3'
        case 33:
          return '接收机4'
        default:
          return cellValue
      }
    }
  }
}
</script>

<style scoped>

</style>
