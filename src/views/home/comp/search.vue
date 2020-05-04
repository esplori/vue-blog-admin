<template>
  <div class="search">
    <div class="title">搜索</div>
    <div class="item">
      <el-input placeholder="搜索" v-model="searchKey" @keydown.enter.native="toSearch(searchKey)">
        <i class="el-icon-search el-input__icon" slot="suffix" @click="toSearch(searchKey)"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchKey: ''
    }
  },
  components: {
  },
  created () {
  },
  filters: {
  },
  methods: {
    toSearch (key) {
      window.open('/#/search?key=' + encodeURIComponent(key))
    }
  }
}
</script>

<style scoped lang="less">
  .search {
    padding-top: 20px;
    width: 100%;
    text-align: left;
    .title{
      font-size: 18px;
      padding-bottom: 10px;
      font-weight: bold;
      border-bottom: 1px solid #f1f1f1;
    }
    .item{
      padding: 20px 0;
    }
  }
</style>
