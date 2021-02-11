export { default as Header } from '../../src/components/Header.vue'

export const LazyHeader = import('../../src/components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
