<template>
  <div>
<!--    <p style="text-align: center">GNSS系统时差数据</p>-->
    <!--      :row-class-name="tableRowClassName"-->
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="receiveTime"
        :label=receiveTimeTitle>
      </el-table-column>
      <el-table-column
        prop="measName"
        label="数据类型">
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
import SatMixin from '../../mixins/satMixin'

export default {
  name: 'GnssSystemClockDifference',
  props: {
    'data': {
      type: Array
    }
  },
  // methods:{
  //   // eslint-disable-next-line no-unused-vars
  //   tableRowClassName({row, rowIndex}) {
  //     if (row.measValue === 9999999) {
  //       return 'success-row';
  //     }
  //     return '';
  //   }
  // },
  mixins: [SatMixin]
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #ff9090;
}
</style>
