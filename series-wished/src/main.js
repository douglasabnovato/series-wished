import Vue from "vue";
import App from "./App";
import store from "./store";
import router from "./router";
//import VueResource from 'vue-resource'

import './assets/scss/app.scss';

//Vue.use(VueResource);

Vue.config.productionTip = false

window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
