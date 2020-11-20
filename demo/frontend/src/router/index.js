import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Login from '../views/register/Login.vue'
import Register from '../views/register/Register.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
