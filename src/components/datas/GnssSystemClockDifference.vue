<template>
  <div>
    <p style="text-align: center">GNSS系统时差数据</p>
    <el-table
      id="table"
      :data="fromdatas"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">

      <el-table-column
        prop="MeasName"
        label="measName">
      </el-table-column>
      <el-table-column
        prop="MeasTime"
        label="measTime">
      </el-table-column>
      <el-table-column
        prop="MeasValue"
        label="measValue">
      </el-table-column>
<!--      <el-table-column-->
<!--        prop="measValueUTCGLONASST"-->
<!--        label="measValueUTCGLONASST">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measTimeUTCGST"-->
<!--        label="measTimeUTCGST">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measValueUTCGST"-->
<!--        label="measValueUTCGST">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measTimeUTCBDT"-->
<!--        label="measTimeUTCBDT">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measValueUTCBDT"-->
<!--        label="measValueUTCBDT">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measTimeUTCQZSST"-->
<!--        label="measTimeUTCQZSST">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measValueUTCQZSST"-->
<!--        label="measValueUTCQZSST">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measTimeUTCIRNSST"-->
<!--        label="measTimeUTCIRNSST">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measValueUTCIRNSST"-->
<!--        label="measValueUTCIRNSST">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measTimeUTCSBAST"-->
<!--        label="measTimeUTCSBAST">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="measValueUTCSBAST"-->
<!--        label="measValueUTCSBAST">-->
<!--      </el-table-column>-->
    </el-table>
  </div>
</template>
<script>
export default {
  props: ['fromdatas'],
  name: 'GnssSystemClockDifference',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
