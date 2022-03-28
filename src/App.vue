<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import connect from './global/mq'
import Main from './components/page/Main'
import {GET_NET_CONFIG,GET_RECENT_DATA} from "@/api/api";

export default {
  name: 'App',
  components: {
    Main
  },
  mounted() {
    // window.onresize = function () {
    //   document.body.style.height = screen.availHeight + 'px'
    //   console.log('窗口大小变化')
    // }
  },
  created() {
    // setTimeout(this.initFromDatabase, 3000) // 甲方否定了项目刚开始提出的需求，说不需要旧数据了
    this.initFormNetConfig()
    connect()
    // 保存vuex
    // if (localStorage.getItem('store')) {
    //   this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('store'))))
    // }
    // window.addEventListener('beforeunload', () => {
    //   localStorage.setItem('store', JSON.stringify(this.$store.state))
    // })
  },
  methods: {
    initFromDatabase() {
      this.$post(GET_RECENT_DATA, {}, '历史数据').then(response => {
        this.$store.commit('initData', response.data)
      })
    },
    initFormNetConfig() {
      this.$get(GET_NET_CONFIG).then(response => {
        this.$store.commit('initNetConfig', response.data)
      })
    }
  }
}
</script>

<style>

html, body, #app, #main-app {
  height: 100vh;
  min-height: 100vh;
}

#app {
  /*position: fixed;*/
}

body {
  /*overflow-y: hidden;*/
  margin: 0;
  /*background-color: #151313;*/
  /*background-image: url("../static/images/back4.jpg");*/
}

.table {
  transition: 0.5s;
  -webkit-transition: 0.5s;
}

.table:hover {
  box-shadow: 0 1px 12px 1px rgba(0, 0, 0, 0.1);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
  width: 100%;
}

.main-page {
  height: 100%;
  width: 100%;
  padding: 20px;
}

/*.el-table th, .el-table tr{*/
/*  background-color: transparent!important;*/
/*}*/
.tableHeaderCell {
  background: #f5f5f5 !important;
  color: black;
  /*background-color: transparent!important;*/
  font-weight: bold;
}

.el-scrollbar__wrap {
  overflow-y: scroll;
  overflow-x: hidden;
  /*overflow: hidden;*/
  /*width: 190%;*/
  /*height: 120%;*/
}

.el-scrollbar {
  height: 100%;
}
#el-main{
  padding: 0;
}
#el_row_header {
  padding: 18px 0;
}

.table {
  width: 100%;
}

.el-divider--horizontal {
  margin: 0 0 1px 0;
}

.el-header {
  width: 100%;
  background-color: #333333;
  color: #fafafa;
}

.el-form-item__label {
  padding: 0 !important;
}

body {
  overflow-y: hidden;
}

.el-container {
  height: 100%;
  /*padding-top: 60px;*/
}

#netconfig {
  height: 100%;
}

#header-divider.el-divider--horizontal {
  margin: 0 0 1px 0;
}

.nav-menu {
  height: 100%;
  padding-top: 20px;
  overflow-y: auto;
}

/*折叠最小宽度*/
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
  height: 100%;
}

.el-menu {
  border-right: 0 solid #e6e6e6 !important;
}

#header {
  position: fixed;
  z-index: 1500;
  height: 60px
}

#el-row-main {
  height: 100%;
}

.el-divider-table {
  margin: 15px;
}

.el-dialog {
  width: 70%;
}

.el-dialog__body {
  padding: 0 20px !important;
}

.el-select-dropdown .el-scrollbar .el-scrollbar__wrap {
  overflow: scroll !important;
}

canvas {
  outline: none;
}

.componentSelect {
  margin-bottom: 10px;
  margin-top: 10px;
}

.el-menu {
  border: hidden;
}

/*.el-menu-item.el-submenu__title {*/
/*  border-left: #fff solid 6px;*/
/*}*/

/*设置了默认左边框为白色*/
.el-menu-item:hover {
  /*border-left: #33A2EF solid 6px !important;*/
  background-color: #8b9aec !important;
  color: #fafafa !important;
}

.el-menu-item:hover i {
  color: #fafafa;
}

.el-menu-item.is-active {
  background-color: #8b9aec !important;
}

/*设置鼠标悬停时el-submenu的样式*/
.el-submenu .el-submenu__title:hover {
  /*border-left: #5c73f5 solid 6px !important;*/
  background-color: #8b9aec !important;
  color: #fafafa !important;
}

.el-submenu .el-submenu__title:hover i {
  color: #fafafa;
}

.con-vs-tabs .con-slot-tabs {
  width: 90%;
}

/*.vs-tabs--content{*/
/*  padding: 1px 10px;*/
/*}*/
.vs-tabs-position-left .con-ul-tabs {
  margin-top: 10px;
}

.vuesax-app-is-ltr .vs-tabs--btn-icon + span {
  margin-right: 10px;
}

/*.el-table, .el-table__expanded-cell {*/
/*  background-color: transparent;*/
/*}*/

/*el-table th, .el-table tr {*/
/*  background-color: transparent;*/
/*}*/
/*!*透明化整体*!*/
/*  .el-table,*/
/*  .el-table__expanded-cell {*/
/*    background-color: transparent !important;*/
/*  }*/
/*!*透明化行、单元格*!*/
/*  el-table th,*/
/*  .el-table tr,*/
/*  .el-table td {*/
/*    background-color: transparent !important;*/
/*  }*/
/*!*hover时样式*!*/
/*  .el-table tbody tr:hover>td {*/
/*    background-color: #367f7f78 !important*/
/*  }*/

/*!*偶数行样式*!*/
/*  .el-table__row--striped td {*/
/*    background-color: #45797b33 !important*/
/*  }*/
/*!*奇数行样式*!*/
/*  .el-table__row:not(.el-table__row--striped) {*/
/*    background: #1439391c !important;*/
/*  }*/

/*表格数据验证颜色*/
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}

.el-table .error-row {
  background: #fab9b9;
}

#monitor-div {
  height: 100%;
  width: 100%;
}

/*iframe {*/
/*  height: 90%;*/
/*  width: 90%;*/
/*}*/
.el-link.el-link--default {
  color: #ffffff;
}

.vs-list--title {
  color: white;
}

#detail-info::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

#el-main.el-main::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
