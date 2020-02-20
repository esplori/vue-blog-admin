<template>
  <div class="search">
    <commenHeader></commenHeader>
    <div class="detail-content">
      <el-row>
        <el-col :span='18'>
            <div class="detail" v-for="(item,index) in list" :key="index">
              <div class="title" @click="getDetail(item)">{{item.title}}</div>
              <div class="content">{{item.content | filterContent}}</div>
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
import {searchApi} from '@/views/API/home.js'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    commenHeader: () => import('@/components/common-header.vue'),
    right: () => import('./comp/right')
  },
  filters: {
    /**
     * 过滤富文本的html标签,截取前120个字作为描述
     */
    filterContent (str) {
      let val = str.replace(/<[^>]+>/g, '').replace(/&lt/g, '').replace(/&gt/g, '').replace(/&nbsp/g, '')
      return val.length >= 120 ? val.slice(0, 120) + '...' : val
    }
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
      window.open('/#/detail?id=' + item.id + '&title=' + encodeURIComponent(item.title))
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
