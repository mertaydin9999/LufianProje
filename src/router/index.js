import Vue from "vue";
import VueRouter from "vue-router";
import Lufian9 from "../components/Lufian9.vue";
import Lufian10 from "../components/Lufian10.vue";
import Lufian4 from "../components/Lufian4.vue";
import Lufian1 from "../components/Lufian1.vue";
import Lufian5 from "../components/Lufian5.vue";
import Lufian6 from "../components/Lufian6.vue";
import Lufian8 from "../components/Lufian8.vue";
import Lufian2 from "../components/Lufian2.vue";
import Lufian7 from "../components/Lufian7.vue";
import Lufian3 from "../components/Lufian3.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/lufian9",
    name: "Lufian9",
    component: Lufian9
  },
  {
    path: "/lufian10",
    name: "Lufian10",
    component: Lufian10
  },
  {
    path: "/lufian4",
    name: "Lufian4",
    component: Lufian4
  },
  {
    path: "/lufian1",
    name: "Lufian1",
    component: Lufian1
  },
  {
    path: "/lufian5",
    name: "Lufian5",
    component: Lufian5
  },
  {
    path: "/lufian6",
    name: "Lufian6",
    component: Lufian6
  },
  {
    path: "/lufian8",
    name: "Lufian8",
    component: Lufian8
  },
  {
    path: "/lufian2",
    name: "Lufian2",
    component: Lufian2
  },
  {
    path: "/lufian7",
    name: "Lufian7",
    component: Lufian7
  },
  {
    path: "/lufian3",
    name: "Lufian3",
    component: Lufian3
  },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

