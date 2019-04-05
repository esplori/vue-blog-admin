<template>
  <div class="index">
    <el-form label-width="80px" :model="form">
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" type="primary">登录</el-button>
        <el-button @click="register" type="warning">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    login () {
      axios.post('/account/login', this.form).then(res => {
        console.log('res', res)
        if (res.data.code === '0') {
          this.$router.push({path: 'index'})
        }
      })
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
