<template>
  <!--    <el-carousel :interval="4000" type="card" height="200px">-->
  <!--      <el-carousel-item v-for="item in 6" :key="item">-->
  <!--      </el-carousel-item>-->
  <!--    </el-carousel>-->
  <div class="hello">
    <v-chart :options="pie"></v-chart>

  </div>
</template>

<script>
import ECharts from 'vue-echarts'
export default {
  components: {
    chart: ECharts
  },
  name: 'Splansh',
  data () {
    return {
      pie: {
        title: {
          text: '',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: [
            '系统管理控制软件',
            'GNSS时差数据综合处理软件',
            '卫星综合管理软件',
            '原子钟信号监测与自主切换软件',
            'VLBI站控软件'
          ]
        },
        series: [
          {
            name: '来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '系统管理控制软件'},
              {value: 310, name: 'GNSS时差数据综合处理软件'},
              {value: 234, name: '卫星综合管理软件'},
              {value: 135, name: '原子钟信号监测与自主切换软件'},
              {value: 154, name: 'VLBI站控软件'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>
