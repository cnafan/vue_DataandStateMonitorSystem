<template>
  <div style="display: flex;justify-content: space-between">
    <div class="image-parent">
      <el-image @click="$router.push({path: '/SystemManageAndControl'})" fit="fill" class="panel-image"
                :src="imageSrc[0]"></el-image>
      <span>{{ systemName[0] }}</span>
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/BDGNSSSystemClockMonitor'})" fit="fill" class="panel-image"
                :src="imageSrc[1]"></el-image>
      <span>{{ systemName[1] }}</span>
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/SatIntegratedDataManagement'})" fit="fill" class="panel-image"
                :src="imageSrc[2]"></el-image>
      <span>{{ systemName[2] }}</span>
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/AtomicClockSignal'})" fit="fill" class="panel-image"
                :src="imageSrc[3]"></el-image>
      <span>{{ systemName[3] }}</span>
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/StateMonitorAndWarning'})" fit="fill" class="panel-image"
                :src="imageSrc[4]"></el-image>
      <span>{{ systemName[4] }}</span>
    </div>
    <div class="image-parent">
      <el-image @click="$router.push({path: '/VLBI'})" fit="fill" class="panel-image" :src="imageSrc[5]"></el-image>
      <span>{{ systemName[5] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SystemPanel',
  data () {
    return {
      systemName: ['系统管理控制软件', 'GNSS时差数据综合处理软件',
        '卫星综合管理软件', '原子钟信号监测和自主切换软件',
        '状态监测及告警软件', 'VLBI站控软件'],
      imageSrc: ['../../../../static/images/panel/12.png',
        '../../../../static/images/panel/14.png',
        '../../../../static/images/panel/15.png',
        '../../../../static/images/panel/13.png',
        '../../../../static/images/panel/8.png',
        '../../../../static/images/panel/3.png']
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

.image-parent span{
  color: whitesmoke;
}
</style>
