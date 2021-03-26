<template>
  <div>
    <!--    <img src="chrome-extension://kphkondodeojfcodfegfglmdeondhlbc/test1/charts.jpg"/>-->
    <!--    <el-image-->
    <!--      style="width: 300px;height: 250px"-->
    <!--      src=""-->
    <!--      fit="scale-down"></el-image>-->
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <!--      <el-table-column-->
      <!--        min-width="3"-->
      <!--        prop="time"-->
      <!--        label="时标">-->
      <!--      </el-table-column>-->
      <el-table-column
        min-width="1"
        prop="sico"
        :formatter="getSico"
        label="信号分量">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="prsm"
        label="伪距稳定性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="prss"
        label="伪距稳定性标准差">
      </el-table-column>

      <el-table-column
        min-width="1"
        prop="cpsm"
        label="载波相位稳定性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cpss"
        label="载波相位稳定性标准差">
      </el-table-column>
    </el-table>
    <el-table
      class="table"
      :data="this.data"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      stripe
      border
      style="width: 100%">
      <el-table-column
        min-width="1"
        prop="dpsm"
        label="多普勒稳定性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="dpss"
        label="多普勒稳定性标准差">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cnsm"
        label="载噪比稳定性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cnss"
        label="载噪比稳定性标准差">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop=""
        label="">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

import SatMixin from '../../../mixins/satMixin'
export default {
  name: 'SignalComponentAllDirection',
  props: {
    'data': {
      type: Array
    },
    'fatherData': {
      type: Object
    }
  },
  mixins: [SatMixin],
  methods: {
    getComponent () {
      if (this.$store.getters.getData['SignalComponentAllDirection'] === undefined) {
        return []
      }
      let components = this.$store.getters.getData['SignalComponentAllDirection']
      if (components.length < 1) {
        components = []
      } else {
        components = components[0]
      }
      return components
    },
    getSico (row, column, cellValue) {
      let saidValue = this.fatherData.satid
      let sifrValue = this.fatherData.sifr
      return this.getSicoName(saidValue, sifrValue, cellValue)
    }
  }
}
</script>

<style scoped>

</style>
