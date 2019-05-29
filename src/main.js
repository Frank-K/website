import Vue from 'vue';
import VueFullPage from 'vue-fullpage.js';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueFullPage);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
