<!--后台管理首页-->
<template>
  <div class="admin-index">
    <el-row>
      <el-col :span="4">
        <el-menu default-active="/admin/pageList" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse" :router="true" :unique-opened="false">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">控制台</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/admin/pageList">文章管理</el-menu-item>
              <el-menu-item index="/admin/post">发布文章</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div class="right-content">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen () {},
    handleClose () {}
  }
}
</script>

<style scoped lang="less">

  .admin-index{
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    .right-content{
      padding: 40px;
    }
  }

</style>
