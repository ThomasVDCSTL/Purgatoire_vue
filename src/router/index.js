import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/ProductPage.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/artisans/:id',
      name: 'artisan',
      component: () => import('../views/ArtisanPage.vue')
    },
    {
      path: '/artisans',
      name: 'artisans',
      component: () => import('../views/ArtisansView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path : '/profile',
      name : 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path : '/login',
      name : 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path : '/products/create',
      name : 'createProduct',
      component: () => import('../views/CreateProduct.vue')
    }

  ]
})

export default router
