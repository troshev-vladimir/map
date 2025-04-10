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
    {
      path: '/point/:id',
      name: 'point',
      component: () => import('../views/PointView.vue'),
      meta: {
        layout: 'default',
      },
    },
  ],
})

export default router
