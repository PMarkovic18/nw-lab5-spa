import { createRouter, createWebHistory } from "vue-router";
import TaskList from "@/views/TaskList.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/tasks", component: TaskList },
  { path: "/about", component: About },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;