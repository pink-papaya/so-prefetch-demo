import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

var routes = [
  {
    path: "/DetailPage",
    component: () => import(/* webpackChunkName: "Detail-chunk" */ "@/views/DetailPage.vue")
  },
  {
    path: "/MasterPage",
    component: () => import("@/views/MasterPage.vue")
  }
]

export const router = new Router({
  routes: routes,
});

export default router;