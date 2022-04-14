<template>
  <div style="display: flex;justify-content: space-between;">
    <div class="header-aside-decoration">
      <dv-decoration-10 class="decoration10"/>
      <dv-decoration-8 class="decoration8" :color="['#568aea', '#000000']"/>
    </div>

    <div class="header-center">
      <p class="center-title">数据与状态监控软件</p>
      <!--      <dv-decoration-6 class="decoration6" :reverse="true" :color="['#50e3c2', '#67a1e5']"/>-->
      <!--      <p v-text="getTime()"></p>-->
    </div>

    <div class="header-aside-decoration">
      <dv-decoration-8 class="decoration8" :reverse="true" :color="['#568aea', '#000000']"/>
      <dv-decoration-10 class="decoration10" :reverse="true"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      now: 1605018704240
    }
  },
  methods: {
    // getTime () {
    //   let datenow = Date.now()
    //   console.log('datenow', datenow)
    //   const date1 = moment(this.now)
    //   const date2 = moment()
    //   return moment(date1.diff(date2)).format()
    // }
  }
}
</script>

<style scoped>
.center-title {
  /*position: absolute;*/
  /*top: 60px;*/
  font-size: 20px;
  font-weight: 400;
  color: white;
}

.decoration8 {
  width: 200px;
  height: 30px;
}

.decoration6 {
  margin-top: 10px;
  width: 13.125rem;
  height: 0.5rem;
}

.header-center {
  height: 20%;
  margin: 5px 40px 30px 40px;
  display: flex;
  flex-direction: column;
  align-items: center
}

.header-aside-decoration {
  display: flex;
  flex: 1;
  width: 100px;
  height: 20%;

}

.decoration10 {
  flex: 1;
  height: 5px;
}

</style>
