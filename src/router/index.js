import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import BookDetail from '@/pages/bookdetail/BookDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/bookdetail/:name',
      name: 'BookDetail',
      component: BookDetail
    }
  ]
})
