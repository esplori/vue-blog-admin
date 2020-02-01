<template>
  <div class="search">
    <el-input placeholder="搜索..."></el-input>
  </div>
</template>

<script>
// import {getDetailApi} from '@/views/API/home.js'
export default {
  data () {
    return {
      form: {}
    }
  },
  components: {
    commenHeader: () => import('@/components/common-header.vue')
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .search {
    width: 100%;
    text-align: left;
  }
</style>
