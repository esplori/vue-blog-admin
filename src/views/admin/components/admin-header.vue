<template>
  <div class="admin-header">
    <div>
      <router-link v-for="(item,index) in menus" :key="index" :to="{path: item.path}" tag="li">{{item.name}}</router-link>
    </div>
    <div>欢迎：佚名</div>
  </div>
</template>

<script>
export default {
  name: 'admin-header',
  data () {
    return {
      menus: [
        {name: '首页', path: '/index'}
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .admin-header {
    padding: 20px;
    background: #fff;
    color: #71777c;
    display: flex;
    justify-content: space-between;
  }
</style>
