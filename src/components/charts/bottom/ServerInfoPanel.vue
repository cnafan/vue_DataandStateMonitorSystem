<template>
  <!--  <dv-border-box-7>-->
  <div style="display:flex;flex-direction:column;height: 100%;width: 60%;min-width: 600px">
    <ChartHeader :icon="'el-icon-s-platform'" :title="'服务器运行状态'"></ChartHeader>
    <div style="display: flex;flex: 1;height: 100%;flex-wrap:nowrap;">
      <!--        <dv-charts style="flex: 3;height: 100%" :option="option1"/>-->
      <!--      <dv-charts style="flex: 1;height: 100%" :option="option2"/>-->
      <MyDvDecoration4 style="width:5px;height:80%;"/>
      <CpuCategory class="cpu-category" :usage-data="propCpuData"></CpuCategory>
    </div>

  </div>
  <!--  </dv-border-box-7>-->
</template>

<script>
import ChartHeader from '../top/PanelHeader'
import CpuCategory from "@/components/charts/bottom/CpuCategory";
import MyDvDecoration4 from "@/components/datav/decoration4/src/main";

export default {
  name: 'SystemInfoPanel',
  components: {CpuCategory, ChartHeader,MyDvDecoration4},
  props: {
    propCpuData: {
      type: Array,
      default: () => [[81.5, 82.8, 89.1, 92.2], [49.3, 43.1, 56.9, 70.8], [21.9, 40.6, 51.6, 46.8], [70.4, 59.4, 82.8, 92.2], [67.6, 64.6, 69.2, 89.2], [45.3, 43.7, 68.8, 71.9], [20.4, 34.4, 43.7, 54.7], [27.7, 58.5, 41.6, 52.3], [21.9, 28.0, 59.3, 67.2], [36.9, 41.6, 41.6, 58.5]]
    }
  },
  watch: {
    propCpuData: function () {
      if (this.propCpuData === undefined) {
        // console.log('this.propData', 'undefined')
        return this.option1
      }
      // console.log('this.propCpuData', this.propCpuData)
      this.option1.series = []
      for (let i = 0; i < this.propCpuData.length; i++) {
        let eachCpu = {
          // 1200, 2230, 1900, 2100, 3500, 4200, 3985
          data: this.propCpuData[i],
          type: 'line',
          smooth: true,
          lineStyle: {
            lineWidth: 3
          },
          linePoint: {
            show: false
          }
        }
        this.option1.series.push(eachCpu)
      }
      // this.option1.series[0].data = this.propCpuData[0]
      this.option1 = {...this.option1}
      // console.log('this.option1', this.option1)
    }
  },
  data() {
    return {
      memoryUsage: 0,
      option1: {
        title: {
          text: '系统cpu使用率',
          style: {
            fill: '#fff',
            fontSize: 17
          }
        },
        xAxis: {
          // show: false,
          // name: '第一周',
          data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          axisLine: {
            show: true,
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisTick: {
            show: true,
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          // show: false,
          name: '使用率',
          data: 'value',
          axisLine: {
            show: true,
            style: {
              stroke: '#fff',
              lineWidth: 1
            }
          },
          axisTick: {
            show: false,
            style: {
              stroke: '#fff',
              lineWidth: 2
            }
          },
          axisLabel: {
            show: true,
            style: {
              fill: '#fff',
              fontSize: 10
            }
          },
          splitLine: {
            show: false
          },
          splitNumber: 3,
          min: 0,
          max: 100
        },
        series: [
          {
            // 1200, 2230, 1900, 2100, 3500, 4200, 3985
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            type: 'line',
            smooth: true,
            lineStyle: {
              lineWidth: 3
            },
            linePoint: {
              show: false
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

.cpu-category {
  width: 100%;
  height: 100%;
}
</style>
