<template>
  <div>
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <!--      <el-table-column-->
      <!--        prop="time"-->
      <!--        label="时标">-->
      <!--      </el-table-column>-->
      <el-table-column
        prop="satID"
        :formatter="getSatid"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="nufr"
        label="信号频点数">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'SatComponent',
  props: {
    'data': {
      type: Array
    }
  },
  methods: {
    getSatid (row, column, cellValue) {
      if (cellValue >= 0 && cellValue <= 49) {
        return 'GPS卫星'
      }
      if (cellValue >= 50 && cellValue <= 99) {
        return 'Galileo卫星'
      }
      if (cellValue >= 100 && cellValue <= 149) {
        return 'GLONASS卫星'
      }
      if (cellValue >= 150 && cellValue <= 219) {
        return '北斗系统卫星'
      }
      if (cellValue >= 220 && cellValue <= 255) {
        return '其它系统导航卫星'
      }
      if (cellValue >= 256 && cellValue <= 511) {
        return '低轨卫星'
      } else {
        return cellValue
      }
    }
  }
}
</script>

<style scoped>

</style>
