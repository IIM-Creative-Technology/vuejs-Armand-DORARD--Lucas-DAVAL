import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/blog/:id',  
    name: 'article',
    props: true,
    component: () => import('../components/Article.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/new-page',
    name: 'Newpage',
    component: () => import('../views/Newpage.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
