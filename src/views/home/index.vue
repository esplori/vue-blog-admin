<template>
  <div class="index-list">
    <commenHeader></commenHeader>
    <div class="index-content">
      <el-row>
        <el-col :span='20'>
          <contentList></contentList>
        </el-col>
        <el-col :span="4">
            <right></right>
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
      padding: 20px;
      max-width: 1150px;
      margin: 0 auto;
      background: #fff;
      margin-top: 20px;
    }

  }

</style>
