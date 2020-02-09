<template>
  <div class="index">
    <el-form label-width="60px" :model="form">
      <h2 style="text-align:center;padding: 20px 0;">用户登录</h2>
      <el-form-item label="账号:">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" type="primary" style="width:100%">登录</el-button>
        <!-- <el-button @click="register" type="warning">注册</el-button> -->
      </el-form-item>
    </el-form>
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
<style scoped>
  .index {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
