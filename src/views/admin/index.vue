<!--后台管理首页-->
<template>
  <div class="admin-index">
    <div class="container">
      <el-row>
        <el-col :span="4">
          <el-menu default-active="/admin/pageList" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                   :collapse="isCollapse" :router="true" :unique-opened="false">
            <el-submenu index="1">
              <template slot="title">
                <span slot="title">控制台</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/admin/pageList">
                  <i class="el-icon-setting"></i>
                  文章管理
                </el-menu-item>
                <el-menu-item index="/admin/cate">
                 <i class="el-icon-s-operation"></i>
                  分类管理
                </el-menu-item>
                <el-menu-item index="/admin/navigationList">
                  <i class="el-icon-picture-outline"></i>
                  导航管理
                </el-menu-item>
                 <el-menu-item index="/admin/sourceList">
                  <i class="el-icon-picture-outline"></i>
                  资源管理
                </el-menu-item>
                <el-menu-item index="/admin/userInfo">
                  <i class="el-icon-user"></i>
                  系统设置
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="20" style="overflow-y: auto!important;">
          <div class="right-content">
            <adminHeader></adminHeader>
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
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    .container{
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
        padding-bottom: 20px;
      }
    }
  }

</style>
