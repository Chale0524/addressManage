import { RouteRecordRaw } from 'vue-router'
const BaseLayout = () => import('@/layout/BaseLayout.vue')

// 首页模块
const homeRouter: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: BaseLayout,
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: '首页',
          key: 'home',
        },
      },
      {
        path: '/manage/index',
        name: 'manage',
        component: () => import('@/views/manage/index.vue'),
        meta: {
          keepAlive: true,
          requiresAuth: true,
          title: '地址管理',
          key: 'manage',
        },
      },
    ],
  },
]

export default homeRouter
