<template>
  <div id="list-complete-demo" class="demo">
    <transition-group name="flip-list" tag="ul">
      <div class="list-text" v-for="item in this.$store.state.runtimeScrollBoard" :key="item.timestamp">
        {{ item.time }} {{ item.name }}
      </div>
    </transition-group>
  </div>
</template>

<script>
// deperated
export default {
  name: 'ScrollPanel',
  data () {
    return {
      items: []
    }
  },
  watch: {
    runtimeChange: function () {
      console.log(this.$store.state.runtimeScrollBoard)
    }
  },
  computed: {
    runtimeChange: function () {
      return this.$store.state.runtimeScrollBoard
    }
  }
}
</script>

<style scoped>
#list-complete-demo {
  height: 100%;
}
.flip-list-enter-active, .flip-list-leave-active {
  transition: all 1s;
}
.flip-list-enter, .flip-list-leave-to
  /* .flip-list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

/*!* 下面的 .v-move 和 .v-leave-active 配合使用，能够实现列表后续的元素，渐渐地移动过来的效果 *!*/
/*.list-move {*/
/*  transition: all 0.6s ease;*/
/*}*/
.flip-list-move {
  transition: transform 1s;
  /*transition: all 0.6s ease;*/
}
.flip-list-leave-active{
  position: absolute;
}

.flip-list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.flip-list-complete-enter, .flip-list-complete-leave-to
  /* .list-complete-leave-active for below version 2.1.8 */
{
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-complete-leave-active {
  position: absolute;
}
.list-text{
  /*display: inline-block;*/
  color: white;
}
</style>
