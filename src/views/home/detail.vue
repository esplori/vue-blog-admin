<template>
  <div class="home-detail">
    <commenHeader></commenHeader>
    <div class="detail-content">
      <el-row class="pc">
        <el-col :span='18'>
            <div class="detail">
              <div class="title">{{form.title}}</div>
              <author :form="form"></author>
              <div class="content" v-html="form.htmlContent"></div>
            </div>
            <comments></comments>
        </el-col>
        <el-col :span="6">
            <sideBar></sideBar>
        </el-col>
      </el-row>
      <el-row class="mobile">
        <el-col :span='24'>
            <div class="detail">
              <div class="title">{{form.title}}</div>
              <author :form="form"></author>
              <div class="content" v-html="form.htmlContent"></div>
            </div>
            <comments></comments>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {getDetailApi} from '@/views/API/home.js'
export default {
  metaInfo () { // 设置标题
    return {
      title: this.form.title + ' - javascript技术分享'
    }
  },
  data () {
    return {
      form: {
        title: '',
        content: ''
      }
    }
  },
  components: {
    commenHeader: () => import('@/components/common-header.vue'),
    sideBar: () => import('./comp/sideBar'),
    author: () => import('./comp/author'),
    comments: () => import('./comp/detailComments')
  },
  created () {
    this.getDetail(this.$route.query.id)
  },
  mounted () {
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
      padding: 5px 20px;
      .detail{
        background: #fff;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      .title {
        font-size: 30px;
        margin-bottom: 20px;
        color: #404040;
        font-weight: 700;
      }
      .content {
        font-size: 16px;
        line-height: 30px;
      }
      @media screen and(max-width: 768px) {
        .pc{
          display: none;
        }
        .mobile{
          display: block;
        }
      }
      @media screen and(min-width: 769px) {
        .pc{
          display: block;
        }
        .mobile{
          display: none;
        }
      }
    }
  }
</style>
