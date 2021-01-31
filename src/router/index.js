import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerList } from "./router.js"

Vue.use(VueRouter)

const routes = routerList

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

