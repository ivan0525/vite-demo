import {createRouter, createWebHistory} from 'vue-router'
import {h} from 'vue'
// @ts-ignore
import {routes} from 'vue-auto-routes'
import HelloWorld from './components/HelloWorld.vue'
export default createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
    {path: '/test',name: 'test', component: h(HelloWorld, {path: '../pages/test.md', key: 'test'})}
  ]
})
