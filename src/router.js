import { createWebHashHistory, createRouter } from 'vue-router'

import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Company from './pages/Company.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/company/:id', component: Company }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;