<template>
  <div id="app">
<!--        <router-link to="/">首页</router-link>-->
<!--            <router-link to="/test">test</router-link>-->
    <!--        <router-view></router-view>-->
    <Navigation></Navigation>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style>
</style>
