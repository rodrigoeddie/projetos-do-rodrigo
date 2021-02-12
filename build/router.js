import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _50722131 = () => interopDefault(import('../node_modules/@nuxtjs/svg-sprite/lib/pages/icons-list.vue' /* webpackChunkName: "" */))
const _9faa9880 = () => interopDefault(import('../src/pages/404.vue' /* webpackChunkName: "pages/404" */))
const _4232f8db = () => interopDefault(import('../src/pages/projetos/index.vue' /* webpackChunkName: "pages/projetos/index" */))
const _51e6c841 = () => interopDefault(import('../src/pages/sobre.vue' /* webpackChunkName: "pages/sobre" */))
const _407c5793 = () => interopDefault(import('../src/pages/projetos/_slug.vue' /* webpackChunkName: "pages/projetos/_slug" */))
const _74027a5a = () => interopDefault(import('../src/pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/projetos-do-rodrigo/dist/',
  linkActiveClass: 'active-parent',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/_icons",
    component: _50722131,
    name: "icons-list"
  }, {
    path: "/404",
    component: _9faa9880,
    name: "404"
  }, {
    path: "/projetos",
    component: _4232f8db,
    name: "projetos"
  }, {
    path: "/sobre",
    component: _51e6c841,
    name: "sobre"
  }, {
    path: "/projetos/:slug",
    component: _407c5793,
    name: "projetos-slug"
  }, {
    path: "/",
    component: _74027a5a,
    name: "index"
  }, {
    path: "*",
    component: _9faa9880,
    name: "custom"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
