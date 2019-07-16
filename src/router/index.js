import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/entry/login/login'
import register from '@/components/entry/register/register'
import manage from '@/components/manage/manage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/entry/:opt',
      children: [
        {
          path: '/login',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage
    },
    {
      path: '*',
      redirect: '/entry/login'
    }
  ]
})
