<template>
  <!--    :span-method="mergeRowMethod">-->
  <el-table
    class="table"
    :data="loadRowData"
    border
    highlight-current-row
    header-cell-class-name="tableHeaderCell"
    :span-method="mergeRowMethod"
    style="width: 100%;">
    <el-table-column
      prop="stid"
      :formatter="getStationName"
      label="站编号">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时标">
    </el-table-column>
    <el-table-column
      prop="busa"
      label="卫星数">
    </el-table-column>
    <el-table-column
      prop="said"
      label="卫星号">
    </el-table-column>
    <el-table-column
      prop="nufr"
      label="频点数">
    </el-table-column>
    <el-table-column
      prop="sico"
      label="频点">
    </el-table-column>
    <el-table-column
      prop="nuco"
      label="信号分量数">
    </el-table-column>
  </el-table>
</template>

<script>
import SatMixin from '../../../mixins/satMixin'

export default {
  name: 'AllDirectionSignalComponent',
  props: {
    'data': {
      type: Array
    }
  },
  mixins: [SatMixin],
  data () {
    return {
      originData: [
        {
          stid: '01',
          time: '2020',
          busa: '765',
          satChildren: [
            {
              said: '111',
              nufr: '1',
              freChildren: [
                {
                  nuco: '01-1号',
                  sifr: 'b1'
                },
                {
                  nuco: '01-2号',
                  sifr: 'b2'
                }
              ]
            },
            {
              said: '222',
              nufr: '2',
              freChildren: [
                {
                  nuco: '01-1号',
                  sifr: 'b1'
                },
                {
                  nuco: '01-2号',
                  sifr: 'b2'
                }
              ]
            },
            {
              said: '333',
              nufr: '3',
              freChildren: [
                {
                  nuco: '01-1号',
                  sifr: 'b1'
                },
                {
                  nuco: '01-2号',
                  sifr: 'b2'
                }
              ]
            }
          ]
        },
        {
          stid: '02',
          time: '2021',
          busa: '567',
          satChildren: [
            {
              said: '111',
              nufr: '2',
              freChildren: [
                {
                  nuco: '01-1号',
                  sifr: 'b1'
                },
                {
                  nuco: '01-2号',
                  sifr: 'b2'
                }
              ]
            },
            {
              said: '222',
              nufr: '3',
              freChildren: [
                {
                  nuco: '01-1号',
                  sifr: 'b1'
                },
                {
                  nuco: '01-2号',
                  sifr: 'b2'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
    loadRowData () {
      let content = {}
      let tableRowData = []
      // let originArr = JSON.parse(JSON.stringify(this.originData))
      let originArr = this.data
      originArr.map((res, resIndex) => {
        console.log(resIndex)
        let numSubRes = 0
        if (res.satChildren.length === 0) {
          content = {}
          content['stid'] = res.stid
          content['time'] = res.time
          content['busa'] = res.busa
          content['rowNum2'] = 1
          tableRowData.push(content)
        } else {
          res.satChildren.map((subRes, subIndex) => {
            numSubRes = subRes.freChildren.length * res.satChildren.length
            if (subRes.freChildren.length === 0) {
              content = {}
              content['stid'] = res.stid
              content['time'] = res.time
              content['busa'] = res.busa
              content['said'] = subRes.said
              content['nufr'] = subRes.nufr
              if (subIndex === 0) {
                content['rowNum2'] = res.satChildren.length
              }
              content['rowNum1'] = 1
              console.log('content1', content)
              tableRowData.push(content)
            } else {
              subRes.freChildren.map((subsubRes, subsubIndex) => {
                content = {}
                content['stid'] = res.stid
                content['time'] = res.time
                content['busa'] = res.busa
                content['said'] = subRes.said
                content['nufr'] = subRes.nufr
                content['nuco'] = subsubRes.nuco
                content['sico'] = subsubRes.sico
                // 重点！赋值合并的行数数值，只需要取子循环的第一个数赋值待合并的行数即可
                if (subsubIndex === 0) {
                  content['rowNum1'] = subRes.freChildren.length
                  if (subIndex === 0) {
                    content['rowNum2'] = numSubRes
                  }
                }
                console.log('content', content)
                tableRowData.push(content)
              })
            }
          })
        }
      })
      return tableRowData
    }
  },
  methods: {
    // 合并行
    mergeRowMethod ({row, column, rowIndex, columnIndex}) {
      console.log(column)
      // columnIndex 代表列数，从0开始计数,我们要合并的字段属于第一列，取0
      switch (columnIndex) {
        case 0:
        case 1:
        case 2:
          return {
            rowspan: row.rowNum2, // 待合并行数 -- 合并的行数长度就等于之前赋值的子数据的长度；未赋值的即表示0，不显示
            colspan: row.rowNum2 > 0 ? 1 : 0 // 待合并列数 -- 合并的列数自身占一列，被合并的要返回0，表示不显示
          }
        case 3:
        case 4:
          console.log('rowindex:', rowIndex, 'columnIndex:', columnIndex, 'said:', row.rowNumSaid, 'bool', row.rowNumSaid > 0)
          return {
            rowspan: row.rowNum1, // 待合并行数 -- 合并的行数长度就等于之前赋值的子数据的长度；未赋值的即表示0，不显示
            colspan: row.rowNum1 > 0 ? 1 : 0 // 待合并列数 -- 合并的列数自身占一列，被合并的要返回0，表示不显示
          }
      }
    }
  }
}
</script>

<style scoped>

</style>
