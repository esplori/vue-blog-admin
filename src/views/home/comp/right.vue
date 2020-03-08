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
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    div{
      padding: 20px 0
    }
  }
</style>
