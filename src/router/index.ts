import { createRouter, createWebHistory } from "vue-router"
import pagesRouter from "./page";

const router = createRouter({
  history: createWebHistory(),
  routes: [...pagesRouter],
})

export default router

