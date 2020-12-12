* Created by QUDONGDONG901 2019/3/24
*/
<template>
  <div class='footer'>
    <span v-html="copyRight"></span>copyRight {{currentDate}} <a href="http://beian.miit.gov.cn/"> 粤ICP备20013202号</a>
  </div>
</template>
<script>
export default {
  // 子组件
  components: {
  },
  // 父组件传递过来的参数
  props: [],
  // 当前用到的参数
  data () {
    return {
      copyRight: '&copy',
      currentDate: new Date().getFullYear()
    }
  },
  // 当前定义的计算属性
  computed: {
  },
  // 监听属性
  watch: {},
  // 生命周期钩子---创建前
  created () {
  },
  // 当前定义的函数
  methods: {
  }
}
</script>
<style lang="less" scoped>
.footer{
  margin-top: 20xp;
  padding: 20px 0;
  text-align: center;
}
</style>
