import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Usetext from '@/components/usetext'
import AICourse from '../components/AICourse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/usetext',
      name: 'usetext',
      component: Usetext
    },
    {
      path: '/AICourse',
      name: 'AICourse',
      component: AICourse
    }
  ]
})
