import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import VueResource from 'vue-resource'

import './assets/scss/app.scss';

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
