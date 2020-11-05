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
        prop="sifr"
        :formatter="getSifr"
        label="信号频点">
      </el-table-column>
      <el-table-column
        prop="nuco"
        label="信号分量数">
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
  name: 'FrequencyComponent',
  props: {
    'data': {
      type: Array
    },
    'fatherData': {
      type: Object
    }
  },
  methods: {
    getSifr (row, column, cellValue) {
      let satidValue = this.fatherData.satid
      if (satidValue >= 0 && satidValue <= 49) {
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
      } else if (satidValue >= 50 && satidValue <= 99) {
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
      } else if (satidValue >= 100 && satidValue <= 149) {
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
      } else if (satidValue >= 150 && satidValue <= 219) {
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
      } else if (satidValue >= 220 && satidValue <= 255) {
        switch (cellValue) {
          default:
            return cellValue
        }
      } else if (satidValue >= 256 && satidValue <= 511) {
        return cellValue
      }
    }
  }
}
</script>

<style scoped>

</style>
