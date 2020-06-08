import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Day/Index")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/day",
    name: "day.index",
    component: () => import("../views/Day/Index")
  },
  {
    path: "/day/create",
    name: "day.create",
    component: () => import("../views/Day/Create")
  },
  {
    path: "/day/sleep",
    name: "day.sleep",
    component: () => import("../views/Day/Add")
  },
  {
    path: "/day/edit",
    name: "day.edit",
    component: () => import("../views/Day/Edit")
  },
  {
    path: "/activity/create",
    name: "activity.create",
    component: () => import("../views/Activity/Create")
  }
];

const router = new VueRouter({
  routes
});

export default router;
