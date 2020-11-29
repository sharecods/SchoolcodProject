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
  },
  {
    path: '/login/findid',
    name: 'FindId',
    components: {
      default: FindId
    }
  },
  {
    path: '/login/findpw',
    name: 'FindPw',
    component: FindPw,
    props: true
  },
  {
    path: '/login/showid',
    name: 'ShowId',
    components: {
      default: ShowId
    },
    props: {
      default: true
    }
  },
  {
    path: '/login/havepw',
    name: 'HavePw',
    component: HavePw
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
