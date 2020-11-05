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
        prop="time"
        label="时标">
      </el-table-column>
      <el-table-column
        prop="said"
        :formatter="getSaid"
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
export default {
  name: 'NavSatSignalQuality',
  props: {
    'data': {
      type: Array
    }
  },
  methods: {
    getSifr (row, column, cellValue) {
      let saidValue = this.data[0].said
      if (saidValue >= 0 && saidValue <= 49) {
        switch (cellValue) {
          case 1:
            return 'B1'
          case 2:
            return 'B2'
          case 3:
            return 'B3'
          default:
            return cellValue
        }
      } else if (saidValue >= 50 && saidValue <= 99) {
        switch (cellValue) {
          case 1:
            return 'L1'
          case 2:
            return 'L2'
          case 3:
            return 'L5'
          default:
            return cellValue
        }
      } else if (saidValue >= 100 && saidValue <= 149) {
        switch (cellValue) {
          case 1:
            return 'E1'
          case 2:
            return 'E5'
          case 3:
            return 'E6'
          default:
            return cellValue
        }
      } else if (saidValue >= 150 && saidValue <= 219) {
        switch (cellValue) {
          case 1:
            return 'G1'
          case 2:
            return 'G2'
          case 3:
            return 'G3'
          case 4:
            return 'G5'
          default:
            return cellValue
        }
      } else if (saidValue >= 220 && saidValue <= 255) {
        switch (cellValue) {
          default:
            return cellValue
        }
      } else if (saidValue >= 256 && saidValue <= 511) {
        return cellValue
      }
    },
    getSaid (row, column, cellValue) {
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
    },
    getStationName (row, column, cellValue) {
      switch (cellValue) {
        case 2:
          return '7.3米L天线'
        case 8:
          return '13米C/L_1天线'
        case 15:
          return '盱眙5米天线'
        case 16:
          return '三亚5米天线'
        case 26:
          return '明思克5米天线'
        case 30:
          return '接收机1'
        case 31:
          return '接收机2'
        case 32:
          return '接收机3'
        case 33:
          return '接收机4'
        default:
          return cellValue
      }
    }
  }
}
</script>

<style scoped>

</style>
