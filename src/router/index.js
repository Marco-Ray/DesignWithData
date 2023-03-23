import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ShowcaseLayout from '@/views/ShowcaseLayout.vue';
import ShowcaseView from '@/views/ShowcaseView.vue';

const scrollBehavior = function (to, from, savedPosition) {
  if (to.hash) {
    return {
      // 通过 to.hash 的值來找到对应的元素
      selector: to.hash
    }
  }
}

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
    path: '/showcase/',
    name: 'showcase',
    redirect: '/showcase/Fashion-Informatics',
    component: ShowcaseLayout,
    meta: {
      index: 1,
      transitionName: 'fade',
    },
    children: [
      {
        path: '/showcase/Fashion-Informatics',
        name: 'fashion',
        component: ShowcaseView,
        meta: {
          index: 2,
          transitionName: 'fade',
          track: 'fashion',
        }
      },
      {
        path: '/showcase/Design-Ecology',
        name: 'ecology',
        component: ShowcaseView,
        meta: {
          index: 3,
          track: 'ecology',
          transitionName: 'fade',
        }
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

// router.afterEach((to, from) => {
//   const toDepth = to.meta.index;
//   const fromDepth = from.meta.index;
//   // eslint-disable-next-line
//   to.meta.transitionName = toDepth >= fromDepth ? 'slide-left' : 'slide-right';
// });

export default router;
