import { createRouter, createWebHistory } from "vue-router";
import baseAlert from "./components/baseAlert.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: baseAlert,
    },
    {
      path: "services",
      name: "services",
      // you can import a view or component this way, this way it will be lazyloaded
      component: () => import("./views/ServicesView.vue"),
    },
    {
      path: "/users/:id",
      name: "edit-users",
      component: () => import("./views/UsersEdit.vue"),
    },
  ],
});
