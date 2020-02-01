<template>
  <div class="index-list">
    <commenHeader></commenHeader>
    <div class="index-content">
      <div v-for="(item,index) in list" :key="index" class="list-item">
        <div class="title" @click="getDetail(item.id)">{{item.title}}</div>
        <!-- <div class="content">{{item.content.slice(0,120)}}...</div> -->
        <div class="create-date">{{item.createDate}}</div>
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
        :total="total">
      </el-pagination>
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
        pageSize: 10
      },
      total: 0
    }
  },
  components: {
    commenHeader: () => import('@/components/common-header.vue')
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
      this.$router.push({path: 'detail', query: {id: id}})
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
  .index-list {
    width: 100%;
    margin: 0 auto;
    text-align: left;
    .menu {
      max-width: 1150px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-content: center;
      background: #000;
      color: #fff;
      .menu-item {
        display: inline-block;
        padding: 20px;
      }

    }
    .index-content {
      padding: 20px;
      max-width: 1150px;
      margin: 0 auto;
      background: #fff;
      margin-top: 20px;

      .list-item {
        margin-bottom: 20px;

        .title {
          font-size: 18px;
          cursor: pointer;
          padding: 5px 0;
          &:hover {
            text-decoration: underline;
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

  }

</style>
