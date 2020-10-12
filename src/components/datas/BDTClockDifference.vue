<template>
  <div>
    <!--    <p style="text-align: center">UTC(NTSC)于BDT的钟差</p>-->
    <el-table
      class="table"
      :data="data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
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
        prop="clockDifference"
        label="UTC(NTSC)与BDT的钟差">
      </el-table-column>

    </el-table>
  </div>
</template>
<script>
export default {
  name: 'BDTClockDifference',
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
