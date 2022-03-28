<template>
  <div class="order-table-contain">
        <el-table
          :data="tableRowData"
          border
          :height="'530px'"
          style="width: 60%;"
          :span-method="mergeRowMethod">
          <el-table-column
            align="center"
            prop="sort"
            label="编号">
          </el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="名称内容">
          </el-table-column>
        </el-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      originData: [
        {
          sort: '01',
          children: [
            {
              name: '01-1号'
            },
            {
              name: '01-2号'
            },
            {
              name: '01-3号'
            }
          ]
        },
        {
          sort: '02',
          children: [
            {
              name: '02-1号'
            }
          ]
        },
        {
          sort: '03',
          children: [
            {
              name: '03-1号'
            },
            {
              name: '03-2号'
            },
            {
              name: '03-3号'
            },
            {
              name: '03-4号'
            }
          ]
        },
        {
          sort: '04',
          children: [
            {
              name: '04-1号'
            },
            {
              name: '04-2号'
            }
          ]
        },
        {
          sort: '05',
          children: [
            {
              name: '05-1号'
            }
          ]
        }
      ],
      tableColumnData: [],
      tableRowData: [],
      activeName: 'row',
      columnLength: 0
    }
  },
  watch: {
    activeName: {
      handler (val) {
        if (val === 'row') {
          this.loadRowData()
        } else {
          this.loadColumnData()
        }
      },
      immediate: true
    }
  },
  methods: {
    loadRowData () {
      this.tableRowData = []
      let originArr = JSON.parse(JSON.stringify(this.originData))
      // 普通的数据转换，将后台格式转换成element表格需要的格式
      if (Array.isArray(originArr)) {
        originArr.map(res => {
          if (Array.isArray(res.children)) {
            res.children.map((subRes, subIndex) => {
              let content = {}
              content = subRes
              content['sort'] = res.sort
              // 重点！赋值合并的行数数值，只需要取子循环的第一个数赋值待合并的行数即可
              if (subIndex === 0) {
                content['rowNum'] = res.children.length
              }
              this.tableRowData.push(content)
            })
          }
        })
      }
    },
    loadColumnData () {
      this.tableColumnData = JSON.parse(JSON.stringify(this.originData))
      if (Array.isArray(this.tableColumnData)) {
        this.tableColumnData.map((res, index) => {
          if (Array.isArray(res.children)) {
            // 获取最大列数为element的列数
            if (index === 0) {
              this.columnLength = res.children.length
            } else {
              if (res.children.length > this.columnLength) {
                this.columnLength = res.children.length
              }
            }
          }
        })
      }
    },
    // 合并行
    mergeRowMethod ({row, column, rowIndex, columnIndex}) {
      // columnIndex 代表列数，从0开始计数,我们要合并的字段属于第一列，取0
      if (columnIndex === 0) {
        return {
          rowspan: row.rowNum, // 待合并行数 -- 合并的行数长度就等于之前赋值的子数据的长度；未赋值的即表示0，不显示
          colspan: row.rowNum > 0 ? 1 : 0 // 待合并列数 -- 合并的列数自身占一列，被合并的要返回0，表示不显示
        }
      }
    }
  }
}
</script>
