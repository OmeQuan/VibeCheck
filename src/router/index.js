import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/day",
    name: "day.index",
    component: () => import("../views/Day/Index"),
    meta: { requiresAuth: true }
  },
  {
    path: "/day/create",
    name: "day.create",
    component: () => import("../views/Day/Create"),
    meta: { requiresAuth: true }
  },
  {
    path: "/day/sleep",
    name: "day.sleep",
    component: () => import("../views/Day/Add"),
    meta: { requiresAuth: true }
  },
  {
    path: "/day/edit",
    name: "day.edit",
    component: () => import("../views/Day/Edit"),
    meta: { requiresAuth: true }
  },
  {
    path: "/activity/create",
    name: "activity.create",
    component: () => import("../views/Activity/Create"),
    meta: { requiresAuth: true }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn)
    next('/login')
  else next()
})

export default router;
