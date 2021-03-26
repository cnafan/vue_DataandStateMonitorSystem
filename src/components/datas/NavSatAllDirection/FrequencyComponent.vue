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
      <el-table-column
        prop="sifr"
        :formatter="getSifrName"
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
  name: 'FrequencyComponent',
  props: {
    'data': {
      type: Array
    },
    'fatherData': {
      type: Object
    }
  },
  mixins: [SatMixin]
}
</script>

<style scoped>

</style>
