<template>
  <div class="about">
    <commenHeader></commenHeader>
    <div class="detail-content">
      <div>{{form.nickname}}</div>
      <div>{{form.desc}}</div>
      <div>{{form.introduce}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        nickname: 'dsiab',
        desc: 'a dever',
        introduce: 'learning dev'
      }
    }
  },
  components: {
    commenHeader: () => import('@/components/common-header.vue'),
    sideBar: () => import('./comp/sideBar')
  }
}
</script>

<style scoped lang="less">
  .about {
    font-size: 18px;
    width: 100%;
    text-align: left;
    .detail-content{
      max-width: 1150px;
      margin: 10px auto;
      padding: 5px 20px;
    }
  }
</style>
