<!--后台管理首页-->
<template>
  <div class="admin-index">
    <el-menu default-active="/post" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse" :router="true" :unique-opened="false">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">控制台</span>
        </template>
        <el-menu-item-group>
          <span slot="title">内容管理</span>
          <el-menu-item index="/post">发布文章</el-menu-item>
          <el-menu-item index="">文章管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

</style>
