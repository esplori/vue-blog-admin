<template>
  <div class="userInfo">
    <div v-if="userInfo" class="info-flex">
      <div class="news">
        <el-badge is-dot><i class="el-icon-bell"></i></el-badge>
      </div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar size="medium" :src="userInfo.avatar"></el-avatar>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided command="userSetting">个人设置</el-dropdown-item>
          <el-dropdown-item divided command="toAdmin">后台管理</el-dropdown-item>
          <el-dropdown-item divided command="logout">退出</el-dropdown-item>
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
    handleCommand (command) {
      switch (command) {
        case 'userSetting':
          window.open('/admin/userInfo')
          break
        case 'toAdmin':
          window.open('/admin')
          break
        case 'logout':
          localStorage.clear()
          sessionStorage.clear()
          this.$router.push({path: '/login'})
          break
      }
    },
    toLogin () {
      this.$router.push({path: '/login'})
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
    .news{
      padding: 0 20px;
      cursor: pointer;
      .el-icon-bell{
        font-size: 18px;
      }
    }
  }
  .login-in{
    cursor: pointer;
  }
  .login-in:hover{
    text-decoration: underline;
  }
  .el-dropdown-link{
    display: flex;
    align-items: center;
  }
}
</style>
