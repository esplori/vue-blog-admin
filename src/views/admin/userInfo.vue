<template>
  <div class="user-info">
    <el-form :model="form" label-width="140px" style="width: 30%">
      <el-form-item label="站点名称:">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item label="站点描述:">
        <el-input v-model="form.userdesc"></el-input>
      </el-form-item>
      <el-form-item label="站点图标:">
        <el-input v-model="form.avatar"> </el-input>
      </el-form-item>
      <el-form-item label="文件引用路径:">
        <el-input v-model="form.sourceUrl"> </el-input>
      </el-form-item>
      <el-form-item label="文件上传实际路径:">
        <el-input v-model="form.sourceRealUrl"> </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {updateUserInfoApi, getUserInfoApi} from '@/views/API/admin.js'

export default {
  data () {
    return {
      form: {
        nickname: '',
        userdesc: '',
        avatar: ''
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    async submit () {
      let res = await updateUserInfoApi(this.form)
      if (res) {
        this.$message.success('更新成功')
      }
    },
    async getUserInfo () {
      let res = await getUserInfoApi({})
      if (res) {
        this.form = res
      }
    }
  }
}
</script>

<style scoped lang="less">
  .user-info {
    padding: 20px 0;
  }
</style>
