import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/components/home"
import Note from "@/components/note"
import Favorite from "@/components/favorite"
import Myself from "@/components/myself"
import Detail from "@/components/detail"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/note',
      name: 'Note',
      component: Note
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: Favorite
    },
    {
      path: '/myself',
      name: 'Myself',
      component: Myself
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
