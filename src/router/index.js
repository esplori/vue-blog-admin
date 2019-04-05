import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/account/login'
import index from '@/views/home/index'
import post from '@/views/admin/post'
import detail from '@/views/home/detail'
import admin from '@/views/admin/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/post',
      name: 'post',
      component: post
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    }
  ]
})
