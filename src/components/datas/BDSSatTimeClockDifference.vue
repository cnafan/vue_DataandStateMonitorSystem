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
        :formatter="getStationName"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时标">
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

export default {
  name: 'BDSSatTimeClockDifference',
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
