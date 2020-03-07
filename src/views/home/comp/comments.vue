<template>
  <div class="comments">
    <div class="insert-comment">
      <el-input type="textarea" rows="3" v-model="content" placeholder="写下你的留言" style="width:100%"> </el-input>
      <div class="publish">
        <el-button type="primary" @click=submit>发布</el-button>
      </div>
    </div>
    <div class="comment-list">
        <h2>精选留言</h2>
        <div v-for="(item,index) in list" :key="index" class="content-item">
          <div class="date">{{item.createDate}}</div>
          <div class="content">{{item.content}}</div>
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
      content: ''
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
      let res = await insertCommentApi({
        parentId: this.$route.query.id,
        content: this.content
      })
      if (res) {
        this.list = res.result
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
  .insert-comment{
    width: 100%;
    .publish{
      padding: 10px 0;
      text-align: right;
    }
  }
  .comment-list{
    .content-item{
      padding: 20px 0;
      font-size: 16px;
      border-bottom: 1px solid #f0f0f0;
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
