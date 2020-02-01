<template>
  <div class="home-detail">
    <commenHeader></commenHeader>
    <div class="detail-content">
      <div class="title">{{form.title}}</div>
      <div class="content" v-html="form.content"></div>
    </div>
  </div>
</template>

<script>
import {getDetailApi} from '@/views/API/home.js'
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
  .home-detail {
    width: 100%;
    text-align: left;
    .detail-content{
      max-width: 1150px;
      margin: 20px auto;
      background: #fff;
      padding: 20px;
      .title {
        font-size: 24px;
        margin-bottom: 20px;
        color: #333;
        font-weight: bold;
      }
      .content {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
</style>
