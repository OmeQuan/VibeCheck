import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/Index.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("../views/Stats/Index.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("../views/Personal/Index.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/day",
    name: "day",
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
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn)
    next('/login')
  else next()
})

export default router;
