<template>
  <div class="index-list">
    <commenHeader></commenHeader>
    <div class="index-content">
      <el-row class="pc">
        <el-col :span="18">
          <contentList></contentList>
        </el-col>
        <el-col :span="6">
          <right></right>
        </el-col>
      </el-row>
      <el-row class="mobile">
        <el-col :span="24">
          <contentList></contentList>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
    // 公共头部
    commenHeader: () => import('@/components/common-header.vue'),
    contentList: () => import('./comp/content.vue'),
    right: () => import('./comp/right.vue')
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .index-list {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    .menu {
      max-width: 1150px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-content: center;
      background: #000;
      color: #fff;
      .menu-item {
        display: inline-block;
        padding: 20px;
      }

    }
    .index-content {
      padding: 5px 20px;
      max-width: 1150px;
      margin: 0 auto;
      margin-top: 10px;
      box-sizing: content-box;
      @media screen and(max-width: 768px) {
        .pc{
          display: none;
        }
        .mobile{
          display: block;
        }
      }
      @media screen and(min-width: 769px) {
        .pc{
          display: block;
        }
        .mobile{
          display: none;
        }
      }
    }

  }

</style>
