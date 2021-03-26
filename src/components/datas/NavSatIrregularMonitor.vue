<template>
  <div>
    <!--    <p style="text-align: center">导航卫星异常监测结果</p>-->
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      :row-class-name="tableRowClassName"
      highlight-current-row
      border
      stripe
      style="width:100%">
      <el-table-column
        prop="receiveTime"
        min-width="1"
        :label=receiveTimeTitle>
      </el-table-column>
      <el-table-column
        prop="time"
        min-width="1"
        label="数据时标">
      </el-table-column>
      <el-table-column
        prop="said"
        min-width="1"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="stid"
        min-width="1"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="daty"
        min-width="1"
        label="数据分类">
      </el-table-column>
      <el-table-column
        prop="ercd"
        min-width="1"
        label="异常编码">
      </el-table-column>
      <el-table-column
        prop="emln"
        min-width="1"
        label="异常内容长度">
      </el-table-column>
      <el-table-column
        prop="ermg"
        min-width="4"
        :formatter="modifyColor"
        label="异常内容">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import SatMixin from '../../mixins/satMixin'
import {NOTIFICATION_OFFSET} from '@/config/display'

export default {
  name: 'NavSatIrregularMonitor',
  props: {
    'data': {
      type: Array
    }
  },
  mixins: [SatMixin],
  methods: {
    getCode: function (row, column, cellValue) {
      return new FileReader().readAsText(new Blob(cellValue))
    },
    modifyColor (row, column, cellValue) {
      if (cellValue === '溢出的长度') {
        this.$notify.error({
          title: '异常',
          message: '异常内容错误',
          // message: error.request,
          offset: NOTIFICATION_OFFSET
        })
      }
      return cellValue
    },
    tableRowClassName ({row}) {
      // 超出会报java outOfMemory错误，因此需要设置2000阈值
      if (row.emln > 2000) {
        return 'error-row'
      }
    }
  }
}
</script>

<style scoped>

</style>
