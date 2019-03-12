import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/dashboard", component: Dashboard }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
