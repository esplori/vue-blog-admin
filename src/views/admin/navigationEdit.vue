<template>
  <div class="post">
    <el-form label-width="80px" :model="form">
      <el-form-item label="标题：">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容：">
        <el-input type="textarea" v-model="form.content" :rows="10"></el-input>
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

import {postPageApi, editPageApi, getDetailApi, getCateApi} from '@/views/API/navigation.js'
export default {
  data () {
    return {
      form: {
        id: '',
        title: '',
        content: '',
        cate: ''
      },
      cateList: []
    }
  },
  components: {
  },
  mounted () {
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
        if (this.cateList.length) {
          this.form.cate = this.cateList[0].id
        }
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
      let res = await editPageApi({...this.form})
      if (res) {
        this.$message.success('修改成功')
        this.$router.push({path: '/admin/navigationList'})
      }
    },
    async postPage () {
      let res = await postPageApi({...this.form})
      if (res) {
        this.$message.success('添加成功')
        this.$router.push({path: '/admin/navigationList'})
      }
    },
    async getDetail (id) {
      let res = await getDetailApi({id: id})
      if (res) {
        this.form = res.result
      }
    }
  }
}
</script>

<style scoped lang="less">
.post{
  width: 100%;
}
</style>
