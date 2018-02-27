import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserProfile from '@/components/profile/UserProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfile
    }
  ]
})
