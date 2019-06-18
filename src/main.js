import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

Vue.prototype.axios = axios

Vue.config.productionTip = false

//轮播
import { Swipe, SwipeItem } from 'vant';  
Vue.use(Swipe).use(SwipeItem);

import { Lazyload } from 'vant';

// options 为可选参数，无则不传
Vue.use(Lazyload);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
