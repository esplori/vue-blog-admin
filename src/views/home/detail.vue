<template>
  <div class="home-detail">
    <detailHeader></detailHeader>
    <div class="detail-content">
      <el-row>
        <el-col :span='20'>
            <div class="title">{{form.title}}</div>
            <div class="content" v-html="form.content"></div>
        </el-col>
        <el-col :span="4">
            <right></right>
        </el-col>
      </el-row>
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
    detailHeader: () => import('@/components/detail-header'),
    right: () => import('./comp/right')
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
      margin: 10px auto;
      background: #fff;
      padding: 20px;
      .title {
        font-size: 30px;
        margin-bottom: 20px;
        color: #404040;
        font-weight: 400;
      }
      .content {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
</style>
