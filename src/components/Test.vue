<!--<template>-->
<!--  <div>-->
<!--    <el-table-->
<!--      :data="tableData"-->
<!--      style="width: 100%;margin-bottom: 20px;"-->
<!--      row-key="id"-->
<!--      border-->
<!--      default-expand-all-->
<!--      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">-->
<!--      <el-table-column-->
<!--        prop="date"-->
<!--        label="日期"-->
<!--        width="180">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="name"-->
<!--        label="姓名"-->
<!--        width="180">-->
<!--      </el-table-column>-->
<!--      <el-table-column-->
<!--        prop="address"-->
<!--        label="地址">-->
<!--      </el-table-column>-->
<!--    </el-table>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'SatComponent',-->
<!--  data () {-->
<!--    return {-->
<!--      tableData: [{-->
<!--        id: 3,-->
<!--        date: '2016-05-01',-->
<!--        name: '王小虎',-->
<!--        address: '上海市普陀区金沙江路 1519 弄',-->
<!--        children: [{-->
<!--          id: 31,-->
<!--          date: '2016-05-01',-->
<!--          name: '王小虎',-->
<!--          address: '上海市普陀区金沙江路 1519 弄'-->
<!--        }, {-->
<!--          id: 32,-->
<!--          date: '2016-05-01',-->
<!--          name: '王小虎',-->
<!--          address: '上海市普陀区金沙江路 1519 弄'-->
<!--        }]-->
<!--      }, {-->
<!--        id: 4,-->
<!--        date: '2016-05-03',-->
<!--        name: '王小虎',-->
<!--        address: '上海市普陀区金沙江路 1516 弄'-->
<!--      }]-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template>
  <div class="boxShadow">
    <div style="margin-top: 20px">

      <el-table
        :data="tables"
        ref="multipleTable"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change='selectArInfo'>
        <el-table-column type="selection" width="45px"></el-table-column>
        <el-table-column label="序号" width="62px" type="index">
        </el-table-column>
        <template v-for='(col) in tableData'>
          <el-table-column
            sortable
            :show-overflow-tooltip="true"
            :prop="col.dataItem"
            :label="col.dataName"
            :key="col.dataItem"
            width="124px">
          </el-table-column>
        </template>
        <el-table-column label="操作" width="80" align="center">
          <template slot-scope="scope">
            <el-button size="mini" class="del-com" @click="delTabColOne()"><i class="iconfont icon-shanchu"></i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>
<script>

export default {
  data () {
    return {
      tables: [{
        xiaoxue: '福兰',
        chuzhong: '加芳',
        gaozhong: '蒲庙',
        daxue: '西安',
        yanjiusheng: '西安',
        shangban: '北京'
      }, {
        xiaoxue: '南坊',
        chuzhong: '礼泉',
        gaozhong: '礼泉',
        daxue: '西安',
        yanjiusheng: '西安',
        shangban: '南坊'
      }, {
        xiaoxue: '马山',
        chuzhong: '加芳',
        gaozhong: '蒲庙',
        daxue: '西安',
        yanjiusheng: '重庆',
        shangban: '北京'
      }],
      tableData: [{
        dataItem: 'xiaoxue',
        dataName: '小学'
      }, {
        dataItem: 'chuzhong',
        dataName: '初中'
      }, {
        dataItem: 'gaozhong',
        dataName: '高中'
      }, {
        dataItem: 'daxue',
        dataName: '大学'
      }, {
        dataItem: 'yanjiusheng',
        dataName: '研究生'
      }, {
        dataItem: 'shangban',
        dataName: '上班'
      }]
    }
  },
  methods: {
    // 获取表格选中时的数据
    selectArInfo (val) {
      this.selectArr = val
    }
  }
}
</script>
