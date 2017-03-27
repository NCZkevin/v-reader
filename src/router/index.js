import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import BookDetail from '@/pages/bookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: BookDetail
    }
  ]
})
