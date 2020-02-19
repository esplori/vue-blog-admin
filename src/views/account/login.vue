<template>
  <div class="login">
    <div class="login-container">
      <el-form :model="form">
      <h2 style="text-align:center;padding: 20px 0;">用户登录</h2>
      <el-form-item>
        <el-input v-model="form.username" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" type="password" placeholder="密码" @keyup.enter.native="login"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" type="primary" style="width:100%">登录</el-button>
        <!-- <el-button @click="register" type="warning">注册</el-button> -->
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
import {loginApi} from '@/views/API/common.js'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      let res = await loginApi(this.form)
      if (res) {
        localStorage.setItem('userInfo', JSON.stringify(res.result))
        this.$router.push({path: 'index'})
      }
    },
    register () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .login {
    height: 100%;
    padding-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-container{
      width: 300px;
      background: #fff;
      padding: 80px;
      box-shadow: 0 0 8px rgba(0,0,0,0.1);
    }
  }
</style>
