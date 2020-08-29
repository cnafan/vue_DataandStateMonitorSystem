<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Time</th>
        <th>SAID</th>
        <th>STID</th>
        <th>SIFR</th>
        <th>NUCO</th>
      </tr>
      </thead>
      <tbody is="transition-group" name="flip-list">
      <tr v-for="item in datas" v-bind:key="item">
        <td>{{ item["time"] }}</td>
        <td>{{ item["said"] }}</td>
        <td>{{ item["stid"] }}</td>
        <td>{{ item["sifr"] }}</td>
        <td>{{ item["nuco"] }}</td>
      </tr>
      </tbody>

    </table>

  </div>
</template>
<script>


export default {
  data() {
    return {
      datas: null
    }
  },
  created() {
    this.$rabbitmq.connect();
    console.log("vuedatas:"+this.$rabbitmq.datas)
    this.datas = this.$rabbitmq.datas;
  },
  methods: {}
}
</script>

<style scoped>

.flip-list-move {
  transition: transform 0.5s;
}

table{
  height: 100%;
  width: 100%;
  border: 1px solid #151515;
}
td{
  text-align: center;
  margin: auto;
}
</style>
