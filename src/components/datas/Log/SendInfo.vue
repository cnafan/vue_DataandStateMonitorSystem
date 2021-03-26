<template>
  <div>
    <el-table
      class="table"
      :data="this.$store.state.SendInfo"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="time"
        :label=receiveTimeTitle>
      </el-table-column>
      <el-table-column
        prop="info"
        label="数据类型">
      </el-table-column>
      <el-table-column
        prop="name"
        label="信宿标识">
      </el-table-column>
      <el-table-column
        prop="result"
        label="结果">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import SatMixin from '../../../mixins/satMixin'
export default {
  name: 'SendInfo',
  mixins: [SatMixin]
}
</script>

<style scoped>

</style>
