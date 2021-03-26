<template>
  <div>
    <!--    <p style="text-align: center">定向天线导航卫星信号质量监测结果</p>-->
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
        label="数据时标">
      </el-table-column>
      <el-table-column
        prop="said"
        :formatter="getSaidName"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="stid"
        :formatter="getStationName"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="sifr"
        :formatter="getSifr"
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

import SatMixin from '../../../mixins/satMixin'

export default {
  name: 'NavSatSignalQuality',
  props: {
    'data': {
      type: Array
    }
  },
  mixins: [SatMixin],
  methods: {
    getSifr (row, column, cellValue) {
      let saidValue = this.data[0].said
      return this.getSifrName(saidValue, cellValue)
    }
  }
}
</script>

<style scoped>

</style>
