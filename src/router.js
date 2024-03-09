import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";
import Menu from "./pages/Menu.vue";

// Define route components
const routes = [
  { path: "/", component: Homepage },
  { path: "/menu", component: Menu },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
