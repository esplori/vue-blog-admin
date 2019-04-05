<template>
  <div class="post">
    <el-form label-width="80px" :model="form">
      <el-form-item label="标题：">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容：">
        <el-input type="textarea" :rows="5" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="submit">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        id: '',
        title: '',
        content: ''
      }
    }
  },
  created () {
    if (this.$route.query.id) {
      this.getDetail(this.$route.query.id)
    }
  },
  methods: {
    submit () {
      if (this.form.id) {
        axios.put('/pages/list', this.form).then(res => {
          console.log('res', res)
          if (res) {
            this.$message.success('修改成功')
          }
        })
      } else {
        axios.post('/pages/list', this.form).then(res => {
          console.log('res', res)
          if (res) {
            this.$message.success('添加成功')
            this.$router.push({path: '/index'})
          }
        })
      }
    },
    getDetail (id) {
      axios.get('/pages/list/' + id).then(res => {
        console.log('res', res)
        if (res.data) {
          this.form = res.data
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
