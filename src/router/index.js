import { createWebHistory, createRouter } from 'vue-router';

const routes = [{ path: '/', redirect: '/main/index' }];

// Views 폴더 내의 모든 Vue 파일을 재귀적으로 가져옴
const files = require.context('@/views', true, /\.vue$/);

// 재귀 함수를 사용하여 모든 Vue 파일을 가져오고 라우터에 등록
function importAll(r) {
  r.keys().forEach((key) => {
    const name = key.replace(/^\.\//, '').replace(/\.\w+$/, ''); // 폴더 경로 및 확장자 제거
    const paths = name.split('/');
    const componentName = paths.pop(); // 파일 이름
    const component = r(key).default; // Vue 컴포넌트 가져오기
    const path = '/' + paths.concat([componentName.toLowerCase()]).join('/'); // 경로 생성
    routes.push({ path, component });
  });
}

importAll(files); // 모든 Vue 파일을 가져와서 routes 배열에 등록

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
