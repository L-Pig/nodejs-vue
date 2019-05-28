import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: routes
});

//路由跳转之前的检查
router.beforeEach((to, from, next) => {
  next();
});

export default router

