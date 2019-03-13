import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import Jack from "./components/Jack";

Vue.use(VueRouter);

const routes = [
  { path: "/jack", component: Jack }
];

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");