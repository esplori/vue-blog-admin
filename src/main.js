// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import MetaInfo from 'vue-meta-info' // 引入vue-meta-info设置标题
import mavonEditor from 'mavon-editor'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import 'mavon-editor/dist/css/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI, {size: 'medium'})
Vue.use(MetaInfo)
Vue.use(mavonEditor)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
