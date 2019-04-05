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
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      params: {
        page: 1,
        pageSize: 10
      }
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      axios.post('/pages/getList', this.params).then(res => {
        if (res.data.length) {
          this.list = res.data
        }
      })
    },
    del (id) {
      axios.delete('/pages/list/' + id).then(res => {
        if (res) {
          this.$message.success('删除成功')
          this.getList()
        }
      })
    },
    edit (id) {
      this.$router.push({path: 'post', query: {id: id}})
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
