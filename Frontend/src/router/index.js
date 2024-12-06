import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import KeyView from '@/views/KeyView.vue';
import LinkNotFoundView from '@/views/LinkNotFoundView.vue'
import RegisterView from '@/views/RegisterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
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
    // {
    //   path: '/:catchAll(.*)',
    //   name: 'NotFound',
    //   component: NotFoundView,
    // },
  ],
});

export default router;
