<template>
  <div class="search">
    <commenHeader></commenHeader>
    <div class="detail-content">
      <el-row>
        <el-col :span='18'>
            <div class="detail" v-for="(item,index) in list" :key="index">
              <div class="title" @click="getDetail(item)">{{item.title}}</div>
              <div class="content">{{item.content.slice(0, 150)}} ...</div>
            </div>
        </el-col>
        <el-col :span="6">
            <sideBar></sideBar>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {searchApi} from '@/views/API/home.js'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    commenHeader: () => import('@/components/common-header.vue'),
    sideBar: () => import('./comp/sideBar')
  },
  filters: {
  },
  created () {
    this.search(this.$route.query.key)
  },
  methods: {
    async search (key) {
      let res = await searchApi({key: key})
      if (res && res.result.length) {
        this.list = res.result
      } else {
        this.list = [{title: '', content: '暂无结果'}]
      }
    },
    getDetail (item) {
      // 详情另开页面
      window.open('/#/detail?id=' + item.id)
    }
  }
}
</script>

<style scoped lang="less">
  .search {
    width: 100%;
    text-align: left;
    .detail-content{
      max-width: 1150px;
      margin: 10px auto;
      padding: 5px 20px;
      .detail{
        background: #fff;
        padding: 20px;
        border-bottom: 1px solid #f0f0f0;
      }
      .title {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.6;
        color: #1a1a1a;
        cursor: pointer;
        padding: 5px 0;
        &:hover {
          color: #175199;
        }
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
