import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import News from '@/views/news/News'
import User from '@/views/user/User'
import Music from '@/views/home/Music'
import Video from '@/views/home/Video'
import Radio from '@/views/home/Radio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: 'music',
        component: Music
      },
      {
        path: 'video',
        component: Video
      },
      {
        path: 'radio',
        component: Radio
      }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
