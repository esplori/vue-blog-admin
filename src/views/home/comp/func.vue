<template>
  <div class="func">
    <div class="title">推荐阅读</div>
    <div class="func-item">
      <ul>
        <li v-for="(item,index) in list" :key=index>
          <div>{{item.title}}</div>
          <div class="title-desc">阅读 {{item.views | randomNum}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getListApi} from '@/views/API/home.js'
export default {
  data () {
    return {
      list: [],
      params: {
        page: 1,
        pageSize: 10,
        cate: ''
      }
    }
  },
  components: {
  },
  created () {
    this.getList()
  },
  filters: {
    randomNum (val) {
      if (val) {
        return val
      } else {
        return Math.ceil(Math.random() * 1000)
      }
    }
  },
  methods: {
    async getList () {
      let res = await getListApi(this.params)
      if (res) {
        this.list = res.result
      }
    }
  }
}
</script>

<style scoped lang="less">
  .func {
    padding-top: 20px;
    width: 100%;
    text-align: left;
    .title{
      font-size: 18px;
      padding-bottom: 10px;
      font-weight: bold;
      border-bottom: 1px solid #f1f1f1;
    }
    .func-item{
      padding: 10px 0;
        ul{
          li{
            font-size: 14px;
            padding: 3px 0;
            cursor: pointer;
            margin-bottom: 5px;
            text-overflow: ellipsis
          }
          li:hover{
            text-decoration: underline;
          }
        }
        .title-desc{
          padding: 5px 0;
          font-size: 12px;
          color: #969696;
        }
      }
  }
</style>
