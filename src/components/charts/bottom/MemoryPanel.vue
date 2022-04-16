<template>
  <!--  <dv-border-box-7>-->
  <div style="display:flex;flex-direction:column;height: 100%;width: 100%">
    <ChartHeader :icon="'el-icon-s-platform'" :title="'运行内存状态'"></ChartHeader>
    <!--    <dv-charts id="ftpChart" style="flex: 1;height: 100%;" :option="option1"/>-->

    <div style="display:flex;flex-direction:row;height: 100%;width: 100%;">
      <MyDvDecoration4 style="width:5px;height:80%;"/>
      <EchartGaugeMemory class="echart-gauge-memory" :usage-data="this.memoryUsage"></EchartGaugeMemory>
    </div>
  </div>
  <!--  </dv-border-box-7>-->
</template>
<script>
import ChartHeader from '../top/PanelHeader'
import EchartGaugeMemory from "@/components/charts/bottom/MemoryGauge";
import MyDvDecoration4 from "@/components/datav/decoration4/src/main";
export default {
  name: 'MemoryPanel',
  components: {EchartGaugeMemory, ChartHeader,MyDvDecoration4},
  props: {
    propData: {
      type: Number
    },
    propMemoryData: {
      type: Array
    }
  },
  watch: {
    // propData: function () {
    //   if (this.propData === undefined) {
    //     return this.option1
    //   }
    //   this.option1.series[0].data[0].value = Math.round(this.propData)
    //   this.option1 = {...this.option1}
    // }
    propMemoryData: function () {
      if (this.propMemoryData === undefined) {
        return this.memoryUsage;
      }
      this.memoryUsage = Math.round(this.propMemoryData[0] * 100 / this.propMemoryData[1])
      this.option2.series[0].data[0].value = this.propMemoryData[0] * 100 / this.propMemoryData[1]
      this.option2 = {...this.option2}
      // console.log('this.option1', this.option1)
    }
  },
  data() {
    return {
      memoryUsage: 30,
      chart: null,
      option2: {
        title: {
          text: '系统内存使用率',
          style: {
            fill: '#fff',
            fontSize: 17
          }
        },
        series: [
          {
            type: 'gauge',
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 15,
            data: [
              {
                name: 'itemA',
                value: 65,
                gradient: ['#03c2fd', '#1ed3e5', '#2fded6']
              }
            ],
            axisLabel: {
              show: false
            },
            axisTick: {
              show: false
            },
            pointer: {
              show: false
            },
            dataItemStyle: {
              lineCap: 'round'
            },
            details: {
              show: true,
              formatter: '{value}%',
              style: {
                fill: '#1ed3e5',
                fontSize: 25
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

</style>
