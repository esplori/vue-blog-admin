* Created by QUDONGDONG901 2019/3/24
*/
<template>
  <div class='common-header'>
    <div class="header-content">
      <div class="menu-list">
        <router-link v-for="(item, index) in menuList" :key="index" tag="li" :to="{path: item.url, query: ''}">
          {{item.label}}
        </router-link>
      </div>
      <userInfo></userInfo>
    </div>
  </div>
</template>
<script>
export default {
  // 子组件
  components: {
    userInfo: () => import('@/components/userInfo.vue')
  },
  // 父组件传递过来的参数
  props: [],
  // 当前用到的参数
  data () {
    return {
      menuList: [
        {label: '首页', url: 'index'},
        {label: '后台管理', url: 'admin'}
      ]
    }
  },
  // 当前定义的计算属性
  computed: {},
  // 监听属性
  watch: {},
  // 生命周期钩子---创建前
  created () {
  },
  // 当前定义的函数
  methods: {}
}
</script>
<style lang="less" scoped>
  .common-header {
    background: #fff;
    color: #71777c;
    padding: 15px;
    .header-content {
      max-width: 1150px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .menu-list {
        display: flex;
        justify-content: center;
        li {
          margin: 0 15px;
        }
      }
    }

  }

</style>
