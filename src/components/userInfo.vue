<template>
  <div class="userInfo">
    <div v-if="userInfo" class="info-flex">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar size="medium" :src="userInfo.avatar"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <span @click="toAdmin">后台管理</span>
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
        return JSON.parse(userinfo)
      } else {
        return false
      }
    }
  },
  methods: {
    /**
     * 能出
     */
    handleCommand () {
      localStorage.clear()
      sessionStorage.clear()
      this.$router.push({path: '/login'})
    },
    /**
     * 登录
     */
    toLogin () {
      this.$router.push({path: 'login'})
    },
    /**
     * 后台管理
     */
    toAdmin () {
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
  .info-flex{
    display: flex;
    align-items: center;
  }
  .login-in{
    cursor: pointer;
  }
  .login-in:hover{
    text-decoration: underline;
  }
}
</style>
