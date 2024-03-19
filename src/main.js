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

//Component
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

// swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
app.component('SwiperContain', Swiper);
app.component('SwiperSlide', SwiperSlide);
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

app.use(router).mount('#app');
