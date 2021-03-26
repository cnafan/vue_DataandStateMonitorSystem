<template>
  <div>
<!--    <p style="text-align: center">UTC(NTSC)于BDS3每颗卫星时间的钟差</p>-->
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
        prop="packetAmount"
        label="总数据包数">
      </el-table-column>
      <el-table-column
        prop="packetNo"
        label="本包序号">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import SatMixin from '../../mixins/satMixin'

export default {
  name: 'BDSSatTimeClockDifference',
  props: {
    'data': {
      type: Array
    }
  },
  mixins: [SatMixin]
}
</script>

<style scoped>

</style>
