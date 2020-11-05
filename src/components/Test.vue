<!--&lt;!&ndash;<template>&ndash;&gt;-->
<!--&lt;!&ndash;  <div>&ndash;&gt;-->
<!--&lt;!&ndash;    <el-table&ndash;&gt;-->
<!--&lt;!&ndash;      :data="tableData"&ndash;&gt;-->
<!--&lt;!&ndash;      style="width: 100%;margin-bottom: 20px;"&ndash;&gt;-->
<!--&lt;!&ndash;      row-key="id"&ndash;&gt;-->
<!--&lt;!&ndash;      border&ndash;&gt;-->
<!--&lt;!&ndash;      default-expand-all&ndash;&gt;-->
<!--&lt;!&ndash;      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">&ndash;&gt;-->
<!--&lt;!&ndash;      <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;        prop="date"&ndash;&gt;-->
<!--&lt;!&ndash;        label="日期"&ndash;&gt;-->
<!--&lt;!&ndash;        width="180">&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;      <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;        prop="name"&ndash;&gt;-->
<!--&lt;!&ndash;        label="姓名"&ndash;&gt;-->
<!--&lt;!&ndash;        width="180">&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;      <el-table-column&ndash;&gt;-->
<!--&lt;!&ndash;        prop="address"&ndash;&gt;-->
<!--&lt;!&ndash;        label="地址">&ndash;&gt;-->
<!--&lt;!&ndash;      </el-table-column>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-table>&ndash;&gt;-->
<!--&lt;!&ndash;  </div>&ndash;&gt;-->
<!--&lt;!&ndash;</template>&ndash;&gt;-->

<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  name: 'SatComponent',&ndash;&gt;-->
<!--&lt;!&ndash;  data () {&ndash;&gt;-->
<!--&lt;!&ndash;    return {&ndash;&gt;-->
<!--&lt;!&ndash;      tableData: [{&ndash;&gt;-->
<!--&lt;!&ndash;        id: 3,&ndash;&gt;-->
<!--&lt;!&ndash;        date: '2016-05-01',&ndash;&gt;-->
<!--&lt;!&ndash;        name: '王小虎',&ndash;&gt;-->
<!--&lt;!&ndash;        address: '上海市普陀区金沙江路 1519 弄',&ndash;&gt;-->
<!--&lt;!&ndash;        children: [{&ndash;&gt;-->
<!--&lt;!&ndash;          id: 31,&ndash;&gt;-->
<!--&lt;!&ndash;          date: '2016-05-01',&ndash;&gt;-->
<!--&lt;!&ndash;          name: '王小虎',&ndash;&gt;-->
<!--&lt;!&ndash;          address: '上海市普陀区金沙江路 1519 弄'&ndash;&gt;-->
<!--&lt;!&ndash;        }, {&ndash;&gt;-->
<!--&lt;!&ndash;          id: 32,&ndash;&gt;-->
<!--&lt;!&ndash;          date: '2016-05-01',&ndash;&gt;-->
<!--&lt;!&ndash;          name: '王小虎',&ndash;&gt;-->
<!--&lt;!&ndash;          address: '上海市普陀区金沙江路 1519 弄'&ndash;&gt;-->
<!--&lt;!&ndash;        }]&ndash;&gt;-->
<!--&lt;!&ndash;      }, {&ndash;&gt;-->
<!--&lt;!&ndash;        id: 4,&ndash;&gt;-->
<!--&lt;!&ndash;        date: '2016-05-03',&ndash;&gt;-->
<!--&lt;!&ndash;        name: '王小虎',&ndash;&gt;-->
<!--&lt;!&ndash;        address: '上海市普陀区金沙江路 1516 弄'&ndash;&gt;-->
<!--&lt;!&ndash;      }]&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->

<!--&lt;!&ndash;<style scoped>&ndash;&gt;-->

<!--&lt;!&ndash;</style>&ndash;&gt;-->
<!--<template>-->
<!--  <div class="boxShadow">-->
<!--    <div style="margin-top: 20px">-->

<!--      <el-table-->
<!--        :data="tables"-->
<!--        ref="multipleTable"-->
<!--        tooltip-effect="dark"-->
<!--        style="width: 100%"-->
<!--        @selection-change='selectArInfo'>-->
<!--        <el-table-column type="selection" width="45px"></el-table-column>-->
<!--        <el-table-column label="序号" width="62px" type="index">-->
<!--        </el-table-column>-->
<!--        <template v-for='(col) in tableData'>-->
<!--          <el-table-column-->
<!--            sortable-->
<!--            :show-overflow-tooltip="true"-->
<!--            :prop="col.dataItem"-->
<!--            :label="col.dataName"-->
<!--            :key="col.dataItem"-->
<!--            width="124px">-->
<!--          </el-table-column>-->
<!--        </template>-->
<!--        <el-table-column label="操作" width="80" align="center">-->
<!--          <template slot-scope="scope">-->
<!--            <el-button size="mini" class="del-com" @click="delTabColOne()"><i class="iconfont icon-shanchu"></i>-->
<!--            </el-button>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->
<!--<script>-->

<!--export default {-->
<!--  data () {-->
<!--    return {-->
<!--      tables: [{-->
<!--        xiaoxue: '福兰',-->
<!--        chuzhong: '加芳',-->
<!--        gaozhong: '蒲庙',-->
<!--        daxue: '西安',-->
<!--        yanjiusheng: '西安',-->
<!--        shangban: '北京'-->
<!--      }, {-->
<!--        xiaoxue: '南坊',-->
<!--        chuzhong: '礼泉',-->
<!--        gaozhong: '礼泉',-->
<!--        daxue: '西安',-->
<!--        yanjiusheng: '西安',-->
<!--        shangban: '南坊'-->
<!--      }, {-->
<!--        xiaoxue: '马山',-->
<!--        chuzhong: '加芳',-->
<!--        gaozhong: '蒲庙',-->
<!--        daxue: '西安',-->
<!--        yanjiusheng: '重庆',-->
<!--        shangban: '北京'-->
<!--      }],-->
<!--      tableData: [{-->
<!--        dataItem: 'xiaoxue',-->
<!--        dataName: '小学'-->
<!--      }, {-->
<!--        dataItem: 'chuzhong',-->
<!--        dataName: '初中'-->
<!--      }, {-->
<!--        dataItem: 'gaozhong',-->
<!--        dataName: '高中'-->
<!--      }, {-->
<!--        dataItem: 'daxue',-->
<!--        dataName: '大学'-->
<!--      }, {-->
<!--        dataItem: 'yanjiusheng',-->
<!--        dataName: '研究生'-->
<!--      }, {-->
<!--        dataItem: 'shangban',-->
<!--        dataName: '上班'-->
<!--      }]-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    // 获取表格选中时的数据-->
<!--    selectArInfo (val) {-->
<!--      this.selectArr = val-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
<template>
  <div style="width: 100%">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button @click="onChange">click</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [],
      value: ''
    }
  },
  methods: {
    onChange () {
      this.options = [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
      this.value = '选项4'
    }
  }
}
</script>
