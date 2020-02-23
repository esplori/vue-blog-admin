<template>
  <div class="right-detail">
    <recommend></recommend>
    <cate></cate>
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
    recommend: () => import('./recommend'),
    cate: () => import('./cate')
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
