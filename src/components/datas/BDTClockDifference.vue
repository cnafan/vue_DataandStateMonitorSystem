<template>
  <div>
    <el-table
      class="table"
      :data="data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      :row-class-name="tableRowClassName"
      border
      style="width: 100%">
      <el-table-column
        prop="station"
        :formatter="getStationType"
        label="站点">
      </el-table-column>
      <el-table-column
        prop="receiveTime"
        :label=receiveTimeTitle>
      </el-table-column>
      <el-table-column
        prop="time"
        label="数据时标">
      </el-table-column>
      <el-table-column
        prop="clockDifference"
        label="UTC(NTSC)与BDT的钟差">
      </el-table-column>
      <!--        :formatter="getFixData"-->
    </el-table>
  </div>
</template>

<script>
import SatMixin from '../../mixins/satMixin'

export default {
  name: 'BDTClockDifference',
  props: {
    'data': {
      type: Array
    }
  },
  mixins: [SatMixin],
  methods: {
    tableRowClassName ({row, rowIndex}) {
      console.log(row,rowIndex)
      // if (row.clockDifference < -99999 || row.clockDifference > 99999) {
      //   return 'error-row'
      // }
      // return ''
    }
    // getFixData (row, column, cellValue) {
    //   return (cellValue * Math.pow(10, -SCIENTIFIC_NOTATION_11)).toFixed(SCIENTIFIC_NOTATION_11)
    // }
  }
}
</script>

<style scoped>

</style>
