<template>
  <div style="display: flex;justify-content: space-between;">
    <div class="header-aside-decoration">
      <MyDvDecoration10 class="decoration10"/>
      <MyDvDecoration8 class="decoration8" :color="['#568aea', '#000000']"/>
    </div>

    <div class="header-center">
      <p class="center-title">数据与状态监控软件</p>
<!--      <div style="width:100px;height: 20px">-->
<!--        <icon-chart style="width: 100px;height: 20px"></icon-chart>-->
<!--      </div>-->
      <!--      <dv-decoration-6 class="decoration6" :reverse="true" :color="['#50e3c2', '#67a1e5']"/>-->
      <!--      <p v-text="getTime()"></p>-->
    </div>

    <div class="header-aside-decoration">
      <MyDvDecoration8 class="decoration8" :reverse="true" :color="['#568aea', '#000000']"/>
      <MyDvDecoration10 class="decoration10" :reverse="true"/>
    </div>
  </div>
</template>

<script>

import MyDvDecoration8 from "@/components/datav/decoration8/src/main";
import MyDvDecoration10 from "@/components/datav/decoration10/src/main";
export default {
  name: 'Header',
  components:{MyDvDecoration8,MyDvDecoration10},
  data() {
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

<style lang="scss" scoped>

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
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .center-title {
    /*position: absolute;*/
    /*top: 60px;*/
    font-size: 20px;
    font-weight: 400;
    color: white;
  }
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
