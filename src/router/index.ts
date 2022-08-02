import { useUser } from "@/stores/UserStore";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const scrollBehavior = (to: any, from: any, savedPosition: any) => {
  return savedPosition || { top: 0, left: 0 };
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

router.beforeEach((to, _from, next) => {
  const store = useUser();
  if (!store.uid && to.meta.requiresAuth) next("/login");
  else next();
});

export default router;
