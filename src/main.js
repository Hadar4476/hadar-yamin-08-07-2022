import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import global from "./mixins/global";
import "./style/bootstrap";

Vue.config.productionTip = false;

Vue.global = true;
Vue.mixin(global);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
