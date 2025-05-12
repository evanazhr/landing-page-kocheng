import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import BlogView from '@/views/BlogView.vue'
import ServiceView from '@/views/ServiceView.vue'

import NoPageView from '@/views/NoPageView.vue'
import EmptyPageView from '@/views/EmptyPageView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '', component: HomeView },
      { path: 'about', component: AboutView },
      { path: 'contact', component: ContactView },
      { path: 'services', component: ServiceView },
      { path: 'blog', component: BlogView },
    ],
  },
  {
    path: '/:catchAll(.*)',
    component: DefaultLayout,
    children: [{ path: '', component: NoPageView }],
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // Jika ada posisi yang disimpan, gunakan itu
    if (savedPosition) {
      return savedPosition
    } else {
      // Gulir ke atas halaman
      return { top: 0 }
    }
  },
})
