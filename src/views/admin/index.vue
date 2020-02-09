<!--后台管理首页-->
<template>
  <div class="admin-index">
    <adminHeader></adminHeader>
    <div class="container">
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
                <el-menu-item index="/admin/cate">分类管理</el-menu-item>
                <el-menu-item index="/admin/imageManage">图片管理</el-menu-item>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    adminHeader: () => import('./components/admin-header')
  },
  methods: {
    handleOpen () {},
    handleClose () {}
  }
}
</script>

<style scoped lang="less">

  .admin-index{
    height: 100%;
    .container{
      padding-top: 10px;
      height: 100%;
      background: #fff;
      .el-row{
        height: 100%;
        .el-col{
          height: 100%;
        }
      }
      .el-menu-vertical-demo {
        height: 100%;
      }
      .right-content{
        padding-left: 10px;
        padding-right: 20px;
      }
    }
  }

</style>
