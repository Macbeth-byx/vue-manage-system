import Vue from 'vue'
import VueRouter from 'vue-router'

const Main = () => import('../views/Main.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  }
]

const router = new VueRouter({
  routes
})

export default router
