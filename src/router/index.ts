import router from '@/router/router'
import NProgress from 'nprogress'

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach((to, from, next) => {
  NProgress.start()

  // * 如果访问的地址没有在路由表中重定向到403页面
  if (router.getRoutes().map((item) => item.path === to.path)) return next()
  next({ path: '/403' })
})

router.afterEach(() => {
  NProgress.done()
})

export default router
