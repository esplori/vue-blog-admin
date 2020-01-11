<template>
  <div class="index">
    <el-form label-width="80px" :model="form">
      <el-form-item label="账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" type="primary">登录</el-button>
        <el-button @click="register" type="warning">注册</el-button>
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
        name: '',
        pwd: ''
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
    width: 20%;
    margin: 100px auto;
  }
</style>
