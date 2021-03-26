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
        prop="receiveTime"
        :label=receiveTimeTitle>
      </el-table-column>
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
import SatMixin from '../../../mixins/satMixin'
export default {
  name: 'NavSatSignalQualityAllDirection',
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
