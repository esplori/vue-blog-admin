<template>
  <div class="imageManage">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <div class="item">
          <img :src="item" alt="" width="200px" height="120px" @click="previewImage(item)">
        </div>
      </li>
    </ul>
    <el-dialog
  :visible.sync="dialogVisible"
  width="80%">
  <span>图片名称：{{imgUrl}}</span>
  <img :src="imgUrl" width="800px">
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    <el-button type="danger" @click="delFile(imgUrl)">删除</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import {delFileApi, getImageListApi} from '@/views/API/admin.js'

export default {
  data () {
    return {
      list: [],
      total: 0,
      dialogVisible: false,
      imgUrl: ''
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
      let res = await getImageListApi({})
      if (res) {
        this.list = res.map(item => {
          let lastIndex = item.lastIndexOf('/')
          let newItem = item.slice(lastIndex)
          return '/uploadFile' + newItem
        })
      }
    },
    async delFile (id) {
      let res = await delFileApi(id)
      if (res) {
        this.$message.success('删除成功')
        this.getList()
      }
    },
    handleSizeChange (val) {
      this.params.pageSize = val
      this.getList()
    },
    handleCurrentChange (val) {
      this.params.page = val
      this.getList()
    },
    previewImage (url) {
      this.dialogVisible = true
      this.imgUrl = url
    }
  }
}
</script>

<style scoped lang="less">
  .imageManage {
    width: 100%;
    ul {
      li {
        width: 200px;
        height: 120px;
        display: inline-block;
        margin-right: 10px;
        margin-top: 10px;
        border: 1px solid #ddd;
      }
    }
  }
</style>
