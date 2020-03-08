<template>
  <div class="comments">
    <div class="insert-comment">
      <h2 class="comment-title">发表留言：</h2>
      <el-form :model="form" label-width="60px">
        <el-form-item label="名称：">
          <el-input v-model.trim="form.username" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="内容：">
          <el-input type="textarea" rows="3" v-model.trim="form.content" placeholder="写下你的留言"> </el-input>
        </el-form-item>
      </el-form>
      <div class="publish">
        <el-button type="primary" @click=submit>发布</el-button>
      </div>
    </div>
    <div class="comment-list" v-show="list.length">
        <h2>精选留言</h2>
        <div v-for="(item,index) in list" :key="index" class="content-item">
          <div class="username">{{item.username}}</div>
          <div class="content">{{item.content}}</div>
          <div class="date">{{item.createDate}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import {insertCommentApi, getCommentApi} from '@/views/API/home.js'
export default {
  data () {
    return {
      list: [],
      form: {
        username: '',
        content: ''
      }
    }
  },
  props: {
  },
  components: {
  },
  computed: {
  },
  created () {
    this.getList()
  },
  filters: {
  },
  methods: {
    async getList () {
      let res = await getCommentApi({id: parseInt(this.$route.query.id)})
      if (res) {
        this.list = res.result || []
      }
    },
    async submit () {
      if (this.form.username && this.form.content) {
        let res = await insertCommentApi({
          parentId: this.$route.query.id,
          username: this.form.username,
          content: this.form.content
        })
        if (res) {
          this.$message.success('提交成功')
        }
      } else {
        this.$message.warning('请输入名称和内容')
      }
    }
  }
}
</script>

<style scoped lang="less">
.comments{
  margin-top: 20px;
  background: #ffffff;
  display: flex;
  padding: 20px;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  .insert-comment{
    width: 100%;
    .publish{
      padding: 10px 0;
      text-align: right;
    }
    .comment-title{
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
    }
  }
  .comment-list{
    padding-top: 20px;
    margin-top: 20px;
    border-top: 1px solid #ddd;
    .content-item{
      padding: 20px 0;
      font-size: 16px;
      border-bottom: 1px dashed #ddd;
      .username{
        font-size: 14px;
        text-decoration: underline;
      }
      .date{
        font-size: 12px;
      }
      .content{
        padding: 10px 0;
      }
    }
  }
}
</style>
