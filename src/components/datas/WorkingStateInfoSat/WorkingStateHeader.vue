<template>
  <div>
    <el-table
      class="table"
      :data="this.data"
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
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
      <el-table-column
        prop=""
        label="">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import SatMixin from '../../../mixins/satMixin'

export default {
  name: 'WorkingStateHeader',
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
