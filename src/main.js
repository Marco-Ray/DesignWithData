import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/fonts/fonts.css';

// eslint-disable-next-line
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'animate.css'

createApp(App).use(store).use(router).use(ElementPlus)
  .mount('#app');
