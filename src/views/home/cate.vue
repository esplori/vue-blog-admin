<template>
  <div class="cate-list">
    <commenHeader></commenHeader>
    <div class="detail-content">
      <el-row>
        <el-col :span='18'>
          <contentlist></contentlist>
        </el-col>
        <el-col :span="6">
          <sideBar></sideBar>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      params: {
        page: 1,
        pageSize: 10,
        cate: 0
      },
      total: 0
    }
  },
  components: {
    commenHeader: () => import('@/components/common-header.vue'),
    sideBar: () => import('./comp/sideBar'),
    contentlist: () => import('./comp/content')
  }
}
</script>

<style scoped lang="less">
  .cate-list {
    width: 100%;
    text-align: left;
    .detail-content{
      max-width: 1150px;
      margin: 10px auto;
      padding: 5px 20px;
    }
  }
</style>
