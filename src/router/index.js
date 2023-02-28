import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import baseAlert from "../components/baseAlert.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: baseAlert,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  {
    path: "/services",
    name: "service",
    component: () => import("../views/ServicesView.vue"),
  },
  {
    path: "/users/:id",
    name: "users-edit",
    component: () => import("../views/UsersEdit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
