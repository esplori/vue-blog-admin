<template>
  <div class="page-list">
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row.id)" type="primary">编辑</el-button>
          <el-button @click="del(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-box" style="text-align: center;margin-top: 20px;">
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
import {getListApi} from '@/views/API/home.js'
import {delApi} from '@/views/API/admin.js'

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
    async del (id) {
      let res = await delApi({id: id})
      if (res) {
        this.$message.success('删除成功')
        this.getList()
      }
    },
    edit (id) {
      this.$router.push({path: 'post', query: {id: id}})
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
.page-list{
  width: 100%;
  .content-item{
    font-size: 18px;
    text-align: left;
    padding: 5px;
  }
}
</style>
