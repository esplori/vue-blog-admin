<template>
  <div class="func">
    <div class="title">功能</div>
    <div class="func-item">
      <div>登录</div>
      <div>注册</div>
      <div @click="toAdmin">后台管理</div>
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
    toAdmin (condition) {
      this.$router.push({path: 'admin'})
    }
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
