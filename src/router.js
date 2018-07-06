import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "*", redirect: '/index'
  },
  {
    path: '/detail', component: () =>import('./page/detail.vue')
  },
  {
    path: '/index', component: ()=>import('./page/index.vue')
  }
]

const router = new VueRouter({routes: routes});
router.beforeEach((to, from, next) => {
  next();
})
router.afterEach(()=>{
  window.scrollTo(0,0);
})

export default router;
