import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";

// Define route components
const routes = [{ path: "/", component: Homepage }];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
