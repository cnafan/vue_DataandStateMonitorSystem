<template>

  <div style="display: flex;justify-content: space-between">
    <div class="image-parent">
      <el-image @click="$router.push({path: '/SystemManageAndControl'})" fit="fill" class="panel-image"
                :src="require('/static/images/panel/12.png')"></el-image>
      <div style="display: flex">
        <span>{{ systemName[0] }}</span>
        <!--        <el-button size="small" :type="getType('VLBI')" circle></el-button>-->
      </div>
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/BDGNSSSystemClockMonitor'})" fit="fill" class="panel-image"
                :src="require('/static/images/panel/14.png')"></el-image>
      <span>{{ systemName[1] }}</span>
      <!--      <el-button size="small" :type="getType('VLBI')" circle></el-button>-->
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/SatIntegratedDataManagement'})" fit="fill" class="panel-image"
                :src="require('/static/images/panel/15.png')"></el-image>
      <span>{{ systemName[2] }}</span>
      <!--      <el-button size="small" :type="getType('VLBI')" circle></el-button>-->
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/AtomicClockSignal'})" fit="fill" class="panel-image"
                :src="require('/static/images/panel/13.png')"></el-image>
      <span>{{ systemName[3] }}</span>
      <!--      <el-button size="small" :type="getType('VLBI')" circle></el-button>-->
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/StateMonitorAndWarning'})" fit="fill" class="panel-image"
                :src="require('/static/images/panel/8.png')"></el-image>
      <span>{{ systemName[4] }}</span>
      <!--      <el-button size="small" :type="getType('VLBI')" circle></el-button>-->
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/VLBI'})" fit="fill" class="panel-image"
                :src="require('/static/images/panel/3.png')"></el-image>
      <span>{{ systemName[5] }}</span>
      <!--      <el-button size="small" :type="getType('VLBI')" circle></el-button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystemPanel',
  data() {
    return {
      systemName: ['系统管理控制软件', 'GNSS时差数据综合处理软件',
        '卫星综合管理软件', '原子钟信号监测和自主切换软件',
        '状态监测及告警软件', 'VLBI站控软件'],
      imageSrc: [
        'static/images/panel/12.png',
        'static/images/panel/14.png',
        'static/images/panel/15.png',
        'static/images/panel/13.png',
        'static/images/panel/8.png',
        'static/images/panel/3.png']
    }
  },
  computed: {
    getType: function (software) {
      switch (this.$store.state['Color' + software]) {
        case 'blue':
          return 'success'
        case 'red':
          return 'error'
        default:
          return 'warning'
      }
    }
  }
}
</script>

<style scoped>
.panel-image {
  width: 40px;
  height: 40px;
  margin: auto;
}

.image-parent {
  padding-bottom: 10px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*display: block;*/
  width: 80px;
  height: 80px;
}

.image-parent span {
  color: whitesmoke;
  margin-right: 10px;
}
</style>
