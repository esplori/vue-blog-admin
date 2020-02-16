<template>
  <div class="index-list">
    <commenHeader @changeCate="changeCate"></commenHeader>
    <div class="index-content">
      <contentList :cate='cate'></contentList>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 分类
      cate: 1
    }
  },
  components: {
    // 公共头部
    commenHeader: () => import('@/components/common-header.vue'),
    contentList: () => import('./comp/content.vue')
  },
  created () {
  },
  methods: {
    /**
     * 切换分类
     */
    changeCate (cate) {
      this.cate = cate
    }
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
      padding: 20px;
      max-width: 1150px;
      margin: 0 auto;
      background: #fff;
      margin-top: 10px;
    }

  }

</style>
