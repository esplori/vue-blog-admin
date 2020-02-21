* Created by QUDONGDONG901 2019/3/24
*/
<template>
  <div class='common-header'>
    <div class="header-content">
      <div class="logo"><span>FEKLY</span></div>
      <div class="menu-list">
          <ul class="cate-list">
            <li v-for="(item, index) in menuList" :key="index" @click="handleSelect(item.url)">{{item.name}}</li>
            <li>
              <el-input placeholder="搜索" v-model="searchKey" @keydown.enter.native="toSearch(searchKey)">
                <i class="el-icon-search el-input__icon" slot="suffix" @click="toSearch(searchKey)"></i>
              </el-input>
            </li>
          </ul>
          <userInfo></userInfo>
      </div>
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
        {name: '首页', url: '/'},
        {name: '关于', url: '/'}
      ],
      searchKey: ''
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
  },
  // 当前定义的函数
  methods: {
    handleSelect (url) {
      url && this.$router.push({path: url})
    },
    toSearch (key) {
      window.open('/#/search?key=' + encodeURIComponent(key))
    }
  }
}
</script>
<style lang="less" scoped>
  .common-header {
    background: #fff;
    color: #71777c;
    padding: 15px 0;
    border-bottom: 1px solid #f1f1f1;
    .header-content {
      max-width: 1150px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .logo{
        display: flex;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
      }
      .menu-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .cate-list{
          font-size: 14px;
          li{
            display: inline-block;
            padding: 5px 25px;
            font-weight: 400;
            cursor: pointer;
          }
          li:hover{
            text-decoration: underline;
          }
        }
      }
    }

  }

</style>
