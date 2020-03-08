<template>
  <div class="right-detail">
    <recommend></recommend>
    <search></search>
    <cate></cate>
    <latestComments></latestComments>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {}
    }
  },
  components: {
    recommend: () => import('./recommend'),
    cate: () => import('./cate'),
    search: () => import('./search'),
    latestComments: () => import('./latestComments')
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
