<template>
  <div class="detail">
    <div class="title">{{form.title}}</div>
    <div class="content">{{form.content}}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {}
    }
  },
  created () {
    this.getDetail(this.$route.query.id)
  },
  methods: {
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

<style scoped type="less">
  .detail {
    text-align: left;
    margin-bottom: 20px;
    .title {
      font-size: 18px;
    }
    .content {
      font-size: 14px;
    }
  }
</style>
