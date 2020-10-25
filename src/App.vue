<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import connect from './global/mq'
import Main from './components/page/Main'

export default {
  name: 'App',
  components: {
    Main
  },
  created () {
    this.initFromDatabase()
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
    initFromDatabase () {
      this.$post('getRecentData', {}, '历史数据').then(response => {
        this.$store.commit('initData', response.data)
      })
    },
    initFormNetConfig () {
      this.$post('api/getNetConfig', {}, '网络配置').then(response => {
        this.$store.commit('initNetConfig', response.data)
      })
    }
  }
}
</script>

<style>
body {
  /*overflow-y: hidden;*/
  margin: 0;
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
  color: #2c3e50;
  width: 100%;
}

html, body, #app, #main-app {
  height: 100%;
}

.tableHeaderCell {
  background: #f3f2f2 !important;
  color: black;
  font-weight: bold;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.el-scrollbar {
  height: 100%;
}

#el-main.el-main {
  padding: 2px 15px;
  height: 100%;
}

#el_row_header {
  padding: 15px 0;
}

.table {
  width: 100%;
}

.el-divider--horizontal {
  margin: 0 0 1px 0;
}

.el-header {
  width: 100%;
  background-color: #ffffff;
}

.el-form-item__label {
  padding: 0 !important;
}

body {
  overflow-y: hidden;
}

.el-container {
  height: 100%;
  padding-top: 60px;
}

#netconfig {
  height: 100%;
}

#header-divider.el-divider--horizontal {
  margin: 0 0 1px 0;
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
</style>
