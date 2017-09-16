import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
