<template>
  <div>
    <el-table
      class="table"
      :data="data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      border
      style="width: 100%">
      <el-table-column
        prop="monitorTime"
        label="数据时标">
      </el-table-column>
      <el-table-column
        prop="sStatus"
        label='监测站状态'>
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
import {DATA_DISPLAY_RECEIVETIME_TITLE} from '/src/config/display'

export default {
  name: 'TimeMonitor',
  props: {
    'data': {
      type: Array
    }
  },
  data () {
    return {
      receiveTimeTitle: DATA_DISPLAY_RECEIVETIME_TITLE
    }
  }
}
</script>

<style scoped>

</style>
