<template>
  <div class="post">
    <el-form label-width="80px" :model="form">
      <el-form-item label="标题：">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容：">
        <textarea id="mytextarea">Hello, World!</textarea>
      </el-form-item>
      <el-form-item label="分类：">
        <el-select v-model="form.cate">
          <el-option v-for="(item,index) in cateList" :key=index :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit" type="primary">确定</el-button>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          action="/bootService/pages/upload"
          multiple
          :headers="headers"
          :limit="3"
          :on-success="handleSuccess"
          :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <!-- <el-form-item>
        <el-button @click="download">下载</el-button>
      </el-form-item> -->

    <img :src="imgUrl" alt="">

    </el-form>
  </div>
</template>
<script>
import {postPageApi, editPageApi, getDetailApi, getCateApi} from '@/views/API/admin.js'
export default {
  data () {
    return {
      form: {
        id: '',
        title: '',
        content: '',
        cate: ''
      },
      cateList: [],
      fileList: [],
      imgUrl: ''
    }
  },
  components: {
  },
  mounted () {
    tinymce.init({
      selector: '#mytextarea'
    })
  },
  computed: {
    headers () {
      let userinfo = localStorage.getItem('userInfo')
      if (userinfo) {
        userinfo = JSON.parse(userinfo)
        return {
          Authorization: userinfo.token
        }
      }
      return null
    }
  },
  created () {
    let id = this.$route.query.id
    if (id) {
      this.getDetail(id)
    }
    this.getCate()
  },
  methods: {
    async getCate () {
      let res = await getCateApi({})
      if (res) {
        this.cateList = res.result || []
      }
    },
    submit () {
      if (this.form.id) {
        this.editPage()
      } else {
        this.postPage()
      }
    },
    async editPage () {
      let res = await editPageApi(this.form)
      if (res) {
        this.$message.success('修改成功')
        this.$router.push({path: '/admin/pageList'})
      }
    },
    async postPage () {
      let res = await postPageApi(this.form)
      if (res) {
        this.$message.success('添加成功')
        this.$router.push({path: '/admin/pageList'})
      }
    },
    async getDetail (id) {
      let res = await getDetailApi({id: id})
      if (res) {
        this.form = res.result
      }
    },
    download () {
      this.ajaxPostLoadFile('/pages/download', '11')
    },
    handleSuccess (response, file, fileList) {
      this.imgUrl = '/bootService' + response
    },
    ajaxPostLoadFile (url, val) {
      var form = document.createElement('form')
      form.setAttribute('style', 'display:none')
      form.setAttribute('target', '')
      form.setAttribute('method', 'post')
      form.setAttribute('action', url)
      var tempInput = document.createElement('input')
      tempInput.setAttribute('type', 'hidden')
      tempInput.setAttribute('name', 'testName')
      tempInput.setAttribute('value', val)
      form.append(tempInput)
      document.body.appendChild(form)
      form.submit()
    }
  }
}
</script>

<style scoped lang="less">
.post{
  width: 100%;
}
</style>
