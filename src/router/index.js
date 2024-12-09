import { createRouter, createWebHistory } from 'vue-router';
import useRouterGuard from './guard';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

useRouterGuard(router);

export default router;
