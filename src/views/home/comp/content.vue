<template>
  <div class="content-detail">
    <div v-for="(item,index) in list" :key="index" class="list-item">
            <div class="title" @click="getDetail(item.id)">{{item.title}}</div>
          <div class="content">{{item.content | filterContent}}</div>
            <div class="create-date"><i class="el-icon-date"></i> {{item.createDate | filterDate}}</div>
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
import {getCateApi} from '@/views/API/admin.js'
export default {
  data () {
    return {
      list: [],
      params: {
        page: 1,
        pageSize: 10,
        cate: ''
      },
      total: 0,
      cateList: []
    }
  },
  watch: {
  },
  props: {
  },
  components: {
    carousel: () => import('@/components/carousel')
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
      let date = new Date(val || new Date())
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay()
    }
  },
  created () {
    this.getCate()
    this.getList()
  },
  methods: {
    handleCate (cate) {
      this.params.cate = parseInt(cate)
      this.getList()
    },
    async getCate () {
      let res = await getCateApi({})
      if (res) {
        this.cateList = res.result || []
      }
    },
    async getList () {
      let res = await getListApi(this.params)
      if (res) {
        this.list = res.result
        this.total = res.total
      }
    },
    getDetail (id) {
      // 详情另开页面
      window.open('/#/detail?id=' + id)
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
    .cateList{
      display: flex;
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 15px;
      margin-bottom: 10px;
      .cate-item{
        padding: 0px 25px;
        font-size: 14px;
        color: #999;
        border-right: 1px solid #f0f0f0;
        cursor: pointer;
      }
    }
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

        .create-date {
          padding-top: 5px;
          font-size: 13px;
          color: #999;
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
