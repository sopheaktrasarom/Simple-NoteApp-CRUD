import { createRouter, createWebHistory } from "vue-router";
import ViewNote from "../views/ViewNote.vue";
import ViewEditNote from "../views/ViewEditNote.vue";
import ViewStats from "../views/ViewStats.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "notes",
      component: ViewNote,
    },
    {
      path: "/editNote/:id",
      name: "edit-note",
      component: ViewEditNote,
    },
    {
      path: "/stats",
      name: "stats",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ViewStats,
    },
  ],
  linkActiveClass: "link-active",
});

export default router;
