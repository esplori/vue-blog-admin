<template>
  <div class="index-list">
    <commenHeader></commenHeader>
    <div class="index-content">
      <div v-for="(item,index) in list" :key="index" class="list-item">
        <div class="title" @click="getDetail(item.id)">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
        <div class="create-date">{{item.createDate}}</div>
      </div>
    </div>
    <div class="pagination-box" style="text-align: center">
      <el-pagination
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
import axios from 'axios'

export default {
  data () {
    return {
      list: [],
      menuList: [
        {label: '首页', url: 'index'},
        {label: '列表', url: 'index'},
        {label: '后台管理', url: 'admin'}
      ],
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
      axios.post('/pages/getList', this.params).then(res => {
        debugger
        console.log('res', res)
        if (res.data.result.length) {
          this.list = res.data.result
          this.total = res.data.total
          console.log('total', this.total)
          debugger
        }
      })
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
      padding-top: 20px;
      width: 1150px;
      margin: 0 auto;

      .list-item {
        margin-bottom: 20px;

        .title {
          font-size: 18px;
          cursor: pointer;

          :hover {
            text-decoration: underline;
          }

        }

        .content {
          argin: 0 0 8px;
          font-size: 13px;
          line-height: 24px;
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
