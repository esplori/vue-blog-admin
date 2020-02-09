<template>
  <div class="search">
    <el-input type="text" placeholder="搜索..." v-model="form.searchKey"></el-input>
  </div>
</template>

<script>
// import {getDetailApi} from '@/views/API/home.js'
export default {
  data () {
    return {
      form: {
        searchKey: ''
      }
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
    padding-bottom: 15px;
    width: 100%;
    text-align: left;
  }
</style>
