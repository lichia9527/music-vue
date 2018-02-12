import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import News from '@/views/news/News'
import User from '@/views/user/User'
import Music from '@/views/home/music/Music'
import Video from '@/views/home/video/Video'
import Radio from '@/views/home/radio/Radio'
import Login from '@/views/user/Login'
import SongList from '@/views/home/music/SongList'
import AppNav from '@/components/AppNav'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: {
      default: Home,
      top: AppNav
    },
    children: [
      {
        path: '',
        redirect: 'music'
      },
      {
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
  },
  {
    path: 'songList',
    component: {
      default: SongList,
      top: ''
    }
  },
  {
    path: '/login',
    component: {
      default: Login,
      top: ''
    }
  }
  ]
})
