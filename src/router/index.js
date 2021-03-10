import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import BookApp from '@/views/BookApp.vue'
import BookDetails from '@/views/BookDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/book',
    component: BookApp
  },
  {
    path: '/book/:id',
    component: BookDetails
  }
]

const router = new VueRouter({
  routes
})

export default router

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')