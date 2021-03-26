<template>
  <div>
<!--    <p style="text-align: center">BDS3每颗卫星的星钟改正数</p>-->
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      :row-class-name="tableRowClassName"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="station"
        :formatter="getStationType"
        label="站编号">
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
import SatMixin from '../../mixins/satMixin'

export default {
  name: 'BDSClockCorrection',
  props: {
    'data': {
      type: Array
    }
  },
  mixins: [SatMixin],
  methods: {
    tableRowClassName ({row, rowIndex}) {
      console.log(row,rowIndex)
      // if (row.svclk < -99999999999 || row.svclk > 99999999999) {
      //   return 'error-row'
      // }
      // return ''
    }
  }
}
</script>

<style scoped>

</style>
