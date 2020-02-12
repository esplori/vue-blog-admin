<template>
  <div class="post">
    <el-form label-width="80px" :model="form">
      <el-form-item label="标题：">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容：">
        <editor id="tinymce" v-model="form.content" :init="init"></editor>
      </el-form-item>
      <el-form-item label="分类：">
        <el-select v-model="form.cate">
          <el-option v-for="(item,index) in cateList" :key=index :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit" type="primary">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
import 'tinymce/themes/silver/theme'

import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'

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
      init: {
        language_url: '/static/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/ui/oxide', // skin路径
        height: 300, // 编辑器高度
        branding: false, // 是否禁用“Powered by TinyMCE”
        menubar: true, // 顶部菜单栏显示
        plugins: 'link lists image code table colorpicker textcolor wordcount contextmenu',
        toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat'
      }
    }
  },
  components: {
    editor: Editor
  },
  mounted () {
    tinymce.init({})
  },
  computed: {
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
