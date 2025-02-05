import About from "@/views/About.vue";
import Blog from "@/views/Blog.vue";
import Contact from "@/views/Contact.vue";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import Destinations from "@/views/Destinations.vue";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/destinations",
      name: "destinations",
      component: Destinations,
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

export default router;
