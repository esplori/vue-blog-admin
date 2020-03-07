<template>
  <div class="author">
    <div class="avantar"><el-avatar size="medium" :src="userInfo.avatar"></el-avatar></div>
    <div class="name-date">
      <div class="nickname">{{userInfo.nickname}}</div>
      <div>{{form.createDate }} <span class="views">阅读 {{ form.views}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  props: {
    form: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
  },
  computed: {
    userInfo () {
      let userinfo = localStorage.getItem('userInfo')
      if (userinfo) {
        return JSON.parse(userinfo)
      } else {
        return {}
      }
    }
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
.author{
  display: flex;
  padding-bottom: 20px;
  .name-date{
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    .nickname{
      font-size: 16px;
      font-weight: 500;
    }
    .views{
      padding-left: 10px;
    }
  }
}
</style>
