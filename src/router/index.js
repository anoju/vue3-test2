import { createWebHistory, createRouter } from 'vue-router';
import ComponentWrap from '@/components/layout/ComponentWrap';
import UrlMappingWrap from '@/components/layout/UrlMappingWrap';
import { vars } from '@/assets/js/ui.front';

const routes = [
  //{path: '/', redirect:'/views/MainIndex'},
  {
    path: '/views/:id',
    component: ComponentWrap,
    meta: {
      title: vars.state.headerData.title
    }
  },
  {
    path: '/:step1',
    component: UrlMappingWrap,
    meta: {
      title: vars.state.headerData.title
    },
    params: {}
  },
  {
    path: '/:step1/:step2',
    component: UrlMappingWrap,
    meta: {
      title: vars.state.headerData.title
    },
    params: {}
  },
  {
    path: '/:step1/:step2/:step3',
    component: UrlMappingWrap,
    meta: {
      title: vars.state.headerData.title
    },
    params: {}
  },
  {
    path: '/:step1/:step2/:step3/:step4',
    component: UrlMappingWrap,
    meta: {
      title: vars.state.headerData.title
    },
    params: {}
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  });
});

export default router;
