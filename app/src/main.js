import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./index.css";
import VueCodeHighlight from "vue-code-highlight";

Vue.use(VueCodeHighlight);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App)
}).$mount("#app");
