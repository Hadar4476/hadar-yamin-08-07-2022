import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "weather",
    component: () => import("../views/Weather.vue")
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../views/Favorites.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
