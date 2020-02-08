<template>
  <div class="page-list">
    <el-button type="primary" @click="insertCate" size="small">新增分类</el-button>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        label="标题">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name" :disabled="!scope.row.disabled" @blur="handleBlur(scope.row)"></el-input>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button @click="edit(scope.row)" type="primary">编辑</el-button>
          <el-button @click="del(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {delCateApi, getCateApi, updateCateApi, insertCateApi} from '@/views/API/admin.js'

export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    insertCate () {
      this.list.push({
        name: '',
        disabled: true
      })
    },
    async getList () {
      let res = await getCateApi(this.params)
      if (res) {
        this.list = res.result
        this.total = res.total
      }
    },
    async del (id) {
      let res = await delCateApi({id: id})
      if (res) {
        this.$message.success('删除成功')
        this.getList()
      }
    },
    /**
     * 编辑
     */
    edit (row) {
      this.$set(row, 'disabled', !row.disabled)
    },
    async handleBlur (row) {
      if (row.id) {
        let res = await updateCateApi(row)
        if (res) {
          this.$set(row, 'disabled', !row.disabled)
        }
      } else {
        let res = await insertCateApi(row)
        if (res) {
          this.getList()
        }
      }
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
  .page-list {
    width: 100%;
    .content-item {
      font-size: 18px;
      text-align: left;
      padding: 5px;
    }
  }
</style>
