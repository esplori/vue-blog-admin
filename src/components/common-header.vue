* Created by QUDONGDONG901 2019/3/24
*/
<template>
  <div class='common-header'>
    <div class="header-content">
      <div class="menu-list">
        <el-menu :default-active="activeIndex" class="el-menu-header" mode="horizontal" @select="handleSelect">
          <el-menu-item :index="String(item.id)" v-for="(item,index) in menuList" :key="index">{{item.name}}</el-menu-item>
          <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
        </el-menu>
      </div>
      <userInfo></userInfo>
    </div>
  </div>
</template>
<script>
import {getCateApi} from '@/views/API/admin.js'
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
      ],
      activeIndex: '1'
    }
  },
  // 当前定义的计算属性
  computed: {
  },
  // 监听属性
  watch: {},
  // 生命周期钩子---创建前
  created () {
    let userinfo = localStorage.getItem('userInfo')
    if (userinfo) {
      if (JSON.parse(userinfo).role === 'admin') {
      } else {
        this.menuList = this.menuList.slice(0, this.menuList.length - 1)
      }
    }
    this.getCate()
  },
  // 当前定义的函数
  methods: {
    async getCate () {
      let res = await getCateApi({})
      if (res) {
        this.menuList = res.result || []
      }
    },
    handleSelect (cate) {
      this.$emit('changeCate', cate)
    }
  }
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
        width: 90%;
        li {
          margin: 0 15px;
        }
        .el-menu-header{
          width: 100%;
        }
      }
    }

  }

</style>
