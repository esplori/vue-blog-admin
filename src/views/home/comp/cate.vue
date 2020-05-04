<template>
  <div class="cate">
    <div class="title">分类目录</div>
    <div class="cate-item">
      <ul>
        <li v-for="(item,index) in list" :key=index @click="getDetail(item)">
          <div>{{item.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getCateApi} from '@/views/API/admin.js'
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
      let res = await getCateApi({})
      if (res) {
        console.log('res', res)
        this.list = res.result
      }
    },
    getDetail (item) {
      window.open('/#/cate?id=' + item.id)
    }
  }
}
</script>

<style scoped lang="less">
  .cate {
    padding-top: 20px;
    width: 100%;
    text-align: left;
    .title{
      font-size: 18px;
      padding-bottom: 10px;
      font-weight: bold;
      border-bottom: 1px solid #f1f1f1;
    }
    .cate-item{
      padding: 10px 0;
        ul{
          li{
            font-size: 14px;
            padding: 3px 0;
            cursor: pointer;
            margin-bottom: 5px;
            text-overflow: ellipsis;
            text-decoration: underline;
          }
        }
      }
  }
</style>
