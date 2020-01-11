import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/account/login'
import index from '@/views/home/index'
import post from '@/views/admin/post'
import detail from '@/views/home/detail'
import admin from '@/views/admin/index'
import pageList from '@/views/admin/pageList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      redirect: '/index'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      children: [
        {
          path: '',
          redirect: 'pageList'
        },
        {
          path: 'post',
          component: post
        },
        {
          path: 'pageList',
          component: pageList
        },
        {
          path: 'edit',
          component: post
        }
      ]
    }
  ]
})
