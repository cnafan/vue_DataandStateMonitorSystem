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
        prop="psdd"
        label="功率谱数值图">
          <el-popover trigger="hover" placement="left">
            <div style="width: 100%">
              <!--chrome-extension://kphkondodeojfcodfegfglmdeondhlbc/test1/charts.jpg-->
              <el-image
                style="width: 300px;height: 250px"
                :src="srcPath"
                fit="scale-down"></el-image>
            </div>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">功率谱数值图</el-tag>
            </div>
          </el-popover>
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="chpm"
        label="地面接收功率均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="chps"
        label="地面接收功率标准差">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="spsm"
        label="合成功率谱偏差均值">
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
        prop="spss"
        label="合成功率谱偏差标准差">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="colm"
        label="相关损失">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="scb1"
        label="S曲线过零点偏差1">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="scb2"
        label="S曲线过零点偏差2">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="scb3"
        label="S曲线过零点偏差3">
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
        prop="scb4"
        label="S曲线过零点偏差4">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="bswm"
        label="基带信号波形数字畸变量均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="bsws"
        label="基带信号波形数字畸变量标准差">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccam"
        label="码与载波一致性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccsm1"
        label="频内码相位一致性均值1">
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
        prop="ccsm2"
        label="频内码相位一致性均值2">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccsm3"
        label="频内码相位一致性均值3">
      </el-table-column>

      <el-table-column
        min-width="1"
        prop="ccss1"
        label="频内码相位一致性标准差1">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccss2"
        label="频内码相位一致性标准差2">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccss3"
        label="频内码相位一致性标准差3">
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
        prop="ccdm1"
        label="频间码相位一致性均值1">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccdm2"
        label="频间码相位一致性均值2">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccdm3"
        label="频间码相位一致性均值3">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccds1"
        label="频间码相位一致性标准差1">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccds2"
        label="频间码相位一致性标准差2">
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
        prop="ccds3"
        label="频间码相位一致性标准差3">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="prsm"
        :formatter="deal50000"
        label="伪距稳定性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="prss"
        :formatter="deal50000"
        label="伪距稳定性标准差">
      </el-table-column>

      <el-table-column
        min-width="1"
        prop="cpsm"
        :formatter="deal50000"
        label="载波相位稳定性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cpss"
        :formatter="deal50000"
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
        :formatter="deal50000"
        label="多普勒稳定性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="dpss"
        :formatter="deal50000"
        label="多普勒稳定性标准差">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cnsm"
        :formatter="deal50000"
        label="载噪比稳定性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="cnss"
        :formatter="deal50000"
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
  name: 'SignalComponent',
  props: {
    'data': {
      type: Array
    },
    'fatherData': {
      type: Object
    }
  },
  mixins: [SatMixin],
  data () {
    return {
      srcData: null
    }
  },
  computed: {
    srcPath: function () {
      console.log('imgPath', this.data[0].path)
      return 'http://localhost:8082/getImage?path=' + this.data[0].path
    }
  },
  methods: {
    getSico (row, column, cellValue) {
      let saidValue = this.fatherData.said
      let sifrValue = this.fatherData.sifr
      return this.getSicoName(saidValue, sifrValue, cellValue)
    },
    getImage () {
      this.$post('getImage', {}).then(response => {
        this.srcData = response.data
        // console.log(response.data)
      })
    },
    getComponent () {
      if (this.$store.getters.getData['SignalComponent'] === undefined) {
        return []
      }
      let components = this.$store.getters.getData['SignalComponent']
      if (components.length < 1) {
        components = []
      } else {
        components = components[0]
      }
      return components
    },
    deal50000 (row, column, cellValue) {
      if (cellValue === 5) {
        return 50000
      } else {
        return cellValue
      }
    }
  }
}
</script>

<style scoped>
/*//.table-wrapper /deep/ .el-table--fit{*/
/*//  padding: 20px;*/
/*//}*/
/*//.table-wrapper /deep/  .el-table, .el-table__expanded-cell {*/
/*//  background-color: transparent;*/
/*//}*/
/*//*/
/*//.table-wrapper /deep/ .el-table tr {*/
/*//  background-color: transparent!important;*/
/*//}*/
/*//.table-wrapper /deep/  .el-table--enable-row-transition .el-table__body td, .el-table .cell{*/
/*//  background-color: transparent;*/
/*//}*/
</style>
