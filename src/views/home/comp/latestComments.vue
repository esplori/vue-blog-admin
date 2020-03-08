<template>
  <div class="latestComments">
    <div class="title">最新留言</div>
    <div class="item">
      <ul>
        <li v-for="(item,index) in list" :key="index">{{item.content}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getLatestCommentsApi} from '@/views/API/home.js'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
  },
  created () {
    this.getList()
  },
  filters: {
  },
  methods: {
    async getList () {
      let res = await getLatestCommentsApi({})
      if (res) {
        this.list = res.result || []
      }
    }
  }
}
</script>

<style scoped lang="less">
  .latestComments {
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
      font-size: 16px;
    }
  }
</style>
