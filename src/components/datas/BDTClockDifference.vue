<template>
  <div>
    <!--    <p style="text-align: center">UTC(NTSC)于BDT的钟差</p>-->
    <!--    斑马纹-->
    <!--          stripe-->
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
        :formatter="getStationName"
        label="站点">
      </el-table-column>
      <el-table-column
        prop="time"
        label="数据时标（UTC）">
      </el-table-column>
      <el-table-column
        :formatter="getFixData"
        prop="clockDifference"
        label="UTC(NTSC)与BDT的钟差">
      </el-table-column>
      <!--        :formatter="getFixData"-->
    </el-table>
  </div>
</template>

<script>
import {SCIENTIFIC_NOTATION_11} from '../../../config/display'

export default {
  name: 'BDTClockDifference',
  props: {
    'data': {
      type: Array
    }
  },

  methods: {
    tableRowClassName ({row, rowIndex}) {
      // console.log('rowIndex', row, rowIndex)
      // console.log('row', row.clockDifference, typeof row.clockDifference)
      // if (rowIndex === 1) {
      //   return 'warning-row'
      // } else if (rowIndex === 2) {
      //   return 'success-row'
      // }
      if (row.clockDifference < -99999 || row.clockDifference > 99999 || rowIndex === 2) {
        return 'error-row'
      }
      return ''
    },
    getFixData (row, column, cellValue) {
      return (cellValue * Math.pow(10, -SCIENTIFIC_NOTATION_11)).toFixed(SCIENTIFIC_NOTATION_11)
    },
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
