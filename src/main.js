import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BottomBar from "com/bottomBar";
import Loading from "com/loading";

import "normalize.css";

require("./mock")

Vue.config.productionTip = false

Vue.component("BottomBar", BottomBar)
Vue.component("Loading", Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
