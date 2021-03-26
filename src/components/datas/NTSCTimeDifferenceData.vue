<template>
  <div>
    <!--    <p style="text-align: center">CAPST-UTC（NTSC）溯源时差数据</p>-->
    <el-table
      class="table"
        id="table"
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
          prop="week"
          label="数据时标-周">
      </el-table-column>
      <el-table-column
          prop="sec"
          label="数据时标-周内秒">
      </el-table-column>
      <el-table-column
          prop="timeDifference"
          label="溯源时差数据(e-11s)e">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import SatMixin from '../../mixins/satMixin'
export default {
  name: 'NTSCTimeDifferenceData',
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
