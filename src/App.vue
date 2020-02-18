<template>
  <div id="app">
    <router-view/>
    <!-- copyright -->
    <!-- <commonFooter></commonFooter> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  // 子组件
  components: {
    commonFooter: () => import('./components/footer')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
