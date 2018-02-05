// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import Edit from './components/Edit'
import CustomerDetails from './components/CustomerDetails'
import Contact from './components/Contact'
import Homepage from './components/Homepage'
import EventDetailsPublic from './components/EventDetailsPublic'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: Customers},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/customer/:id', component: CustomerDetails},
    {path: '/edit/:id', component: Edit},
    {path: '/contact', component: Contact},
    {path: '/homepage', component: Homepage},
    {path: '/events', component: EventDetailsPublic},
    {path: '/login', component: Login},
    {path: '/register', component: Register}
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<a class="navbar-brand" href="#">Navbar</a>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/homepage">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/">Events</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/contact">Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/add">Add</a>
    </li>
  </ul>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="/register">Register</a>
    </li>
    <li class="navbar-item">
      <a class="nav-link" href="/login">Login</a>
    </li>
  </ul>
</div>
</nav>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
