import { createRouter, createWebHistory } from 'vue-router'

//importo componente da pages Home
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import ChiSono from './pages/ChiSono.vue'


const router = createRouter({

  history:createWebHistory(),
  routes: [
    {
      path:'/',
      name:'home',
      component: Home,
    },
    {
      path:'/portfolio',
      name:'portfolio',
      component: Portfolio,
    },
    {
      path:'/chi-sono',
      name: 'chisono',
      component: ChiSono
    }
  ],

})

export { router }

