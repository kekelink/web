import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f2a9fbc = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _a036d41e = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _4ce67097 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _f3991152 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _5d08f796 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _435bc5ff = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _6cfdbaa4 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _4f2a9fbc,
    children: [{
      path: "",
      component: _a036d41e,
      name: "home"
    }, {
      path: "/login",
      component: _4ce67097,
      name: "login"
    }, {
      path: "/register",
      component: _4ce67097,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _f3991152,
      name: "profile"
    }, {
      path: "/settings",
      component: _5d08f796,
      name: "settings"
    }, {
      path: "/editor",
      component: _435bc5ff,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _6cfdbaa4,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
