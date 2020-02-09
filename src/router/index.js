import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/account/login'
import index from '@/views/home/index'
import post from '@/views/admin/post'
import detail from '@/views/home/detail'
import admin from '@/views/admin/index'
import pageList from '@/views/admin/pageList'
import cateList from '@/views/admin/cateList'
import imageManage from '@/views/admin/imageManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/detail',
      component: detail
    },
    {
      path: '/admin',
      component: admin,
      children: [
        {
          path: '',
          redirect: 'pageList'
        },
        {
          path: 'pageList',
          component: pageList
        },
        {
          path: 'post',
          component: post
        },
        {
          path: 'edit',
          component: post
        },
        {
          path: 'cate',
          component: cateList
        },
        {
          path: 'imageManage',
          component: imageManage
        }
      ]
    }
  ]
})
