<template>
  <div class="admin-header">
    <div>后台管理</div>
    <div>欢迎：佚名</div>
  </div>
</template>

<script>
export default {
  name: 'admin-header',
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
  .admin-header {
    padding: 20px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
  }
</style>
