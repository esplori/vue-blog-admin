<template>
  <div class="content-detail">
    <div v-for="(item,index) in list" :key="index" class="list-item">
            <div class="title" @click="getDetail(item.id)">{{item.title}}</div>
          <div class="content">{{item.content | filterContent}}</div>
            <div class="create-date">{{item.createDate}}</div>
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
    cate (val) {
      this.params.cate = parseInt(val)
      this.getList()
    }
  },
  props: {
    cate: {
      default: 1
    }
  },
  components: {
  },
  filters: {
    /**
     * 过滤富文本的html标签,截取前120个字作为描述
     */
    filterContent (str) {
      let val = str.replace(/<[^>]+>/g, '')
      return val.length >= 120 ? val.slice(0, 120) + '...' : val
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      let res = await getListApi(this.params)
      if (res) {
        this.list = res.result
        this.total = res.total
      }
    },
    getDetail (id) {
      // this.$router.push({path: 'detail', query: {id: id}})
      window.open('/detail?id=' + id)
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
    padding-right: 20px;
    .list-item {
        margin-bottom: 20px;

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
        }

        .create-date {
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
