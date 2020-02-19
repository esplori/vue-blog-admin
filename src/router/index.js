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

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/detail',
      component: detail,
      meta: {
        title: '详情'
      }
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
          component: pageList,
          meta: {
            title: '文章管理'
          }
        },
        {
          path: 'post',
          component: post,
          meta: {
            title: '文章发布'
          }
        },
        {
          path: 'edit',
          component: post,
          meta: {
            title: '编辑'
          }
        },
        {
          path: 'cate',
          component: cateList,
          meta: {
            title: '分类管理'
          }
        },
        {
          path: 'imageManage',
          component: imageManage,
          meta: {
            title: '图片管理'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  debugger
  if (to.meta.title) {
    document.title = to.meta.title + ' | ' + '开发指南'
  }
  next()
})

export default router
