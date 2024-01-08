import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BlogOneVue from "@/views/BlogOne.vue";
import BlogTwoVue from "@/views/BlogTwo.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/blog1",
    name: "Blog 1: Building this website",
    component: BlogOneVue,
  },
  {
    path: "/blog2",
    name: "Blog 2: Procedural Grid Map Generation: The Path Way",
    component: BlogTwoVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
