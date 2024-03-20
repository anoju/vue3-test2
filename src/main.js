import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index';
import axios from 'axios';
import mitt from 'mitt';
import { vars } from '@/assets/js/ui.front';
import { Stack } from '@/common/common';
import vueCryptojs from 'crypto-js';

import './assets/scss/front.scss';

let app = createApp(App);
let emitter = mitt();
const stack = new Stack();
app.config.globalProperties.router = router;
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.vars = vars;
app.config.globalProperties.stack = stack;
app.config.globalProperties.axios = axios;
app.config.globalProperties.VueCryptojs = vueCryptojs;
app.config.globalProperties.isDev = true;

app.provide('vars', vars);

window.router = router;
window.vars = vars;
window.stack = stack;
window.axios = axios;
window.VueCryptojs = vueCryptojs;

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
app.component('SwiperContain', Swiper);
app.component('SwiperSlide', SwiperSlide);
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//Component
/*
const requireComponent = require.context('@', true, /[A-Z]\w+\.(vue,js)$/);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  fileName = fileName.substring(fileName.lastIndexOf('/') + 1);
  const componentName = fileName
    .replace(/^\.\._/, '')
    .replace(/\.\w+$/, '')
    .split('-')
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    .join('');
  app.component(componentName, componentConfig.default || componentConfig);
});
*/
// Components 폴더 내의 모든 Vue 및 JavaScript 파일 가져오기
const files = require.context('@/components', true, /\.(vue|js)$/);
files.keys().forEach((key) => {
  const name = key.replace(/^.+\/([^/]+)\.\w+$/, '$1'); // 파일 이름 추출
  const component = files(key).default; // 컴포넌트 가져오기
  // console.log('Registering component:', name); // 등록된 컴포넌트 확인
  app.component(name, component); // 전역으로 컴포넌트 등록
});

app.use(router).mount('#app');
