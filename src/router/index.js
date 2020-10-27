import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginForm from '@/pages/LoginForm'
import Home from '@/pages/Home'
import Route from '@/pages/Route'
import Scenery from '@/pages/Scenery'
import Mine from '@/pages/Mine'
import Map from '@/pages/Map'
import BaiduMap from '@/pages/BaiduMap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/LoginForm',
      name: 'Login',
      component: LoginForm
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Route',
      name: 'Route',
      component: Route
    },
    {
      path: '/Scenery',
      name: 'Scenery',
      component: Scenery
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Map',
      name: 'Map',
      component: Map
    },
    {
      path: '/BaiduMap',
      name: 'BaiduMap',
      component: BaiduMap
    }
  ]
})
