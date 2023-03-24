import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ShowcaseLayout from '@/views/ShowcaseLayout.vue';
import ShowcaseView from '@/views/ShowcaseView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      index: 0,
      transitionName: 'fade',
    },
  },
  {
    path: '/showcase',
    name: 'showcase',
    component: ShowcaseLayout,
    children: [
      {
        path: '/showcase/:track',
        name: 'track',
        component: ShowcaseView,
        meta: {
          index: 1,
          transitionName: 'fade',
          // track: 'fashion',
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.afterEach((to, from) => {
//   const toDepth = to.meta.index;
//   const fromDepth = from.meta.index;
//   // eslint-disable-next-line
//   to.meta.transitionName = toDepth >= fromDepth ? 'slide-left' : 'slide-right';
// });

export default router;
