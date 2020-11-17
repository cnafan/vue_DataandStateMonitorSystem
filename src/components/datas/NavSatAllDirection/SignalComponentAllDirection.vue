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
        <template slot-scope="scope">
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
        </template>
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
        label="频内码相位一致性均值">
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
        label="频内码相位一致性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccsm3"
        label="频内码相位一致性均值">
      </el-table-column>

      <el-table-column
        min-width="1"
        prop="ccss1"
        label="频内码相位一致性标准差">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccss2"
        label="频内码相位一致性标准差">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccss3"
        label="频内码相位一致性标准差">
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
        label="频间码相位一致性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccdm2"
        label="频间码相位一致性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccdm3"
        label="频间码相位一致性均值">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccds1"
        label="频间码相位一致性标准差">
      </el-table-column>
      <el-table-column
        min-width="1"
        prop="ccds2"
        label="频间码相位一致性标准差">
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
        label="频间码相位一致性标准差">
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

let sicoMap = new Map()
sicoMap.set('111', 'B1I')
sicoMap.set('112', 'B1Cd')
sicoMap.set('113', 'B1Cp')
sicoMap.set('114', 'B1Cpa')
sicoMap.set('115', 'B1Cpb')
sicoMap.set('116', 'B1A')
sicoMap.set('117', 'SBAS-B1C')
sicoMap.set('118', 'SBAS-B1Ad')
sicoMap.set('119', 'SBAS-B1Ap')

sicoMap.set('121', 'B2ad')
sicoMap.set('122', 'B2ap')
sicoMap.set('123', 'B2bI')
sicoMap.set('124', 'B2bQ')
sicoMap.set('125', 'SBAS-B2ad')
sicoMap.set('126', 'SBAS-B2ap')
sicoMap.set('127', 'PPP-B2bI')
sicoMap.set('128', 'PPP-B2bQ')

sicoMap.set('131', 'B3I')
sicoMap.set('132', 'B3Q')
sicoMap.set('133', 'B3Ad')
sicoMap.set('134', 'B3Ap')
sicoMap.set('135', 'B3AEd')
sicoMap.set('136', 'B3AEp')

sicoMap.set('211', 'L1C/A')
sicoMap.set('212', 'L1Cd')
sicoMap.set('213', 'L1Cp')
sicoMap.set('214', 'L1P(Y)')
sicoMap.set('215', 'L1M')

sicoMap.set('221', 'L2Cd')
sicoMap.set('222', 'L2Cp')
sicoMap.set('223', 'L2P(Y)')
sicoMap.set('224', 'L2M')

sicoMap.set('231', 'L5Cd')
sicoMap.set('232', 'L5Cp')

sicoMap.set('311', 'E1A')
sicoMap.set('312', 'E1B')
sicoMap.set('313', 'E1C')

sicoMap.set('321', 'E5aI')
sicoMap.set('322', 'E5aQ')
sicoMap.set('323', 'E5bI')
sicoMap.set('324', 'E5bQ')

sicoMap.set('331', 'E6A')
sicoMap.set('332', 'E6B')
sicoMap.set('333', 'E6C')

sicoMap.set('411', 'G1OF')
sicoMap.set('412', 'G1SF')
sicoMap.set('413', 'G1OC')
sicoMap.set('414', 'G1SC')
sicoMap.set('415', 'G1OCM')

sicoMap.set('421', 'G2OF')
sicoMap.set('422', 'G2SF')
sicoMap.set('423', 'G2SC')
sicoMap.set('424', 'G2OC')

sicoMap.set('431', 'G3SC')
sicoMap.set('432', 'G3OC')

sicoMap.set('441', 'G5OC')
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
      // console.log('saidValue', saidValue)
      // console.log('sifrValue', sifrValue)

      if (saidValue >= 0 && saidValue <= 49) {
        return sicoMap.get('1' + sifrValue + cellValue)
      } else if (saidValue >= 50 && saidValue <= 99) {
        return sicoMap.get('2' + sifrValue + cellValue)
      } else if (saidValue >= 100 && saidValue <= 149) {
        return sicoMap.get('3' + sifrValue + cellValue)
      } else if (saidValue >= 150 && saidValue <= 219) {
        return sicoMap.get('4' + sifrValue + cellValue)
      } else if (saidValue >= 220 && saidValue <= 255) {
        return cellValue
        // 接口文档待定
        // return sicoMap.get('5' + sifrValue + cellValue)
      } else if (saidValue >= 256 && saidValue <= 511) {
        return cellValue
        // 接口文档待定
        // return sicoMap.get('6' + sifrValue + cellValue)
      } else {
        return cellValue
      }
    }
  }
}
</script>

<style scoped>

</style>
