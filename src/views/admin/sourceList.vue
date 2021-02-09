<template>
  <div class="page-list">
    <div class="handle">
      <el-button type="primary" @click="addFile">新增文件</el-button>
    </div>
    <el-table
      :data="list"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button @click="del(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%">
  <el-upload
      class="upload-demo"
      drag
      action="/bootService/account/upload"
      multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import {delApi, getListApi} from '@/views/API/navigation.js'

export default {
  data () {
    return {
      list: [],
      dialogVisible: false
    }
  },
  created () {
    this.getList()
  },
  methods: {
    addFile() {
      this.dialogVisible = true
    },
    async getList () {
      let res = await getListApi(this.params)
      if (res) {
        this.list = res.result
      }
    },
    async del (id) {
      let res = await delApi({id: id})
      if (res) {
        this.$message.success('删除成功')
        this.getList()
      }
    },
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
