import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import ListEvent from './views/ListEvent'
import EditEvents from './views/EditEvents'
import AddEvent from './views/AddEvent'

import { store } from './store/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/listEvents',
      name: 'listEvents',
      component: ListEvent,
      beforeEnter: (destination, source, next) => {
        if(destination.name === 'listEvents')
          if(!store.state.user.authToken)
            next(false)
          else
            next()
        else
          next()
      }
    },
    {
      path: '/editEvent/:id',
      name: 'editEvent',
      component: EditEvents,
      beforeEnter: (destination, source, next) => {
        if(destination.name === 'listEvents')
          if(!store.state.user.authToken)
            next(false)
          else
            next()
        else
          next()
      }
    },
    {
      path: '/addEvent',
      name: 'addEvent',
      component: AddEvent,
      beforeEnter: (destination, source, next) => {
        if(destination.name === 'listEvents')
          if(!store.state.user.authToken)
            next(false)
          else
            next()
        else
          next()
      }
    }
  ]
})
