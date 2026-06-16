import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore: Vue SFC declaration file missing in this project setup
import LuckyWheel from '../views/LuckyWheel.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LuckyWheel,
    },
  ],
})

export default router
