import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/account/login'
import index from '@/views/home/index'
import detail from '@/views/home/detail'
import admin from '@/views/admin/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/search',
      component: () => import('@/views/home/search')
    },
    {
      path: '/cate',
      component: () => import('@/views/home/cate')
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
          component: () => import('@/views/admin/pageList'),
          meta: {
            title: '文章管理'
          }
        },
        {
          path: 'post',
          component: () => import('@/views/admin/post'),
          meta: {
            title: '文章发布'
          }
        },
        {
          path: 'edit',
          component: () => import('@/views/admin/post'),
          meta: {
            title: '编辑'
          }
        },
        {
          path: 'cate',
          component: () => import('@/views/admin/cateList'),
          meta: {
            title: '分类管理'
          }
        },
        {
          path: 'imageManage',
          component: () => import('@/views/admin/imageManage'),
          meta: {
            title: '图片管理'
          }
        },
        {
          path: 'userInfo',
          component: () => import('@/views/admin/userInfo'),
          meta: {
            title: '个人资料'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title + ' -  开发学习指南'
  }
  next()
})

export default router
