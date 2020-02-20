<template>
  <div class="content-detail">
    <div v-for="(item,index) in list" :key="index" class="list-item">
      <div class="title" @click="getDetail(item)">{{item.title}}</div>
      <div class="content">{{item.content | filterContent}}</div>
      <div class="content-desc">
        <span><i class="el-icon-date"></i> {{item.createDate | filterDate}}</span>
        <span><i class="el-icon-view"></i> {{item.views | randomNum}}</span>
        <span><i class="el-icon-star-off"></i> {{item.likes | randomNum}}</span>
        <!-- <span><i class="el-icon-chat-line-round"></i> 评论</span> -->
      </div>
    </div>
        <div class="pagination-box" style="text-align: center;margin: 20px auto;">
          <el-pagination
            v-if="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="params.page"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="params.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"></el-pagination>
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
      },
      total: 0
    }
  },
  watch: {
  },
  props: {
  },
  components: {
  },
  filters: {
    /**
     * 过滤富文本的html标签,截取前120个字作为描述
     */
    filterContent (str) {
      let val = str.replace(/<[^>]+>/g, '').replace(/&lt/g, '').replace(/&gt/g, '').replace(/&nbsp/g, '')
      return val.length >= 120 ? val.slice(0, 120) + '...' : val
    },
    /**
     * 格式化日期，只取年月日
     */
    filterDate (val) {
      let date = new Date(val.replace(/-/g, '/') || new Date())
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    },
    randomNum (val) {
      if (val) {
        return val
      } else {
        return Math.ceil(Math.random() * 1000)
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    handleCate (cate) {
      this.params.cate = parseInt(cate)
      this.getList()
    },
    async getList () {
      let res = await getListApi(this.params)
      if (res) {
        this.list = res.result
        this.total = res.total
      }
    },
    getDetail (item) {
      // 详情另开页面
      window.open('/#/detail?id=' + item.id)
    },
    handleSizeChange (val) {
      this.params.pageSize = val
      this.getList()
    },
    handleCurrentChange (val) {
      this.params.page = val
      this.getList()
    }
  }
}
</script>

<style scoped lang="less">
  .content-detail {
    padding: 20px;
    background: #fff;
    .list-item {
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
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

        .content {
          margin: 0 0 8px;
          font-size: 13px;
          color: #999;
          line-height: 24px;
        }

        .content-desc {
          padding-top: 5px;
          font-size: 13px;
          color: #999;
          span{
            padding-right: 10px;
          }
        }

        .handler {
          font-size: 12px;
          padding: 10px 0;

          span {
            cursor: pointer;
            margin-right: 10px;
          }

        }

      }
  }
</style>
