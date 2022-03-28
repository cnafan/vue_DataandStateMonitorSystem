<template>
  <el-card>
    <div slot="header" class="clearfix">
      <span>阈值设置</span>
    </div>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="数据类型"
          width="280">
        <template slot-scope="scope">
          <!--          <i class="el-icon-time"></i>-->
          <span>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
          label="阈值"
          width="80">
        <template slot-scope="scope">
          <el-tag size="medium">{{ scope.row.limit }}</el-tag>
          <!--          <el-popover trigger="hover" placement="top">-->
          <!--            <p>姓名: {{ scope.row.name }}</p>-->
          <!--            <p>住址: {{ scope.row.address }}</p>-->
          <!--            <div slot="reference" class="name-wrapper">-->
          <!--              <el-tag size="medium">{{ scope.row.name }}</el-tag>-->
          <!--            </div>-->
          <!--          </el-popover>-->
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

</template>
<script>
export default {
  name: 'Limit',
  data() {
    return {
      switch2: true,
      tableData: [{
        date: 'UTC(NTSC)与BDS3每颗卫星时间的钟差',
        limit: 0.5,
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: 'UTC(NTSC)与BDS3每颗卫星广播北斗时间的钟差',
        limit: 0.4,
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: 'UTC(NTSC)与BDT的钟差',
        limit: 0.6,
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: 'GNSS系统时差数据',
        limit: 0.6,
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style scoped>
.list-title {
  margin-bottom: 1rem;
}

.switch-text {
  margin-left: 20px;
  font-size: small;
}

.switch-box {
  display: flex;
  align-items: center
}
</style>
