<template>
  <div class="userInfo">
    <el-dropdown>
      <span class="el-dropdown-link">
        李信<i class="el-icon-arrow-down el-icon--right"></i>
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
  }
}
</script>

<style scoped>
  .userInfo {
    color: #fff;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
</style>
