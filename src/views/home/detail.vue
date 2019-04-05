<template>
  <div class="home-detail2">
    <commenHeader></commenHeader>
    <div class="detail-content">
      <div class="title">{{form.title}}</div>
      <div class="content">{{form.content}}</div>
    </div>
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
  components: {
    commenHeader: () => import('@/components/common-header.vue')
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

<style scoped lang="less">
  .home-detail2 {
    width: 100%;
    text-align: left;
    .detail-content{
      width: 1150px;
      margin: 20px auto;
      .title {
        font-size: 18px;
      }
      .content {
        font-size: 14px;
      }
    }
  }
</style>
