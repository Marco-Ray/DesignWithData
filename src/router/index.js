import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ShowcaseLayout from '@/views/ShowcaseLayout.vue';
import ShowcaseView from '@/views/ShowcaseView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  {
    path: '/showcase/',
    name: 'showcase',
    redirect: '/showcase/Fashion-Informatics',
    component: ShowcaseLayout,
    children: [
      {
        path: '/showcase/Fashion-Informatics',
        name: 'fashion',
        component: ShowcaseView,
        meta: {
          track: 'fashion',
        }
      },
      {
        path: '/showcase/Design-Ecology',
        name: 'ecology',
        component: ShowcaseView,
        meta: {
          track: 'ecology',
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
