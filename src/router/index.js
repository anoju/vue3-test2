import { createWebHistory, createRouter } from 'vue-router';

const routes = [{ path: '/', redirect: '/main/index' }];

// 중복된 경로가 있는지 확인하는 함수
function hasDuplicatePaths(routes) {
  const paths = new Set(); // 중복을 방지하기 위한 Set 객체

  // 재귀적으로 모든 라우트를 검사
  function checkRoutes(routes) {
    routes.forEach((route) => {
      // 현재 라우트의 경로가 이미 등록된 경우 경고 출력
      if (paths.has(route.path)) {
        console.warn(`Duplicate path detected: ${route.path}`);
      }

      // 경로를 Set에 추가
      paths.add(route.path);

      // 하위 라우트가 있는 경우 재귀적으로 검사
      if (route.children) {
        checkRoutes(route.children);
      }
    });
  }

  // 루트 라우트부터 시작하여 재귀적으로 검사
  checkRoutes(routes);

  // 중복된 경로가 있는지 여부 반환
  return paths.size !== routes.length;
}

// 재귀 함수를 사용하여 모든 Vue 파일을 가져오고 라우터에 등록
function importAll(r) {
  r.keys().forEach((key) => {
    const name = key.replace(/^\.\//, '').replace(/\.\w+$/, ''); // 폴더 경로 및 확장자 제거
    const paths = name.split('/');
    const componentName = paths.pop(); // 파일 이름
    const component = r(key).default; // Vue 컴포넌트 가져오기
    const path = '/' + paths.concat([componentName.toLowerCase()]).join('/'); // 경로 생성
    const hasDuplicates = hasDuplicatePaths(routes);
    if (hasDuplicates) {
      console.warn(`Duplicate path detected: "${path}"`);
    } else {
      routes.push({ path, component });
    }
  });
}

const files = require.context('@/views', true, /\.vue$/); // Views 폴더 내의 모든 Vue 파일을 재귀적으로 가져옴
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
