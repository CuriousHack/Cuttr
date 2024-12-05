import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import KeyView from '@/views/KeyView.vue';
import LinkNotFoundView from '@/views/LinkNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:key',
      name: 'key',
      component: KeyView,
    },
    {
      path: '/not-found',
      name: 'Link-not-found',
      component: LinkNotFoundView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
});

export default router;
