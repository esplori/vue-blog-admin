<template>
  <div class="admin-header">
    <div>
      <router-link v-for="(item,index) in menus" :key="index" :to="{path: item.path}" tag="li">{{item.name}}</router-link>
    </div>
    <userInfo></userInfo>
  </div>
</template>

<script>
export default {
  name: 'admin-header',
  data () {
    return {
      menus: [
        {name: '查看站点', path: '/'}
      ]
    }
  },
  components: {
    userInfo: () => import('@/components/userInfo.vue')
  }
}
</script>

<style scoped lang="less">
  .admin-header {
    padding: 20px;
    margin-bottom: 10px;
    background: #fff;
    color: #71777c;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f1f1f1;
  }
</style>
