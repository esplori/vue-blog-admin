<template>
  <div class="comments">
    <div class="comment-content">
      <el-input type="textarea" rows="3" :v-model="comments" placeholder="写下你的留言" style="width:100%"> </el-input>
      <div class="publish">
        <el-button type="primary">发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comments: ''
    }
  },
  props: {
  },
  components: {
  },
  computed: {
  },
  created () {
  },
  filters: {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.comments{
  margin-top: 20px;
  background: #ffffff;
  display: flex;
  padding: 20px;
  .comment-content{
    width: 100%;
    .publish{
      padding: 10px 0;
      text-align: right;
    }
  }
}
</style>
