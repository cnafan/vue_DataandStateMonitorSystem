<template>          <dv-border-box-7>

<dv-charts id="ftpChart" :option="option1"/>
</dv-border-box-7>
</template>
<script>

export default {
  name: 'FtpPanel',
  props: {
    propData: {
      type: Number
    }
  },
  watch: {
    propData: function () {
      if (this.propData === undefined) {
        // console.log('this.propData', 'undefined')
        return this.option1
      }
      this.option1.series[0].data[0].value = Math.round(this.propData)
      this.option1 = {...this.option1}
    }
  },
  data () {
    return {
      chart: null,
      option1: {
        title: {
          text: 'FTP剩余空间表',
          style: {
            fill: '#fff',
            fontSize: 17
          }
        },
        series: [
          {
            type: 'gauge',
            data: [
              {
                name: 'itemA',
                value: 55,
                gradient: ['#e7bcf3', '#e690d1', '#fb7293'],
                localGradient: true
              }
            ],
            axisLabel: {
              formatter: '{value}%'
            },
            details: {
              show: true,
              offset: [0, 40],
              formatter: '{value}%',
              style: {
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                textBaseline: 'middle'
              }
            },
            animationCurve: 'easeOutBack'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
