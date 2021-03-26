<template>
  <div>
    <el-table
      class="table"
      :data="loadRowData"
      border
      style="width: 100%;"
      header-cell-class-name="tableHeaderCell"
      highlight-current-row
      :span-method="mergeRowMethod">
      <el-table-column
        align="left"
        prop="sid"
        label="站编号">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时标">
      </el-table-column>
      <el-table-column
        prop="said"
        label="卫星号">
      </el-table-column>
      <el-table-column
        prop="sifr"
        label="频点">
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
export default {
  name: 'DirectionSignalComponent',
  props: {
    'data': {
      type: Array
    }
  },
  data () {
    return {
      originData: [
        {
          sid: '01',
          time: '2020',
          said: '111',
          children: [
            {
              nuco: '01-1号',
              sifr: '1'
            },
            {
              nuco: '01-2号',
              sifr: '2'
            },
            {
              nuco: '01-3号',
              sifr: '3'
            }
          ]
        }, {
          sid: '02',
          time: '2020',
          said: '111',
          children: [
            {
              nuco: '01-1号',
              sifr: '1'
            },
            {
              nuco: '01-2号',
              sifr: '2'
            },
            {
              nuco: '01-3号',
              sifr: '3'
            }
          ]
        }, {
          sid: '03',
          time: '2020',
          said: '111',
          children: [
            {
              nuco: '01-1号',
              sifr: '1'
            },
            {
              nuco: '01-2号',
              sifr: '2'
            },
            {
              nuco: '01-3号',
              sifr: '3'
            }
          ]
        }, {
          sid: '04',
          time: '2020',
          said: '111',
          children: [
            {
              nuco: '01-1号',
              sifr: '1'
            },
            {
              nuco: '01-2号',
              sifr: '2'
            },
            {
              nuco: '01-3号',
              sifr: '3'
            }
          ]
        }, {
          sid: '05',
          time: '2020',
          said: '111',
          children: [
            {
              nuco: '01-1号',
              sifr: '1'
            },
            {
              nuco: '01-2号',
              sifr: '2'
            },
            {
              nuco: '01-3号',
              sifr: '3'
            }
          ]
        }
      ]
    }
  },
  computed: {
    loadRowData () {
      console.log('处理数据')
      console.log(this.data)
      let tableRowData = []
      // let originArr = JSON.parse(JSON.stringify(this.originData))
      let originArr = this.data
      // 普通的数据转换，将后台格式转换成element表格需要的格式
      if (Array.isArray(originArr)) {
        originArr.map(res => {
          if (Array.isArray(res.children)) {
            res.children.map((subRes, subIndex) => {
              let content = {}
              content = subRes
              content['sid'] = res.sid
              content['time'] = res.time
              content['said'] = res.said
              // 重点！赋值合并的行数数值，只需要取子循环的第一个数赋值待合并的行数即可
              if (subIndex === 0) {
                content['rowNum'] = res.children.length
              }
              tableRowData.push(content)
            })
          }
        })
      }
      return tableRowData
    }
  },
  methods: {
    // 合并行
    mergeRowMethod ({row, column, rowIndex, columnIndex}) {
      console.log('开始合并' + columnIndex,column,rowIndex)
      // columnIndex 代表列数，从0开始计数,我们要合并的字段属于第一列，取0
      if (columnIndex === 0 || columnIndex === 1 || columnIndex === 2) {
        return {
          rowspan: row.rowNum, // 待合并行数 -- 合并的行数长度就等于之前赋值的子数据的长度；未赋值的即表示0，不显示
          colspan: row.rowNum > 0 ? 1 : 0 // 待合并列数 -- 合并的列数自身占一列，被合并的要返回0，表示不显示
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
