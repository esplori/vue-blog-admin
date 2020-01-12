<template>
  <div class="userInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        {{userInfo.username}}sdf<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
        return {}
      }
    }
  }
}
</script>

<style scoped>
</style>
