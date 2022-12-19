/* eslint-disable */
import Vue from 'vue';

import store from './store';

import '@/assets/css/main.css';
import '@/assets/css/media-query.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueClipboard from 'vue-clipboard2';

import bottomNavigationVue from 'bottom-navigation-vue';

import { Icon } from '@iconify/vue2';

import router from './router';
import App from './App.vue';

Vue.use(ElementUI);
Vue.use(VueClipboard);

import CountryFlag from 'vue-country-flag'
Vue.component('country-flag', CountryFlag)

Vue.use(bottomNavigationVue);
Vue.component('i-icon', Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
