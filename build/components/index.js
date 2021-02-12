export { default as CardProject } from '../../src/components/CardProject.vue'
export { default as Header } from '../../src/components/Header.vue'

export const LazyCardProject = import('../../src/components/CardProject.vue' /* webpackChunkName: "components/card-project" */).then(c => c.default || c)
export const LazyHeader = import('../../src/components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
