<template>

  <div style="display: flex;justify-content: space-between;">
    <div class="image-parent" @click="$router.push({path: '/SystemManageAndControl'})">
      <el-image fit="contain" class="panel-image"
                :src="require('@/assets/images/panel/12.png')"></el-image>
      <div class="image-parent-span">
        <span>{{ systemName[0] }}</span>
        <!--        <el-button size="small" :type="getType('VLBI')" circle></el-button>-->
      </div>
    </div>
    <div class="image-parent" @click="$router.push({path: '/BDGNSSSystemClockMonitor'})">
      <el-image fit="fill" class="panel-image"
                :src="require('@/assets/images/panel/14.png')"></el-image>
      <div class="image-parent-span">
      <span>{{ systemName[1] }}</span>
      </div>
      <!--      <el-button size="small" :type="getType('VLBI')" circle></el-button>-->
    </div>
    <div class="image-parent" @click="$router.push({path: '/SatIntegratedDataManagement'})">
      <el-image fit="fill" class="panel-image"
                :src="require('@/assets/images/panel/15.png')"></el-image>
      <div class="image-parent-span">
      <span>{{ systemName[2] }}</span>
      </div>
    </div>
    <div class="image-parent" @click="$router.push({path: '/AtomicClockSignal'})">
      <el-image fit="fill" class="panel-image"
                :src="require('@/assets/images/panel/13.png')"></el-image>
      <div class="image-parent-span">
      <span>{{ systemName[3] }}</span>
      </div>
    </div>
    <div class="image-parent" @click="$router.push({path: '/StateMonitorAndWarning'})">
      <el-image fit="fill" class="panel-image"
                :src="require('@/assets/images/panel/8.png')"></el-image>
      <div class="image-parent-span">
      <span>{{ systemName[4] }}</span>
      </div>
    </div>
    <div class="image-parent" @click="$router.push({path: '/VLBI'})">
      <el-image fit="fill" class="panel-image"
                :src="require('@/assets/images/panel/3.png')"></el-image>
      <div class="image-parent-span">
      <span>{{ systemName[5] }}</span>
      </div>
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

<style lang="scss" scoped>
.panel-image {
  width: 40px;
  height: 40px;
  margin: auto;
}

.image-parent {
  //margin: 0 40px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*display: block;*/
  width: 80px;
  height: 80px;

  .image-parent-span {
    display: flex;
    height: 50%;
    overflow: hidden;
  }

  span {
    color: whitesmoke;
    margin-right: 10px;
  }
}

</style>
