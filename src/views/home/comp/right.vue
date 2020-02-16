<template>
  <div class="right-detail">
    <search></search>
    <!-- <div>分类</div> -->
    <func></func>
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
    commenHeader: () => import('@/components/common-header.vue'),
    search: () => import('./search.vue'),
    func: () => import('./func.vue')
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .right-detail {
    margin: 0 15px;
    padding:20px;
    width: 100%;
    text-align: left;
    background:#fff;
    div{
      padding: 20px 0
    }
  }
</style>
