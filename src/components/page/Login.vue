<template>
  <div id="login">
    <h1>登录</h1>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="账户：" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item prop="submit">
        <el-button class="submit-button" type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: '',
        password: '',
      },

    }
  },
  methods: {
    submit: function () {
      this.$post('/api/login', {}, '').then(response => {
        alert(response.data)
      })
    },
    // register: function () {
    // },
  },
}
</script>
<style lang="scss" scoped>

#login {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -150px;
  width: 300px;
  height: 300px;

  h1 {
    //color: #fff;
    margin: 15px;
    text-shadow: 0 0 10px;
    letter-spacing: 1px;
    text-align: center;
  }
  .submit-button{
    width: 100%;
  }
}
</style>

