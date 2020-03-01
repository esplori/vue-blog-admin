<template>
  <div class="cate-list">
    <commenHeader></commenHeader>
    <div class="detail-content">
      <el-row>
        <el-col :span='18'>
            <div class="detail" v-for="(item,index) in list" :key="index">
              <div class="title" @click="getDetail(item)">{{item.title}}</div>
              <div class="content">{{item.content.slice(0,150)}} ...</div>
            </div>
        </el-col>
        <el-col :span="6">
            <right></right>
        </el-col>
      </el-row>
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
    commenHeader: () => import('@/components/common-header.vue'),
    right: () => import('./comp/right')
  },
  filters: {
  },
  created () {
    this.params.cate = this.$route.query.id
    this.getList()
  },
  methods: {
    async getList (id) {
      let res = await getListApi(this.params)
      if (res && res.result.length) {
        this.list = res.result
      } else {
        this.list = [{title: '', content: '暂无结果'}]
      }
    },
    getDetail (item) {
      // 详情另开页面
      window.open('/detail?id=' + item.id)
    }
  }
}
</script>

<style scoped lang="less">
  .cate-list {
    width: 100%;
    text-align: left;
    .detail-content{
      max-width: 1150px;
      margin: 10px auto;
      padding: 5px 20px;
      .detail{
        background: #fff;
        padding: 20px;
      }
      .title {
        font-size: 30px;
        margin-bottom: 20px;
        color: #404040;
        font-weight: 700;
        cursor: pointer;
      }
      .title:hover{
        text-decoration: underline;
      }
      .content {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
</style>
