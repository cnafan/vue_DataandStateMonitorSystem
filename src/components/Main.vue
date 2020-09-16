<template>
  <div id="main-app">
    <el-header id="header">
      <el-row id="el_row_header">
        <el-col :span="22">
          <div>{{ headerName }}</div>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-edit" style="font-size: 25px;" @click="editorClick"></i>
        </el-col>
        <el-col :span="1">
          <i class="el-icon-setting" style="font-size: 25px;" @click="settingOpen"></i>
        </el-col>
      </el-row>
      <el-row>
        <el-divider id="header-divider"></el-divider>
      </el-row>
    </el-header>
    <!--  :style="{height:containHeight}"-->
    <el-container id="el-container-header">
      <el-aside>
        <el-scrollbar id="el-scrollbar-menu">
          <el-menu
            router
            :default-active="$route.path"
            :default-openeds="defaultOpen"
            class="el-menu-index"
            mode="vertical"
            text-color="#303133"
            active-text-color="#E6A23C">
            <el-menu-item index="splansh">
              <i class="el-icon-menu"></i>
              <span>处理中心</span>
            </el-menu-item>
            <el-submenu v-for="item in items" :index="item.index" :key="item.index">
              <template class="el-icon-menu" slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item class="el-menu-item-font" :index="item.subs.index" :key="item.subs.index">
                {{ item.subs.title }}
              </el-menu-item>
            </el-submenu>
            <!--            <el-menu-item index="log">-->
            <!--              <i class="el-icon-menu"></i>-->
            <!--              <span>日志</span>-->
            <!--            </el-menu-item>-->
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main id="el-main">
        <el-row id="el-row-main">
          <keep-alive>
            <el-scrollbar>
              <router-view></router-view>
            </el-scrollbar>
          </keep-alive>
        </el-row>
        <el-backtop></el-backtop>
      </el-main>
    </el-container>
    <el-dialog :title="EditorDialogTitle" :visible.sync="EditorDialogVisible">
      <el-form :model="settingForm" label-position="top">
        <el-form-item :key="item.name" v-for="item in settingFormItems" :label="item.name"
                      :label-width="settingFormLabelWidth">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-input v-model="item.ip" autocomplete="off" placeholder="ip"></el-input>
            </el-col>
            <el-col :span="12">
              <el-input-number v-model="item.port" controls-position="right" placeholder="port" :min="1"
                               :max="9999"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="EditorDialogVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import storageUtils from '../utils/storageUtils'

export default {
  name: 'Main',
  data () {
    return {
      headerName: '数据与状态监控软件',
      EditorDialogTitle: '修改配置',
      EditorDialogVisible: false,
      settingForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      settingFormLabelWidth: '120px',
      settingFormItems: storageUtils.readNetConfig(),
      items: [
        {
          index: '2',
          title: '空间信号质量监测',
          subs: {
            index: 'SystemManageAndControl',
            title: '系统管理控制软件'
          }
        },
        {
          index: '3',
          title: '北斗/GNSS系统时间监测',
          subs: {
            index: 'BDGNSSSystemClockMonitor',
            title: 'GNSS时差数据综合处理软件'
          }
        },
        {
          index: '4',
          title: '中科院在轨卫星地面数据',
          subs: {
            index: 'SatIntegratedDataManagement',
            title: '卫星综合管理软件'
          }
        },
        {
          index: '5',
          title: '高精度转发式卫星授时',
          subs: {
            index: 'AtomicClockSignal',
            title: '原子钟信号监测与自主切换软件'
          }
        },
        {
          index: '6',
          title: 'VLBI观测导航卫星及UT1测量',
          subs: {
            index: 'VLBI',
            title: 'VLBI站控软件'
          }
        }
      ]
    }
  },
  computed: {
    defaultOpen: function () {
      let arr = new Set()
      for (let i = 0; i < this.items.length; i++) {
        arr.add(this.items[i].index)
      }
      return Array.from(arr)
    }
  },
  methods: {
    settingOpen () {
      this.$notify.error({
        title: '错误',
        message: '此功能还未开发',
        offset: 30
      })
    },
    editorClick () {
      this.EditorDialogVisible = true
    }
  }
}
</script>

<style scoped>

</style>
