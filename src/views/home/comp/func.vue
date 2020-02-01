<template>
  <div class="func">
    <div class="title">功能</div>
    <div class="func-item">
      <div><a href="">登录</a></div>
      <div><a href="">注册</a></div>
    </div>
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
  .func {
    width: 100%;
    text-align: left;
    border-top: 1px solid #ddd;
    .title{
      font-size: 18px;
      padding-bottom: 10px;
      font-weight: bold;
    }
    .func-item{
        div{
          font-size: 14px;
          padding: 3px 0;
        }
      }
  }
</style>
