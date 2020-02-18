<template>
  <div class="userInfo">
    <div v-if="userInfo">
      <span @click="toAdmin" class="to-admin">后台管理</span>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <span v-else @click="toLogin" class="login-in">登录</span>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    userInfo () {
      let userinfo = localStorage.getItem('userInfo')
      if (userinfo) {
        console.log('JSON.parse(userinfo)', JSON.parse(userinfo))
        return JSON.parse(userinfo)
      } else {
        return false
      }
    }
  },
  methods: {
    handleCommand () {
      this.$router.push({path: '/login'})
    },
    toLogin (condition) {
      localStorage.clear()
      sessionStorage.clear()
      this.$router.push({path: 'login'})
    },
    toAdmin (condition) {
      this.$router.push({path: 'admin'})
    }
  }
}
</script>

<style scoped lang="less">
.userInfo{
  display: flex;
  align-items: center;
  font-size: 14px;
  .to-admin{
    display: inline-block;
    padding-right: 20px;
  }
  .login-in{
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>
