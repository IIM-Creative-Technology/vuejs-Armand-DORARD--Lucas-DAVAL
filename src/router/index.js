import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/manage-blog',
    name: 'BlogManager',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogManager.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
