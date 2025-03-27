import { createRouter, createWebHistory } from 'vue-router'
import TripsView from '../views/TripsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'trips',
      component: TripsView,
      meta: {
        layout: 'default',
      },
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
